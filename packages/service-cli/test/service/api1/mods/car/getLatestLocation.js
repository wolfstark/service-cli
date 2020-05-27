/**
 * @desc 获取最新位置--通过中交兴路
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/car/latestLocation',
    params,
    method: 'get',
  });
}
