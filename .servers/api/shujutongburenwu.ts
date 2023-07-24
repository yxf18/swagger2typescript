// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建数据同步任务 创建数据同步任务 POST /sys/dataSyncTask/create */
export async function createUsingPOST13(options?: { [key: string]: any }) {
  return request<any>('/sys/dataSyncTask/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除工作节点 删除工作节点 POST /sys/dataSyncTask/del/${param0} */
export async function delUsingPOST15(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST15Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/dataSyncTask/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取数据同步任务列表 分页查询-获取数据同步任务列表 POST /sys/dataSyncTask/getPages */
export async function getPageUsingPOST4(options?: { [key: string]: any }) {
  return request<any>('/sys/dataSyncTask/getPages', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 查询工作节点详情 根据id查询工作节点详情 GET /sys/dataSyncTask/info/${param0} */
export async function infoUsingGET9(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET9Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sys/dataSyncTask/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改工作节点 修改工作节点 POST /sys/dataSyncTask/update */
export async function updateUsingPOST8(options?: { [key: string]: any }) {
  return request<any>('/sys/dataSyncTask/update', {
    method: 'POST',
    ...(options || {}),
  });
}
