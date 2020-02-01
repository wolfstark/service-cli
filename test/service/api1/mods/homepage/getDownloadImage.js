/**
 * @desc downloadImage
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = undefined;

export async function request(params) {
  return request({
    url: '/homepage/downloadImage',
    params,
    method: 'get',
  });
}
