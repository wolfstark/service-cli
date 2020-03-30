/**
 * @desc getUserName
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = '';

export async function fetch(params) {
  return request({
    url: '/user/userName',
    params,
    method: 'options',
  });
}
