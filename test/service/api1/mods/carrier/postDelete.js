/**
 * @desc 承运商删除接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = undefined;

export async function request(params, bodyParams) {
  return request({
    url: '/carrierInfo/delete',
    params: bodyParams,
    method: 'post',
  });
}
