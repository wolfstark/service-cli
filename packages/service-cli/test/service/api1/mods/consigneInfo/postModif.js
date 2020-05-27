/**
 * @desc modif
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(data) {
  return request({
    url: '/iloop-oms/consigneInfo/modif',
    data,
    method: 'post',
  });
}
