/**
 * @desc 获取实时数据监控
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.RealtimeDataDTO();

export async function fetch(params) {
  return request({
    url: '/homepage/statisticsRealtimeData',
    params,
    method: 'GET',
  });
}
