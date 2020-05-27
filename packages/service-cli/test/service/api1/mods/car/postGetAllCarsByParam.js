/**
 * @desc 获取车辆的列表，可用下拉框接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/car/getAllCarsByParam',
    data,
    method: 'post',
  });
}
