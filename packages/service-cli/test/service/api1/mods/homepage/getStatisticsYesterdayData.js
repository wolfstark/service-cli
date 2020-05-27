/**
 * @desc 获取昨日订单分析
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/homepage/statisticsYesterdayData',
    params,
    method: 'get',
  });
}
