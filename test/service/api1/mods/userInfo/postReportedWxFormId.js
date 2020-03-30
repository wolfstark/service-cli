/**
 * @desc 上报微信小程序的formId
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = false;

export async function fetch(params, bodyParams) {
  return request({
    url: '/user/reportedWxFormId',
    params: bodyParams,
    method: 'post',
  });
}
