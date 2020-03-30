/**
 * @desc 获取承运商列表，带分页功能
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CarrierInfo();

export async function fetch(params, bodyParams) {
  return request({
    url: '/carrierInfo/list',
    params: bodyParams,
    method: 'post',
  });
}
