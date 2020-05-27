/**
 * @desc 获取企业下的费用项配置
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/orderCost/listCostItem',
    params,
    method: 'get',
  });
}
