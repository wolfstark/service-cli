/*
 * @Author: Wang Xiang
 * @Date: 2019-10-11 09:51:17
 * @LastEditTime : 2020-01-02 17:45:18
 * @LastEditors  : Wang Xiang
 */
const fs = require("fs-extra");
const ts = require("typescript");
const path = require("path");
const prettier = require("prettier");

const CONFIG_FILE = "service.config.json";
const PROJECT_ROOT = process.cwd();
const Manager = require("./manager");
const { Config } = require("./Config");
const { error } = require("./logger");

const defaultTemplateCode = "";

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

/**
 *
 *
 * @param {string} name
 * @returns
 */
function toDashCase(name) {
    const dashName = name
        .split(" ")
        .join("")
        .replace(/[A-Z]/g, p => `-${p.toLowerCase()}`);

    if (dashName.startsWith("-")) {
        return dashName.slice(1);
    }

    return dashName;
}
/**
 *
 *
 * @param {string} name
 * @returns
 */
function transformDashCase(name) {
    return name.replace(/[A-Z]/g, ch => `_${ch.toLowerCase()}`);
}
/**
 *
 *
 * @export
 * @param {Mod[]} mods
 */
function transformModsName(mods) {
    // 检测所有接口是否存在接口名忽略大小写时重复，如果重复，以下划线命名
    mods.forEach(mod => {
        const currName = mod.name;
        const sameMods = mods.filter(
            // eslint-disable-next-line no-shadow
            mod => mod.name.toLowerCase() === currName.toLowerCase()
        );

        if (sameMods.length > 1) {
            // eslint-disable-next-line no-param-reassign
            mod.name = transformDashCase(mod.name);
        }
    });
}

/**
 *
 *
 * @export
 * @param {string} name
 * @returns
 */
function transformCamelCase(name) {
    let words = []; // as string[];
    let result = "";

    if (name.includes("-")) {
        words = name.split("-");
    } else if (name.includes(" ")) {
        words = name.split(" ");
    } else if (typeof name === "string") {
        result = name;
    } else {
        throw new Error(`mod name is not a string: ${name}`);
    }

    if (words && words.length) {
        result = words
            .map(word => {
                return (
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                );
            })
            .join("");
    }

    result = result.charAt(0).toLowerCase() + result.slice(1);

    if (result.endsWith("Controller")) {
        result = result.slice(0, result.length - "Controller".length);
    }

    return result;
}
/**
 * 找到所有的相同路径
 * qqq/www/ccc,qqq/www/bbb -> qqq/www
 *
 * @export
 * @param {string[]} paths
 * @param {string} [samePath='']
 * @returns
 */
function getMaxSamePath(paths, samePath = "") {
    if (!paths.length) {
        return samePath;
    }

    if (paths.some(_path => !_path.includes("/"))) {
        return samePath;
    }

    const segs = paths.map(_path => {
        const [firstSeg, ...restSegs] = _path.split("/");
        return { firstSeg, restSegs };
    });

    if (
        segs.every(
            (seg, index) =>
                index === 0 || seg.firstSeg === segs[index - 1].firstSeg
        )
    ) {
        return getMaxSamePath(
            segs.map(seg => seg.restSegs.join("/")),
            `${samePath}/${segs[0].firstSeg}`
        );
    }

    return samePath;
}
/**
 *
 *
 * @export
 * @param {string} text
 * @returns
 */
function toUpperFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
/**
 *
 *
 * @export
 * @param {string} url /qqq/www
 * @param {string} requestType post
 * @param {string} [samePath=''] qqq
 * @returns postQWww
 */
function getIdentifierFromUrl(url, requestType, samePath = "") {
    // 去掉共有path
    // eslint-disable-next-line no-useless-escape
    const currUrl = url.slice(samePath.length).match(/([^\.]+)/)[0];

    return (
        requestType +
        currUrl
            .split("/")
            .map(str => {
                if (str.includes("-")) {
                    // eslint-disable-next-line no-param-reassign,no-useless-escape
                    str = str.replace(/(\-\w)+/g, (_match, p1) => {
                        if (p1) {
                            return p1.slice(1).toUpperCase();
                        }
                        return null;
                    });
                }

                if (str.match(/^{.+}$/gim)) {
                    return `By${toUpperFirstLetter(
                        str.slice(1, str.length - 1)
                    )}`;
                }
                return toUpperFirstLetter(str);
            })
            .join("")
    );
}
/**
 *
 *
 * @export
 * @param {string} templatePath
 * @param {*} [defaultValue=defaultTemplateCode]
 * @returns
 */
function getTemplate(templatePath, defaultValue = defaultTemplateCode) {
    if (!fs.existsSync(`${templatePath}.js`)) {
        fs.writeFileSync(`${templatePath}.js`, defaultValue);
    }
    // const jsResult = fs.readFileSync(`${templatePath}.js`, "utf8");
    // const jsResult = ts.transpileModule(tsResult, {
    //     compilerOptions: {
    //         target: ts.ScriptTarget.ES2015,
    //         module: ts.ModuleKind.CommonJS
    //     }
    // });

    // const noCacheFix = `${Math.random()}`.slice(2, 5);
    const jsName = `${templatePath}.js`;
    let moduleResult;

    try {
        // 编译到js
        // fs.writeFileSync(jsName, jsResult.outputText, "utf8");

        // 用 node require 引用编译后的 js 代码
        // eslint-disable-next-line import/no-dynamic-require,global-require
        moduleResult = require(jsName);

        // 删除该文件
        fs.removeSync(jsName);
    } catch (e) {
        // 删除失败，则再删除
        if (fs.existsSync(jsName)) {
            fs.removeSync(jsName);
        }

        // 没有引用，报错
        if (!moduleResult) {
            throw new Error(e);
        }
    }

    return moduleResult;
}
/**
 *
 *
 * @param {string} fileContent
 * @param {*} [prettierOpts={}]
 * @returns
 */
function format(fileContent, prettierOpts = {}) {
    try {
        return prettier.format(fileContent, {
            parser: "typescript",
            trailingComma: "all",
            singleQuote: true,
            ...prettierOpts
        });
    } catch (e) {
        error(`代码格式化报错！${e.toString()}\n代码为：${fileContent}`);
        return fileContent;
    }
}
/**
 *
 *
 * @template T
 * @param {T[]} arr
 * @param {string} [idKey='name']
 * @returns {(null | T)}
 */
function getDuplicateById(arr, idKey = "name") {
    if (!arr || !arr.length) {
        return null;
    }

    let result;

    arr.forEach((item, itemIndex) => {
        if (arr.slice(0, itemIndex).find(o => o[idKey] === item[idKey])) {
            result = item;
        }
    });

    return result;
}

const Surrounding = {
    typeScript: "typeScript",
    javaScript: "javaScript"
};

module.exports = {
    lookForFiles,
    createManager,
    hasChinese,
    toDashCase,
    transformModsName,
    transformCamelCase,
    getMaxSamePath,
    getIdentifierFromUrl,
    toUpperFirstLetter,
    getTemplate,
    defaultTransformCode,
    format,
    getDuplicateById,
    Surrounding
};

exports.lookForFiles = lookForFiles;
exports.createManager = createManager;
exports.hasChinese = hasChinese;
exports.toDashCase = toDashCase;
exports.transformModsName = transformModsName;
exports.transformCamelCase = transformCamelCase;
exports.getMaxSamePath = getMaxSamePath;
exports.getIdentifierFromUrl = getIdentifierFromUrl;
exports.toUpperFirstLetter = toUpperFirstLetter;
exports.getTemplate = getTemplate;
exports.defaultTransformCode = defaultTransformCode;
exports.format = format;
exports.getDuplicateById = getDuplicateById;
exports.Surrounding = Surrounding;
