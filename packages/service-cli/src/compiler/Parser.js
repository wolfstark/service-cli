/*
 * @Author: Wang Xiang
 * @Date: 2019-12-05 17:47:56
 * @LastEditTime: 2019-12-05 18:02:16
 * @LastEditors: Wang Xiang
 */
class Parser {
    /**
     *Creates an instance of Parser.
     * @param {import("./Token")[]} nodes
     * @memberof Parser
     */
    constructor(nodes) {
        this.nodes = nodes;
    }

    /**
     * 吃掉第一个Token
     *
     * @param {('Identifier' | 'PreTemplate' | 'EndTemplate' | 'Comma')} type
     * @returns
     * @memberof Parser
     */
    eat(type) {
        if (this.nodes.length && this.nodes[0].type === type) {
            const node = this.nodes[0];
            this.nodes = this.nodes.slice(1);

            return node;
        }
        console.error("current nodes", this.nodes);
        throw Error(
            `the first node type is not ${type} in template parser's eat method`
        );
    }

    /**
     *
     *
     * @param {('Identifier' | 'PreTemplate' | 'EndTemplate' | 'Comma')} type
     * @returns
     * @memberof Parser
     */
    check(type) {
        if (this.nodes.length && this.nodes[0].type === type) {
            return true;
        }

        return false;
    }

    parserTemplateArgs() {
        const args = [];
        args[0] = this.parseTemplate();

        while (this.check("Comma")) {
            this.eat("Comma");
            args.push(this.parseTemplate());
        }

        return args;
    }

    // 语法分析
    parseTemplate() {
        const name = this.eat("Identifier").value;
        let templateArgs = [];

        if (this.check("PreTemplate")) {
            this.eat("PreTemplate");
            templateArgs = this.parserTemplateArgs();
            this.eat("EndTemplate");
        }

        return {
            type: "Template",
            name,
            templateArgs,
        };
    }
}
module.exports = Parser;
