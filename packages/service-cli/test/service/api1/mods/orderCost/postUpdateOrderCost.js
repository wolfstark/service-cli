/**
 * @desc 修改订单的费用
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderCost/updateOrderCost',
    data,
    method: 'post',
  });
}
