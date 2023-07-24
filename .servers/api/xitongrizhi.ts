// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取系统日志列表 POST /syslog/list */
export async function listUsingPOST5(options?: { [key: string]: any }) {
  return request<any>('/syslog/list', {
    method: 'POST',
    ...(options || {}),
  });
}
