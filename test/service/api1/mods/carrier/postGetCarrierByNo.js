/**
 * @desc 获取承运商详情
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CarrierInfo();

export async function fetch(params, bodyParams) {
  return request({
    url: '/carrierInfo/getCarrierByNo',
    params: bodyParams,
    method: 'post',
  });
}
