/**
 * @desc 修改车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/car/update',
    data,
    method: 'put',
  });
}
