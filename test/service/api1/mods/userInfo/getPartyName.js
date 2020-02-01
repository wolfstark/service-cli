/**
 * @desc getPartyName
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = '';

export async function request(params) {
  return request({
    url: '/user/partyName',
    params,
    method: 'get',
  });
}
