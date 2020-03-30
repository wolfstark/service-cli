/**
 * @desc 订单评价
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = false;

export async function fetch(params, bodyParams) {
  return request({
    url: '/requestOrder/orderEvaluate',
    params: bodyParams,
    method: 'post',
  });
}
