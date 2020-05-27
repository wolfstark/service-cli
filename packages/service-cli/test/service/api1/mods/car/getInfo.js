/**
 * @desc 获取车辆的详情
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/car/info',
    params,
    method: 'get',
  });
}
