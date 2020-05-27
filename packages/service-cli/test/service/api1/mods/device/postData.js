/**
     * @desc 设备列表
分页查询设备列表
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/device/data',
    data,
    method: 'post',
  });
}
