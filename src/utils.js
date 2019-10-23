/*
 * @Author: Wang Xiang
 * @Date: 2019-10-11 09:51:17
 * @LastEditTime: 2019-10-21 10:21:43
 * @LastEditors: Wang Xiang
 */
const fs = require("fs-extra");
const path = require("path");

const CONFIG_FILE = "service.config.json";
const PROJECT_ROOT = process.cwd();
const Manager = require("./manager");
const { Config } = require("./Config");

/**
 *
 *
 * @param {string} dir
 * @param {string} fileName
 * @returns {Promise<string>}
 */
async function lookForFiles(dir, fileName) {
    const currName = path.join(dir, fileName);
    const info = await fs.lstat(currName);

    if (info.isFile()) {
        return currName;
    }
    return "";
}

async function createManager(configFile = CONFIG_FILE) {
    console.log(`执行：createManager[${configFile}]`);
    const configPath = await lookForFiles(PROJECT_ROOT, configFile);

    const config = Config.createFromConfigPath(configPath);
    const manager = new Manager(config, path.dirname(configPath));
    await manager.ready();

    return manager;
}

exports = {
    lookForFiles,
    createManager
};
