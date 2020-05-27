/**
 * @desc delete
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/address/delete',
    params,
    method: 'patch',
  });
}
