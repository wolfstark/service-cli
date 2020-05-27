/**
 * @desc 查看订单评价
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/requestOrder/getOrderEvaluate',
    params,
    method: 'get',
  });
}
