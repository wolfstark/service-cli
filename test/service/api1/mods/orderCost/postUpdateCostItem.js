/**
 * @desc 自定义企业的费用项配置
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export class Params {}

export const init = new defs.api1.CostItem();

export async function request(params, bodyParams) {
  return request({
    url: '/orderCost/updateCostItem',
    params: bodyParams,
    method: 'post',
  });
}
