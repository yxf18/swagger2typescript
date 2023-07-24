// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建应用类别 创建应用类别 POST /sys/appCategory/create */
export async function createUsingPOST8(options?: { [key: string]: any }) {
  return request<any>('/sys/appCategory/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除应用类别 递归删除子节点 POST /sys/appCategory/del/${param0} */
export async function delUsingPOST9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST9Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/appCategory/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取应用类别树 获取应用类别树 GET /sys/appCategory/getAppCategory/tree */
export async function getTreeUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTreeUsingGET1Params,
  options?: { [key: string]: any },
) {
  return request<any>('/sys/appCategory/getAppCategory/tree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询-获取应用类别列表 分页查询-获取应用类别列表 POST /sys/appCategory/getPages */
export async function getPagesUsingPOST2(options?: { [key: string]: any }) {
  return request<any>('/sys/appCategory/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询应用类别 根据id查询应用类别 GET /sys/appCategory/info/${param0} */
export async function infoUsingGET4(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET4Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/appCategory/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改应用类别 修改应用类别 POST /sys/appCategory/update */
export async function updateUsingPOST3(options?: { [key: string]: any }) {
  return request<any>('/sys/appCategory/update', {
    method: 'POST',
    ...(options || {}),
  });
}
