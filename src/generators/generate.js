/* eslint-disable max-classes-per-file */
/**
 * @description get code using standard dataSource format
 * @NOTE getd files structure is as below:
 * - library (contains class library code)
 * - interfaces (contains interfaces code)
 * - api.d.ts (contains interfaces and library definitions)
 * - api.lock (contains local code state)
 */

const _ = require("lodash");
const fs = require("fs-extra");
const path = require("path");
const {
    StandardDataSource,
    Interface,
    Mod,
    BaseClass
} = require("../standard");
const utils = require("../utils");
const { info } = require("../logger");

class FileStructures {
    /**
     *Creates an instance of FileStructures.
     * @param {CodeGenerator[]} generators
     * @param {boolean} usingMultipleOrigins
     * @memberof FileStructures
     */
    constructor(generators, usingMultipleOrigins) {
        this.generators = generators;
        this.usingMultipleOrigins = usingMultipleOrigins;
    }

    getMultipleOriginsFileStructures() {
        const files = {};
        this.generators.forEach(generator => {
            const dsName = generator.dataSource.name;
            const dsFiles = this.getOriginFileStructures(generator, true);

            files[dsName] = dsFiles;
        });

        return {
            ...files,
            "index.js": this.getDataSourcesTs.bind(this),
            "api.d.ts": this.getDataSourcesDeclarationTs.bind(this)
            // "api-lock.json": this.getLockContent.bind(this)
        };
    }

    /**
     *
     *
     * @param {string} originCode
     * @param {boolean} usingMultipleOrigins
     * @returns
     * @memberof FileStructures
     */
    // eslint-disable-next-line class-methods-use-this
    getBaseClassesInDeclaration(originCode, usingMultipleOrigins) {
        if (usingMultipleOrigins) {
            return `
      declare namespace defs {
        export ${originCode}
      };
      `;
        }

        return `
      declare ${originCode}
    `;
    }

    /**
     *
     *
     * @param {string} originCode
     * @param {boolean} usingMultipleOrigins
     * @returns
     * @memberof FileStructures
     */
    getModsDeclaration(originCode, usingMultipleOrigins) {
        if (usingMultipleOrigins) {
            return `
      declare namespace API {
        export ${originCode}
      };
      `;
        }

        return `
      declare ${originCode}
    `;
    }

    /**
     *
     *
     * @param {CodeGenerator} generator
     * @param {boolean} [usingMultipleOrigins=false]
     * @returns
     * @memberof FileStructures
     */
    getOriginFileStructures(generator, usingMultipleOrigins = false) {
        const mods = {};
        const { dataSource } = generator;

        dataSource.mods.forEach(mod => {
            const currMod = {};

            mod.interfaces.forEach(inter => {
                currMod[
                    `${inter.name}.js`
                ] = generator.getInterfaceContent.bind(generator, inter);
            });
            currMod["index.js"] = generator.getModIndex.bind(generator, mod);
            // .replace(/\//g, '.').replace(/^\./, '').replace(/\./g, '_') 转换 / .为下划线
            // exp: /api/v1/users  => api_v1_users
            // exp: api.v1.users => api_v1_users
            const modName = mod.name
                .replace(/\//g, ".")
                .replace(/^\./, "")
                .replace(/\./g, "_");
            mods[modName] = currMod;
        });
        mods["index.js"] = generator.getModsIndex.bind(generator);

        // eslint-disable-next-line no-param-reassign
        generator.getBaseClassesInDeclaration = this.getBaseClassesInDeclaration.bind(
            this,
            generator.getBaseClassesInDeclaration(),
            usingMultipleOrigins
        );
        // eslint-disable-next-line no-param-reassign
        generator.getModsDeclaration = this.getModsDeclaration.bind(
            this,
            generator.getModsDeclaration(),
            usingMultipleOrigins
        );

        const result = {
            "baseClass.js": generator.getBaseClassesIndex.bind(generator),
            mods,
            "index.js": generator.getIndex.bind(generator),
            "api.d.ts": generator.getDeclaration.bind(generator)
        };

        // if (!usingMultipleOrigins) {
        //     result["api-lock.json"] = this.getLockContent.bind(this);
        // }

        return result;
    }

    getFileStructures() {
        // if (this.usingMultipleOrigins || this.generators.length > 1) {
        return this.getMultipleOriginsFileStructures();
        // }
        // return this.getOriginFileStructures(this.generators[0]);
    }

    getDataSourcesTs() {
        const dsNames = this.generators.map(ge => ge.dataSource.name);

        return `
      ${dsNames
          .map(name => {
              return `import { defs as ${name}Defs, ${name} } from './${name}';
          `;
          })
          .join("\n")}

      window.defs = {
        ${dsNames.map(name => `${name}: ${name}Defs,`).join("\n")}
      };
      window.API = {
        ${dsNames.join(",\n")}
      };
    `;
    }

    getDataSourcesDeclarationTs() {
        const dsNames = this.generators.map(ge => ge.dataSource.name);

        return `
    ${dsNames
        .map(name => {
            return `/// <reference path="./${name}/api.d.ts" />`;
        })
        .join("\n")}
    `;
    }

    getLockContent() {
        return JSON.stringify(
            this.generators.map(ge => ge.dataSource),
            null,
            2
        );
    }
}

class CodeGenerator {
    constructor() {
        this.dataSource = null;
    }

    /**
     *
     *
     * @param {StandardDataSource} dataSource
     * @memberof CodeGenerator
     */
    setDataSource(dataSource) {
        this.dataSource = dataSource;
        // 将basic-resource这种命名转化成合法命名
        this.dataSource.name = _.camelCase(this.dataSource.name);
    }

    /**
     * 获取某个基类的类型定义代码
     *
     * @param {BaseClass} base
     * @returns
     * @memberof CodeGenerator
     */
    // eslint-disable-next-line class-methods-use-this
    getBaseClassInDeclaration(base) {
        if (base.templateArgs && base.templateArgs.length) {
            return `class ${base.name}<${base.templateArgs
                // eslint-disable-next-line no-shadow
                .map((_, index) => `T${index} = any`)
                .join(", ")}> {
        ${base.properties.map(prop => prop.toPropertyCode(true)).join("\n")}
      }
      `;
        }
        return `class ${base.name} {
      ${base.properties.map(prop => prop.toPropertyCode(true)).join("\n")}
    }
    `;
    }

    /**
     * 获取所有基类的类型定义代码，一个 namespace
     *
     * @returns
     * @memberof CodeGenerator
     */
    getBaseClassesInDeclaration() {
        const content = `namespace ${this.dataSource.name || "defs"} {
      ${this.dataSource.baseClasses
          .map(
              base => `
        export ${this.getBaseClassInDeclaration(base)}
      `
          )
          .join("\n")}
    }
    `;

        return content;
    }

    getBaseClassesInDeclarationWithMultipleOrigins() {
        return `
      declare namespace defs {
        export ${this.getBaseClassesInDeclaration()}
      }
    `;
    }

    getBaseClassesInDeclarationWithSingleOrigin() {
        return `
      declare ${this.getBaseClassesInDeclaration()}
    `;
    }

    /**
     * 获取接口内容的类型定义代码
     *
     * @param {Interface} inter
     * @returns
     * @memberof CodeGenerator
     */
    getInterfaceContentInDeclaration(inter) {
        const bodyParams = inter.getBodyParamsCode();
        const requestParams = bodyParams
            ? `params: Params, bodyParams: ${bodyParams}`
            : `params: Params`;

        return `
      export function request(${requestParams}): Promise<${inter.responseType}>;
    `;
    }

    /**
     *
     *
     * @private
     * @param {Interface} inter
     * @returns
     * @memberof CodeGenerator
     */
    getInterfaceInDeclaration(inter) {
        return `
      /**
        * ${inter.description}
        * ${inter.path}
        */
      export namespace ${inter.name} {
        ${this.getInterfaceContentInDeclaration(inter)}
      }
    `;
    }

    /**
     * 获取模块的类型定义代码，一个 namespace ，一般不需要覆盖
     *
     * @returns
     * @memberof CodeGenerator
     */
    getModsDeclaration() {
        const { mods } = this.dataSource;
        // .replace(/\//g, '.').replace(/^\./, '') 转换 / 为.
        // exp: /api/v1/users  => api.v1.users
        // exp: api/v1/users => api.v1.users
        const content = `namespace ${this.dataSource.name || "API"} {
        ${mods
            .map(
                mod => `
          /**
           * ${mod.description}
           */
          export namespace ${mod.name.replace(/\//g, ".").replace(/^\./, "")} {
            ${mod.interfaces
                .map(this.getInterfaceInDeclaration.bind(this))
                .join("\n")}
          }
        `
            )
            .join("\n\n")}
      }
    `;

        return content;
    }

    getModsDeclarationWithMultipleOrigins() {}

    getModsDeclarationWithSingleOrigin() {}

    /** 获取公共的类型定义代码 */
    getCommonDeclaration() {
        return "";
    }

    /** 获取总的类型定义代码 */
    getDeclaration() {
        return `
      type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
        [key in Key]: Value;
      }

      ${this.getCommonDeclaration()}

      ${this.getBaseClassesInDeclaration()}

      ${this.getModsDeclaration()}
    `;
    }

    /** 获取接口类和基类的总的 index 入口文件代码 */
    getIndex() {
        let conclusion = `
      import * as defs from './baseClass';
      import './mods/';

      window.defs = defs;
    `;

        // dataSource name means multiple dataSource
        if (this.dataSource.name) {
            conclusion = `
        import { ${this.dataSource.name} as defs } from './baseClass';
        export { ${this.dataSource.name} } from './mods/';
        export { defs };
      `;
        }

        return conclusion;
    }

    /** 获取所有JS基类文件代码 */
    getBaseClassesIndex() {
        const clsCodes = this.dataSource.baseClasses.map(
            base => `
        class ${base.name} {
          ${base.properties
              .map(prop => {
                  return prop.toPropertyCodeWithInitValue(base.name);
              })
              .filter(id => id)
              .join("\n")}
        }
      `
        );

        if (this.dataSource.name) {
            return `
        ${clsCodes.join("\n")}
        export const ${this.dataSource.name} = {
          ${this.dataSource.baseClasses.map(bs => bs.name).join(",\n")}
        }
      `;
        }

        return clsCodes.map(cls => `export ${cls}`).join("\n");
    }

    /**
     * 获取接口实现内容的代码
     *
     * @param {Interface} inter
     * @returns
     * @memberof CodeGenerator
     */
    getInterfaceContent(inter) {
        const bodyParams = inter.getBodyParamsCode();
        const requestParams = bodyParams ? `params, bodyParams` : `params`;
        const method = inter.method.toUpperCase();

        return `
    /**
     * @desc ${inter.description}
     */

    import * as defs from '../../baseClass';
    import request from 'src/utils/request';


    export async function fetch(${requestParams}) {
      return request({
        url: '${inter.path}',
        ${bodyParams ? "params: bodyParams" : "params"},
        method: '${method}',
      });
    }
   `;
    }

    /**
     * 获取单个模块的 index 入口文件
     *
     * @param {Mod} mod
     * @returns
     * @memberof CodeGenerator
     */
    getModIndex(mod) {
        return `
      /**
       * @description ${mod.description}
       */
      ${mod.interfaces
          .map(inter => {
              return `import * as ${inter.name} from './${inter.name}';`;
          })
          .join("\n")}

      export {
        ${mod.interfaces.map(inter => inter.name).join(", \n")}
      }
    `;
    }

    /**
     *
     *  获得模块初始化语句
     *  例:
     *  输入
     *      apiValue:  API
     *      name /v1/test/users
     *  输出
     *      API.v1 = API.v1 || {};
     *      API.v1.test = API.v1.test || {};
     *      API.v1.test.users = API.v1.test.users || {};
     *      API.v1.test.users = v1_test_users;
     *
     * @param {string} apiValue
     * @param {string} name
     * @returns
     * @memberof CodeGenerator
     */
    getModInitStatement(apiValue, name) {
        // .replace(/\//g, '.').replace(/^\./, '') 转换 / 为.
        // exp: /api/v1/users  => api.v1.users
        // exp: api/v1/users => api.v1.users
        const modNS = name.replace(/\//g, ".").replace(/^\./, "");
        let ns = "";
        return modNS
            .split(".")
            .map((val, idx, arr) => {
                ns += `.${val}`;
                if (idx + 1 >= arr.length) {
                    // .replace(/\//g, '.').replace(/^\./, '').replace(/\./g, '_') 转换 / .为下划线
                    // exp: /api/v1/users  => api_v1_users
                    // exp: api.v1.users => api_v1_users
                    const modName = name
                        .replace(/\//g, ".")
                        .replace(/^\./, "")
                        .replace(/\./g, "_");
                    return `${apiValue}${ns} = ${modName};`;
                }
                return `${apiValue}${ns} = ${apiValue}${ns} || {};`;
            })
            .join("\n");
    }

    /** 获取所有模块的 index 入口文件 */
    getModsIndex() {
        let conclusion = `
      const API = {};
      ${this.dataSource.mods
          .map(mod => this.getModInitStatement("API", mod.name))
          .join("\n")}
      window.API = API;
    `;

        // dataSource name means multiple dataSource
        if (this.dataSource.name) {
            conclusion = `
        export const ${this.dataSource.name} = {};
        ${this.dataSource.mods
            .map(mod =>
                this.getModInitStatement(this.dataSource.name, mod.name)
            )
            .join("\n")}
      `;
        }

        return `
      ${this.dataSource.mods
          .map(mod => {
              // .replace(/\//g, '.').replace(/^\./, '').replace(/\./g, '_') 转换 / .为下划线
              // exp: /api/v1/users  => api_v1_users
              // exp: api.v1.users => api_v1_users
              const modName = mod.name
                  .replace(/\//g, ".")
                  .replace(/^\./, "")
                  .replace(/\./g, "_");
              return `import * as ${modName} from './${modName}';`;
          })
          .join("\n")}

      ${conclusion}
    `;
    }

    /**
     * 获取中间态数据结构
     *
     * @param {StandardDataSource} [dataSource]
     * @returns {void}
     * @memberof CodeGenerator
     */
    // eslint-disable-next-line class-methods-use-this
    getDataSourceCallback(dataSource) {
        // 空实现, 用于对外暴露文件数据结构
        // eslint-disable-next-line no-empty
        if (dataSource) {
        }
    }
}

class FilesManager {
    /**
     *Creates an instance of FilesManager.
     * @param {FileStructures} fileStructures
     * @param {string} baseDir
     * @memberof FilesManager
     */
    constructor(fileStructures, baseDir) {
        // todo: report 可以更改为单例，防止每个地方都注入。
        this.report = info;
        this.prettierConfig = null;
        /** 区分lock文件是创建的还是人为更改的 */
        this.created = false;
        this.fileStructures = fileStructures;
        this.baseDir = baseDir;
    }

    /**
     *
     *
     * @private
     * @param {{}} files
     * @memberof FilesManager
     */
    setFormat(files) {
        _.forEach(files, (value, name) => {
            if (name.endsWith(".json") || name.endsWith(".lock")) {
                return;
            }

            if (typeof value === "function") {
                // eslint-disable-next-line no-param-reassign
                files[name] = content =>
                    utils.format(value(content), this.prettierConfig);
            }

            this.setFormat(value);
        });
    }

    /**
     * 初始化清空路径
     *
     * @private
     * @param {string} path
     * @memberof FilesManager
     */
    // eslint-disable-next-line class-methods-use-this,no-shadow
    initPath(path) {
        if (fs.existsSync(path)) {
            fs.removeSync(path);
        }

        fs.mkdirpSync(path);
    }

    /**
     *
     *
     * @param {typeof info} [report]
     * @memberof FilesManager
     */
    async regenerate(report) {
        if (report) {
            this.report = report;
        }

        const files = this.fileStructures.getFileStructures();
        this.setFormat(files);

        this.initPath(this.baseDir);
        this.created = true;
        await this.generateFiles(files);
    }

    async saveLock() {
        const lockFilePath = path.join(this.baseDir, "api-lock.json");
        const oldLockFilePath = path.join(this.baseDir, "api.lock");
        const isExists = fs.existsSync(lockFilePath);
        const readFilePath = isExists ? lockFilePath : oldLockFilePath;

        const lockContent = await fs.readFile(readFilePath, "utf8");

        const newLockContent = this.fileStructures.getLockContent();

        if (lockContent !== newLockContent) {
            this.created = true;
            await fs.writeFile(lockFilePath, newLockContent);
        }
    }

    /**
     * 根据 Codegenerator 配置生成目录和文件
     *
     * @param {{}} files
     * @param {*} [dir=this.baseDir]
     * @memberof FilesManager
     */
    async generateFiles(files, dir = this.baseDir) {
        const promises = _.map(files, async (value, name) => {
            if (typeof value === "function") {
                await fs.writeFile(`${dir}/${name}`, value());
                return;
            }

            this.initPath(`${dir}/${name}`);
            await this.generateFiles(value, `${dir}/${name}`);
        });

        await Promise.all(promises);
    }
}
module.exports = {
    FileStructures,
    CodeGenerator,
    FilesManager
};
