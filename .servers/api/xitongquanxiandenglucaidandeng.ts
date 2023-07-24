// @ts-ignore
/* eslint-disable */
import HttpClient from '@/src/http';

/** 获取系统Logo GET /syslogin/getSysLogo */
export async function getSysLogoUsingGET(options?: { [key: string]: any }) {
  return request<any>('/syslogin/getSysLogo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前用户详情 包括用户信息、权限列表、角色列表 GET /syslogin/getUserInfo */
export async function getUserInfoUsingGET(options?: { [key: string]: any }) {
  return request<any>('/syslogin/getUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 初始化 如检查是否开启srp登录 GET /syslogin/init */
export async function initUsingGET(options?: { [key: string]: any }) {
  return request<any>('/syslogin/init', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前用户路由 GET /syslogin/listRouter */
export async function listRouterUsingGET(options?: { [key: string]: any }) {
  return request<any>('/syslogin/listRouter', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /syslogin/login */
export async function loginUsingPOST(options?: { [key: string]: any }) {
  return request<any>('/syslogin/login', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 注销登录 GET /syslogin/logout */
export async function logoutUsingGET(options?: { [key: string]: any }) {
  return request<any>('/syslogin/logout', {
    method: 'GET',
    ...(options || {}),
  });
}
