/**
 * @desc 查询设备是否被绑定 true 未绑定 false已绑定
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/orderDevices/checkBound',
    params,
    method: 'get',
  });
}
