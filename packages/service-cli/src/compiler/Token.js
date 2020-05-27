/*
 * @Author: Wang Xiang
 * @Date: 2019-12-05 17:47:48
 * @LastEditTime: 2019-12-05 17:49:23
 * @LastEditors: Wang Xiang
 */
class Token {
    /**
     * Creates an instance of Token.
     * @param {'Identifier' | 'PreTemplate' | 'EndTemplate' | 'Comma'} type
     * @param {string} [value='']
     * @memberof Token
     */
    constructor(type, value = "") {
        this.value = value;
        this.type = type;
    }
}
module.exports = Token;
