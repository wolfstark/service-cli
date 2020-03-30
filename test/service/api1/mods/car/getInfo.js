/**
 * @desc 获取车辆的详情
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** carId */
  '车辆id': number;
}

export const init = new defs.api1.CarDTO();

export async function fetch(params) {
  return request({
    url: '/car/info',
    params,
    method: 'get',
  });
}
