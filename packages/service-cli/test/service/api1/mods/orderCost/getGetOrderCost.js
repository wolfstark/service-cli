/**
 * @desc 获取订单的费用明细
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/orderCost/getOrderCost',
    params,
    method: 'get',
  });
}
