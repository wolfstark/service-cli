/**
 * @desc list
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function request(params, bodyParams) {
  return request({
    url: '/goodsInfo/list',
    params: bodyParams,
    method: 'post',
  });
}