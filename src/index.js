const Manager = require("./manager");
const {
    BaseClass,
    Interface,
    Mod,
    PrimitiveType,
    Property,
    StandardDataSource,
    StandardDataType,
} = require("./standard");
const {
    createManager,
    format,
    // getDuplicateById,
    // getIdentifierFromOperatorId,
    getIdentifierFromUrl,
    getMaxSamePath,
    getTemplate,
    hasChinese,
    lookForFiles,
    toDashCase,
    // toDashDefaultCase,
    toUpperFirstLetter,
    transformCamelCase,
    // transformDescription,
    transformModsName,
} = require("./utils");
const { Config } = require("./Config");
const DataSourceConfig = require("./Config/DataSourceConfig");
const {
    CodeGenerator,
    FileStructures,
    FilesManager,
} = require("./generators/generate");
// const { diff, Model, removeCtx } = require("./diff");

module.exports = {
    Manager,
    BaseClass,
    Interface,
    Mod,
    PrimitiveType,
    Property,
    StandardDataSource,
    StandardDataType,
    DataSourceConfig,
    createManager,
    format,
    // getDuplicateById,
    // getIdentifierFromOperatorId,
    getIdentifierFromUrl,
    getMaxSamePath,
    getTemplate,
    hasChinese,
    lookForFiles,
    toDashCase,
    // toDashDefaultCase,
    toUpperFirstLetter,
    transformCamelCase,
    // transformDescription,
    transformModsName,
    Config,
    CodeGenerator,
    FileStructures,
    FilesManager,
};
