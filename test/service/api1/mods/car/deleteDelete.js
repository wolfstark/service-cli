/**
 * @desc 删除一个车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** 车辆id */
  carId?: number;
}

export const init = undefined;

export async function request(params) {
  return request({
    url: '/car/delete',
    params,
    method: 'delete',
  });
}
