/* eslint-disable max-classes-per-file */
const _ = require("lodash");
const { getDuplicateById } = require("./utils");
const { compileTemplate, parseAst2StandardDataType } = require("./compiler");

// primitive type
const PrimitiveType = {
    number: "number",
    string: "string",
    boolean: "boolean"
};

class Contextable {
    getDsName() {
        const context = this.getContext();

        if (context && context.dataSource) {
            return context.dataSource.name;
        }

        return "";
    }

    getContext() {
        return this.context;
    }

    setContext(context) {
        this.context = context;
    }

    constructor(arg = {}) {
        this.context = undefined;

        _.forEach(arg, (value, key) => {
            if (value !== undefined) {
                this[key] = value;
            }
        });
    }

    toJSON() {
        return _.mapValues(this, (value, key) => {
            if (key === "context") {
                return undefined;
            }

            return value;
        });
    }
}

/** deprecated */
// class DataType {
//     constructor() {
//         this.primitiveType = undefined; // : PrimitiveType
//         this.isArr = false; // : boolean
//         this.customType = ""; // : string

//         // reference may have generic like Pagination<BaseBO>
//         this.reference = ""; // : string

//         this.enum = []; // : Array<string | number>

//         this.isTemplateRef = false;
//     }
// }

class StandardDataType extends Contextable {
    /**
     *
     *
     * @param {(Array<string | number>)} [enums=[]]
     * @memberof StandardDataType
     */
    setEnum(enums = []) {
        this.enum = enums.map(value => {
            if (typeof value === "string") {
                if (!value.startsWith("'")) {
                    // eslint-disable-next-line no-param-reassign
                    value = `'${value}`;
                }

                if (!value.endsWith("'")) {
                    // eslint-disable-next-line no-param-reassign
                    value += "'";
                }
            }

            return value;
        });
    }

    /**
     * Creates an instance of StandardDataType.
     * @param {*} [typeArgs=[] as StandardDataType[]]
     * @param {string} [typeName='']
     * @param {boolean} [isDefsType=false]
     * @param {*} [templateIndex=-1]
     * @param {string} [compileTemplateKeyword='#/definitions/']
     * @memberof StandardDataType
     */
    constructor(
        typeArgs = [],
        /** 例如 number,A(defs.A),Array,Object, '1' | '2' | 'a' 等 */
        typeName = "",
        isDefsType = false,
        /** 指向类的第几个模板，-1 表示没有 */
        templateIndex = -1,
        compileTemplateKeyword = "#/definitions/"
    ) {
        super();
        this.typeArgs = typeArgs;
        /** 例如 number,A(defs.A),Array,Object, '1' | '2' | 'a' 等 */
        this.typeName = typeName;
        this.isDefsType = isDefsType;
        /** 指向类的第几个模板，-1 表示没有 */
        this.templateIndex = templateIndex;
        this.compileTemplateKeyword = compileTemplateKeyword;
        this.enum = []; // : Array<string | number>
    }

    /**
     *
     *
     * @static
     * @param {(Array<string | number>)} [enums=[]]
     * @returns
     * @memberof StandardDataType
     */
    static constructorWithEnum(enums = []) {
        const dataType = new StandardDataType();
        dataType.setEnum(enums);

        return dataType;
    }

    /**
     *
     *
     * @static
     * @param {StandardDataType} dataType
     * @param {string} originName
     * @param {string[]} defNames
     * @returns
     * @memberof StandardDataType
     */
    static constructorFromJSON(dataType, originName, defNames) {
        if (Object.getOwnPropertyNames(dataType).includes("reference")) {
            return dataType2StandardDataType(
                dataType,
                originName,
                defNames,
                dataType.compileTemplateKeyword
            );
        }

        const { isDefsType, templateIndex, typeArgs = [], typeName } = dataType;

        if (typeArgs.length) {
            const instance = new StandardDataType(
                typeArgs.map(arg =>
                    StandardDataType.constructorFromJSON(
                        arg,
                        originName,
                        defNames
                    )
                ),
                typeName,
                isDefsType,
                templateIndex
            );
            instance.setEnum(dataType.enum);
            return instance;
        }

        const result = new StandardDataType(
            [],
            typeName,
            isDefsType,
            templateIndex
        );
        result.setEnum(dataType.enum);

        return result;
    }

    /**
     *
     *
     * @param {StandardDataType[]} classTemplateArgs
     * @memberof StandardDataType
     */
    setTemplateIndex(classTemplateArgs) {
        const codes = classTemplateArgs.map(arg => arg.generateCode());
        const index = codes.indexOf(this.generateCode());

        this.templateIndex = index;
    }

    getDefNameWithTemplate() {}

    generateCodeWithTemplate() {}

    // 查看是否定义过，定义过就添加依赖路径
    getDefName(originName) {
        let name = this.typeName;

        if (this.isDefsType) {
            name = originName
                ? `defs.${originName}.${this.typeName}`
                : `defs.${this.typeName}`;
        }

        return name;
    }

    getEnumType() {
        return this.enum.join(" | ") || "string";
    }

    /** 生成 Typescript 类型定义的代码 */
    generateCode(originName = "") {
        if (this.templateIndex !== -1) {
            return `T${this.templateIndex}`;
        }

        if (this.enum.length) {
            return this.getEnumType();
        }

        const name = this.getDefName(originName);

        if (this.typeArgs.length) {
            return `${name}<${this.typeArgs
                .map(arg => arg.generateCode(originName))
                .join(", ")}>`;
        }

        return name || "any";
    }

    getInitialValue(usingDef = true) {
        if (this.typeName === "Array") {
            return "[]";
        }

        if (this.isDefsType) {
            const originName = this.getDsName();

            if (!usingDef) {
                return `new ${this.typeName}()`;
            }

            return `new ${this.getDefName(originName)}()`;
        }

        if (this.templateIndex > -1) {
            return "undefined";
        }

        if (this.typeName === "string") {
            return "''";
        }

        if (this.typeName === "boolean") {
            return "false";
        }

        if (this.enum && this.enum.length) {
            const str = this.enum[0];

            if (typeof str === "string") {
                return `${str}`;
            }

            return `${str}`;
        }

        return "undefined";
    }

    /** deprecated */
    get initialValue() {
        return this.getInitialValue();
    }
}

// property both in params and response
class Property extends Contextable {
    setContext(context) {
        super.setContext(context);
        this.dataType.setContext(context);
    }

    /**
     * Creates an instance of Property.
     * @param {Partial<Property>} prop
     * @memberof Property
     */
    constructor(prop) {
        super(prop);
        // this.dataType = undefined; // : StandardDataType;
        // this.description = undefined; // ?: string;
        // this.name = undefined; // : string;
        // this.required = undefined; // : boolean;
        // this.in = undefined; // : 'query' | 'body' | 'path';

        // FIXME: name 可能不合法，这里暂时只判断是否包含 . 。
        if (this.name.includes(".")) {
            this.name = this.name.slice(this.name.lastIndexOf(".") + 1);
        }
    }

    toPropertyCode(hasRequired = false, optional = false) {
        let optionalSignal = hasRequired && optional ? "?" : "";

        if (hasRequired && !this.required) {
            optionalSignal = "?";
        }

        let { name } = this;
        if (!name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
            name = `'${name}'`;
        }

        return `
      /** ${this.description || this.name} */
      ${name}${optionalSignal}: ${this.dataType.generateCode(
            this.getDsName()
        )};`;
    }

    toPropertyCodeWithInitValue(baseName = "") {
        let typeWithValue = `= ${this.dataType.getInitialValue(false)}`;

        if (!this.dataType.getInitialValue(false)) {
            typeWithValue = `: ${this.dataType.generateCode(this.getDsName())}`;
        }

        if (this.dataType.typeName === baseName) {
            typeWithValue = `= {}`;
        }

        let { name } = this;
        if (!name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
            name = `'${name}'`;
        }

        return `
      /** ${this.description || this.name} */
      ${name} ${typeWithValue}
      `;
    }

    toBody() {
        return this.dataType.generateCode(this.getDsName());
    }
}

class Interface extends Contextable {
    get responseType() {
        return this.response.generateCode(this.getDsName());
    }

    // 只处理非body内的参数
    getParamsCode(className = "Params") {
        return `
      class ${className} {
        ${this.parameters
            .filter(param => param.in !== "body")
            .map(param => param.toPropertyCode(true))
            .join("")}
      }
    `;
    }

    // body 类型 Array||Defs.Coustom
    getBodyParamsCode() {
        const bodyParam = this.parameters.find(param => param.in === "body");

        return (
            (bodyParam && bodyParam.dataType.generateCode(this.getDsName())) ||
            ""
        );
    }

    setContext(context) {
        super.setContext(context);
        this.parameters.forEach(param => param.setContext(context));
        // eslint-disable-next-line no-unused-expressions
        this.response && this.response.setContext(context);
    }

    /**
     *Creates an instance of Interface.
     * @param {Partial<Interface>} inter
     * @memberof Interface
     */
    constructor(inter) {
        super(inter);
        // this.consumes = undefined;
        // this.parameters = undefined;
        // this.description = undefined;
        // this.response = undefined; // StandardDataType
        // this.method = undefined;
        // this.name = undefined;
        // this.path = undefined;
    }
}

class Mod extends Contextable {
    setContext(context) {
        super.setContext(context);
        this.interfaces.forEach(inter => inter.setContext(context));
    }

    /**
     * Creates an instance of Mod.
     * @param {Partial<Mod>} mod
     * @memberof Mod
     */
    constructor(mod) {
        super(mod);
        // this.description = undefined;
        // this.name = undefined;
        this.interfaces = _.orderBy(this.interfaces, "path");
    }
}

class BaseClass extends Contextable {
    setContext(context) {
        super.setContext(context);
        // this.name = undefined;
        // this.description = undefined;
        // this.templateArgs = undefined;
        this.properties.forEach(prop => prop.setContext(context));
    }

    /**
     * Creates an instance of BaseClass.
     * @param {Partial<BaseClass>} base
     * @memberof BaseClass
     */
    constructor(base) {
        super(base);

        this.properties = _.orderBy(this.properties, "name");
    }
}

class StandardDataSource {
    reOrder() {
        this.baseClasses = _.orderBy(this.baseClasses, "name");
        this.mods = _.orderBy(this.mods, "name");
    }

    // validate the if the dataSource is valid
    validate() {
        const errors = [];

        this.mods.forEach(mod => {
            if (!mod.name) {
                errors.push(`lock 文件不合法，发现没有 name 属性的模块;`);
            }
        });

        this.baseClasses.forEach(base => {
            if (!base.name) {
                errors.push(`lock 文件不合法，发现没有 name 属性的基类;`);
            }
        });

        const dupMod = getDuplicateById(this.mods, "name");
        const dupBase = getDuplicateById(this.baseClasses, "name");

        if (dupMod) {
            errors.push(`模块 ${dupMod.name} 重复了。`);
        }
        if (dupBase) {
            errors.push(`基类 ${dupBase.name} 重复了。`);
        }

        if (errors && errors.length) {
            throw new Error(errors.join("\n"));
        }

        return errors;
    }

    serialize() {
        return JSON.stringify(
            {
                mods: this.mods,
                baseClasses: this.baseClasses
            },
            null,
            2
        );
    }

    setContext() {
        this.baseClasses.forEach(base => base.setContext({ dataSource: this }));
        this.mods.forEach(mod => mod.setContext({ dataSource: this }));
    }

    /**
     * Creates an instance of StandardDataSource.
     * @param {{ mods: Mod[]; name: string; baseClasses: BaseClass[] }} standard
     * @memberof StandardDataSource
     */
    constructor(standard) {
        this.name = undefined;
        this.mods = standard.mods;
        if (standard.name) {
            this.name = standard.name;
        }
        this.baseClasses = standard.baseClasses;

        this.reOrder();
        this.setContext();
    }

    /**
     *
     *
     * @static
     * @param {StandardDataSource} localDataObject
     * @param {*} originName
     * @returns
     * @memberof StandardDataSource
     */
    static constructorFromLock(localDataObject, originName) {
        try {
            // 兼容性代码，将老的数据结构转换为新的。
            const defNames = localDataObject.baseClasses.map(base => {
                if (base.name.includes("<")) {
                    return base.name.slice(0, base.name.indexOf("<"));
                }
                return base.name;
            });
            const baseClasses = localDataObject.baseClasses.map(base => {
                const props = base.properties.map(prop => {
                    return new Property({
                        ...prop,
                        dataType: StandardDataType.constructorFromJSON(
                            prop.dataType,
                            originName,
                            defNames
                        )
                    });
                });
                let { templateArgs } = base;
                let { name } = base;

                if (!templateArgs && base.name.includes("<")) {
                    // 兼容性代码，将老的数据结构转换为新的。
                    const defNameAst = dateTypeRefs2Ast(
                        base.name,
                        localDataObject.name
                    );
                    const dataType = parseAst2StandardDataType(
                        defNameAst,
                        defNames,
                        []
                    );

                    templateArgs = dataType.typeArgs;
                    name = dataType.typeName;
                }

                return new BaseClass({
                    description: base.description,
                    name,
                    templateArgs,
                    properties: _.unionBy(props, "name")
                });
            });
            const mods = localDataObject.mods.map(mod => {
                const interfaces = mod.interfaces.map(inter => {
                    const response = StandardDataType.constructorFromJSON(
                        inter.response,
                        localDataObject.name,
                        defNames
                    );

                    const parameters = inter.parameters
                        .map(param => {
                            const dataType = StandardDataType.constructorFromJSON(
                                param.dataType,
                                localDataObject.name,
                                defNames
                            );

                            return new Property({
                                ...param,
                                dataType
                            });
                        })
                        .filter(_.identity);

                    return new Interface({
                        ...inter,
                        parameters,
                        response
                    });
                });

                return new Mod({
                    description: mod.description,
                    name: mod.name,
                    interfaces
                });
            });

            return new StandardDataSource({
                baseClasses,
                mods,
                name: localDataObject.name
            });
        } catch (e) {
            throw new Error(e);
        }
    }
}

/**
 * 兼容性代码，将老的 datatype 转换为新的。
 *
 * @param {string} refStr
 * @param {string} originName
 * @param {string} [compileTemplateKeyword]
 * @returns
 */
function dateTypeRefs2Ast(refStr, originName, compileTemplateKeyword) {
    let ref = refStr.replace(new RegExp(`defs.${originName}.`, "g"), "");
    ref = ref.replace(/defs./g, "");
    ref = ref.replace(/= any/g, "");
    const PreTemplate = "«";
    const EndTemplate = "»";
    ref = ref.replace(/</g, PreTemplate).replace(/>/g, EndTemplate);

    const ast = compileTemplate(ref, compileTemplateKeyword);

    return ast;
}

/**
 * 兼容性代码，将老的 datatype 转换为新的。
 *
 * @param {DataType} dataType
 * @param {string} originName
 * @param {string[]} defNames
 * @param {string} [compileTemplateKeyword]
 * @returns
 */
function dataType2StandardDataType(
    dataType,
    originName,
    defNames,
    compileTemplateKeyword
) {
    let standardDataType = null; // as StandardDataType;

    if (dataType.enum && dataType.enum.length) {
        standardDataType = new StandardDataType(
            [],
            "",
            false,
            -1,
            compileTemplateKeyword
        );
        standardDataType.setEnum(dataType.enum);
    } else if (dataType.primitiveType) {
        standardDataType = new StandardDataType(
            [],
            dataType.primitiveType,
            false,
            -1,
            compileTemplateKeyword
        );
    } else if (dataType.reference) {
        const ast = dateTypeRefs2Ast(
            dataType.reference,
            originName,
            compileTemplateKeyword
        );
        standardDataType = parseAst2StandardDataType(ast, defNames, []);
    }

    if (dataType.isArr) {
        if (!standardDataType) {
            standardDataType = new StandardDataType();
        }

        return new StandardDataType(
            [standardDataType],
            "Array",
            false,
            -1,
            compileTemplateKeyword
        );
    }

    if (!standardDataType) {
        return new StandardDataType();
    }

    return standardDataType;
}
module.exports = {
    PrimitiveType,
    StandardDataType,
    Property,
    Interface,
    Mod,
    BaseClass,
    StandardDataSource
};

exports.StandardDataType = StandardDataType;
