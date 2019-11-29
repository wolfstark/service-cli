/*
 * @Author: Wang Xiang
 * @Date: 2019-10-21 10:09:19
 * @LastEditTime: 2019-11-29 17:58:08
 * @LastEditors: Wang Xiang
 */
const fs = require("fs-extra");
const path = require("path");
const { OriginType } = require("../DocParser");
const DataSourceConfig = require("../Config/DataSourceConfig");

class Config {
    constructor(config) {
        this.url = "";
        this.taggedByName = true;
        this.usingMultipleOrigins = true;
        this.templatePath = "serviceTemplate";
        this.originType = OriginType.SwaggerV2;
        this.outDir = "service";
        this.docs = [];
        Object.keys(config).forEach(key => {
            this[key] = config[key];
        });
    }

    /**
     *
     * @param {string} configPath
     */
    static createFromConfigPath(configPath) {
        const content = fs.readFileSync(configPath, "utf8");
        try {
            const configObj = JSON.parse(content);

            return new Config(configObj);
        } catch (e) {
            console.error(e);
            throw new Error("service.config.json 解析异常");
        }
    }

    /**
     *
     * @param {string} configDir
     */
    getDataSourcesConfig(configDir) {
        const commonConfig = {
            usingOperationId: this.usingOperationId,
            taggedByName: this.taggedByName,
            outDir: path.join(configDir, this.outDir),
            usingMultipleOrigins: this.usingMultipleOrigins,
            templatePath: path.join(configDir, this.templatePath),
            transformPath: this.transformPath
                ? path.join(configDir, this.transformPath)
                : undefined,
            fetchMethodPath: this.fetchMethodPath
                ? path.join(configDir, this.fetchMethodPath)
                : undefined,
            prettierConfig: this.prettierConfig
        };

        // FIXME: docs中配的路径没有转换成绝对路径，找不到该模块
        if (this.docs && this.docs.length) {
            return this.docs.map(origin => {
                return new DataSourceConfig({
                    ...commonConfig,
                    ...origin
                });
            });
        }

        return [
            new DataSourceConfig({
                ...commonConfig,
                url: this.url,
                originType: this.originType
            })
        ];
    }
}

exports.Config = Config;
