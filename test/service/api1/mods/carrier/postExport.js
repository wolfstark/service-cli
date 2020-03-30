/**
 * @desc carrierInfoExport
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * address
   * @type {string}
   */
  address;
  /**
   * carrierName
   * @type {string}
   */
  carrierName;
  /**
   * carrierNo
   * @type {string}
   */
  carrierNo;
  /**
   * city
   * @type {string}
   */
  city;
  /**
   * cityNo
   * @type {string}
   */
  cityNo;
  /**
   * companyInfoId
   * @type {number}
   */
  companyInfoId;
  /**
   * enableStatus
   * @type {string}
   */
  enableStatus;
  /**
   * identityNumber
   * @type {string}
   */
  identityNumber;
  /**
   * isDeleted
   * @type {string}
   */
  isDeleted;
  /**
   * keyWord
   * @type {string}
   */
  keyWord;
  /**
   * linkMan
   * @type {string}
   */
  linkMan;
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
   * phone
   * @type {string}
   */
  phone;
  /**
   * province
   * @type {string}
   */
  province;
  /**
   * provinceNo
   * @type {string}
   */
  provinceNo;
  /**
   * realName
   * @type {string}
   */
  realName;
  /**
   * region
   * @type {string}
   */
  region;
  /**
   * regionNo
   * @type {string}
   */
  regionNo;
  /**
   * start
   * @type {number}
   */
  start;
  /**
   * tel
   * @type {string}
   */
  tel;
}

export const init = undefined;

export async function fetch(params) {
  return request({
    url: '/carrierInfo/export',
    params,
    method: 'POST',
  });
}
