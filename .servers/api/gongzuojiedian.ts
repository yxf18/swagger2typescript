// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建工作节点 创建工作节点 POST /adminapi/sys/worker/node/create */
export async function createUsingPOST14(
  body: API.SysWorkerNodeCreateDto,
  options?: { [key: string]: any },
) {
  return request<API.RSysWorkerNodeBiaoDePoDuiXiang>('/adminapi/sys/worker/node/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 启用节点 POST /adminapi/sys/worker/node/start/${param0} */
export async function startUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.startUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.R>(`/adminapi/sys/worker/node/start/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 停用节点 POST /adminapi/sys/worker/node/stop/${param0} */
export async function stopUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stopUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.R>(`/adminapi/sys/worker/node/stop/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改工作节点 修改工作节点 POST /adminapi/sys/worker/node/update */
export async function updateUsingPOST12(
  body: API.SysWorkerNodeUpdateDto,
  options?: { [key: string]: any },
) {
  return request<API.RSysWorkerNodeBiaoDePoDuiXiang>('/adminapi/sys/worker/node/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
