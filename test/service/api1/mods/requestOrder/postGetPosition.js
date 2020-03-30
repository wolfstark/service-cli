/**
 * @desc 主动获取订单位置信息
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function fetch(params, bodyParams) {
  return request({
    url: '/requestOrder/getPosition',
    params: bodyParams,
    method: 'post',
  });
}
