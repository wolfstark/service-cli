/**
 * @desc 停用启用承运商
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = undefined;

export async function fetch(params, bodyParams) {
  return request({
    url: '/carrierInfo/updateEnableStatus',
    params: bodyParams,
    method: 'POST',
  });
}
