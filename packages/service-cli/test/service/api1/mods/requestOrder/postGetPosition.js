/**
 * @desc 主动获取订单位置信息
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/getPosition',
    data,
    method: 'post',
  });
}
