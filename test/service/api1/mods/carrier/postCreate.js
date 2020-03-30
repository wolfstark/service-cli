/**
 * @desc 新增承运商接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = undefined;

export async function fetch(params, bodyParams) {
  return request({
    url: '/carrierInfo/create',
    params: bodyParams,
    method: 'post',
  });
}
