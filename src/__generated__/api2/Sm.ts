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
  ApplicationSystemGrouping,
  BatchMaintenanceParameters,
  CategoryCreateDto,
  CreateUsingPost7Params,
  GetTreeUsingGetParams,
  ImportServiceUsingPostParams,
  PagingQueryObjects,
  PreprocessorNew,
  ProviderAddHttpGet,
  ProviderNewHttpPost,
  ProviderNewSp,
  ProviderNewSql,
  ProviderNewWebservice,
  R,
  R2,
  RCategoryResDto,
  RList,
  RList2,
  RListCategoryResDto,
  RListCategoryTree,
  RListServiceInfoDetailDto,
  RListSmCommonPreProcessorPo,
  RListSmCommonResultProcessorPo,
  RServiceInfoDetailDto,
  RServiceParamResDto,
  RServiceParamTreeResDto,
  RSmCommonPreProcessorPo,
  RSmCommonResultProcessorPo,
  RSmMyPreProcessorPo,
  RSmMyResultProcessorPo,
  RSmSubscriptionPo,
  RString,
  RWebservice,
  R_,
  ServiceDefinition,
  ServiceParametersNew,
  ServiceParametersUpdate,
  ServiceSubscriptionQueryServiceList,
  SmPoObjectOfCategoryTable,
  SysAppCategory,
  UpdateUsingPost1Params,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sm<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 创建服务分组
   *
   * @tags ServiceGrouping
   * @name CreateUsingPost
   * @summary 创建服务分组
   * @request POST:/sm/category/create
   */
  createUsingPost = (dto: CategoryCreateDto, params: RequestParams = {}) =>
    this.request<SmPoObjectOfCategoryTable, void>({
      path: `/sm/category/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 递归删除子节点
   *
   * @tags ServiceGrouping
   * @name DelUsingPost
   * @summary 删除服务分组
   * @request POST:/sm/category/del/{id}
   */
  delUsingPost = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/category/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取服务分组树
   *
   * @tags ServiceGrouping
   * @name GetTreeUsingGet
   * @summary 获取服务分组树
   * @request GET:/sm/category/getAppCategory/tree
   */
  getTreeUsingGet = (query: GetTreeUsingGetParams, params: RequestParams = {}) =>
    this.request<RListCategoryTree, void>({
      path: `/sm/category/getAppCategory/tree`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 分页查询-获取服务分组列表
   *
   * @tags ServiceGrouping
   * @name GetPagesUsingPost
   * @summary 分页查询-获取服务分组列表
   * @request POST:/sm/category/getPages
   */
  getPagesUsingPost = (criteria: ApplicationSystemGrouping, params: RequestParams = {}) =>
    this.request<RListCategoryResDto, void>({
      path: `/sm/category/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询服务分组
   *
   * @tags ServiceGrouping
   * @name InfoUsingGet1
   * @summary 查询服务分组
   * @request GET:/sm/category/info/{id}
   */
  infoUsingGet1 = (id: number, params: RequestParams = {}) =>
    this.request<RCategoryResDto, void>({
      path: `/sm/category/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改服务分组
   *
   * @tags ServiceGrouping
   * @name UpdateUsingPost
   * @summary 修改服务分组
   * @request POST:/sm/category/update
   */
  updateUsingPost = (dto: SysAppCategory, params: RequestParams = {}) =>
    this.request<SmPoObjectOfCategoryTable, void>({
      path: `/sm/category/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建个性预处理器
   *
   * @tags ServiceOverallPreprocessor
   * @name CreateUsingPost1
   * @summary 创建个性预处理器
   * @request POST:/sm/common/pre/processor/create
   */
  createUsingPost1 = (dto: PreprocessorNew, params: RequestParams = {}) =>
    this.request<RSmCommonPreProcessorPo, void>({
      path: `/sm/common/pre/processor/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除个性预处理器
   *
   * @tags ServiceOverallPreprocessor
   * @name DelUsingPost1
   * @summary 删除个性预处理器
   * @request POST:/sm/common/pre/processor/del/{id}
   */
  delUsingPost1 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/common/pre/processor/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据服务id查询整体预处理
   *
   * @tags ServiceOverallPreprocessor
   * @name ListUsingPost1
   * @summary 根据服务id查询整体预处理
   * @request POST:/sm/common/pre/processor/list/{serviceId}
   */
  listUsingPost1 = (serviceId: number, params: RequestParams = {}) =>
    this.request<RListSmCommonPreProcessorPo, void>({
      path: `/sm/common/pre/processor/list/${serviceId}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建个性预处理器
   *
   * @tags ServiceOverallResultProcessor
   * @name CreateUsingPost2
   * @summary 创建个性预处理器
   * @request POST:/sm/common/result/processor/create
   */
  createUsingPost2 = (dto: PreprocessorNew, params: RequestParams = {}) =>
    this.request<RSmCommonResultProcessorPo, void>({
      path: `/sm/common/result/processor/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除个性预处理器
   *
   * @tags ServiceOverallResultProcessor
   * @name DelUsingPost2
   * @summary 删除个性预处理器
   * @request POST:/sm/common/result/processor/del/{id}
   */
  delUsingPost2 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/common/result/processor/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据服务id查询整体预处理
   *
   * @tags ServiceOverallResultProcessor
   * @name ListUsingPost2
   * @summary 根据服务id查询整体预处理
   * @request POST:/sm/common/result/processor/list/{serviceId}
   */
  listUsingPost2 = (serviceId: number, params: RequestParams = {}) =>
    this.request<RListSmCommonResultProcessorPo, void>({
      path: `/sm/common/result/processor/list/${serviceId}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-HTTP(GET)
   *
   * @tags ServiceConfiguration
   * @name CreateOrUpdateHttpGetUsingPost
   * @summary 新增或更新提供方-HTTP(GET)
   * @request POST:/sm/endpoint/httpGet/createOrUpdate
   */
  createOrUpdateHttpGetUsingPost = (dto: ProviderAddHttpGet, params: RequestParams = {}) =>
    this.request<R_, void>({
      path: `/sm/endpoint/httpGet/createOrUpdate`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-HTTP(POST)
   *
   * @tags ServiceConfiguration
   * @name CreateOrUpdateHttpPostUsingPost
   * @summary 新增或更新提供方-HTTP(POST)
   * @request POST:/sm/endpoint/httpPost/createOrUpdate
   */
  createOrUpdateHttpPostUsingPost = (dto: ProviderNewHttpPost, params: RequestParams = {}) =>
    this.request<R_, void>({
      path: `/sm/endpoint/httpPost/createOrUpdate`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-存储过程
   *
   * @tags ServiceConfiguration
   * @name CreateOrUpdateSpUsingPost
   * @summary 新增或更新提供方-SP
   * @request POST:/sm/endpoint/sp/create
   */
  createOrUpdateSpUsingPost = (dto: ProviderNewSp, params: RequestParams = {}) =>
    this.request<RString, void>({
      path: `/sm/endpoint/sp/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-SQL
   *
   * @tags ServiceConfiguration
   * @name CreateOrUpdateSqlUsingPost
   * @summary 新增或更新提供方-SQL
   * @request POST:/sm/endpoint/sql/create
   */
  createOrUpdateSqlUsingPost = (dto: ProviderNewSql, params: RequestParams = {}) =>
    this.request<RString, void>({
      path: `/sm/endpoint/sql/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增或更新提供方-Webservice
   *
   * @tags ServiceConfiguration
   * @name CreateOrUpdateWebserviceUsingPost
   * @summary 新增或更新提供方-Webservice
   * @request POST:/sm/endpoint/web/create
   */
  createOrUpdateWebserviceUsingPost = (dto: ProviderNewWebservice, params: RequestParams = {}) =>
    this.request<RWebservice, void>({
      path: `/sm/endpoint/web/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建个性结果处理器
   *
   * @tags PersonalityResultProcessor
   * @name CreateUsingPost4
   * @summary 创建个性结果处理器
   * @request POST:/sm/my/post/processor/create
   */
  createUsingPost4 = (dto: PreprocessorNew, params: RequestParams = {}) =>
    this.request<RSmMyResultProcessorPo, void>({
      path: `/sm/my/post/processor/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除个性结果处理器
   *
   * @tags PersonalityResultProcessor
   * @name DelUsingPost4
   * @summary 删除个性结果处理器
   * @request POST:/sm/my/post/processor/del/{id}
   */
  delUsingPost4 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/my/post/processor/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建个性预处理器
   *
   * @tags ServicePersonalizedPreprocessor
   * @name CreateUsingPost3
   * @summary 创建个性预处理器
   * @request POST:/sm/my/pre/processor/create
   */
  createUsingPost3 = (dto: PreprocessorNew, params: RequestParams = {}) =>
    this.request<RSmMyPreProcessorPo, void>({
      path: `/sm/my/pre/processor/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除个性预处理器
   *
   * @tags ServicePersonalizedPreprocessor
   * @name DelUsingPost3
   * @summary 删除个性预处理器
   * @request POST:/sm/my/pre/processor/del/{id}
   */
  delUsingPost3 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/my/pre/processor/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description BatchMaintenanceParameters
   *
   * @tags ServiceParameterConfiguration
   * @name BatchMaintainUsingPost
   * @summary BatchMaintenanceParameters
   * @request POST:/sm/param/batch/maintain
   */
  batchMaintainUsingPost = (dto: BatchMaintenanceParameters, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/param/batch/maintain`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建服务参数
   *
   * @tags ServiceParameterConfiguration
   * @name CreateUsingPost6
   * @summary 创建服务参数
   * @request POST:/sm/param/create
   */
  createUsingPost6 = (dto: ServiceParametersNew, params: RequestParams = {}) =>
    this.request<RServiceParamResDto, void>({
      path: `/sm/param/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除服务参数
   *
   * @tags ServiceParameterConfiguration
   * @name DelUsingPost6
   * @summary 删除服务参数
   * @request POST:/sm/param/del/{id}
   */
  delUsingPost6 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/param/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询服务参数详情
   *
   * @tags ServiceParameterConfiguration
   * @name InfoUsingGet3
   * @summary 查询服务参数详情
   * @request GET:/sm/param/info/{id}
   */
  infoUsingGet3 = (id: number, params: RequestParams = {}) =>
    this.request<RServiceParamResDto, void>({
      path: `/sm/param/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags ServiceParameterConfiguration
   * @name ListParameterValueUsingGet
   * @summary NewProviderValue
   * @request GET:/sm/param/listValues/{serviceId}/{paramType}
   */
  listParameterValueUsingGet = (paramType: string, serviceId: number, params: RequestParams = {}) =>
    this.request<RList2, void>({
      path: `/sm/param/listValues/${serviceId}/${paramType}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 根据服务id查询服务下所有参数
   *
   * @tags ServiceParameterConfiguration
   * @name GetParamsOfServiceInfoUsingGet
   * @summary 查询服务下所有参数
   * @request GET:/sm/param/paramsOfServiceInfo/{serviceId}
   */
  getParamsOfServiceInfoUsingGet = (serviceId: number, params: RequestParams = {}) =>
    this.request<RServiceParamTreeResDto, void>({
      path: `/sm/param/paramsOfServiceInfo/${serviceId}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags ServiceParameterConfiguration
   * @name PreviewDocUsingGet
   * @summary 预览消息结构
   * @request GET:/sm/param/previewDoc/{serviceId}/{paramType}
   */
  previewDocUsingGet = (paramType: string, serviceId: number, params: RequestParams = {}) =>
    this.request<RString, void>({
      path: `/sm/param/previewDoc/${serviceId}/${paramType}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改服务参数
   *
   * @tags ServiceParameterConfiguration
   * @name UpdateUsingPost2
   * @summary 修改服务参数
   * @request POST:/sm/param/update
   */
  updateUsingPost2 = (dto: ServiceParametersUpdate, params: RequestParams = {}) =>
    this.request<RServiceParamResDto, void>({
      path: `/sm/param/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags ServiceParameterConfiguration
   * @name ImportServiceUsingPost
   * @summary 上传消息结构
   * @request POST:/sm/param/upload/{serviceId}
   */
  importServiceUsingPost = (
    { serviceId, ...query }: ImportServiceUsingPostParams,
    params: RequestParams = {},
  ) =>
    this.request<RString, void>({
      path: `/sm/param/upload/${serviceId}`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description ServiceDefinition
   *
   * @tags ServiceBasicInformationConfiguration
   * @name CreateUsingPost5
   * @summary ServiceDefinition
   * @request POST:/sm/serviceInfo/create
   */
  createUsingPost5 = (dto: ServiceDefinition, params: RequestParams = {}) =>
    this.request<RServiceInfoDetailDto, void>({
      path: `/sm/serviceInfo/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除服务基本信息
   *
   * @tags ServiceBasicInformationConfiguration
   * @name DelUsingPost5
   * @summary 删除服务基本信息
   * @request POST:/sm/serviceInfo/del/{id}
   */
  delUsingPost5 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/serviceInfo/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取服务基本信息列表
   *
   * @tags ServiceBasicInformationConfiguration
   * @name GetPagesUsingPost1
   * @summary 分页查询-获取服务基本信息列表
   * @request POST:/sm/serviceInfo/getPages
   */
  getPagesUsingPost1 = (criteria: PagingQueryObjects, params: RequestParams = {}) =>
    this.request<RListServiceInfoDetailDto, void>({
      path: `/sm/serviceInfo/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询服务基本信息详情
   *
   * @tags ServiceBasicInformationConfiguration
   * @name InfoUsingGet2
   * @summary 查询服务基本信息详情
   * @request GET:/sm/serviceInfo/info/{id}
   */
  infoUsingGet2 = (id: number, params: RequestParams = {}) =>
    this.request<RServiceInfoDetailDto, void>({
      path: `/sm/serviceInfo/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 获取服务基本信息列表
   *
   * @tags ServiceBasicInformationConfiguration
   * @name GetPagesForSubscriptionUsingPost
   * @summary 获取服务基本信息列表-服务订阅使用
   * @request POST:/sm/serviceInfo/subscribe/list
   */
  getPagesForSubscriptionUsingPost = (
    criteria: ServiceSubscriptionQueryServiceList,
    params: RequestParams = {},
  ) =>
    this.request<RList, void>({
      path: `/sm/serviceInfo/subscribe/list`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据服务id，查询路由图谱
   *
   * @tags ServiceBasicInformationConfiguration
   * @name TopologyMapUsingGet
   * @summary 路由图谱展示
   * @request GET:/sm/serviceInfo/topologyMap/{id}
   */
  topologyMapUsingGet = (id: number, params: RequestParams = {}) =>
    this.request<R2, void>({
      path: `/sm/serviceInfo/topologyMap/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改服务基本信息
   *
   * @tags ServiceBasicInformationConfiguration
   * @name UpdateUsingPost1
   * @summary 修改服务基本信息
   * @request POST:/sm/serviceInfo/update
   */
  updateUsingPost1 = (query: UpdateUsingPost1Params, params: RequestParams = {}) =>
    this.request<RServiceInfoDetailDto, void>({
      path: `/sm/serviceInfo/update`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 申请服务
   *
   * @tags ServiceBasicInformationConfiguration
   * @name CreateUsingPost7
   * @summary 申请服务
   * @request POST:/sm/subscription/apply
   */
  createUsingPost7 = (query: CreateUsingPost7Params, params: RequestParams = {}) =>
    this.request<RSmSubscriptionPo, void>({
      path: `/sm/subscription/apply`,
      method: 'POST',
      query: query,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除申请服务
   *
   * @tags ServiceBasicInformationConfiguration
   * @name DelUsingPost7
   * @summary 删除申请服务
   * @request POST:/sm/subscription/del/{id}
   */
  delUsingPost7 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sm/subscription/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
}
