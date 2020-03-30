/**
 * @desc 批量删除车辆
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = undefined;

export async function fetch(params, bodyParams) {
  return request({
    url: '/car/deleteBatch',
    params: bodyParams,
    method: 'delete',
  });
}
