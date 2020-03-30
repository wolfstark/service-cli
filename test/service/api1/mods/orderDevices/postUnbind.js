/**
 * @desc 业务单据与设备解绑
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function fetch(params, bodyParams) {
  return request({
    url: '/orderDevices/unbind',
    params: bodyParams,
    method: 'POST',
  });
}
