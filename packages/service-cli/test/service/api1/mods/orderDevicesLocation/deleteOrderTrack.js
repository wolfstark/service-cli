/**
 * @desc 订单跟踪接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/orderDevicesLocation/orderTrack',
    params,
    method: 'delete',
  });
}
