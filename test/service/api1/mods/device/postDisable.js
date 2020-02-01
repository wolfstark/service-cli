/**
     * @desc 禁用设备
禁用设备
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function request(params, bodyParams) {
  return request({
    url: '/device/disable',
    params: bodyParams,
    method: 'post',
  });
}
