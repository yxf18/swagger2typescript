// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建数据源 创建数据源 POST /sys/datasource/create */
export async function createUsingPOST12(options?: { [key: string]: any }) {
  return request<any>('/sys/datasource/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除数据源 删除数据源 POST /sys/datasource/del/${param0} */
export async function delUsingPOST14(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST14Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/datasource/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取数据源列表 分页查询-获取数据源列表 POST /sys/datasource/getPages */
export async function getPageUsingPOST3(options?: { [key: string]: any }) {
  return request<any>('/sys/datasource/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询数据源详情 根据id查询数据源详情 GET /sys/datasource/info/${param0} */
export async function infoUsingGET8(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET8Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/datasource/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取数据源列表 获取数据源列表 POST /sys/datasource/list */
export async function listUsingPOST4(options?: { [key: string]: any }) {
  return request<any>('/sys/datasource/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 修改数据源 修改数据源 POST /sys/datasource/update */
export async function updateUsingPOST7(options?: { [key: string]: any }) {
  return request<any>('/sys/datasource/update', {
    method: 'POST',
    ...(options || {}),
  });
}
