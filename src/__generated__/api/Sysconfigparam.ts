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

import { UpdateValueUsingPostParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sysconfigparam<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 【系统控制参数】
   * @name ListUsingPost3
   * @summary 获取参数列表
   * @request POST:/sysconfigparam/list
   */
  listUsingPost3 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sysconfigparam/list`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 【系统控制参数】
   * @name UpdateValueUsingPost
   * @summary 更改参数值
   * @request POST:/sysconfigparam/updateValue
   */
  updateValueUsingPost = (query: UpdateValueUsingPostParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sysconfigparam/updateValue`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
}
