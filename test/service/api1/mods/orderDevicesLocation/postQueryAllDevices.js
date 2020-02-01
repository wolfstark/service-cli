/**
 * @desc 实时监控:查询当前用户所有的设备信息接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.BaseRes();

export async function request(params) {
  return request({
    url: '/orderDevicesLocation/queryAllDevices',
    params,
    method: 'post',
  });
}
