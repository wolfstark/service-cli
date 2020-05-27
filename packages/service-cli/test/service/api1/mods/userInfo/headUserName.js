/**
 * @desc getUserName
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/user/userName',
    params,
    method: 'head',
  });
}
