/**
 * @desc parameterQueryExport
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** goodsModelNo */
  goodsModelNo: string;
  /** goodsName */
  goodsName: string;
  /** goodsNo */
  goodsNo: string;
  /** goodsPackage */
  goodsPackage: string;
  /** goodsType */
  goodsType: string;
  /** goodsUnit */
  goodsUnit: string;
  /** id */
  id: number;
  /** isDeleted */
  isDeleted: string;
  /** keyWord */
  keyWord: string;
  /** packingType */
  packingType: string;
  /** pageSize */
  pageSize: number;
  /** partyId */
  partyId: number;
  /** realName */
  realName: string;
  /** remark */
  remark: string;
  /** start */
  start: number;
}

export const init = undefined;

export async function fetch(params) {
  return request({
    url: '/goodsInfo/export',
    params,
    method: 'post',
  });
}
