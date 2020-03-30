/**
 * @desc delete
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** id */
  id: number;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/dictionary/delete',
    params,
    method: 'post',
  });
}
