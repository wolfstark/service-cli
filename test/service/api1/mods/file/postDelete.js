/**
 * @desc delete
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** fileName */
  fileName: string;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/file/delete',
    params,
    method: 'post',
  });
}
