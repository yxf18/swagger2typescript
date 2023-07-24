// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 删除提供方 根据id删除提供方 POST /sm/endpoint/del/${param0} */
export async function delUsingPOST5(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST5Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/sm/endpoint/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 新增或更新提供方-HTTP(GET) 新增或更新提供方-HTTP(GET) POST /sm/endpoint/httpGet/createOrUpdate */
export async function createOrUpdateHttpGetUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/endpoint/httpGet/createOrUpdate', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 新增或更新提供方-HTTP(POST) 新增或更新提供方-HTTP(POST) POST /sm/endpoint/httpPost/createOrUpdate */
export async function createOrUpdateHttpPostUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/endpoint/httpPost/createOrUpdate', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 新增或更新提供方-SP 新增或更新提供方-存储过程 POST /sm/endpoint/sp/create */
export async function createOrUpdateSpUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/endpoint/sp/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 新增或更新提供方-SQL 新增或更新提供方-SQL POST /sm/endpoint/sql/create */
export async function createOrUpdateSqlUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/endpoint/sql/create', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 新增或更新提供方-Webservice 新增或更新提供方-Webservice POST /sm/endpoint/web/create */
export async function createOrUpdateWebserviceUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/sm/endpoint/web/create', {
    method: 'POST',
    ...(options || {}),
  });
}
