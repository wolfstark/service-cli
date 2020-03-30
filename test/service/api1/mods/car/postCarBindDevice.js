/**
 * @desc 车辆绑定设备
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = false;

export async function fetch(params, bodyParams) {
  return request({
    url: '/car/carBindDevice',
    params: bodyParams,
    method: 'post',
  });
}
