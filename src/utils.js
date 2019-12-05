/*
 * @Author: Wang Xiang
 * @Date: 2019-10-11 09:51:17
 * @LastEditTime: 2019-12-02 17:37:52
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
    // debugger;
    await manager.ready();

    return manager;
}
/**
 * 正则检测是否包含中文名
 *
 * @param {string} str
 * @returns
 */
function hasChinese(str) {
    return (
        str &&
        str.match(
            /[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uff1a\uff0c\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|[\uff01-\uff5e\u3000-\u3009\u2026]/
        )
    );
}
module.exports = {
    lookForFiles,
    createManager,
    hasChinese
};
