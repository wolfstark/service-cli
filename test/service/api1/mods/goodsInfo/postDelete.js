/**
 * @desc delete
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function fetch(params, bodyParams) {
  return request({
    url: '/goodsInfo/delete',
    params: bodyParams,
    method: 'post',
  });
}
