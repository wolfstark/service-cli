/**
 * @desc 查询当前用户设备统计信息和设备列表
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** 绑定状态 */
  bindingStatus?: string;
  /** 所属企业 */
  companyIds?: Array<number>;
  /** isDeleted */
  isDeleted?: string;
  /** 精确查询：1，模糊查询：0 */
  isExact?: number;
  /** pageSize */
  pageSize?: number;
  /** 会员id */
  partyId?: string;
  /** 查询的号码 */
  queryNo?: string;
  /** start */
  start?: number;
}

export const init = new defs.api1.BaseRes();

export async function request(params) {
  return request({
    url: '/orderDevicesLocation/devicesData',
    params,
    method: 'post',
  });
}
