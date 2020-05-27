/**
 * @desc 修改车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/appletCar/update',
    data,
    method: 'put',
  });
}
