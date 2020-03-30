/**
 * @desc 查看订单评价
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** clientOrderNo */
  clientOrderNo: string;
}

export const init = new defs.api1.OrderEvaluate();

export async function fetch(params) {
  return request({
    url: '/requestOrder/getOrderEvaluate',
    params,
    method: 'get',
  });
}
