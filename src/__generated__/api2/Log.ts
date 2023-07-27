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

import { InteractionLog2, R, RList } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Log<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description InteractionLog-详情
   *
   * @tags InteractionLog
   * @name InfoUsingGet
   * @summary InteractionLog-详情
   * @request GET:/log/interaction/info/{traceId}
   */
  infoUsingGet = (traceId: string, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/log/interaction/info/${traceId}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags InteractionLog
   * @name ListUsingPost
   * @summary InteractionLog-列表
   * @request POST:/log/interaction/list
   */
  listUsingPost = (criteria: InteractionLog2, params: RequestParams = {}) =>
    this.request<RList, void>({
      path: `/log/interaction/list`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
}
