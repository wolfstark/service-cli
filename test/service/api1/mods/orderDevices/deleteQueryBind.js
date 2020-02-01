/**
 * @desc 查询对象绑定记录
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** affiliatedCompany */
  affiliatedCompany?: string;
  /** bindingTimeEnd */
  bindingTimeEnd?: string;
  /** bindingTimeStart */
  bindingTimeStart?: string;
  /** clientOrderNo */
  clientOrderNo?: string;
  /** comyIds */
  comyIds?: Array<number>;
  /** isDeleted */
  isDeleted?: string;
  /** omsDeviceId */
  omsDeviceId?: number;
  /** omsRequestOrderId */
  omsRequestOrderId?: number;
  /** pageSize */
  pageSize?: number;
  /** partyId */
  partyId?: number;
  /** requestOrderNo */
  requestOrderNo?: string;
  /** serialNo */
  serialNo?: string;
  /** start */
  start?: number;
  /** trackName */
  trackName?: string;
  /** type */
  type?: string;
  /** unBindingTimeEnd */
  unBindingTimeEnd?: string;
  /** unBindingTimeStart */
  unBindingTimeStart?: string;
}

export const init = new defs.api1.BaseRes();

export async function request(params) {
  return request({
    url: '/orderDevices/queryBind',
    params,
    method: 'delete',
  });
}
