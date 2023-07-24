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

import { ContentType, HttpClient, RequestParams } from './http-client';

export class Log<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 交互日志-详情
   *
   * @tags 交互日志
   * @name InfoUsingGet
   * @summary 交互日志-详情
   * @request GET:/log/interaction/info/{traceId}
   */
  infoUsingGet = (traceId: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/log/interaction/info/${traceId}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 交互日志
   * @name ListUsingPost
   * @summary 交互日志-列表
   * @request POST:/log/interaction/list
   */
  listUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/log/interaction/list`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
}
