/**
 * @desc 设备编号、单据号或已设置的跟踪对象名称自动模糊 查询
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * queryNo
   * @type {string}
   */
  queryNo;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/orderDevicesLocation/queryFuzzyNo',
    params,
    method: 'POST',
  });
}
