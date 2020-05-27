/**
 * @desc 查询订单绑定记录
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevices/query',
    data,
    method: 'post',
  });
}
