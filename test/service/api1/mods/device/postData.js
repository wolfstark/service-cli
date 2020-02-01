/**
     * @desc 设备列表
分页查询设备列表
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function request(params, bodyParams) {
  return request({
    url: '/device/data',
    params: bodyParams,
    method: 'post',
  });
}
