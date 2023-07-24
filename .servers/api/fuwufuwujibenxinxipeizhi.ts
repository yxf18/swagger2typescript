// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 服务复制 服务复制 GET /sm/serviceInfo/copy/${param0} */
export async function copyServiceUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.copyServiceUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/serviceInfo/copy/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 服务定义 服务定义 POST /sm/serviceInfo/create */
export async function createUsingPOST5(options?: { [key: string]: any }) {
  return request<any>('/sm/serviceInfo/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除服务基本信息 删除服务基本信息 POST /sm/serviceInfo/del/${param0} */
export async function delUsingPOST6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST6Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/serviceInfo/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取服务基本信息列表 分页查询-获取服务基本信息列表 POST /sm/serviceInfo/getPages */
export async function getPagesUsingPOST1(options?: { [key: string]: any }) {
  return request<any>('/sm/serviceInfo/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询服务基本信息详情 根据id查询服务基本信息详情 GET /sm/serviceInfo/info/${param0} */
export async function infoUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET2Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/serviceInfo/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取服务基本信息列表-服务订阅使用 获取服务基本信息列表 POST /sm/serviceInfo/subscribe/list */
export async function getPagesForSubscriptionUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/serviceInfo/subscribe/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 路由图谱展示 根据服务id，查询路由图谱 GET /sm/serviceInfo/topologyMap/${param0} */
export async function topologyMapUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.topologyMapUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/serviceInfo/topologyMap/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改服务基本信息 修改服务基本信息 POST /sm/serviceInfo/update */
export async function updateUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/sm/serviceInfo/update', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改及批量修改服务日志级别 修改及批量修改服务日志级别 GET /sm/serviceInfo/updateLogLevel */
export async function updateLogLevelUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateLogLevelUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/sm/serviceInfo/updateLogLevel', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 修改状态 修改状态, 服务状态：1=待设计，2=待配置，3=待发布，4=已发布 POST /sm/serviceInfo/updateStatus/${param0}/${param1} */
export async function updateStatusUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateStatusUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, status: param1, ...queryParams } = params;
  return request<any>(`/sm/serviceInfo/updateStatus/${param0}/${param1}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 申请服务 申请服务 POST /sm/subscription/apply */
export async function createUsingPOST7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createUsingPOST7Params,
  options?: { [key: string]: any },
) {
  return request<any>('/sm/subscription/apply', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 删除申请服务 删除申请服务 POST /sm/subscription/del/${param0} */
export async function delUsingPOST8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST8Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/subscription/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
