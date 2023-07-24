// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建整体结果处理器 创建整体结果处理器 POST /sm/common/result/processor/create */
export async function createUsingPOST2(options?: { [key: string]: any }) {
  return request<any>('/sm/common/result/processor/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除整体结果处理器 删除整体结果处理器 POST /sm/common/result/processor/del/${param0} */
export async function delUsingPOST2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST2Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/common/result/processor/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据服务id整体结果处理器 根据服务id查询整体结果处理器 POST /sm/common/result/processor/list/${param0} */
export async function listUsingPOST2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingPOST2Params,
  options?: { [key: string]: any },
) {
  const { serviceId: param0, ...queryParams } = params;
  return request<any>(`/sm/common/result/processor/list/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
