/**
 * @desc 订单批量操作,派单，提货，送达等
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/requestOrder/batchOperation',
    data,
    method: 'post',
  });
}
