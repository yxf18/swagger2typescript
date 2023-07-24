// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取当前用户的消息列表 POST /sysmsg/list */
export async function listUsingPOST6(options?: { [key: string]: any }) {
  return request<any>('/sysmsg/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 根据用户消息表id，设为已读 POST /sysmsg/markReadById */
export async function markReadByIdUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markReadByIdUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/sysmsg/markReadById', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 将当前用户的消息，都设为已读 POST /sysmsg/markReadForCurrentUser */
export async function markReadForCurrentUserUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sysmsg/markReadForCurrentUser', {
    method: 'POST',
    ...(options || {}),
  });
}
