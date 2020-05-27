/**
 * @desc 停用启用承运商
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/carrierInfo/updateEnableStatus',
    data,
    method: 'post',
  });
}
