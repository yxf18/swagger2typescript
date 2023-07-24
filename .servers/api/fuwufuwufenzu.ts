// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建服务分组 创建服务分组 POST /sm/category/create */
export async function createUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/category/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除服务分组 递归删除子节点 POST /sm/category/del/${param0} */
export async function delUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/category/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取服务分组树 获取服务分组树 GET /sm/category/getAppCategory/tree */
export async function getTreeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTreeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/sm/category/getAppCategory/tree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询-获取服务分组列表 分页查询-获取服务分组列表 POST /sm/category/getPages */
export async function getPagesUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/category/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询服务分组 根据id查询服务分组 GET /sm/category/info/${param0} */
export async function infoUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/category/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改服务分组 修改服务分组 POST /sm/category/update */
export async function updateUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/category/update', {
    method: 'POST',
    ...(options || {}),
  });
}
