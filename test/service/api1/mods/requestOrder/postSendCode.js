/**
 * @desc 发送收货码
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function fetch(params, bodyParams) {
  return request({
    url: '/requestOrder/sendCode',
    params: bodyParams,
    method: 'post',
  });
}
