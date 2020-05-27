/**
 * @desc 获取车辆的列表
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/appletCar/list',
    data,
    method: 'post',
  });
}
