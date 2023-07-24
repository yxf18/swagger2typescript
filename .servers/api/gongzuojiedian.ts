// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建工作节点 创建工作节点 POST /sys/worker/node/create */
export async function createUsingPOST17(options?: { [key: string]: any }) {
  return request<any>('/sys/worker/node/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除工作节点 删除工作节点 POST /sys/worker/node/del/${param0} */
export async function delUsingPOST19(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST19Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/worker/node/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取工作节点列表 分页查询-获取工作节点列表 POST /sys/worker/node/getPages */
export async function getPageUsingPOST7(options?: { [key: string]: any }) {
  return request<any>('/sys/worker/node/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询工作节点详情 根据id查询工作节点详情 GET /sys/worker/node/info/${param0} */
export async function infoUsingGET13(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET13Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/worker/node/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改状态 修改状态, status: 0-停用， 1-启用 POST /sys/worker/node/switch/${param0}/${param1} */
export async function swUsingPOST2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.swUsingPOST2Params,
  options?: { [key: string]: any },
) {
  const { id: param0, status: param1, ...queryParams } = params;
  return request<any>(`/sys/worker/node/switch/${param0}/${param1}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改工作节点 修改工作节点 POST /sys/worker/node/update */
export async function updateUsingPOST12(options?: { [key: string]: any }) {
  return request<any>('/sys/worker/node/update', {
    method: 'POST',
    ...(options || {}),
  });
}
