const os = require("os");
const path = require("path");
const fs = require("fs-extra");

class LocalDictManager {
    static getSingleInstance() {
        if (!LocalDictManager.singleInstance) {
            LocalDictManager.singleInstance = new LocalDictManager();
            return LocalDictManager.singleInstance;
        }

        return LocalDictManager.singleInstance;
    }

    constructor() {
        this.localDictDir = `${os.homedir()}/.pont`;

        if (!fs.pathExistsSync(this.localDictDir)) {
            fs.mkdirpSync(this.localDictDir);
        }
    }

    /**
     *
     *
     * @param {string} filename
     * @returns
     * @memberof LocalDictManager
     */
    isFileExists(filename) {
        const filePath = path.join(this.localDictDir, filename);

        return fs.existsSync(filePath);
    }

    /**
     *
     *
     * @param {string} filename
     * @returns
     * @memberof LocalDictManager
     */
    removeFile(filename) {
        const filePath = path.join(this.localDictDir, filename);

        if (fs.existsSync(filePath)) {
            fs.remove(filePath);
        }
        return null;
    }

    /**
     *
     *
     * @param {string} filename
     * @returns
     * @memberof LocalDictManager
     */
    loadJsonFileIfExistsSync(filename) {
        const fileContent = this.loadJsonFileIfExistsSync(filename);

        if (fileContent) {
            return JSON.parse(fileContent);
        }

        return false;
    }

    /**
     *
     *
     * @param {string} filename
     * @returns
     * @memberof LocalDictManager
     */
    loadFileIfExistsSync(filename) {
        const filePath = path.join(this.localDictDir, filename);

        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, {
                encoding: "utf8"
            });

            return fileContent;
        }

        return false;
    }

    /**
     *
     *
     * @param {string} filename
     * @returns
     * @memberof LocalDictManager
     */
    async loadFileIfExists(filename) {
        const filePath = path.join(this.localDictDir, filename);

        if (fs.existsSync(filePath)) {
            const fileContent = await fs.readFile(filePath, {
                encoding: "utf8"
            });

            return fileContent;
        }

        return false;
    }

    /**
     *
     *
     * @param {string} filename
     * @param {string} content
     * @returns
     * @memberof LocalDictManager
     */
    async saveFile(filename, content) {
        const filePath = path.join(this.localDictDir, filename);
        const dirname = path.dirname(filename);

        if (!fs.pathExistsSync(dirname)) {
            fs.mkdirpSync(dirname);
        }

        return fs.writeFile(filePath, content);
    }

    /**
     *
     *
     * @param {string} filename
     * @param {string} content
     * @returns
     * @memberof LocalDictManager
     */
    saveFileSync(filename, content) {
        const filePath = path.join(this.localDictDir, filename);
        const dirname = path.dirname(filename);

        if (!fs.pathExistsSync(dirname)) {
            fs.mkdirpSync(dirname);
        }

        return fs.writeFileSync(filePath, content);
    }

    /**
     *
     *
     * @param {string} filename
     * @param {string} content
     * @returns
     * @memberof LocalDictManager
     */
    async appendFileSync(filename, content) {
        const filePath = path.join(this.localDictDir, filename);
        if (fs.existsSync(filePath)) {
            return fs.appendFile(filePath, content);
        }
        return null;
    }

    /**
     *
     *
     * @param {string} filename
     * @returns
     * @memberof LocalDictManager
     */
    getFilePath(filename) {
        return path.join(this.localDictDir, filename);
    }
}
LocalDictManager.singleInstance = null;

const PontDictManager = LocalDictManager.getSingleInstance();

module.exports = {
    PontDictManager
};
