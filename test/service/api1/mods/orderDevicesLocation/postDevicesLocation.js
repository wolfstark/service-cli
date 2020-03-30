/**
 * @desc 设备定位接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** devicesNo */
  devicesNo: string;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/orderDevicesLocation/devicesLocation',
    params,
    method: 'post',
  });
}
