/**
 * @desc 获取承运商列表，可用于下拉框接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CarrierInfo();

export async function fetch(params, bodyParams) {
  return request({
    url: '/carrierInfo/getAllCarriers',
    params: bodyParams,
    method: 'POST',
  });
}
