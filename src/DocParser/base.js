import { Translator } from "../translate";
import { hasChinese, Config } from "../utils";
// import { StandardDataSource } from "../standard";

const _ = require("lodash");
const fetch = require("node-fetch");
const { info } = require("../logger");

// eslint-disable-next-line import/prefer-default-export
export class OriginBaseReader {
    /**
     *Creates an instance of OriginBaseReader.
     * @param {import("../Config/DataSourceConfig").default} config
     * @memberof OriginBaseReader
     */
    constructor(config) {
        this.config = config;
    }

    /**
     *翻译中文类名等
     *
     * @param {string} jsonString
     * @returns
     * @memberof OriginBaseReader
     */
    static async translateChinese(jsonString) {
        let retString = jsonString;
        try {
            const matchItems = jsonString
                // 匹配中英文混合及包含 空格，«，»，-, (,)的情况
                .match(
                    /"[a-z0-9\s-]*[\u4e00-\u9fa5]+[a-z0-9\s-«»()\u4e00-\u9fa5]*":/gi
                );
            if (!matchItems) {
                return retString;
            }

            let chineseKeyCollect = matchItems.map(item =>
                item.replace(/["":]/g, "")
            );

            // 去重
            chineseKeyCollect = _.uniq(
                chineseKeyCollect.map(item =>
                    item.includes("«") ? item.split("«")[0] : item
                )
            );

            // 按长度倒序排序，防止替换时中文名部分重名
            // 例如: 请求参数vo, 请求参数, 替换时先替换 请求参数vo, 后替换请求参数
            chineseKeyCollect.sort((pre, next) => next.length - pre.length);

            const result = await Promise.all(
                chineseKeyCollect.map(text => Translator.translateAsync(text))
            );
            // const normalizeRegStr = (str: string) => str.replace(/(\W)/g, '$1');
            const toRegStr = str => str.replace(/(\W)/g, "\\$1");
            result.forEach((enKey, index) => {
                const chineseKey = chineseKeyCollect[index];
                info(`${chineseKey} ==> ${enKey}`);
                if (enKey) {
                    retString = retString.replace(
                        new RegExp(toRegStr(chineseKey), "g"),
                        enKey
                    );
                }
            });
            return retString;
        } catch (err) {
            return retString;
        }
    }

    /**
     * 数据转换，可覆盖
     *
     * @param {*} data
     * @param {boolean} _usingOperationId
     * @param {string} _originName
     * @returns
     * @memberof OriginBaseReader
     */
    // eslint-disable-next-line class-methods-use-this
    transform2Standard(data) {
        return data;
    }

    /**
     * 数据获取
     *
     * @param {string} url
     * @returns {Promise<string>}
     * @memberof OriginBaseReader
     */
    fetchMethod(url) {
        if (this.config.fetchMethodPath) {
            const fetchMethod = Config.getFetchMethodFromConfig(this.config);
            return fetchMethod(url);
        }

        return fetch(url).then(res => res.text());
    }

    /** 获取远程数据源 */
    async fetchData() {
        // 获取数据源
        info("获取远程数据中...");
        let swaggerJsonStr = await this.fetchMethod(this.config.originUrl);

        // 翻译中文类名等
        info("自动翻译中文基类中...");
        swaggerJsonStr = await OriginBaseReader.translateChinese(
            swaggerJsonStr
        );
        info("自动翻译中文基类完成！");

        const data = await JSON.parse(swaggerJsonStr);
        info("远程数据获取成功！");

        return data;
    }

    /**
     * 获取接口数据，解析并返回
     *
     * @returns {Promise<StandardDataSource>}
     * @memberof OriginBaseReader
     */
    async fetchRemoteData() {
        try {
            const data = await this.fetchData();

            // 将数据源转换为标准数据源格式
            let remoteDataSource = this.transform2Standard(
                data,
                this.config.usingOperationId,
                this.config.name
            );
            info("远程数据解析完毕!");

            // 如果用户配置了数据的自定义转换方法、如接口过滤等
            if (this.config.transformPath) {
                info("获取用户自定义数据转换方法中...");
                const transformProgram = Config.getTransformFromConfig(
                    this.config
                );

                remoteDataSource = transformProgram(remoteDataSource);
                info("用户自定义数据转换方法执行完毕");
            }

            // 对解析后的标准数据源进行校验
            OriginBaseReader.checkDataSource(remoteDataSource);
            info("解析后数据校验完毕！");

            info("远程对象创建完毕！");

            return remoteDataSource;
        } catch (e) {
            throw new Error(`读取远程接口数据失败！${e.toString()}`);
        }
    }

    static checkDataSource(dataSource) {
        const { mods, baseClasses } = dataSource;

        const errorModNames = []; // as string[];
        const errorBaseNames = []; // as string[];

        mods.forEach(mod => {
            if (hasChinese(mod.name)) {
                errorModNames.push(mod.name);
            }
        });

        baseClasses.forEach(base => {
            if (hasChinese(base.name)) {
                errorBaseNames.push(base.name);
            }
        });

        if (errorBaseNames.length && errorModNames.length) {
            const errMsg = ["当前数据源有如下项不符合规范，需要后端修改"];
            errorModNames.forEach(modName =>
                errMsg.push(`模块名${modName}应该改为英文名！`)
            );
            errorBaseNames.forEach(baseName =>
                errMsg.push(`基类名${baseName}应该改为英文名！`)
            );

            throw new Error(errMsg.join("\n"));
        }
    }
}
