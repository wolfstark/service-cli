/**
     * @desc 删除设备
根据id删除设备
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/device/delete',
    params,
    method: 'get',
  });
}
