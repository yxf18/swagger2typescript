// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取字典 GET /adminapi/admin/dict/get */
export async function listUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.RListQianDuanXiaLaLieBiaoXiang>('/adminapi/admin/dict/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取字典列表 GET /adminapi/admin/dict/list */
export async function listUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<API.RMapStringListQianDuanXiaLaLieBiaoXiang>('/adminapi/admin/dict/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 根据数据源id获取对应的数据类型列表 GET /adminapi/admin/dict/listDbDataType */
export async function listDbDataTypeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listDbDataTypeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.RListQianDuanXiaLaLieBiaoXiang>('/adminapi/admin/dict/listDbDataType', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
