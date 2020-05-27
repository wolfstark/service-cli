/**
 * @desc 获取承运商列表，可用于下拉框接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/carrierInfo/getAllCarriers',
    data,
    method: 'post',
  });
}
