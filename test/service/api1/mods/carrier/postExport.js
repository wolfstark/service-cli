/**
 * @desc carrierInfoExport
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** address */
  address: string;
  /** carrierName */
  carrierName: string;
  /** carrierNo */
  carrierNo: string;
  /** city */
  city: string;
  /** cityNo */
  cityNo: string;
  /** companyInfoId */
  companyInfoId: number;
  /** enableStatus */
  enableStatus: string;
  /** identityNumber */
  identityNumber: string;
  /** isDeleted */
  isDeleted: string;
  /** keyWord */
  keyWord: string;
  /** linkMan */
  linkMan: string;
  /** pageSize */
  pageSize: number;
  /** partyId */
  partyId: number;
  /** phone */
  phone: string;
  /** province */
  province: string;
  /** provinceNo */
  provinceNo: string;
  /** realName */
  realName: string;
  /** region */
  region: string;
  /** regionNo */
  regionNo: string;
  /** start */
  start: number;
  /** tel */
  tel: string;
}

export const init = undefined;

export async function fetch(params) {
  return request({
    url: '/carrierInfo/export',
    params,
    method: 'post',
  });
}
