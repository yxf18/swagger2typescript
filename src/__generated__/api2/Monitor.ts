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

import { RDashboardResDto, ServiceMonitoringPanelQuery } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Monitor<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags DataStatisticsDisplay
   * @name DashboardUsingPost
   * @summary 仪表盘聚合数据
   * @request POST:/monitor/ui/dashboard
   */
  dashboardUsingPost = (criteria: ServiceMonitoringPanelQuery, params: RequestParams = {}) =>
    this.request<RDashboardResDto, void>({
      path: `/monitor/ui/dashboard`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
}
