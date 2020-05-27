/**
 * @desc 设备编号、单据号或已设置的跟踪对象名称自动模糊 查询
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/orderDevicesLocation/queryFuzzyNo',
    params,
    method: 'get',
  });
}
