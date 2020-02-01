/**
 * @desc 修改车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.Car();

export async function request(params, bodyParams) {
  return request({
    url: '/appletCar/update',
    params: bodyParams,
    method: 'put',
  });
}
