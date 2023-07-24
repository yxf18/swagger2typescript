// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建个性预处理器 创建个性预处理器 POST /sm/my/pre/processor/create */
export async function createUsingPOST3(options?: { [key: string]: any }) {
  return request<any>('/sm/my/pre/processor/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除个性预处理器 删除个性预处理器 POST /sm/my/pre/processor/del/${param0} */
export async function delUsingPOST3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST3Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/my/pre/processor/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
