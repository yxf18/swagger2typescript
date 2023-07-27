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

export class Error<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingGet
   * @summary error
   * @request GET:/error
   */
  errorUsingGet = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/error`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingHead
   * @summary error
   * @request HEAD:/error
   */
  errorUsingHead = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/error`,
      method: 'HEAD',
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingPost
   * @summary error
   * @request POST:/error
   */
  errorUsingPost = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/error`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingPut
   * @summary error
   * @request PUT:/error
   */
  errorUsingPut = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/error`,
      method: 'PUT',
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingDelete
   * @summary error
   * @request DELETE:/error
   */
  errorUsingDelete = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/error`,
      method: 'DELETE',
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingOptions
   * @summary error
   * @request OPTIONS:/error
   */
  errorUsingOptions = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/error`,
      method: 'OPTIONS',
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags basic-error-controller
   * @name ErrorUsingPatch
   * @summary error
   * @request PATCH:/error
   */
  errorUsingPatch = (params: RequestParams = {}) =>
    this.request<Record<string, object>, void>({
      path: `/error`,
      method: 'PATCH',
      type: ContentType.Json,
      ...params,
    });
}
