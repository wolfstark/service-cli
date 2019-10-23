/*
 * @Author: Wang Xiang
 * @Date: 2019-10-21 09:56:48
 * @LastEditTime: 2019-10-23 10:08:11
 * @LastEditors: Wang Xiang
 */
// const path = require("path");

class Manager {
    /**
     *
     * @param {import("./Config").Config} config
     * @param {string} configDir
     */
    constructor(config, configDir = process.cwd()) {
        this.allLocalDataSources = [];
        this.allConfigs = config.getDataSourcesConfig(configDir);
        const [currConfig] = this.allConfigs;
        this.currConfig = currConfig;
    }

    ready() {}
}

module.exports = Manager;
