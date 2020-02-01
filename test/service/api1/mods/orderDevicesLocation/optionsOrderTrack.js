/**
 * @desc 订单跟踪接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** endCreateDate */
  endCreateDate?: string;
  /** gpsType */
  gpsType?: string;
  /** orderNo */
  orderNo?: string;
  /** startCreateDate */
  startCreateDate?: string;
}

export const init = new defs.api1.BaseRes();

export async function request(params) {
  return request({
    url: '/orderDevicesLocation/orderTrack',
    params,
    method: 'options',
  });
}
