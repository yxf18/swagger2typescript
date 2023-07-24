// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取参数列表 POST /sysconfigparam/list */
export async function listUsingPOST3(options?: { [key: string]: any }) {
  return request<any>('/sysconfigparam/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 更改参数值 POST /sysconfigparam/updateValue */
export async function updateValueUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateValueUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<any>('/sysconfigparam/updateValue', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
