/**
 * @desc 业务对象与设备绑定
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** remark */
  remark?: string;
  /** serialNo */
  serialNo?: string;
  /** trackName */
  trackName?: string;
}

export const init = new defs.api1.BaseRes();

export async function request(params) {
  return request({
    url: '/orderDevices/bindTrack',
    params,
    method: 'post',
  });
}
