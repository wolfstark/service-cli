/**
 * @desc 订单修改
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/modify',
    data,
    method: 'post',
  });
}
