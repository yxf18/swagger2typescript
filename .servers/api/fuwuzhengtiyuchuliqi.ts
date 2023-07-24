// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建整体预处理器 创建整体预处理器 POST /sm/common/pre/processor/create */
export async function createUsingPOST1(options?: { [key: string]: any }) {
  return request<any>('/sm/common/pre/processor/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除整体预处理器 删除整体预处理器 POST /sm/common/pre/processor/del/${param0} */
export async function delUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/common/pre/processor/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据服务id查询整体预处理 根据服务id查询整体预处理 POST /sm/common/pre/processor/list/${param0} */
export async function listUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { serviceId: param0, ...queryParams } = params;
  return request<any>(`/sm/common/pre/processor/list/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
