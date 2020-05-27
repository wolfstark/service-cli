/*
 * @Author: Wang Xiang
 * @Date: 2019-10-23 10:11:19
 * @LastEditTime: 2019-10-23 10:16:28
 * @LastEditors: Wang Xiang
 */
import { ResolveConfigOptions } from "prettier";
import { OriginType } from "src/DocParser";

export default class DataSourceConfig {
    originUrl: string;
    name?: string;
    originType: OriginType;
    usingOperationId: boolean;
    usingMultipleOrigins: boolean;
    taggedByName: boolean;
    templatePath: string;
    output: string;
    transformPath: string;
    fetchMethodPath: string;
    prettierConfig: ResolveConfigOptions;
    constructor(config: DataSourceConfig);
}
