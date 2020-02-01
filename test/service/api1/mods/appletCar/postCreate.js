/**
 * @desc 创建车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return request({
    url: '/appletCar/create',
    params: bodyParams,
    method: 'post',
  });
}
