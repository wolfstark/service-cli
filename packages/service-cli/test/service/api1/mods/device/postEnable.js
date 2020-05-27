/**
     * @desc 启用设备
启用设备
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/device/enable',
    data,
    method: 'post',
  });
}
