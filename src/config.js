/*
 * @Author: Wang Xiang
 * @Date: 2019-10-21 10:09:19
 * @LastEditTime: 2019-10-21 10:22:30
 * @LastEditors: Wang Xiang
 */
const fs = require("fs-extra");

class Config {
    constructor(config) {
        Object.keys(config).forEach(key => {
            this[key] = config[key];
        });
    }

    static createFromConfigPath(configPath) {
        const content = fs.readFileSync(configPath, "utf8");

        try {
            const configObj = JSON.parse(content);

            return new Config(configObj);
        } catch (e) {
            throw new Error("service.config.json 解析异常");
        }
    }
}

exports.Config = Config;
