// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建全局常量 创建全局常量 POST /sys/constant/create */
export async function createUsingPOST11(options?: { [key: string]: any }) {
  return request<any>('/sys/constant/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除全局常量 删除全局常量 POST /sys/constant/del/${param0} */
export async function delUsingPOST12(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST12Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/constant/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取全局常量列表 分页查询-获取全局常量列表 POST /sys/constant/getPages */
export async function getPageUsingPOST1(options?: { [key: string]: any }) {
  return request<any>('/sys/constant/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询全局常量信息详情 根据id查询全局常量信息详情 GET /sys/constant/info/${param0} */
export async function infoUsingGET7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET7Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/constant/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改全局常量 修改全局常量 POST /sys/constant/update */
export async function updateUsingPOST6(options?: { [key: string]: any }) {
  return request<any>('/sys/constant/update', {
    method: 'POST',
    ...(options || {}),
  });
}
