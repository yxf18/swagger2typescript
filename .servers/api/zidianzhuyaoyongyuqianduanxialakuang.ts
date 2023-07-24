// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取字典列表 GET /admin/dict/list */
export async function listUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/admin/dict/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
