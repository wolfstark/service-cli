/**
 * @desc 获取最新位置--通过中交兴路
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** 车牌号 */
  plateNumber?: string;
}

export const init = new defs.api1.IotGpsVO();

export async function request(params) {
  return request({
    url: '/car/latestLocation',
    params,
    method: 'get',
  });
}
