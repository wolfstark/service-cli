/*
 * @Author: Wang Xiang
 * @Date: 2019-12-05 17:31:20
 * @LastEditTime: 2019-12-05 17:33:53
 * @LastEditors: Wang Xiang
 */
export interface AstNode {
    name: string;
    templateArgs: AstNode[];
}
