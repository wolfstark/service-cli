/**
 * @desc getProjectName
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = '';

export async function request(params) {
  return request({
    url: '/user/projectName',
    params,
    method: 'post',
  });
}
