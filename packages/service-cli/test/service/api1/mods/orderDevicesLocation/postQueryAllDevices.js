/**
 * @desc 实时监控:查询当前用户所有的设备信息接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevicesLocation/queryAllDevices',
    data,
    method: 'post',
  });
}
