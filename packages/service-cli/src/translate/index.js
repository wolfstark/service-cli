/*
 * @Author: Wang Xiang
 * @Date: 2019-11-25 16:33:48
 * @LastEditTime: 2019-12-02 17:40:14
 * @LastEditors: Wang Xiang
 */
const _ = require("lodash");
const assert = require("assert");
const { youdao, baidu, google } = require("translation.js");

class Translate {
    constructor() {
        this.engines = [google, youdao, baidu];
        this.dict = {};
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

const Translator = new Translate();
module.exports = {
    Translate,
    Translator,
};
