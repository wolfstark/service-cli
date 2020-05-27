/**
 * @desc delete
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/shippingPerson/delete',
    params,
    method: 'delete',
  });
}
