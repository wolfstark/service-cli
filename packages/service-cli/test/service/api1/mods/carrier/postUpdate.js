/**
 * @desc 承运商修改接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/carrierInfo/update',
    data,
    method: 'post',
  });
}
