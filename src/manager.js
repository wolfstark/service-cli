/*
 * @Author: Wang Xiang
 * @Date: 2019-10-21 09:56:48
 * @LastEditTime: 2019-11-22 17:38:54
 * @LastEditors: Wang Xiang
 */
// const path = require("path");
const { readRemoteDataSource } = require("./DocParser");

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

    async readRemoteDataSource(config = this.currConfig) {
        const remoteDataSource = await readRemoteDataSource(config);
        this.remoteDataSource = remoteDataSource;

        return remoteDataSource;
    }

    regenerateFiles() {}

    async ready() {
        const promises = this.allConfigs.map(config => {
            return this.readRemoteDataSource(config);
        });
        this.allLocalDataSources = await Promise.all(promises);
        const [currLocalDataSource] = this.allLocalDataSources;
        this.currLocalDataSource = currLocalDataSource;
        this.remoteDataSource = currLocalDataSource;

        await this.regenerateFiles();
    }
}

module.exports = Manager;
