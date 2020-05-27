/**
 * @desc 查询对象绑定记录
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevices/queryBind',
    data,
    method: 'put',
  });
}
