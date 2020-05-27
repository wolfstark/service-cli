/**
     * @desc 天眼跟单小程序订单详情
货物跟踪
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/eye/track/detail',
    data,
    method: 'post',
  });
}
