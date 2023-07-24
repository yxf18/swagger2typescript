// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 交互日志-详情 交互日志-详情 GET /log/interaction/info/${param0} */
export async function infoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGETParams,
  options?: { [key: string]: any },
) {
  const { traceId: param0, ...queryParams } = params;
  return request<any>(`/log/interaction/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 交互日志-列表 POST /log/interaction/list */
export async function listUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/log/interaction/list', {
    method: 'POST',
    ...(options || {}),
  });
}
