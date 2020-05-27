/**
     * @desc 新增设备
新增设备
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/device/create',
    data,
    method: 'post',
  });
}
