/**
 * @desc getEvaluationDict
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/dictionary/getEvaluationDict',
    params,
    method: 'get',
  });
}
