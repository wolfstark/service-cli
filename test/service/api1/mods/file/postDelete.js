/**
 * @desc delete
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * fileName
   * @type {string}
   */
  fileName;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/file/delete',
    params,
    method: 'POST',
  });
}
