/**
 * @desc create
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /**
   * code
   * @type {string}
   */
  code;
  /**
   * createDate
   * @type {string}
   */
  createDate;
  /**
   * createMan
   * @type {string}
   */
  createMan;
  /**
   * description
   * @type {string}
   */
  description;
  /**
   * id
   * @type {number}
   */
  id;
  /**
   * inputDate
   * @type {string}
   */
  inputDate;
  /**
   * inputMan
   * @type {string}
   */
  inputMan;
  /**
   * isDeleted
   * @type {string}
   */
  isDeleted;
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
   * type
   * @type {string}
   */
  type;
  /**
   * typeName
   * @type {string}
   */
  typeName;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/dictionary/create',
    params,
    method: 'POST',
  });
}
