/**
 * @desc 订单跟踪接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * endCreateDate
   * @type {string}
   */
  endCreateDate;
  /**
   * gpsType
   * @type {string}
   */
  gpsType;
  /**
   * orderNo
   * @type {string}
   */
  orderNo;
  /**
   * startCreateDate
   * @type {string}
   */
  startCreateDate;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/orderDevicesLocation/orderTrack',
    params,
    method: 'GET',
  });
}
