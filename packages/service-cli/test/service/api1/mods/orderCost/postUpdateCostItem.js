/**
 * @desc 自定义企业的费用项配置
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderCost/updateCostItem',
    data,
    method: 'post',
  });
}
