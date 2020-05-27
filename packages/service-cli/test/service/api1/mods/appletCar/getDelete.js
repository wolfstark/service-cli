/**
 * @desc 删除车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/appletCar/delete',
    params,
    method: 'get',
  });
}
