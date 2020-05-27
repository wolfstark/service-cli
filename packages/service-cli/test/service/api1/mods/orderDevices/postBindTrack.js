/**
 * @desc 业务对象与设备绑定
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevices/bindTrack',
    data,
    method: 'post',
  });
}
