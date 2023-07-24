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

import { MarkReadByIdUsingPostParams } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sysmsg<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 【系统消息】
   * @name ListUsingPost6
   * @summary 获取当前用户的消息列表
   * @request POST:/sysmsg/list
   */
  listUsingPost6 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sysmsg/list`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 【系统消息】
   * @name MarkReadByIdUsingPost
   * @summary 根据用户消息表id，设为已读
   * @request POST:/sysmsg/markReadById
   */
  markReadByIdUsingPost = (query: MarkReadByIdUsingPostParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sysmsg/markReadById`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 【系统消息】
   * @name MarkReadForCurrentUserUsingPost
   * @summary 将当前用户的消息，都设为已读
   * @request POST:/sysmsg/markReadForCurrentUser
   */
  markReadForCurrentUserUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sysmsg/markReadForCurrentUser`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
}
