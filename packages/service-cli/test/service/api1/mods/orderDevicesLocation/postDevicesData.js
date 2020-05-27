/**
 * @desc 查询当前用户设备统计信息和设备列表
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevicesLocation/devicesData',
    data,
    method: 'post',
  });
}
