/**
     * @desc 天眼跟单小程序订单列表
执行中，近期签收，历史签收
     */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/eye/track/data',
    data,
    method: 'post',
  });
}
