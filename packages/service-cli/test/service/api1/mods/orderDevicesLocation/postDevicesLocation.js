/**
 * @desc 设备定位接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevicesLocation/devicesLocation',
    data,
    method: 'post',
  });
}
