// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 批量维护参数 批量维护参数 POST /sm/param/batch/maintain */
export async function batchMaintainUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/param/batch/maintain', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 创建服务参数 创建服务参数 POST /sm/param/create */
export async function createUsingPOST6(options?: { [key: string]: any }) {
  return request<any>('/sm/param/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除服务参数 删除服务参数 POST /sm/param/del/${param0} */
export async function delUsingPOST7(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST7Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/param/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询服务参数详情 根据id查询服务参数详情 GET /sm/param/info/${param0} */
export async function infoUsingGET3(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET3Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/param/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增提供方-值 GET /sm/param/listValues/${param1}/${param0} */
export async function listParameterValueUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listParameterValueUsingGETParams,
  options?: { [key: string]: any },
) {
  const { paramType: param0, serviceId: param1, ...queryParams } = params;
  return request<any>(`/sm/param/listValues/${param1}/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 查询服务下所有参数 根据服务id查询服务下所有参数 GET /sm/param/paramsOfServiceInfo/${param0} */
export async function getParamsOfServiceInfoUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getParamsOfServiceInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  const { serviceId: param0, ...queryParams } = params;
  return request<any>(`/sm/param/paramsOfServiceInfo/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 预览消息结构 GET /sm/param/previewDoc/${param1}/${param0} */
export async function previewDocUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.previewDocUsingGETParams,
  options?: { [key: string]: any },
) {
  const { paramType: param0, serviceId: param1, ...queryParams } = params;
  return request<any>(`/sm/param/previewDoc/${param1}/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改服务参数 修改服务参数 POST /sm/param/update */
export async function updateUsingPOST2(options?: { [key: string]: any }) {
  return request<any>('/sm/param/update', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 上传消息结构 POST /sm/param/upload/${param0} */
export async function importServiceUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.importServiceUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { serviceId: param0, ...queryParams } = params;
  return request<any>(`/sm/param/upload/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
