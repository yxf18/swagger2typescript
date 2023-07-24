// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建机构信息 创建机构信息 POST /sys/organization/create */
export async function createUsingPOST14(options?: { [key: string]: any }) {
  return request<any>('/sys/organization/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除机构信息 删除机构信息 POST /sys/organization/del/${param0} */
export async function delUsingPOST16(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST16Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/organization/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取机构列表信息 如用于分页需要传递page和limit GET /sys/organization/getOrganizations */
export async function getOrganizationsUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getOrganizationsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<any>('/sys/organization/getOrganizations', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取机构树信息 GET /sys/organization/getOrganizations/tree */
export async function getTreeUsingGET2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTreeUsingGET2Params,
  options?: { [key: string]: any },
) {
  return request<any>('/sys/organization/getOrganizations/tree', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 查询机构信息 根据id查询机构信息 GET /sys/organization/info/${param0} */
export async function infoUsingGET10(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET10Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/organization/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改状态 修改本节点及其子节点状态, status: 0-停用， 1-启用 POST /sys/organization/switch/${param0}/${param1} */
export async function swUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.swUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { id: param0, status: param1, ...queryParams } = params;
  return request<any>(`/sys/organization/switch/${param0}/${param1}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改机构信息 修改机构信息 POST /sys/organization/update */
export async function updateUsingPOST9(options?: { [key: string]: any }) {
  return request<any>('/sys/organization/update', {
    method: 'POST',
    ...(options || {}),
  });
}
