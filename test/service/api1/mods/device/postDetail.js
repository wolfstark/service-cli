/**
     * @desc 设备详情
根据ID查询设备详情
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** 设备ID */
  id: number;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/device/detail',
    params,
    method: 'post',
  });
}
