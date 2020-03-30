/**
 * @desc 查询对象绑定记录
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * affiliatedCompany
   * @type {string}
   */
  affiliatedCompany;
  /**
   * bindingTimeEnd
   * @type {string}
   */
  bindingTimeEnd;
  /**
   * bindingTimeStart
   * @type {string}
   */
  bindingTimeStart;
  /**
   * clientOrderNo
   * @type {string}
   */
  clientOrderNo;
  /**
   * comyIds
   * @type {Array<number>}
   */
  comyIds;
  /**
   * isDeleted
   * @type {string}
   */
  isDeleted;
  /**
   * omsDeviceId
   * @type {number}
   */
  omsDeviceId;
  /**
   * omsRequestOrderId
   * @type {number}
   */
  omsRequestOrderId;
  /**
   * pageSize
   * @type {number}
   */
  pageSize;
  /**
   * partyId
   * @type {number}
   */
  partyId;
  /**
   * requestOrderNo
   * @type {string}
   */
  requestOrderNo;
  /**
   * serialNo
   * @type {string}
   */
  serialNo;
  /**
   * start
   * @type {number}
   */
  start;
  /**
   * trackName
   * @type {string}
   */
  trackName;
  /**
   * type
   * @type {string}
   */
  type;
  /**
   * unBindingTimeEnd
   * @type {string}
   */
  unBindingTimeEnd;
  /**
   * unBindingTimeStart
   * @type {string}
   */
  unBindingTimeStart;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/orderDevices/queryBind',
    params,
    method: 'PUT',
  });
}
