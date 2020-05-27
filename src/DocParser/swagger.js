/* eslint-disable no-param-reassign */
/* eslint-disable max-classes-per-file */
const _ = require("lodash");
const {
    StandardDataSource,
    Interface,
    Mod,
    BaseClass,
    Property,
    StandardDataType,
} = require("../standard");
const utils = require("../utils");
const { compileTemplate, parseAst2StandardDataType } = require("../compiler");

const { OriginBaseReader } = require("./base");

const {
    getMaxSamePath,
    getIdentifierFromUrl,
    transformCamelCase,
    toDashCase,
    hasChinese,
    transformModsName,
} = utils;

// const SwaggerType = {
//     integer: "integer",
//     string: "string",
//     file: "string",
//     array: "array",
//     number: "number",
//     boolean: "boolean",
//     object: "object"
// };

// class SwaggerProperty {
//     //   type: SwaggerType;
//     constructor() {
//         this.enum = [];
//         this.items = null;
//         this.$ref = "";
//         this.description = "";
//     }
//     //   name: string;
// }

// class SwaggerParameter {
//     constructor() {
//         /** 字段名 */
//         this.name = "";

//         this.in = undefined; // 'query' | 'body' | 'path';

//         /** 描述 */
//         this.description = "";

//         /** 是否必填 */
//         this.required = undefined;

//         /** 类型 */
//         this.type = undefined; // SwaggerType;

//         this.enum = undefined; // string[];

//         this.items = null; // {type?: SwaggerType;$ref?: string;};

//         this.schema = undefined; // Schema;
//     }
// }

class Schema {
    constructor() {
        this.enum = undefined; // string[]; 暂时没有
        this.type = undefined; // SwaggerType//
        this.additionalProperties = undefined; // Schema;
        this.items = undefined;
        // {
        //   type?: SwaggerType;
        //   $ref?: string;
        // };
        this.$ref = undefined; // string;
    }

    /**
     * 处理入参Prop和Respon
     *
     * @static
     * @param {Schema} schema prop
     * @param {string[]} defNames
     * @param {*} [classTemplateArgs=[] as StandardDataType[]]
     * @param {string} [compileTemplateKeyword]
     * @returns
     * @memberof Schema
     */
    static parseSwaggerSchema2StandardDataType(
        schema, // : Schema, prop
        defNames, // : string[],
        classTemplateArgs = [], // as StandardDataType[],
        compileTemplateKeyword // string
    ) {
        //     const { items, $ref, type, additionalProperties } = schema;
        //     let typeName = type;
        //     // let primitiveType = schema.type as string;
        //     // 转义基础类型
        //     if (typeName === "array") {
        //         // 基础类型或者是引用类型
        //         let itemsType = _.get(items, "type", "");
        //         const itemsRef = _.get(items, "$ref", "");
        //         if (itemsType) {
        //             if (itemsType === "integer") {
        //                 itemsType = "number";
        //             }

        //             if (itemsType === "int") {
        //                 itemsType = "number";
        //             }

        //             if (itemsType === "file") {
        //                 itemsType = "File";
        //             }

        //             let contentType = new StandardDataType(
        //                 [],
        //                 itemsType,
        //                 false,
        //                 -1
        //             );

        //             if (itemsType === "array") {
        //                 contentType = new StandardDataType(
        //                     [new StandardDataType()],
        //                     "Array",
        //                     false,
        //                     -1
        //                 );
        //             }

        //             return new StandardDataType([contentType], "Array", false, -1);
        //         }

        //         if (itemsRef) {
        //             const ast = compileTemplate(itemsRef, compileTemplateKeyword);
        //             const contentType = parseAst2StandardDataType(
        //                 ast,
        //                 defNames,
        //                 classTemplateArgs
        //             );

        //             return new StandardDataType([contentType], "Array", false, -1);
        //         }
        //     }

        //     if (typeName === "integer") {
        //         typeName = "number";
        //     }

        //     // if (typeName === "int") {
        //     //     typeName = "number";
        //     // }
        //     if (typeName.startsWith("int")) {
        //         typeName = "number";
        //     }
        //     if (typeName === "file") {
        //         typeName = "File";
        //     }
        //     // 解析自定义类型
        //     if ($ref) {
        //         const ast = compileTemplate($ref, compileTemplateKeyword);

        //         if (!ast) {
        //             return new StandardDataType();
        //         }

        //         return parseAst2StandardDataType(ast, defNames, classTemplateArgs);
        //     }
        //     // 暂时没用
        //     if (schema.enum) {
        //         return StandardDataType.constructorWithEnum(
        //             parseSwaggerEnumType(schema.enum)
        //         );
        //     }
        //     // 特殊扩展类型 additionalProperties 作为value的map
        //     if (type === "object") {
        //         if (additionalProperties) {
        //             const typeArgs = [
        //                 new StandardDataType(),
        //                 Schema.parseSwaggerSchema2StandardDataType(
        //                     additionalProperties,
        //                     defNames,
        //                     classTemplateArgs,
        //                     compileTemplateKeyword
        //                 )
        //             ];
        //             return new StandardDataType(typeArgs, "ObjectMap", false);
        //         }
        //     }

        //     return new StandardDataType([], typeName, false);
        // }
        const { items, $ref, type, additionalProperties } = schema;
        let typeName = schema.type;
        // let primitiveType = schema.type as string;

        if (type === "array") {
            let itemsType = _.get(items, "type", "");
            const itemsRef = _.get(items, "$ref", "");

            if (itemsType) {
                if (itemsType === "integer") {
                    itemsType = "number";
                }

                if (itemsType === "file") {
                    itemsType = "File";
                }

                let contentType = new StandardDataType(
                    [],
                    itemsType,
                    false,
                    -1
                );

                if (itemsType === "array") {
                    contentType = new StandardDataType(
                        [new StandardDataType()],
                        "Array",
                        false,
                        -1
                    );
                }

                return new StandardDataType([contentType], "Array", false, -1);
            }

            if (itemsRef) {
                const ast = compileTemplate(itemsRef, compileTemplateKeyword);
                const contentType = parseAst2StandardDataType(
                    ast,
                    defNames,
                    classTemplateArgs
                );

                return new StandardDataType([contentType], "Array", false, -1);
            }
        }

        if (typeName === "integer") {
            typeName = "number";
        }

        if (typeName === "file") {
            typeName = "File";
        }

        if ($ref) {
            const ast = compileTemplate($ref, compileTemplateKeyword);

            if (!ast) {
                return new StandardDataType();
            }

            return parseAst2StandardDataType(ast, defNames, classTemplateArgs);
        }

        if (schema.enum) {
            return StandardDataType.constructorWithEnum(
                parseSwaggerEnumType(schema.enum)
            );
        }

        if (type === "object") {
            if (additionalProperties) {
                const typeArgs = [
                    new StandardDataType(),
                    Schema.parseSwaggerSchema2StandardDataType(
                        additionalProperties,
                        defNames,
                        classTemplateArgs,
                        compileTemplateKeyword
                    ),
                ];
                return new StandardDataType(typeArgs, "ObjectMap", false);
            }
        }

        return new StandardDataType([], typeName, false);
    }
}
/**
 *
 *
 * @export
 * @param {string[]} enumStrs
 * @returns
 */
function parseSwaggerEnumType(enumStrs) {
    const enums = enumStrs; // as Array<string | number>;

    enumStrs.forEach((str) => {
        if (!Number.isNaN(Number(str))) {
            enums.push(Number(str));
        }
    });

    return enums
        .filter((str) => {
            // eslint-disable-next-line no-useless-escape
            return String(str).match(/^[0-9a-zA-Z\_\-\$]+$/);
        })
        .map((numOrStr) => {
            if (typeof numOrStr === "string") {
                return `'${numOrStr}'`;
            }

            return numOrStr;
        });
}

class SwaggerInterface {
    constructor() {
        this.consumes = []; // as string[];

        this.parameters = []; // as SwaggerParameter[];

        this.summary = "";

        this.description = undefined; // : string;

        this.initialValue = undefined; // : string;

        this.tags = []; // as string[];

        this.response = undefined; // : Schema;

        this.method = undefined; // : string;

        this.name = undefined; // : string;

        this.path = undefined; // : string;

        this.samePath = undefined; // : string;

        this.operationId = undefined; // : string;
    }

    /**
     *
     *
     * @static
     * @param {SwaggerInterface} inter
     * @param {string} samePath
     * @param {string[]} [defNames=[]]
     * @param {string} [compileTempateKeyword]
     * @returns
     * @memberof SwaggerInterface
     */
    static transformSwaggerInterface2Standard(
        inter,
        samePath,
        defNames = [],
        compileTempateKeyword
    ) {
        let name = "";
        // const usingOperationId = false;

        // if (!usingOperationId || !inter.operationId) {
        name = utils.getIdentifierFromUrl(inter.path, inter.method, samePath);
        // } else {
        //     name = getIdentifierFromOperatorId(inter.operationId);
        // }

        const responseSchema = _.get(inter, "responses.200.schema", {}); // as Schema;
        const response = Schema.parseSwaggerSchema2StandardDataType(
            responseSchema,
            defNames,
            [],
            compileTempateKeyword
        );
        // parameters通常长度为一
        const parameters = (inter.parameters || []).map((param) => {
            let paramSchema; // : Schema;
            const {
                description,
                items,
                name,
                type,
                schema = {}, // as Schema,
                required,
            } = param;
            // 如果请求参数在body中的话，处理方式与response保持一致，因为他们本身的结构是一样的
            if (param.in === "body") {
                paramSchema = param.schema;
            } else {
                paramSchema = {
                    enum: param.enum,
                    items,
                    type,
                    $ref: _.get(schema, "$ref"),
                };
            }

            return new Property({
                in: param.in,
                description,
                name: name.includes("/") ? name.split("/").join("") : name,
                required,
                dataType: Schema.parseSwaggerSchema2StandardDataType(
                    paramSchema,
                    defNames
                ),
            });
        });

        let interDesc = inter.summary;
        // 完整描述
        if (inter.description) {
            if (interDesc) {
                interDesc += `\n${inter.description}`;
            } else {
                interDesc = inter.description;
            }
        }

        const standardInterface = new Interface({
            consumes: inter.consumes,
            description: interDesc,
            name,
            method: inter.method,
            path: inter.path,
            response,
            /** 后端返回的参数可能重复 */
            parameters: _.unionBy(parameters, "name"),
        });

        return standardInterface;
    }
}

class SwaggerDataSource {
    constructor() {
        this.paths = undefined; // : { [key in string]: SwaggerPathItemObject };
        this.tags = undefined; // : { name: string; description: string }[];
        this.definitions = undefined;
        //   : {
        //     [key in string]: {
        //       description: string;
        //       required?: string[];
        //       properties: { [key in string]: SwaggerProperty };
        //     };
        //   };
    }
}
/**
 *
 *
 * @export
 * @param {SwaggerDataSource} swagger
 * @param {string[]} defNames 完整的defs keys
 * @param {string} [compileTempateKeyword]
 * @returns
 */
function parseSwaggerMods(swagger, defNames, compileTempateKeyword) {
    // 所有访问接口的描述对象
    const allSwaggerInterfaces = []; // as SwaggerInterface[];
    _.forEach(swagger.paths, (methodInters, path) => {
        const pathItemObject = _.cloneDeep(methodInters);
        // 特殊情况才会存在pathItemObject.parameters
        if (Array.isArray(pathItemObject.parameters)) {
            ["get", "post", "patch", "delete", "put"].forEach((method) => {
                if (pathItemObject[method]) {
                    pathItemObject[method].parameters = (
                        pathItemObject[method].parameters || []
                    ).concat(pathItemObject.parameters);
                }
            });

            delete pathItemObject.parameters;
        }
        // pathItemObject as Omit<SwaggerPathItemObject, 'parameters'>
        _.forEach(pathItemObject, (inter, method) => {
            // eslint-disable-next-line no-param-reassign
            inter.path = path;
            // eslint-disable-next-line no-param-reassign
            inter.method = method;

            if (!inter.tags) {
                // eslint-disable-next-line no-param-reassign
                inter.tags = ["defaultModule"];
            }

            allSwaggerInterfaces.push(inter);
        });
    });

    if (!swagger.tags) {
        // eslint-disable-next-line no-param-reassign
        swagger.tags = [];
    }

    swagger.tags.push({
        name: "defaultModule",
        description: "defaultModule",
    });

    // swagger 2.0 中 tags属性是可选的
    const mods = swagger.tags
        .map((tag) => {
            // 过滤出使用当前 tag 的所有请求
            const modInterfaces = allSwaggerInterfaces.filter((inter) => {
                // swagger 3.0+ 中可能不存在 description 字段
                if (tag.description === undefined || tag.description === null) {
                    tag.description = "";
                }

                return (
                    inter.tags.includes(tag.name) ||
                    inter.tags.includes(tag.name.toLowerCase()) ||
                    inter.tags.includes(tag.description.toLowerCase()) ||
                    inter.tags.includes(utils.toDashCase(tag.description))
                );
            });

            const samePath = utils.getMaxSamePath(
                modInterfaces.map((inter) => inter.path.slice(1))
            );

            const standardInterfaces = modInterfaces.map((inter) => {
                return SwaggerInterface.transformSwaggerInterface2Standard(
                    inter,
                    samePath,
                    defNames,
                    compileTempateKeyword
                );
            });

            // 兼容某些项目把swagger tag的name和description弄反的情况
            if (utils.hasChinese(tag.name)) {
                // 当检测到name包含中文的时候，采用description
                return new Mod({
                    description: tag.name,
                    interfaces: _.uniqBy(standardInterfaces, "name"),
                    name: utils.transformCamelCase(tag.description),
                });
            }
            return new Mod({
                description: tag.description,
                interfaces: _.uniqBy(standardInterfaces, "name"),
                name: utils.transformCamelCase(tag.name),
            });
        })
        .filter((mod) => {
            return mod.interfaces.length;
        });

    utils.transformModsName(mods);

    return mods;
}

function transformSwaggerData2Standard(swagger, originName = "") {
    const draftClasses = _.map(swagger.definitions, (def, defName) => {
        const defNameAst = compileTemplate(defName);

        if (!defNameAst) {
            throw new Error(`compiler error in defname: ${defName}`);
        }

        return {
            name: defNameAst.name,
            defNameAst,
            def,
        };
    });
    const defNames = draftClasses.map((clazz) => clazz.name);
    const baseClasses = draftClasses.map((clazz) => {
        // 将defName转换为标准类型
        const dataType = parseAst2StandardDataType(
            clazz.defNameAst,
            defNames,
            []
        );
        const templateArgs = dataType.typeArgs;
        const { description, properties } = clazz.def;
        const requiredProps = clazz.def.required || []; // TODO: 未知字段

        const props = _.map(properties, (prop, propName) => {
            const {
                $ref,
                description,
                items,
                type,
                additionalProperties,
            } = prop;
            const required = requiredProps.includes(propName);

            const dataType = Schema.parseSwaggerSchema2StandardDataType(
                {
                    $ref,
                    enum: prop.enum,
                    items,
                    type,
                    additionalProperties,
                },
                defNames,
                templateArgs
            );
            // console.log(prop, propName);
            return new Property({
                dataType,
                name: propName,
                description,
                required,
            });
        });

        return new BaseClass({
            description,
            name: clazz.name,
            properties: props,
            templateArgs,
        });
    });

    baseClasses.sort((pre, next) => {
        if (
            pre.name === next.name &&
            pre.templateArgs.length === next.templateArgs.length
        ) {
            return pre.templateArgs.filter(({ isDefsType }) => isDefsType)
                .length >
                next.templateArgs.filter(({ isDefsType }) => isDefsType).length
                ? -1
                : 1;
        }

        if (pre.name === next.name) {
            return pre.templateArgs.length > next.templateArgs.length ? -1 : 1;
        }

        return next.name > pre.name ? 1 : -1;
    });
    // BaseRes<Order>,BaseRes<Good> 将会被去重复
    return new StandardDataSource({
        baseClasses: _.uniqBy(baseClasses, (base) => base.name),
        mods: parseSwaggerMods(swagger, defNames),
        name: originName,
        basePath: swagger.basePath,
    });
}

class SwaggerV2Reader extends OriginBaseReader {
    // eslint-disable-next-line class-methods-use-this
    transform2Standard(data, originName) {
        return transformSwaggerData2Standard(data, originName);
    }
}
module.exports = {
    SwaggerV2Reader,
    transformSwaggerData2Standard,
    parseSwaggerEnumType,
    parseSwaggerMods,
    SwaggerDataSource,
};
