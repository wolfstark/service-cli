/**
 * @desc 修改订单的费用
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CostItem();

export async function request(params, bodyParams) {
  return request({
    url: '/orderCost/updateOrderCost',
    params: bodyParams,
    method: 'post',
  });
}
