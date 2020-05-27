/*
 * @Author: Wang Xiang
 * @Date: 2019-10-21 10:09:19
 * @LastEditTime: 2019-12-02 17:51:00
 * @LastEditors: Wang Xiang
 */
const fs = require("fs-extra");
const path = require("path");
const DocParser = require("../DocParser");
const DataSourceConfig = require("./DataSourceConfig");
const { getTemplate } = require("../utils");
/**
 * 配置文件实体
 */
class Config {
    constructor(config) {
        this.url = "";
        this.taggedByName = true;
        this.usingMultipleOrigins = true;
        this.templatePath = "serviceTemplate";
        this.originType = DocParser.OriginType.SwaggerV2;
        this.output = "service";
        this.docs = [];
        Object.keys(config).forEach((key) => {
            this[key] = config[key];
        });
    }

    /**
     *
     *
     * @static
     * @param {(Config | DataSourceConfig)} config
     * @returns
     * @memberof Config
     */
    static getTransformFromConfig(config) {
        if (config.transformPath) {
            const moduleResult = getTemplate(config.transformPath);

            if (moduleResult) {
                return moduleResult.default;
            }
        }

        return (id) => id;
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
            output: path.join(configDir, this.output),
            usingMultipleOrigins: this.usingMultipleOrigins,
            templatePath: path.join(configDir, this.templatePath),
            transformPath: this.transformPath
                ? path.join(configDir, this.transformPath)
                : undefined,
            fetchMethodPath: this.fetchMethodPath
                ? path.join(configDir, this.fetchMethodPath)
                : undefined,
            prettierConfig: this.prettierConfig,
        };

        // FIXME: docs中配的路径没有转换成绝对路径，找不到该模块
        if (this.docs && this.docs.length) {
            return this.docs.map((origin) => {
                return new DataSourceConfig({
                    ...commonConfig,
                    ...origin,
                });
            });
        }

        return [
            new DataSourceConfig({
                ...commonConfig,
                url: this.url,
                originType: this.originType,
            }),
        ];
    }
}

exports.Config = Config;
