/**
     * @desc 删除设备
根据id删除设备
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** 设备ID */
  id: number;
}

export const init = new defs.api1.BaseRes();

export async function request(params) {
  return request({
    url: '/device/delete',
    params,
    method: 'get',
  });
}
