// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取部门列表 GET /adminapi/syslogin/getDeptslist */
export async function getDeptslistUsingGET(options?: { [key: string]: any }) {
  return request<API.RListSysDeptDuiXiang>('/adminapi/syslogin/getDeptslist', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取系统Logo GET /adminapi/syslogin/getSysLogo */
export async function getSysLogoUsingGET(options?: { [key: string]: any }) {
  return request<API.RSysLogoDuiXiang>('/adminapi/syslogin/getSysLogo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前用户详情 包括用户信息、权限列表、角色列表 GET /adminapi/syslogin/getUserInfo */
export async function getUserInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.RUserInfo>('/adminapi/syslogin/getUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取用户列表 GET /adminapi/syslogin/getUserlist */
export async function getUserlistUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserlistUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.RListSysUserDuiXiang>('/adminapi/syslogin/getUserlist', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 初始化 如检查是否开启srp登录 GET /adminapi/syslogin/init */
export async function initUsingGET(options?: { [key: string]: any }) {
  return request<API.RDengLuChuShiHuaVoDuiXiang>('/adminapi/syslogin/init', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前用户路由 GET /adminapi/syslogin/listRouter */
export async function listRouterUsingGET(options?: { [key: string]: any }) {
  return request<API.RListLuYouPeiZhiXinXi>('/adminapi/syslogin/listRouter', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /adminapi/syslogin/login */
export async function loginUsingPOST(
  body: API.YongHuDengLuDuiXiang,
  options?: { [key: string]: any },
) {
  return request<API.RString>('/adminapi/syslogin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注销登录 GET /adminapi/syslogin/logout */
export async function logoutUsingGET(options?: { [key: string]: any }) {
  return request<API.RString>('/adminapi/syslogin/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 注销登录 POST /adminapi/syslogin/logout */
export async function logoutUsingPOST(options?: { [key: string]: any }) {
  return request<API.RString>('/adminapi/syslogin/logout', {
    method: 'POST',
    ...(options || {}),
  });
}
