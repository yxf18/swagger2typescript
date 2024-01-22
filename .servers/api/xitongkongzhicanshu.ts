// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取参数值(单个) data中就是参数值 GET /adminapi/sysconfigparam/getValue */
export async function getValueUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getValueUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.RObject>('/adminapi/sysconfigparam/getValue', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取参数列表 POST /adminapi/sysconfigparam/list */
export async function listUsingPOST1(
  body: API.XiTongKongZhiCanShuDeChaXunDuiXiang,
  options?: { [key: string]: any },
) {
  return request<API.RJiBenDeFenYeJieGuoDuiXiangXiTongPeiZhiCanShuVoDuiXiang>(
    '/adminapi/sysconfigparam/list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 获取参数值(列表) data中是map结构：key - 参数代码，value - 参数值 GET /adminapi/sysconfigparam/listValue */
export async function listValueUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listValueUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.RMapStringObject>('/adminapi/sysconfigparam/listValue', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更改参数值 POST /adminapi/sysconfigparam/updateValue */
export async function updateValueUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateValueUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.R>('/adminapi/sysconfigparam/updateValue', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
