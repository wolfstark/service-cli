/**
 * @desc 设备号精确查询定位接口
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/orderDevicesLocation/queryBySerialNo',
    data,
    method: 'post',
  });
}
