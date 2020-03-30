/**
 * @desc 订单评价
 */

import request from "src/utils/request";
import * as defs from "../../baseClass";

export class Params {}

export const init = false;

export async function fetch(params, bodyParams) {
    return request({
        url: "/requestOrder/orderEvaluate",
        params: bodyParams,
        method: "POST"
    });
}
