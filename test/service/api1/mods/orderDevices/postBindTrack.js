/**
 * @desc 业务对象与设备绑定
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * remark
   * @type {string}
   */
  remark;
  /**
   * serialNo
   * @type {string}
   */
  serialNo;
  /**
   * trackName
   * @type {string}
   */
  trackName;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/orderDevices/bindTrack',
    params,
    method: 'POST',
  });
}
