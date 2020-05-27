/**
 * @desc 查询当前用户设备统计信息和设备信息
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevicesLocation/devicesDetails',
    data,
    method: 'post',
  });
}
