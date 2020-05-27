/**
 * @desc 订单创建
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/create',
    data,
    method: 'post',
  });
}
