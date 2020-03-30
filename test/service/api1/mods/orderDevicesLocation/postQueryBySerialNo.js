/**
 * @desc 设备号精确查询定位接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * serialNo
   * @type {string}
   */
  serialNo;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/orderDevicesLocation/queryBySerialNo',
    params,
    method: 'POST',
  });
}
