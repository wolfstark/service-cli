/**
 * @desc 订单导出
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/getExportData',
    data,
    method: 'post',
  });
}
