/**
 * @desc 获取承运商详情
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/carrierInfo/getCarrierByNo',
    data,
    method: 'post',
  });
}
