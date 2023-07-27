/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { RList2, RString, RSysLogo, RUserInfo, RVo3, UserLoginObject } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Syslogin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SystemPermissionsLoginMenuEtc
   * @name GetSysLogoUsingGet
   * @summary 获取系统Logo
   * @request GET:/syslogin/getSysLogo
   */
  getSysLogoUsingGet = (params: RequestParams = {}) =>
    this.request<RSysLogo, void>({
      path: `/syslogin/getSysLogo`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 包括用户信息、权限列表、角色列表
   *
   * @tags SystemPermissionsLoginMenuEtc
   * @name GetUserInfoUsingGet
   * @summary 获取当前用户详情
   * @request GET:/syslogin/getUserInfo
   */
  getUserInfoUsingGet = (params: RequestParams = {}) =>
    this.request<RUserInfo, void>({
      path: `/syslogin/getUserInfo`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 如检查是否开启srp登录
   *
   * @tags SystemPermissionsLoginMenuEtc
   * @name InitUsingGet
   * @summary 初始化
   * @request GET:/syslogin/init
   */
  initUsingGet = (params: RequestParams = {}) =>
    this.request<RVo3, void>({
      path: `/syslogin/init`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags SystemPermissionsLoginMenuEtc
   * @name ListRouterUsingGet
   * @summary 获取当前用户路由
   * @request GET:/syslogin/listRouter
   */
  listRouterUsingGet = (params: RequestParams = {}) =>
    this.request<RList2, void>({
      path: `/syslogin/listRouter`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags SystemPermissionsLoginMenuEtc
   * @name LoginUsingPost
   * @summary 登录
   * @request POST:/syslogin/login
   */
  loginUsingPost = (loginDto: UserLoginObject, params: RequestParams = {}) =>
    this.request<RString, void>({
      path: `/syslogin/login`,
      method: 'POST',
      body: loginDto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SystemPermissionsLoginMenuEtc
   * @name LogoutUsingGet
   * @summary 注销登录
   * @request GET:/syslogin/logout
   */
  logoutUsingGet = (params: RequestParams = {}) =>
    this.request<RString, void>({
      path: `/syslogin/logout`,
      method: 'GET',
      ...params,
    });
}
