/*
 * @Author: Wang Xiang
 * @Date: 2019-10-11 10:09:23
 * @LastEditTime: 2019-10-11 10:12:00
 * @LastEditors: Wang Xiang
 */
/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const httpServer = require("http-server");
const fs = require("fs-extra");
const { createManager } = require("../src/utils");

const getPath = fname => path.join(__dirname, fname);
const clearDir = dirName => {
    try {
        const fullpath = getPath(dirName);

        if (fs.existsSync(fullpath)) {
            fs.removeSync(getPath(dirName));
        }
    } catch (error) {
        console.error(error);
    }
};
// const oneline = code => code.replace(/[\s\n]/g, "");
// const exists = filepath => fs.existsSync(getPath(filepath));
const server = httpServer.createServer({
    root: getPath("assets")
});

describe("service-cli功能测试", () => {
    beforeAll(done => {
        clearDir("services");
        server.listen({ port: 9099 }, async () => {
            console.log("http server start successfull");
            await createManager("config-multiple-origins.json");

            done();
        });
    });
    it("123", () => {
        expect("123").toEqual("123");
    });
    afterAll(() => {
        server.close();
    });
});
