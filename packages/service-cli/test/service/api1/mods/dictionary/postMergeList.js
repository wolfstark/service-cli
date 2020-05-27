/**
 * @desc mergeList
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/dictionary/mergeList',
    data,
    method: 'post',
  });
}
