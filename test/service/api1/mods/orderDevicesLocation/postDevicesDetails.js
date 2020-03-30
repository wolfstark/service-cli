/**
 * @desc 查询当前用户设备统计信息和设备信息
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * 绑定状态
   * @type {string}
   */
  bindingStatus;
  /**
   * 所属企业
   * @type {Array<number>}
   */
  companyIds;
  /**
   * isDeleted
   * @type {string}
   */
  isDeleted;
  /**
   * 精确查询：1，模糊查询：0
   * @type {number}
   */
  isExact;
  /**
   * pageSize
   * @type {number}
   */
  pageSize;
  /**
   * 会员id
   * @type {string}
   */
  partyId;
  /**
   * 查询的号码
   * @type {string}
   */
  queryNo;
  /**
   * start
   * @type {number}
   */
  start;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/orderDevicesLocation/devicesDetails',
    params,
    method: 'POST',
  });
}
