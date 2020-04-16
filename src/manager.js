/*
 * @Author: Wang Xiang
 * @Date: 2019-10-21 09:56:48
 * @LastEditTime: 2019-11-22 17:38:54
 * @LastEditors: Wang Xiang
 */
// const path = require("path");
const _ = require("lodash");
const { readRemoteDataSource } = require("./DocParser");
const { info } = require("./logger");
const { getTemplate } = require("./utils");
const {
    FileStructures,
    FilesManager,
    CodeGenerator
} = require("./generators/generate");

class Manager {
    /**
     *
     * @param {import("./Config").Config} config
     * @param {string} configDir
     */
    constructor(config, configDir = process.cwd()) {
        this.allLocalDataSources = [];
        this.diffs = {
            modDiffs: [],
            boDiffs: []
        };
        this.report = info;
        this.allConfigs = config.getDataSourcesConfig(configDir);
        const [currConfig] = this.allConfigs;
        this.currConfig = currConfig;
    }

    async readRemoteDataSource(config = this.currConfig) {
        const remoteDataSource = await readRemoteDataSource(config);
        this.remoteDataSource = remoteDataSource;

        return remoteDataSource;
    }

    async regenerateFiles() {
        this.setFilesManager();
        await this.fileManager.regenerate();
    }

    setFilesManager() {
        this.report("文件生成器创建中...");
        // const {
        //     MyGenerator: Generator,
        //     FileStructures: MyFileStructures
        // } = getTemplate(this.currConfig.templatePath);
        const { CodeGenerator: Generator, FileStructures: MyFileStructures } = {
            FileStructures,
            CodeGenerator
        };
        const generators = this.allLocalDataSources.map(dataSource => {
            const generator = new Generator();
            generator.setDataSource(dataSource);
            // 生命周期 目前无用
            if (_.isFunction(generator.getDataSourceCallback)) {
                generator.getDataSourceCallback(dataSource);
            }
            return generator;
        });
        let FileStructuresClazz = FileStructures;

        if (MyFileStructures) {
            FileStructuresClazz = MyFileStructures;
        }

        this.fileManager = new FilesManager(
            new FileStructuresClazz(
                generators,
                this.currConfig.usingMultipleOrigins
            ),
            this.currConfig.output
        );
        this.fileManager.prettierConfig = this.currConfig.prettierConfig;
        this.report("文件生成器创建成功！");
        this.fileManager.report = this.report;
    }

    async ready() {
        const promises = this.allConfigs.map(config => {
            return this.readRemoteDataSource(config);
        });
        this.allLocalDataSources = await Promise.all(promises);
        const [currLocalDataSource] = this.allLocalDataSources;
        this.currLocalDataSource = currLocalDataSource;
        this.remoteDataSource = currLocalDataSource;

        await this.regenerateFiles();
    }
}

module.exports = Manager;
