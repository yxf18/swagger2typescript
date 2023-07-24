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

import { ListUsingGetParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 字典[主要用于前端下拉框]
   * @name ListUsingGet
   * @summary 获取字典列表
   * @request GET:/admin/dict/list
   */
  listUsingGet = (query: ListUsingGetParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/admin/dict/list`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 用于测试接口是否可以
   *
   * @tags 健康状况
   * @name PingUsingPost
   * @summary 连通测试
   * @request POST:/admin/health/ping
   */
  pingUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/admin/health/ping`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
}
