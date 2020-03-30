/**
 * @desc 获取昨日订单分析
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.YesterdayDataDTO();

export async function fetch(params) {
  return request({
    url: '/homepage/statisticsYesterdayData',
    params,
    method: 'GET',
  });
}
