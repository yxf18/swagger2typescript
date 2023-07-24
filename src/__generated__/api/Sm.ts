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

import {
  CreateUsingPost7Params,
  GetTreeUsingGetParams,
  ImportServiceUsingPostParams,
  UpdateLogLevelUsingGetParams,
  UpdateUsingPost1Params,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sm<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 创建服务分组
   *
   * @tags 【服务】服务分组
   * @name CreateUsingPost
   * @summary 创建服务分组
   * @request POST:/sm/category/create
   */
  createUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/category/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 递归删除子节点
   *
   * @tags 【服务】服务分组
   * @name DelUsingPost
   * @summary 删除服务分组
   * @request POST:/sm/category/del/{id}
   */
  delUsingPost = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/category/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取服务分组树
   *
   * @tags 【服务】服务分组
   * @name GetTreeUsingGet
   * @summary 获取服务分组树
   * @request GET:/sm/category/getAppCategory/tree
   */
  getTreeUsingGet = (query: GetTreeUsingGetParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/category/getAppCategory/tree`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 分页查询-获取服务分组列表
   *
   * @tags 【服务】服务分组
   * @name GetPagesUsingPost
   * @summary 分页查询-获取服务分组列表
   * @request POST:/sm/category/getPages
   */
  getPagesUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/category/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询服务分组
   *
   * @tags 【服务】服务分组
   * @name InfoUsingGet1
   * @summary 查询服务分组
   * @request GET:/sm/category/info/{id}
   */
  infoUsingGet1 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/category/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改服务分组
   *
   * @tags 【服务】服务分组
   * @name UpdateUsingPost
   * @summary 修改服务分组
   * @request POST:/sm/category/update
   */
  updateUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/category/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建整体预处理器
   *
   * @tags 【服务】整体预处理器
   * @name CreateUsingPost1
   * @summary 创建整体预处理器
   * @request POST:/sm/common/pre/processor/create
   */
  createUsingPost1 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/common/pre/processor/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除整体预处理器
   *
   * @tags 【服务】整体预处理器
   * @name DelUsingPost1
   * @summary 删除整体预处理器
   * @request POST:/sm/common/pre/processor/del/{id}
   */
  delUsingPost1 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/common/pre/processor/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据服务id查询整体预处理
   *
   * @tags 【服务】整体预处理器
   * @name ListUsingPost1
   * @summary 根据服务id查询整体预处理
   * @request POST:/sm/common/pre/processor/list/{serviceId}
   */
  listUsingPost1 = (serviceId: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/common/pre/processor/list/${serviceId}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建整体结果处理器
   *
   * @tags 【服务】整体结果处理器
   * @name CreateUsingPost2
   * @summary 创建整体结果处理器
   * @request POST:/sm/common/result/processor/create
   */
  createUsingPost2 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/common/result/processor/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除整体结果处理器
   *
   * @tags 【服务】整体结果处理器
   * @name DelUsingPost2
   * @summary 删除整体结果处理器
   * @request POST:/sm/common/result/processor/del/{id}
   */
  delUsingPost2 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/common/result/processor/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据服务id查询整体结果处理器
   *
   * @tags 【服务】整体结果处理器
   * @name ListUsingPost2
   * @summary 根据服务id整体结果处理器
   * @request POST:/sm/common/result/processor/list/{serviceId}
   */
  listUsingPost2 = (serviceId: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/common/result/processor/list/${serviceId}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id删除提供方
   *
   * @tags 【服务】服务配置
   * @name DelUsingPost5
   * @summary 删除提供方
   * @request POST:/sm/endpoint/del/{id}
   */
  delUsingPost5 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/endpoint/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-HTTP(GET)
   *
   * @tags 【服务】服务配置
   * @name CreateOrUpdateHttpGetUsingPost
   * @summary 新增或更新提供方-HTTP(GET)
   * @request POST:/sm/endpoint/httpGet/createOrUpdate
   */
  createOrUpdateHttpGetUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/endpoint/httpGet/createOrUpdate`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-HTTP(POST)
   *
   * @tags 【服务】服务配置
   * @name CreateOrUpdateHttpPostUsingPost
   * @summary 新增或更新提供方-HTTP(POST)
   * @request POST:/sm/endpoint/httpPost/createOrUpdate
   */
  createOrUpdateHttpPostUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/endpoint/httpPost/createOrUpdate`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-存储过程
   *
   * @tags 【服务】服务配置
   * @name CreateOrUpdateSpUsingPost
   * @summary 新增或更新提供方-SP
   * @request POST:/sm/endpoint/sp/create
   */
  createOrUpdateSpUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/endpoint/sp/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-SQL
   *
   * @tags 【服务】服务配置
   * @name CreateOrUpdateSqlUsingPost
   * @summary 新增或更新提供方-SQL
   * @request POST:/sm/endpoint/sql/create
   */
  createOrUpdateSqlUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/endpoint/sql/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-Webservice
   *
   * @tags 【服务】服务配置
   * @name CreateOrUpdateWebserviceUsingPost
   * @summary 新增或更新提供方-Webservice
   * @request POST:/sm/endpoint/web/create
   */
  createOrUpdateWebserviceUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/endpoint/web/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建个性结果处理器
   *
   * @tags 【服务】个性结果处理器
   * @name CreateUsingPost4
   * @summary 创建个性结果处理器
   * @request POST:/sm/my/post/processor/create
   */
  createUsingPost4 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/my/post/processor/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除个性结果处理器
   *
   * @tags 【服务】个性结果处理器
   * @name DelUsingPost4
   * @summary 删除个性结果处理器
   * @request POST:/sm/my/post/processor/del/{id}
   */
  delUsingPost4 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/my/post/processor/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建个性预处理器
   *
   * @tags 【服务】个性预处理器
   * @name CreateUsingPost3
   * @summary 创建个性预处理器
   * @request POST:/sm/my/pre/processor/create
   */
  createUsingPost3 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/my/pre/processor/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除个性预处理器
   *
   * @tags 【服务】个性预处理器
   * @name DelUsingPost3
   * @summary 删除个性预处理器
   * @request POST:/sm/my/pre/processor/del/{id}
   */
  delUsingPost3 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/my/pre/processor/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 批量维护参数
   *
   * @tags 【服务】服务参数配置
   * @name BatchMaintainUsingPost
   * @summary 批量维护参数
   * @request POST:/sm/param/batch/maintain
   */
  batchMaintainUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/param/batch/maintain`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建服务参数
   *
   * @tags 【服务】服务参数配置
   * @name CreateUsingPost6
   * @summary 创建服务参数
   * @request POST:/sm/param/create
   */
  createUsingPost6 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/param/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除服务参数
   *
   * @tags 【服务】服务参数配置
   * @name DelUsingPost7
   * @summary 删除服务参数
   * @request POST:/sm/param/del/{id}
   */
  delUsingPost7 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/param/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询服务参数详情
   *
   * @tags 【服务】服务参数配置
   * @name InfoUsingGet3
   * @summary 查询服务参数详情
   * @request GET:/sm/param/info/{id}
   */
  infoUsingGet3 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/param/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 【服务】服务参数配置
   * @name ListParameterValueUsingGet
   * @summary 新增提供方-值
   * @request GET:/sm/param/listValues/{serviceId}/{paramType}
   */
  listParameterValueUsingGet = (paramType: any, serviceId: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/param/listValues/${serviceId}/${paramType}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 根据服务id查询服务下所有参数
   *
   * @tags 【服务】服务参数配置
   * @name GetParamsOfServiceInfoUsingGet
   * @summary 查询服务下所有参数
   * @request GET:/sm/param/paramsOfServiceInfo/{serviceId}
   */
  getParamsOfServiceInfoUsingGet = (serviceId: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/param/paramsOfServiceInfo/${serviceId}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 【服务】服务参数配置
   * @name PreviewDocUsingGet
   * @summary 预览消息结构
   * @request GET:/sm/param/previewDoc/{serviceId}/{paramType}
   */
  previewDocUsingGet = (paramType: any, serviceId: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/param/previewDoc/${serviceId}/${paramType}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改服务参数
   *
   * @tags 【服务】服务参数配置
   * @name UpdateUsingPost2
   * @summary 修改服务参数
   * @request POST:/sm/param/update
   */
  updateUsingPost2 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/param/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 【服务】服务参数配置
   * @name ImportServiceUsingPost
   * @summary 上传消息结构
   * @request POST:/sm/param/upload/{serviceId}
   */
  importServiceUsingPost = (
    { serviceId, ...query }: ImportServiceUsingPostParams,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/sm/param/upload/${serviceId}`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 服务复制
   *
   * @tags 【服务】服务基本信息配置
   * @name CopyServiceUsingGet
   * @summary 服务复制
   * @request GET:/sm/serviceInfo/copy/{id}
   */
  copyServiceUsingGet = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/copy/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 服务定义
   *
   * @tags 【服务】服务基本信息配置
   * @name CreateUsingPost5
   * @summary 服务定义
   * @request POST:/sm/serviceInfo/create
   */
  createUsingPost5 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除服务基本信息
   *
   * @tags 【服务】服务基本信息配置
   * @name DelUsingPost6
   * @summary 删除服务基本信息
   * @request POST:/sm/serviceInfo/del/{id}
   */
  delUsingPost6 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取服务基本信息列表
   *
   * @tags 【服务】服务基本信息配置
   * @name GetPagesUsingPost1
   * @summary 分页查询-获取服务基本信息列表
   * @request POST:/sm/serviceInfo/getPages
   */
  getPagesUsingPost1 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询服务基本信息详情
   *
   * @tags 【服务】服务基本信息配置
   * @name InfoUsingGet2
   * @summary 查询服务基本信息详情
   * @request GET:/sm/serviceInfo/info/{id}
   */
  infoUsingGet2 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 获取服务基本信息列表
   *
   * @tags 【服务】服务基本信息配置
   * @name GetPagesForSubscriptionUsingPost
   * @summary 获取服务基本信息列表-服务订阅使用
   * @request POST:/sm/serviceInfo/subscribe/list
   */
  getPagesForSubscriptionUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/subscribe/list`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据服务id，查询路由图谱
   *
   * @tags 【服务】服务基本信息配置
   * @name TopologyMapUsingGet
   * @summary 路由图谱展示
   * @request GET:/sm/serviceInfo/topologyMap/{id}
   */
  topologyMapUsingGet = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/topologyMap/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改服务基本信息
   *
   * @tags 【服务】服务基本信息配置
   * @name UpdateUsingPost1
   * @summary 修改服务基本信息
   * @request POST:/sm/serviceInfo/update
   */
  updateUsingPost1 = (query: UpdateUsingPost1Params, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/update`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改及批量修改服务日志级别
   *
   * @tags 【服务】服务基本信息配置
   * @name UpdateLogLevelUsingGet
   * @summary 修改及批量修改服务日志级别
   * @request GET:/sm/serviceInfo/updateLogLevel
   */
  updateLogLevelUsingGet = (query: UpdateLogLevelUsingGetParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/updateLogLevel`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 修改状态, 服务状态：1=待设计，2=待配置，3=待发布，4=已发布
   *
   * @tags 【服务】服务基本信息配置
   * @name UpdateStatusUsingPost
   * @summary 修改状态
   * @request POST:/sm/serviceInfo/updateStatus/{id}/{status}
   */
  updateStatusUsingPost = (id: any, status: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/serviceInfo/updateStatus/${id}/${status}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 申请服务
   *
   * @tags 【服务】服务基本信息配置
   * @name CreateUsingPost7
   * @summary 申请服务
   * @request POST:/sm/subscription/apply
   */
  createUsingPost7 = (query: CreateUsingPost7Params, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/subscription/apply`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除申请服务
   *
   * @tags 【服务】服务基本信息配置
   * @name DelUsingPost8
   * @summary 删除申请服务
   * @request POST:/sm/subscription/del/{id}
   */
  delUsingPost8 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sm/subscription/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
}
