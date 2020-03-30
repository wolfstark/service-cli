/**
 * @desc 查询平台级别数据字典
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {
  /** PLATFORM_CAR_LENGTH_TYPE=车型;PLATFORM_CAR_TYPE=车长 */
  type: string;
}

export const init = '';

export async function fetch(params) {
  return request({
    url: '/dictionary/listPlatformDataByType',
    params,
    method: 'get',
  });
}
