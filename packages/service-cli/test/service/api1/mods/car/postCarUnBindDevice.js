/**
 * @desc 车辆解绑设备
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/car/carUnBindDevice',
    data,
    method: 'post',
  });
}
