const { OriginType } = require("../DocParser");

/*
 * @Author: Wang Xiang
 * @Date: 2019-10-23 09:53:45
 * @LastEditTime: 2019-12-02 18:16:52
 * @LastEditors: Wang Xiang
 */

/**
 * 数据源对象
 *
 * @class DataSourceConfig
 */
class DataSourceConfig {
    constructor(config) {
        this.originType = OriginType.SwaggerV2;
        // this.usingOperationId = false;
        this.usingMultipleOrigins = false;
        this.taggedByName = true;
        // this.templatePath = "serviceTemplate";
        this.outDir = "src/service";
        // this.transformPath = "transformTemplate";
        // this.fetchMethodPath = "fetchMethodTemplate";
        this.prettierConfig = {};
        Object.assign(this, config);
    }
}
module.exports = DataSourceConfig;
