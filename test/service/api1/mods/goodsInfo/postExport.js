/**
 * @desc parameterQueryExport
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * goodsModelNo
   * @type {string}
   */
  goodsModelNo;
  /**
   * goodsName
   * @type {string}
   */
  goodsName;
  /**
   * goodsNo
   * @type {string}
   */
  goodsNo;
  /**
   * goodsPackage
   * @type {string}
   */
  goodsPackage;
  /**
   * goodsType
   * @type {string}
   */
  goodsType;
  /**
   * goodsUnit
   * @type {string}
   */
  goodsUnit;
  /**
   * id
   * @type {number}
   */
  id;
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
   * packingType
   * @type {string}
   */
  packingType;
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
   * realName
   * @type {string}
   */
  realName;
  /**
   * remark
   * @type {string}
   */
  remark;
  /**
   * start
   * @type {number}
   */
  start;
}

export const init = undefined;

export async function fetch(params) {
  return request({
    url: '/goodsInfo/export',
    params,
    method: 'POST',
  });
}
