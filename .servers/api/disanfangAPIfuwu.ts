// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建第三方API服务 创建第三方API服务 POST /sys/third/service/create */
export async function createUsingPOST15(options?: { [key: string]: any }) {
  return request<any>('/sys/third/service/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除第三方API服务 删除第三方API服务 POST /sys/third/service/del/${param0} */
export async function delUsingPOST17(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST17Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/third/service/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取第三方API服务列表 分页查询-获取第三方API服务列表 POST /sys/third/service/getPages */
export async function getPageUsingPOST5(options?: { [key: string]: any }) {
  return request<any>('/sys/third/service/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询第三方API服务详情 根据id查询第三方API服务详情 GET /sys/third/service/info/${param0} */
export async function infoUsingGET11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET11Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/third/service/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改第三方API服务 修改第三方API服务 POST /sys/third/service/update */
export async function updateUsingPOST10(options?: { [key: string]: any }) {
  return request<any>('/sys/third/service/update', {
    method: 'POST',
    ...(options || {}),
  });
}
