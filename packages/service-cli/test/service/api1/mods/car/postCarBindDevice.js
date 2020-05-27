/**
 * @desc 车辆绑定设备
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/car/carBindDevice',
    data,
    method: 'post',
  });
}
