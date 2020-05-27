/**
 * @desc 发送收货码
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/sendCode',
    data,
    method: 'post',
  });
}
