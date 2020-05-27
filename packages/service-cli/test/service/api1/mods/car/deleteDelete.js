/**
 * @desc 删除一个车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/car/delete',
    params,
    method: 'delete',
  });
}
