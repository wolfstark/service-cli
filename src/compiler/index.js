/*
 * @Author: Wang Xiang
 * @Date: 2019-12-05 17:47:22
 * @LastEditTime: 2019-12-06 17:34:26
 * @LastEditors: Wang Xiang
 */
const { StandardDataType } = require("../standard");
const Parser = require("./Parser");
const Token = require("./Token");
/**
 * ast 转换为标准类型
 * 项目当中可能会扩展一些基础类型，需要转化为类似的JS类型
 * 这里需要注意黑名单覆盖情况，如果没命中，可能会出现不能识别的类型
 *
 * @param {import("../../types/index").AstNode} ast defNameAst
 * @param {string[]} defNames
 * @param {StandardDataType[]} [classTemplateArgs=[]]
 * @returns {StandardDataType}
 */
function parseAst2StandardDataType(ast, defNames, classTemplateArgs = []) {
    const { name, templateArgs } = ast;
    let typeName = name;

    if (["List", "Collection"].includes(name)) {
        typeName = "Array";
    }

    if (["long", "double"].includes(name)) {
        typeName = "number";
    }

    if (["void", "Void"].includes(name)) {
        typeName = "void";
    }

    if (["object", "Object", "Map"].includes(name)) {
        typeName = "ObjectMap";
    }

    const isDefsType = defNames.includes(name);
    const typeArgs = templateArgs.map(arg => {
        return parseAst2StandardDataType(arg, defNames, classTemplateArgs);
    });

    const dataType = new StandardDataType(typeArgs, typeName, isDefsType);
    dataType.setTemplateIndex(classTemplateArgs);

    return dataType;
}

// swagger v2 中 definitions 在 OpenAPI 3 中标准化为了 components，为复用该函数，抽取出 keyword 参数
function compileTemplate(template, keyword = "#/definitions/") {
    // 部分被引用的实体类存在特殊前缀，需要识别并提取出来
    if (template.startsWith(keyword)) {
        // eslint-disable-next-line no-param-reassign
        template = template.slice(keyword.length);
    }
    if (!template) {
        return null;
    }
    // 提取所有信息 -> Order«T,S» -> [order,«,T,","，S,»]
    const Identifier = /^[a-zA-Z_][a-zA-Z_0-9-]*/;
    const PreTemplate = /^«/;
    const EndTemplate = /^»/;
    const Comma = /^,/;

    // lexer
    let code = template;
    let matchedText = "";
    const nodes = [];

    while (code) {
        // 去掉空格,包括两端及中间的空格
        code = code.replace(/\s/g, "");
        // 替换.为_
        code = code.replace(/\./g, "_");

        if (code.match(Identifier)) {
            matchedText = code.match(Identifier)[0];

            nodes.push(new Token("Identifier", matchedText));
        } else if (code.match(PreTemplate)) {
            matchedText = code.match(PreTemplate)[0];

            nodes.push(new Token("PreTemplate", matchedText));
        } else if (code.match(EndTemplate)) {
            matchedText = code.match(EndTemplate)[0];

            nodes.push(new Token("EndTemplate", matchedText));
        } else if (code.match(Comma)) {
            matchedText = code.match(Comma)[0];

            nodes.push(new Token("Comma", matchedText));
        } else {
            return null;
        }

        code = code.slice(matchedText.length);
    }

    return new Parser(nodes).parseTemplate();
}
module.exports = {
    compileTemplate,
    parseAst2StandardDataType
};
