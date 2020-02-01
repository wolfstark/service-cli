/**
 * @desc 查询承运商
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CarrierInfo();

export async function request(params, bodyParams) {
  return request({
    url: '/carrierInfo/getCarrier',
    params: bodyParams,
    method: 'post',
  });
}
