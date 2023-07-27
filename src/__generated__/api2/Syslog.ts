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

import { QueryObjectsForSystemLogs, RPo } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Syslog<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags SystemLog
   * @name ListUsingPost5
   * @summary 获取系统日志列表
   * @request POST:/syslog/list
   */
  listUsingPost5 = (sysLogQueryDto: QueryObjectsForSystemLogs, params: RequestParams = {}) =>
    this.request<RPo, void>({
      path: `/syslog/list`,
      method: 'POST',
      body: sysLogQueryDto,
      type: ContentType.Json,
      ...params,
    });
}
