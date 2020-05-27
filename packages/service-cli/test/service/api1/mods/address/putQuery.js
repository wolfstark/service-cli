/**
 * @desc query
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/address/query',
    data,
    method: 'put',
  });
}
