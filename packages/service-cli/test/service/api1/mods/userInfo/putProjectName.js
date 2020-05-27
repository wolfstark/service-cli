/**
 * @desc getProjectName
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/user/projectName',
    data,
    method: 'put',
  });
}
