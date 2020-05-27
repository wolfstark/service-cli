/**
 * @desc 获取实时数据监控
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/homepage/statisticsRealtimeData',
    params,
    method: 'get',
  });
}
