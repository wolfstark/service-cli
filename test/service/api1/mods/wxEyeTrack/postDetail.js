/**
     * @desc 天眼跟单小程序订单详情
货物跟踪
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function fetch(params, bodyParams) {
  return request({
    url: '/eye/track/detail',
    params: bodyParams,
    method: 'POST',
  });
}
