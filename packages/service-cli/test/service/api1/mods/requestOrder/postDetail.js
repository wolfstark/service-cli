/**
 * @desc 订单详情
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/detail',
    data,
    method: 'post',
  });
}
