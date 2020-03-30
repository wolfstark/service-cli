/**
 * @desc upload
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** file */
  file: File;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/file/upload',
    params,
    method: 'post',
  });
}
