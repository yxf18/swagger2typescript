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
  AppCategoryCreateDto,
  AppCreateDto,
  AppSupplierUpdateDto,
  AppUpdateDto,
  ApplicationSystemGrouping,
  ApplicationSystemPagingQueryObject,
  BasicPagingQueryObjects,
  DataResources,
  DataResources2,
  DataSource,
  DataSource2,
  DataSynchronizationTask,
  DataSynchronizationTask2,
  DataSynchronizationTaskQueryCriteria,
  GetListUsingGetParams,
  GetOrganizationsUsingGetParams,
  GetTreeUsingGet1Params,
  GetTreeUsingGet2Params,
  GlobalConstant,
  GlobalConstant2,
  GlobalConstantQueryCriteria,
  ManufacturerInformation,
  ManufacturerInformationQueryCriteria,
  OrganizationCreateDto,
  QueryCriteriaForThirdPartyApiServices,
  R,
  RAppCategoryResDto,
  RAppResDto,
  RAppSupplierResDto,
  RList3,
  RListAppCategoryResDto,
  RListAppCategoryTree,
  RListOrganizationResDto,
  RListOrganizationTree,
  RListSysAppPo,
  RListSysAppSupplierPo,
  RListSysConstantPo,
  RListSysDataResourcePo,
  RListSysDataSourcePo,
  RListSysDataSyncTaskPo,
  RListSysThirdServicePo,
  RListSysWorkerNodePo,
  ROrganizationResDto,
  RSysAppCategoryPo,
  RSysAppPo,
  RSysAppSupplierPo,
  RSysConstantPo,
  RSysDataResourcePo,
  RSysDataSourcePo,
  RSysDataSyncTaskPo,
  RSysDataSyncTaskResDto,
  RSysOrganizationPo,
  RSysThirdServicePo,
  RSysWorkerGroupPo,
  RSysWorkerNodePo,
  RSysWorkerNodeResDto,
  SysAppCategory,
  ThirdPartyApiServices,
  ThirdPartyApiServices2,
  WorkNodeGrouping,
  WorkNodeGrouping2,
  WorkNodeGroupingQueryCriteria,
  WorkNodeQueryCriteria,
  WorkNodes,
  WorkNodes2,
  _,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sys<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 创建应用系统
   *
   * @tags ApplicationSystem
   * @name CreateUsingPost9
   * @summary 创建应用系统
   * @request POST:/sys/app/create
   */
  createUsingPost9 = (dto: AppCreateDto, params: RequestParams = {}) =>
    this.request<RSysAppPo, void>({
      path: `/sys/app/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除应用系统
   *
   * @tags ApplicationSystem
   * @name DelUsingPost9
   * @summary 删除应用系统
   * @request POST:/sys/app/del/{id}
   */
  delUsingPost9 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/app/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取应用系统列表
   *
   * @tags ApplicationSystem
   * @name GetAllPageListUsingPost
   * @summary 分页查询-获取应用系统列表
   * @request POST:/sys/app/getPages
   */
  getAllPageListUsingPost = (
    criteria: ApplicationSystemPagingQueryObject,
    params: RequestParams = {},
  ) =>
    this.request<RListSysAppPo, void>({
      path: `/sys/app/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询应用系统详情
   *
   * @tags ApplicationSystem
   * @name InfoUsingGet5
   * @summary 查询应用系统详情
   * @request GET:/sys/app/info/{id}
   */
  infoUsingGet5 = (id: number, params: RequestParams = {}) =>
    this.request<RAppResDto, void>({
      path: `/sys/app/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 根据状态返回系统提供方，不传状态则查所有数据， 0-停用， 1-启用
   *
   * @tags ApplicationSystem
   * @name ListAllAppProviderUsingGet
   * @summary 查询系统提供方
   * @request GET:/sys/app/listAllAppProvider
   */
  listAllAppProviderUsingGet = (status?: number, params: RequestParams = {}) =>
    this.request<RList3, void>({
      path: `/sys/app/listAllAppProvider`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 根据状态返回系统提供方，不传状态则查所有数据， 0-停用， 1-启用
   *
   * @tags ApplicationSystem
   * @name ListAllAppProviderUsingGet1
   * @summary 查询系统提供方
   * @request GET:/sys/app/listAllAppProvider/{status}
   */
  listAllAppProviderUsingGet1 = (status: number, params: RequestParams = {}) =>
    this.request<RList3, void>({
      path: `/sys/app/listAllAppProvider/${status}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 根据厂商id查询应用系统列表
   *
   * @tags ApplicationSystem
   * @name GetListByAppSupplierIdUsingGet
   * @summary 根据厂商id查询应用系统列表
   * @request GET:/sys/app/listByAppSupplierId/{appSupplierId}
   */
  getListByAppSupplierIdUsingGet = (appSupplierId: number, params: RequestParams = {}) =>
    this.request<RListSysAppPo, void>({
      path: `/sys/app/listByAppSupplierId/${appSupplierId}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改状态, status: 0-停用， 1-启用
   *
   * @tags ApplicationSystem
   * @name SwUsingPost
   * @summary 修改状态
   * @request POST:/sys/app/switch/{id}/{status}
   */
  swUsingPost = (id: number, status: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/app/switch/${id}/${status}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改应用系统
   *
   * @tags ApplicationSystem
   * @name UpdateUsingPost4
   * @summary 修改应用系统
   * @request POST:/sys/app/update
   */
  updateUsingPost4 = (dto: AppUpdateDto, params: RequestParams = {}) =>
    this.request<RSysAppPo, void>({
      path: `/sys/app/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建应用类别
   *
   * @tags ApplicationSystemGrouping
   * @name CreateUsingPost8
   * @summary 创建应用类别
   * @request POST:/sys/appCategory/create
   */
  createUsingPost8 = (dto: AppCategoryCreateDto, params: RequestParams = {}) =>
    this.request<RSysAppCategoryPo, void>({
      path: `/sys/appCategory/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 递归删除子节点
   *
   * @tags ApplicationSystemGrouping
   * @name DelUsingPost8
   * @summary 删除应用类别
   * @request POST:/sys/appCategory/del/{id}
   */
  delUsingPost8 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/appCategory/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取应用类别树
   *
   * @tags ApplicationSystemGrouping
   * @name GetTreeUsingGet1
   * @summary 获取应用类别树
   * @request GET:/sys/appCategory/getAppCategory/tree
   */
  getTreeUsingGet1 = (query: GetTreeUsingGet1Params, params: RequestParams = {}) =>
    this.request<RListAppCategoryTree, void>({
      path: `/sys/appCategory/getAppCategory/tree`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 分页查询-获取应用类别列表
   *
   * @tags ApplicationSystemGrouping
   * @name GetPagesUsingPost2
   * @summary 分页查询-获取应用类别列表
   * @request POST:/sys/appCategory/getPages
   */
  getPagesUsingPost2 = (criteria: ApplicationSystemGrouping, params: RequestParams = {}) =>
    this.request<RListAppCategoryResDto, void>({
      path: `/sys/appCategory/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询应用类别
   *
   * @tags ApplicationSystemGrouping
   * @name InfoUsingGet4
   * @summary 查询应用类别
   * @request GET:/sys/appCategory/info/{id}
   */
  infoUsingGet4 = (id: number, params: RequestParams = {}) =>
    this.request<RAppCategoryResDto, void>({
      path: `/sys/appCategory/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改应用类别
   *
   * @tags ApplicationSystemGrouping
   * @name UpdateUsingPost3
   * @summary 修改应用类别
   * @request POST:/sys/appCategory/update
   */
  updateUsingPost3 = (dto: SysAppCategory, params: RequestParams = {}) =>
    this.request<RSysAppCategoryPo, void>({
      path: `/sys/appCategory/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建厂商信息
   *
   * @tags ManufacturerInformation
   * @name CreateUsingPost10
   * @summary 创建厂商信息
   * @request POST:/sys/appSupplier/create
   */
  createUsingPost10 = (dto: ManufacturerInformation, params: RequestParams = {}) =>
    this.request<RSysAppSupplierPo, void>({
      path: `/sys/appSupplier/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 物理删除厂商信息
   *
   * @tags ManufacturerInformation
   * @name DelUsingPost10
   * @summary 删除厂商信息
   * @request POST:/sys/appSupplier/del/{id}
   */
  delUsingPost10 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/appSupplier/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询厂商信息列表
   *
   * @tags ManufacturerInformation
   * @name GetListUsingGet
   * @summary 查询厂商信息列表
   * @request GET:/sys/appSupplier/getAppSuppliers
   */
  getListUsingGet = (query: GetListUsingGetParams, params: RequestParams = {}) =>
    this.request<RListSysAppSupplierPo, void>({
      path: `/sys/appSupplier/getAppSuppliers`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 分页查询-获取厂商信息列表
   *
   * @tags ManufacturerInformation
   * @name GetPageUsingPost
   * @summary 分页查询-获取厂商信息列表
   * @request POST:/sys/appSupplier/getPages
   */
  getPageUsingPost = (criteria: ManufacturerInformationQueryCriteria, params: RequestParams = {}) =>
    this.request<RListSysAppSupplierPo, void>({
      path: `/sys/appSupplier/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询厂商详情信息
   *
   * @tags ManufacturerInformation
   * @name InfoUsingGet6
   * @summary 查询厂商详情信息
   * @request GET:/sys/appSupplier/info/{id}
   */
  infoUsingGet6 = (id: number, params: RequestParams = {}) =>
    this.request<RAppSupplierResDto, void>({
      path: `/sys/appSupplier/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改厂商信息
   *
   * @tags ManufacturerInformation
   * @name UpdateUsingPost5
   * @summary 修改厂商信息
   * @request POST:/sys/appSupplier/update
   */
  updateUsingPost5 = (dto: AppSupplierUpdateDto, params: RequestParams = {}) =>
    this.request<RSysAppSupplierPo, void>({
      path: `/sys/appSupplier/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建全局常量
   *
   * @tags GlobalConstant
   * @name CreateUsingPost11
   * @summary 创建全局常量
   * @request POST:/sys/constant/create
   */
  createUsingPost11 = (dto: GlobalConstant, params: RequestParams = {}) =>
    this.request<RSysConstantPo, void>({
      path: `/sys/constant/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除全局常量
   *
   * @tags GlobalConstant
   * @name DelUsingPost11
   * @summary 删除全局常量
   * @request POST:/sys/constant/del/{id}
   */
  delUsingPost11 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/constant/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取全局常量列表
   *
   * @tags GlobalConstant
   * @name GetPageUsingPost1
   * @summary 分页查询-获取全局常量列表
   * @request POST:/sys/constant/getPages
   */
  getPageUsingPost1 = (criteria: GlobalConstantQueryCriteria, params: RequestParams = {}) =>
    this.request<RListSysConstantPo, void>({
      path: `/sys/constant/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询全局常量信息详情
   *
   * @tags GlobalConstant
   * @name InfoUsingGet7
   * @summary 查询全局常量信息详情
   * @request GET:/sys/constant/info/{id}
   */
  infoUsingGet7 = (id: number, params: RequestParams = {}) =>
    this.request<RSysConstantPo, void>({
      path: `/sys/constant/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改全局常量
   *
   * @tags GlobalConstant
   * @name UpdateUsingPost6
   * @summary 修改全局常量
   * @request POST:/sys/constant/update
   */
  updateUsingPost6 = (dto: GlobalConstant2, params: RequestParams = {}) =>
    this.request<RSysConstantPo, void>({
      path: `/sys/constant/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建数据同步任务
   *
   * @tags DataSynchronizationTask
   * @name CreateUsingPost14
   * @summary 创建数据同步任务
   * @request POST:/sys/dataSyncTask/create
   */
  createUsingPost14 = (dto: DataSynchronizationTask, params: RequestParams = {}) =>
    this.request<RSysDataSyncTaskPo, void>({
      path: `/sys/dataSyncTask/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除工作节点
   *
   * @tags DataSynchronizationTask
   * @name DelUsingPost14
   * @summary 删除工作节点
   * @request POST:/sys/dataSyncTask/del/{id}
   */
  delUsingPost14 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/dataSyncTask/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取数据同步任务列表
   *
   * @tags DataSynchronizationTask
   * @name GetPageUsingPost4
   * @summary 分页查询-获取数据同步任务列表
   * @request POST:/sys/dataSyncTask/getPages
   */
  getPageUsingPost4 = (
    criteria: DataSynchronizationTaskQueryCriteria,
    params: RequestParams = {},
  ) =>
    this.request<RListSysDataSyncTaskPo, void>({
      path: `/sys/dataSyncTask/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询工作节点详情
   *
   * @tags DataSynchronizationTask
   * @name InfoUsingGet10
   * @summary 查询工作节点详情
   * @request GET:/sys/dataSyncTask/info/{id}
   */
  infoUsingGet10 = (id: number, params: RequestParams = {}) =>
    this.request<RSysDataSyncTaskResDto, void>({
      path: `/sys/dataSyncTask/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改工作节点
   *
   * @tags DataSynchronizationTask
   * @name UpdateUsingPost9
   * @summary 修改工作节点
   * @request POST:/sys/dataSyncTask/update
   */
  updateUsingPost9 = (dto: DataSynchronizationTask2, params: RequestParams = {}) =>
    this.request<RSysDataSyncTaskPo, void>({
      path: `/sys/dataSyncTask/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建数据源
   *
   * @tags DataSource
   * @name CreateUsingPost13
   * @summary 创建数据源
   * @request POST:/sys/datasource/create
   */
  createUsingPost13 = (dto: DataSource, params: RequestParams = {}) =>
    this.request<RSysDataSourcePo, void>({
      path: `/sys/datasource/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除数据源
   *
   * @tags DataSource
   * @name DelUsingPost13
   * @summary 删除数据源
   * @request POST:/sys/datasource/del/{id}
   */
  delUsingPost13 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/datasource/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取数据源列表
   *
   * @tags DataSource
   * @name GetPageUsingPost3
   * @summary 分页查询-获取数据源列表
   * @request POST:/sys/datasource/getPages
   */
  getPageUsingPost3 = (criteria: _, params: RequestParams = {}) =>
    this.request<RListSysDataSourcePo, void>({
      path: `/sys/datasource/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询数据源详情
   *
   * @tags DataSource
   * @name InfoUsingGet9
   * @summary 查询数据源详情
   * @request GET:/sys/datasource/info/{id}
   */
  infoUsingGet9 = (id: number, params: RequestParams = {}) =>
    this.request<RSysDataSourcePo, void>({
      path: `/sys/datasource/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 获取数据源列表
   *
   * @tags DataSource
   * @name ListUsingPost4
   * @summary 获取数据源列表
   * @request POST:/sys/datasource/list
   */
  listUsingPost4 = (criteria: _, params: RequestParams = {}) =>
    this.request<RListSysDataSourcePo, void>({
      path: `/sys/datasource/list`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改数据源
   *
   * @tags DataSource
   * @name UpdateUsingPost8
   * @summary 修改数据源
   * @request POST:/sys/datasource/update
   */
  updateUsingPost8 = (dto: DataSource2, params: RequestParams = {}) =>
    this.request<RSysDataSourcePo, void>({
      path: `/sys/datasource/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建机构信息
   *
   * @tags InstitutionalInformation
   * @name CreateUsingPost15
   * @summary 创建机构信息
   * @request POST:/sys/organization/create
   */
  createUsingPost15 = (dto: OrganizationCreateDto, params: RequestParams = {}) =>
    this.request<RSysOrganizationPo, void>({
      path: `/sys/organization/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除机构信息
   *
   * @tags InstitutionalInformation
   * @name DelUsingPost15
   * @summary 删除机构信息
   * @request POST:/sys/organization/del/{id}
   */
  delUsingPost15 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/organization/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 如用于分页需要传递page和limit
   *
   * @tags InstitutionalInformation
   * @name GetOrganizationsUsingGet
   * @summary 获取机构列表信息
   * @request GET:/sys/organization/getOrganizations
   */
  getOrganizationsUsingGet = (query: GetOrganizationsUsingGetParams, params: RequestParams = {}) =>
    this.request<RListOrganizationResDto, void>({
      path: `/sys/organization/getOrganizations`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags InstitutionalInformation
   * @name GetTreeUsingGet2
   * @summary 获取机构树信息
   * @request GET:/sys/organization/getOrganizations/tree
   */
  getTreeUsingGet2 = (query: GetTreeUsingGet2Params, params: RequestParams = {}) =>
    this.request<RListOrganizationTree, void>({
      path: `/sys/organization/getOrganizations/tree`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 根据id查询机构信息
   *
   * @tags InstitutionalInformation
   * @name InfoUsingGet11
   * @summary 查询机构信息
   * @request GET:/sys/organization/info/{id}
   */
  infoUsingGet11 = (id: number, params: RequestParams = {}) =>
    this.request<ROrganizationResDto, void>({
      path: `/sys/organization/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改本节点及其子节点状态, status: 0-停用， 1-启用
   *
   * @tags InstitutionalInformation
   * @name SwUsingPost1
   * @summary 修改状态
   * @request POST:/sys/organization/switch/{id}/{status}
   */
  swUsingPost1 = (id: number, status: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/organization/switch/${id}/${status}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改机构信息
   *
   * @tags InstitutionalInformation
   * @name UpdateUsingPost10
   * @summary 修改机构信息
   * @request POST:/sys/organization/update
   */
  updateUsingPost10 = (dto: BasicPagingQueryObjects, params: RequestParams = {}) =>
    this.request<RSysOrganizationPo, void>({
      path: `/sys/organization/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建数据资源
   *
   * @tags DataResources
   * @name CreateUsingPost12
   * @summary 创建数据资源
   * @request POST:/sys/resource/create
   */
  createUsingPost12 = (dto: DataResources, params: RequestParams = {}) =>
    this.request<RSysDataResourcePo, void>({
      path: `/sys/resource/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除数据资源
   *
   * @tags DataResources
   * @name DelUsingPost12
   * @summary 删除数据资源
   * @request POST:/sys/resource/del/{id}
   */
  delUsingPost12 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/resource/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取应用系统列表
   *
   * @tags DataResources
   * @name GetPageUsingPost2
   * @summary 分页查询-获取应用系统列表
   * @request POST:/sys/resource/getPages
   */
  getPageUsingPost2 = (criteria: GlobalConstantQueryCriteria, params: RequestParams = {}) =>
    this.request<RListSysDataResourcePo, void>({
      path: `/sys/resource/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询应用系统详情
   *
   * @tags DataResources
   * @name InfoUsingGet8
   * @summary 查询应用系统详情
   * @request GET:/sys/resource/info/{id}
   */
  infoUsingGet8 = (id: number, params: RequestParams = {}) =>
    this.request<RSysDataResourcePo, void>({
      path: `/sys/resource/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改数据资源
   *
   * @tags DataResources
   * @name UpdateUsingPost7
   * @summary 修改数据资源
   * @request POST:/sys/resource/update
   */
  updateUsingPost7 = (dto: DataResources2, params: RequestParams = {}) =>
    this.request<RSysDataResourcePo, void>({
      path: `/sys/resource/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建第三方API服务
   *
   * @tags ThirdPartyApiServices
   * @name CreateUsingPost16
   * @summary 创建第三方API服务
   * @request POST:/sys/third/service/create
   */
  createUsingPost16 = (dto: ThirdPartyApiServices, params: RequestParams = {}) =>
    this.request<RSysThirdServicePo, void>({
      path: `/sys/third/service/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除第三方API服务
   *
   * @tags ThirdPartyApiServices
   * @name DelUsingPost16
   * @summary 删除第三方API服务
   * @request POST:/sys/third/service/del/{id}
   */
  delUsingPost16 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/third/service/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取第三方API服务列表
   *
   * @tags ThirdPartyApiServices
   * @name GetPageUsingPost5
   * @summary 分页查询-获取第三方API服务列表
   * @request POST:/sys/third/service/getPages
   */
  getPageUsingPost5 = (
    criteria: QueryCriteriaForThirdPartyApiServices,
    params: RequestParams = {},
  ) =>
    this.request<RListSysThirdServicePo, void>({
      path: `/sys/third/service/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询第三方API服务详情
   *
   * @tags ThirdPartyApiServices
   * @name InfoUsingGet12
   * @summary 查询第三方API服务详情
   * @request GET:/sys/third/service/info/{id}
   */
  infoUsingGet12 = (id: number, params: RequestParams = {}) =>
    this.request<RSysThirdServicePo, void>({
      path: `/sys/third/service/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改第三方API服务
   *
   * @tags ThirdPartyApiServices
   * @name UpdateUsingPost11
   * @summary 修改第三方API服务
   * @request POST:/sys/third/service/update
   */
  updateUsingPost11 = (dto: ThirdPartyApiServices2, params: RequestParams = {}) =>
    this.request<RSysThirdServicePo, void>({
      path: `/sys/third/service/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建工作节点分组
   *
   * @tags WorkNodeGrouping
   * @name CreateUsingPost17
   * @summary 创建工作节点分组
   * @request POST:/sys/worker/group/create
   */
  createUsingPost17 = (dto: WorkNodeGrouping, params: RequestParams = {}) =>
    this.request<RSysWorkerGroupPo, void>({
      path: `/sys/worker/group/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除工作节点分组
   *
   * @tags WorkNodeGrouping
   * @name DelUsingPost17
   * @summary 删除工作节点分组
   * @request POST:/sys/worker/group/del/{id}
   */
  delUsingPost17 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/worker/group/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取工作节点分组列表
   *
   * @tags WorkNodeGrouping
   * @name GetPageUsingPost6
   * @summary 分页查询-获取工作节点分组列表
   * @request POST:/sys/worker/group/getPages
   */
  getPageUsingPost6 = (criteria: WorkNodeGroupingQueryCriteria, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/worker/group/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询工作节点分组详情
   *
   * @tags WorkNodeGrouping
   * @name InfoUsingGet13
   * @summary 查询工作节点分组详情
   * @request GET:/sys/worker/group/info/{id}
   */
  infoUsingGet13 = (id: number, params: RequestParams = {}) =>
    this.request<RSysWorkerGroupPo, void>({
      path: `/sys/worker/group/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改工作节点分组
   *
   * @tags WorkNodeGrouping
   * @name UpdateUsingPost12
   * @summary 修改工作节点分组
   * @request POST:/sys/worker/group/update
   */
  updateUsingPost12 = (dto: WorkNodeGrouping2, params: RequestParams = {}) =>
    this.request<RSysWorkerGroupPo, void>({
      path: `/sys/worker/group/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建工作节点
   *
   * @tags WorkNodes
   * @name CreateUsingPost18
   * @summary 创建工作节点
   * @request POST:/sys/worker/node/create
   */
  createUsingPost18 = (dto: WorkNodes, params: RequestParams = {}) =>
    this.request<RSysWorkerNodePo, void>({
      path: `/sys/worker/node/create`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除工作节点
   *
   * @tags WorkNodes
   * @name DelUsingPost18
   * @summary 删除工作节点
   * @request POST:/sys/worker/node/del/{id}
   */
  delUsingPost18 = (id: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/worker/node/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取工作节点列表
   *
   * @tags WorkNodes
   * @name GetPageUsingPost7
   * @summary 分页查询-获取工作节点列表
   * @request POST:/sys/worker/node/getPages
   */
  getPageUsingPost7 = (criteria: WorkNodeQueryCriteria, params: RequestParams = {}) =>
    this.request<RListSysWorkerNodePo, void>({
      path: `/sys/worker/node/getPages`,
      method: 'POST',
      body: criteria,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询工作节点详情
   *
   * @tags WorkNodes
   * @name InfoUsingGet14
   * @summary 查询工作节点详情
   * @request GET:/sys/worker/node/info/{id}
   */
  infoUsingGet14 = (id: number, params: RequestParams = {}) =>
    this.request<RSysWorkerNodeResDto, void>({
      path: `/sys/worker/node/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改状态, status: 0-停用， 1-启用
   *
   * @tags WorkNodes
   * @name SwUsingPost2
   * @summary 修改状态
   * @request POST:/sys/worker/node/switch/{id}/{status}
   */
  swUsingPost2 = (id: number, status: number, params: RequestParams = {}) =>
    this.request<R, void>({
      path: `/sys/worker/node/switch/${id}/${status}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改工作节点
   *
   * @tags WorkNodes
   * @name UpdateUsingPost13
   * @summary 修改工作节点
   * @request POST:/sys/worker/node/update
   */
  updateUsingPost13 = (dto: WorkNodes2, params: RequestParams = {}) =>
    this.request<RSysWorkerNodePo, void>({
      path: `/sys/worker/node/update`,
      method: 'POST',
      body: dto,
      type: ContentType.Json,
      ...params,
    });
}
