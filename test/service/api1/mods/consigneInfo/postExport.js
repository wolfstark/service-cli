/**
 * @desc parameterQueryExport
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = undefined;

export async function fetch(params, bodyParams) {
  return request({
    url: '/consigneInfo/export',
    params: bodyParams,
    method: 'POST',
  });
}
