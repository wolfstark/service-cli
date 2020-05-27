/**
 * @desc create
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/goodsInfo/create',
    data,
    method: 'post',
  });
}
