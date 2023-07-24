// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建厂商信息 创建厂商信息 POST /sys/appSupplier/create */
export async function createUsingPOST10(options?: { [key: string]: any }) {
  return request<any>('/sys/appSupplier/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除厂商信息 物理删除厂商信息 POST /sys/appSupplier/del/${param0} */
export async function delUsingPOST11(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST11Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/appSupplier/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询厂商信息列表 查询厂商信息列表 GET /sys/appSupplier/getAppSuppliers */
export async function getListUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/sys/appSupplier/getAppSuppliers', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 分页查询-获取厂商信息列表 分页查询-获取厂商信息列表 POST /sys/appSupplier/getPages */
export async function getPageUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sys/appSupplier/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询厂商详情信息 根据id查询厂商详情信息 GET /sys/appSupplier/info/${param0} */
export async function infoUsingGET6(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET6Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/appSupplier/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改厂商信息 修改厂商信息 POST /sys/appSupplier/update */
export async function updateUsingPOST5(options?: { [key: string]: any }) {
  return request<any>('/sys/appSupplier/update', {
    method: 'POST',
    ...(options || {}),
  });
}
