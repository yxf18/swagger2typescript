// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 连通测试 用于测试接口是否可以 POST /admin/health/ping */
export async function pingUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/admin/health/ping', {
    method: 'POST',
    ...(options || {}),
  });
}
