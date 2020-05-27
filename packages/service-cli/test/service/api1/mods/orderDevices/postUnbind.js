/**
 * @desc 业务单据与设备解绑
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevices/unbind',
    data,
    method: 'post',
  });
}
