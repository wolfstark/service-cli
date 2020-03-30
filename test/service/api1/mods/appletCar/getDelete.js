/**
 * @desc 删除车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * 车辆id
   * @type {number}
   */
  carId;
}

export const init = undefined;

export async function fetch(params) {
  return request({
    url: '/appletCar/delete',
    params,
    method: 'GET',
  });
}
