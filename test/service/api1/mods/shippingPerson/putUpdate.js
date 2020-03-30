/**
 * @desc update
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/shippingPerson/update',
    params,
    method: 'PUT',
  });
}
