/*
 * @Author: Wang Xiang
 * @Date: 2019-10-11 10:09:23
 * @LastEditTime: 2019-10-11 10:09:23
 * @LastEditors: Wang Xiang
 */
module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: ["airbnb-base", "plugin:prettier/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        "no-console": "off"
    }
};
