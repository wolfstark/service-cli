/*
 * @Author: Wang Xiang
 * @Date: 2019-10-11 09:51:17
 * @LastEditTime: 2019-10-11 10:02:29
 * @LastEditors: Wang Xiang
 */
const CONFIG_FILE = "service.config.json";

exports.createManager = async function createManager(configFile = CONFIG_FILE) {
    console.log(`执行：createManager[${configFile}]`);
};
