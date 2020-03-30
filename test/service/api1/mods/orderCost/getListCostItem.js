/**
 * @desc 获取企业下的费用项配置
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CostItem();

export async function fetch(params) {
  return request({
    url: '/orderCost/listCostItem',
    params,
    method: 'GET',
  });
}
