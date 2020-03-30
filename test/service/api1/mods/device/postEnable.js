/**
     * @desc 启用设备
启用设备
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function fetch(params, bodyParams) {
  return request({
    url: '/device/enable',
    params: bodyParams,
    method: 'post',
  });
}
