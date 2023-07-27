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

import { ListUsingGetParams, PingUsingPostPayload, RMapStringList } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Admin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags DictionaryMainlyUsedForFrontEndDropdownBoxes
   * @name ListUsingGet
   * @summary 获取字典列表
   * @request GET:/admin/dict/list
   */
  listUsingGet = (query: ListUsingGetParams, params: RequestParams = {}) =>
    this.request<RMapStringList, void>({
      path: `/admin/dict/list`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 用于测试接口是否可以
   *
   * @tags HealthCondition
   * @name PingUsingPost
   * @summary 连通测试
   * @request POST:/admin/health/ping
   */
  pingUsingPost = (msg: PingUsingPostPayload, params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/admin/health/ping`,
      method: 'POST',
      body: msg,
      type: ContentType.Json,
      ...params,
    });
}
