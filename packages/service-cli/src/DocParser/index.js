/*
 * @Author: Wang Xiang
 * @Date: 2019-10-22 09:30:09
 * @LastEditTime: 2019-12-02 17:54:26
 * @LastEditors: Wang Xiang
 */
const { SwaggerV2Reader } = require("./swagger");

const OriginType = {
    SwaggerV3: "SwaggerV3",
    SwaggerV2: "SwaggerV2",
    SwaggerV1: "SwaggerV1",
};
/**
 * 根据数据源对象 -> 获取远端数据并解析
 *
 * @param {import("../Config/DataSourceConfig").default} config
 * @returns
 */
async function readRemoteDataSource(config) {
    switch (config.originType) {
        case OriginType.SwaggerV2: {
            return new SwaggerV2Reader(config).fetchRemoteData();
        }
        default:
            return new SwaggerV2Reader(config).fetchRemoteData();
    }
}
exports.OriginType = OriginType;
exports.readRemoteDataSource = readRemoteDataSource;
// module.exports = {
//     OriginType,
//     readRemoteDataSource
// };
