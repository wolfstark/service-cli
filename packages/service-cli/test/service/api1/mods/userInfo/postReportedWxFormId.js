/**
 * @desc 上报微信小程序的formId
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/user/reportedWxFormId',
    data,
    method: 'post',
  });
}
