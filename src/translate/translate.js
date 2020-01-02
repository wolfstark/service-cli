/*
 * @Author: Wang Xiang
 * @Date: 2019-11-25 16:33:48
 * @LastEditTime: 2019-11-28 17:25:23
 * @LastEditors: Wang Xiang
 */
const _ = require("lodash");
const assert = require("assert");
const { youdao, baidu, google } = require("translation.js");
const { PontDictManager } = require("./LocalDictManager");
const debugLog = require("../logger");

export class Translate {
    constructor(dictName = "dict.json") {
        this.engines = [google, youdao, baidu];
        this.dict = {};
        const localDict = PontDictManager.loadFileIfExistsSync(dictName);

        if (localDict) {
            const dictstr = localDict.slice(0, localDict.length - 2);

            try {
                this.dict = JSON.parse(`{${dictstr}}`);
            } catch (err) {
                debugLog.error(
                    "[translate] local dict is invalid, attempting auto fix"
                );
                PontDictManager.removeFile(dictName);
            }
        }
    }

    /**
     *
     *
     * @param {{ cn: string; en: string }} pairKey
     * @memberof Translate
     */
    appendToDict(pairKey) {
        if (!this.dict[pairKey.cn]) {
            this.dict[pairKey.cn] = pairKey.en;
            PontDictManager.appendFileSync(
                this.dictName,
                `"${pairKey.cn}": "${pairKey.en}",\n`
            );
        }
    }

    static startCaseClassName(result) {
        let wordArray = _.startCase(result).split(" ");
        if (wordArray.length > 6) {
            wordArray = [].concat(wordArray.slice(0, 5), wordArray.slice(-1));
        }
        return wordArray.join("");
    }

    /**
     *
     *
     * @param {string} text
     * @param {number} [engineIndex=0]
     * @returns
     * @memberof Translate
     */
    async translateAsync(text, engineIndex = 0) {
        if (this.dict[text]) {
            return this.dict[text];
        }

        if (engineIndex >= this.engines.length) {
            throw new Error(
                "translate error, all translate engine can not access"
            );
        }

        let enKey;
        const index = engineIndex;

        try {
            const res = await this.engines[index].translate(text);
            enKey = Translate.startCaseClassName(res.result[0]);

            assert.ok(enKey);

            this.appendToDict({ cn: text, en: enKey });
            return enKey;
        } catch (err) {
            return this.translateAsync(text, index + 1);
        }
    }
}

export const Translator = new Translate();
