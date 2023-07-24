// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建应用系统 创建应用系统 POST /sys/app/create */
export async function createUsingPOST9(options?: { [key: string]: any }) {
  return request<any>('/sys/app/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除应用系统 删除应用系统 POST /sys/app/del/${param0} */
export async function delUsingPOST10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST10Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/app/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取应用系统列表 分页查询-获取应用系统列表 POST /sys/app/getPages */
export async function getAllPageListUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sys/app/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询应用系统详情 根据id查询应用系统详情 GET /sys/app/info/${param0} */
export async function infoUsingGET5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET5Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/app/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询系统提供方 根据状态返回系统提供方，不传状态则查所有数据， 0-停用， 1-启用 GET /sys/app/listAllAppProvider */
export async function listAllAppProviderUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAllAppProviderUsingGETParams,
  options?: { [key: string]: any },
) {
  const { status: param0, ...queryParams } = params;
  return request<any>('/sys/app/listAllAppProvider', {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询系统提供方 根据状态返回系统提供方，不传状态则查所有数据， 0-停用， 1-启用 GET /sys/app/listAllAppProvider/${param0} */
export async function listAllAppProviderUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAllAppProviderUsingGET1Params,
  options?: { [key: string]: any },
) {
  const { status: param0, ...queryParams } = params;
  return request<any>(`/sys/app/listAllAppProvider/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据厂商id查询应用系统列表 根据厂商id查询应用系统列表 GET /sys/app/listByAppSupplierId/${param0} */
export async function getListByAppSupplierIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListByAppSupplierIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { appSupplierId: param0, ...queryParams } = params;
  return request<any>(`/sys/app/listByAppSupplierId/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改状态 修改状态, status: 0-停用， 1-启用 POST /sys/app/switch/${param0}/${param1} */
export async function swUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.swUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, status: param1, ...queryParams } = params;
  return request<any>(`/sys/app/switch/${param0}/${param1}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改应用系统 修改应用系统 POST /sys/app/update */
export async function updateUsingPOST4(options?: { [key: string]: any }) {
  return request<any>('/sys/app/update', {
    method: 'POST',
    ...(options || {}),
  });
}
