/**
 * @desc 订单导入
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** file */
  file?: File;
}

export const init = undefined;

export async function request(params) {
  return request({
    url: '/requestOrder/importExcel',
    params,
    method: 'post',
  });
}
