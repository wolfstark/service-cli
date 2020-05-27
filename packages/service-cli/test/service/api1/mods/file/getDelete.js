/**
 * @desc delete
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/file/delete',
    params,
    method: 'get',
  });
}
