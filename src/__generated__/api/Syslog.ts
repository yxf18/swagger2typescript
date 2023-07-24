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

export class Syslog<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 【系统日志】
   * @name ListUsingPost5
   * @summary 获取系统日志列表
   * @request POST:/syslog/list
   */
  listUsingPost5 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/syslog/list`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
}
