/**
 * @desc 承运商修改接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CarrierInfo();

export async function fetch(params, bodyParams) {
  return request({
    url: '/carrierInfo/update',
    params: bodyParams,
    method: 'POST',
  });
}
