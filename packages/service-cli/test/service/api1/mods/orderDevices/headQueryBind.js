/**
 * @desc 查询对象绑定记录
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/orderDevices/queryBind',
    params,
    method: 'head',
  });
}
