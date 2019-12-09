/*
 * @Author: Wang Xiang
 * @Date: 2019-12-05 17:31:20
 * @LastEditTime: 2019-12-06 16:35:39
 * @LastEditors: Wang Xiang
 */
export interface AstNode {
    type: string;
    name: string;
    templateArgs: AstNode[];
}
