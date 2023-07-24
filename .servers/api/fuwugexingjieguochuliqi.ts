// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建个性结果处理器 创建个性结果处理器 POST /sm/my/post/processor/create */
export async function createUsingPOST4(options?: { [key: string]: any }) {
  return request<any>('/sm/my/post/processor/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除个性结果处理器 删除个性结果处理器 POST /sm/my/post/processor/del/${param0} */
export async function delUsingPOST4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST4Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/my/post/processor/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
