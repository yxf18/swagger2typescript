// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** error GET /error */
export async function errorUsingGET(options?: { [key: string]: any }) {
  return request<any>('/error', {
    method: 'GET',
    ...(options || {}),
  });
}

/** error PUT /error */
export async function errorUsingPUT(options?: { [key: string]: any }) {
  return request<any>('/error', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** error POST /error */
export async function errorUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/error', {
    method: 'POST',
    ...(options || {}),
  });
}

/** error DELETE /error */
export async function errorUsingDELETE(options?: { [key: string]: any }) {
  return request<any>('/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** error PATCH /error */
export async function errorUsingPATCH(options?: { [key: string]: any }) {
  return request<any>('/error', {
    method: 'PATCH',
    ...(options || {}),
  });
}
