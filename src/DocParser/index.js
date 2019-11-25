/*
 * @Author: Wang Xiang
 * @Date: 2019-10-22 09:30:09
 * @LastEditTime: 2019-11-25 16:09:08
 * @LastEditors: Wang Xiang
 */
import DataSourceConfig from "../Config/DataSourceConfig";

const OriginType = {
    SwaggerV3: "SwaggerV3",
    SwaggerV2: "SwaggerV2",
    SwaggerV1: "SwaggerV1"
};
/**
 * 获取远端数据并解析
 *
 * @param {DataSourceConfig} config
 * @param {*} report
 * @returns
 */
async function readRemoteDataSource(config) {
    switch (config.originType) {
        case OriginType.SwaggerV2: {
            return new SwaggerV2Reader(config, report).fetchRemoteData();
        }
        default:
            return new SwaggerV2Reader(config, report).fetchRemoteData();
    }
}

module.exports = {
    OriginType,
    readRemoteDataSource
};
