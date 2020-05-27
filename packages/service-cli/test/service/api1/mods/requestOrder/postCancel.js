/**
 * @desc 撤回订单
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/cancel',
    data,
    method: 'post',
  });
}
