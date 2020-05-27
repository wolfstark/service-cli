/**
 * @desc 小程序订单列表
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/wx/carrier/data',
    data,
    method: 'post',
  });
}
