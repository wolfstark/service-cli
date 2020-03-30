/**
 * @desc 获取订单的费用明细
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** clientOrderNo */
  clientOrderNo: string;
}

export const init = new defs.api1.OrderCostInfo();

export async function fetch(params) {
  return request({
    url: '/orderCost/getOrderCost',
    params,
    method: 'get',
  });
}
