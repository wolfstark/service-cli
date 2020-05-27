/**
 * @desc 查询平台级别数据字典
 */

import * as defs from '../../baseClass';
import request from 'src/utils/request';

export async function fetch(params) {
  return request({
    url: '/iloop-oms/dictionary/listPlatformDataByType',
    params,
    method: 'get',
  });
}
