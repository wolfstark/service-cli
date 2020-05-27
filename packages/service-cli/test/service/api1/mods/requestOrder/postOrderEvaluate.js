/**
 * @desc 订单评价
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/orderEvaluate',
    data,
    method: 'post',
  });
}
