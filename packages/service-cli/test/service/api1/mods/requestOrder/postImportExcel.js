/**
 * @desc 订单导入
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/importExcel',
    data,
    method: 'post',
  });
}
