/**
     * @desc 设备详情
根据ID查询设备详情
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/device/detail',
    data,
    method: 'post',
  });
}
