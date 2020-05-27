/**
 * @desc 业务单据与设备绑定
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevices/bind',
    data,
    method: 'post',
  });
}
