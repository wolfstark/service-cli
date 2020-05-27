/**
 * @desc 上报附件
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/wx/carrier/reported',
    data,
    method: 'post',
  });
}
