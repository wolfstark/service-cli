/**
     * @desc 更新设备
更新设备
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/device/update',
    data,
    method: 'post',
  });
}
