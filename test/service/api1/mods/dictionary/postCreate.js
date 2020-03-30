/**
 * @desc create
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** code */
  code: string;
  /** createDate */
  createDate: string;
  /** createMan */
  createMan: string;
  /** description */
  description: string;
  /** id */
  id: number;
  /** inputDate */
  inputDate: string;
  /** inputMan */
  inputMan: string;
  /** isDeleted */
  isDeleted: string;
  /** partyId */
  partyId: number;
  /** realName */
  realName: string;
  /** type */
  type: string;
  /** typeName */
  typeName: string;
}

export const init = new defs.api1.BaseRes();

export async function fetch(params) {
  return request({
    url: '/dictionary/create',
    params,
    method: 'post',
  });
}
