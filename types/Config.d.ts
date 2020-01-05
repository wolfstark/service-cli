import { OriginType } from "src/DocParser";
import { ResolveConfigOptions } from "src/Config/node_modules/prettier";
import DataSourceConfig from "./types/DataSourceConfig";

/*
 * @Author: Wang Xiang
 * @Date: 2019-10-22 08:58:15
 * @LastEditTime: 2019-10-23 10:17:11
 * @LastEditors: Wang Xiang
 */

export declare class Config {
    url?: string;
    originType: OriginType;
    usingOperationId: boolean;
    taggedByName: boolean;
    outDir: string;
    origins?: {
        originType: OriginType;
        url: string;
        name: string;
        usingOperationId: boolean;
        transformPath?: string;
        fetchMethodPath?: string;
    }[];
    usingMultipleOrigins: boolean;
    templatePath: string;
    prettierConfig: ResolveConfigOptions;
    transformPath?: string;
    fetchMethodPath?: string;
    static createFromConfigPath(configPath: string): Config;
    constructor(config: Config);
    getDataSourcesConfig(configDir: string): DataSourceConfig[];
}
