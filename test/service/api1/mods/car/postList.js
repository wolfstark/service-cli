/**
 * @desc 获取车辆的列表，带分页功能
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CarDTO();

export async function fetch(params, bodyParams) {
  return request({
    url: '/car/list',
    params: bodyParams,
    method: 'POST',
  });
}
