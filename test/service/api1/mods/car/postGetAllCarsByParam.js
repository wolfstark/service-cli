/**
 * @desc 获取车辆的列表，可用下拉框接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.Car();

export async function request(params, bodyParams) {
  return request({
    url: '/car/getAllCarsByParam',
    params: bodyParams,
    method: 'post',
  });
}
