/**
     * @desc 天眼跟单小程序订单列表
执行中，近期签收，历史签收
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function fetch(params, bodyParams) {
  return request({
    url: '/eye/track/data',
    params: bodyParams,
    method: 'post',
  });
}
