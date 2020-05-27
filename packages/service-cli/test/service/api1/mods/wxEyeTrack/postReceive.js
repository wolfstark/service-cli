/**
 * @desc 确认收货
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/eye/track/receive',
    data,
    method: 'post',
  });
}
