// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 创建工作节点分组 创建工作节点分组 POST /adminapi/sys/worker/group/create */
export async function createUsingPOST13(
  body: API.SysWorkerGroupCreateDto,
  options?: { [key: string]: any },
) {
  return request<API.RSysWorkerGroupBiaoDePoDuiXiang>('/adminapi/sys/worker/group/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除工作节点分组 删除工作节点分组 POST /adminapi/sys/worker/group/del/${param0} */
export async function delUsingPOST18(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.delUsingPOST18Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.R>(`/adminapi/sys/worker/group/del/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 分页查询-获取工作节点分组列表 分页查询-获取工作节点分组列表 POST /adminapi/sys/worker/group/getPages */
export async function getPageUsingPOST6(
  body: API.GongZuoJieDianFenZuChaXunTiaoJian,
  options?: { [key: string]: any },
) {
  return request<API.RJiBenDeFenYeJieGuoDuiXiangSysWorkerGroupBiaoDePoDuiXiang>(
    '/adminapi/sys/worker/group/getPages',
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

/** 查询工作节点分组详情 根据id查询工作节点分组详情 GET /adminapi/sys/worker/group/info/${param0} */
export async function infoUsingGET18(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.infoUsingGET18Params,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.RSysWorkerGroupBiaoDePoDuiXiang>(`/adminapi/sys/worker/group/info/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改工作节点分组 修改工作节点分组 POST /adminapi/sys/worker/group/update */
export async function updateUsingPOST11(
  body: API.SysWorkerGroupUpdateDto,
  options?: { [key: string]: any },
) {
  return request<API.RSysWorkerGroupBiaoDePoDuiXiang>('/adminapi/sys/worker/group/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
