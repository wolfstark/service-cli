/**
 * @desc 订单列表
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/data',
    data,
    method: 'post',
  });
}
