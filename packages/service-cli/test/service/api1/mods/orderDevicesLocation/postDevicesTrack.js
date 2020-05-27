/**
 * @desc 设备跟踪接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevicesLocation/devicesTrack',
    data,
    method: 'post',
  });
}
