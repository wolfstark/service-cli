/**
 * @desc 获取车辆的列表，带分页功能
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/car/list',
    data,
    method: 'post',
  });
}
