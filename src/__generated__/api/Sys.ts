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
  GetListUsingGetParams,
  GetOrganizationsUsingGetParams,
  GetTreeUsingGet1Params,
  GetTreeUsingGet2Params,
  UploadFileUsingPostParams,
  UploadFileUsingPostPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Sys<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 创建应用系统
   *
   * @tags 应用系统
   * @name CreateUsingPost9
   * @summary 创建应用系统
   * @request POST:/sys/app/create
   */
  createUsingPost9 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除应用系统
   *
   * @tags 应用系统
   * @name DelUsingPost10
   * @summary 删除应用系统
   * @request POST:/sys/app/del/{id}
   */
  delUsingPost10 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取应用系统列表
   *
   * @tags 应用系统
   * @name GetAllPageListUsingPost
   * @summary 分页查询-获取应用系统列表
   * @request POST:/sys/app/getPages
   */
  getAllPageListUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询应用系统详情
   *
   * @tags 应用系统
   * @name InfoUsingGet5
   * @summary 查询应用系统详情
   * @request GET:/sys/app/info/{id}
   */
  infoUsingGet5 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 根据状态返回系统提供方，不传状态则查所有数据， 0-停用， 1-启用
   *
   * @tags 应用系统
   * @name ListAllAppProviderUsingGet
   * @summary 查询系统提供方
   * @request GET:/sys/app/listAllAppProvider
   */
  listAllAppProviderUsingGet = (status?: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/listAllAppProvider`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 根据状态返回系统提供方，不传状态则查所有数据， 0-停用， 1-启用
   *
   * @tags 应用系统
   * @name ListAllAppProviderUsingGet1
   * @summary 查询系统提供方
   * @request GET:/sys/app/listAllAppProvider/{status}
   */
  listAllAppProviderUsingGet1 = (status: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/listAllAppProvider/${status}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 根据厂商id查询应用系统列表
   *
   * @tags 应用系统
   * @name GetListByAppSupplierIdUsingGet
   * @summary 根据厂商id查询应用系统列表
   * @request GET:/sys/app/listByAppSupplierId/{appSupplierId}
   */
  getListByAppSupplierIdUsingGet = (appSupplierId: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/listByAppSupplierId/${appSupplierId}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改状态, status: 0-停用， 1-启用
   *
   * @tags 应用系统
   * @name SwUsingPost
   * @summary 修改状态
   * @request POST:/sys/app/switch/{id}/{status}
   */
  swUsingPost = (id: any, status: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/switch/${id}/${status}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改应用系统
   *
   * @tags 应用系统
   * @name UpdateUsingPost4
   * @summary 修改应用系统
   * @request POST:/sys/app/update
   */
  updateUsingPost4 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/app/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建应用类别
   *
   * @tags 应用系统分组
   * @name CreateUsingPost8
   * @summary 创建应用类别
   * @request POST:/sys/appCategory/create
   */
  createUsingPost8 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appCategory/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 递归删除子节点
   *
   * @tags 应用系统分组
   * @name DelUsingPost9
   * @summary 删除应用类别
   * @request POST:/sys/appCategory/del/{id}
   */
  delUsingPost9 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appCategory/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 获取应用类别树
   *
   * @tags 应用系统分组
   * @name GetTreeUsingGet1
   * @summary 获取应用类别树
   * @request GET:/sys/appCategory/getAppCategory/tree
   */
  getTreeUsingGet1 = (query: GetTreeUsingGet1Params, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appCategory/getAppCategory/tree`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 分页查询-获取应用类别列表
   *
   * @tags 应用系统分组
   * @name GetPagesUsingPost2
   * @summary 分页查询-获取应用类别列表
   * @request POST:/sys/appCategory/getPages
   */
  getPagesUsingPost2 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appCategory/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询应用类别
   *
   * @tags 应用系统分组
   * @name InfoUsingGet4
   * @summary 查询应用类别
   * @request GET:/sys/appCategory/info/{id}
   */
  infoUsingGet4 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appCategory/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改应用类别
   *
   * @tags 应用系统分组
   * @name UpdateUsingPost3
   * @summary 修改应用类别
   * @request POST:/sys/appCategory/update
   */
  updateUsingPost3 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appCategory/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建厂商信息
   *
   * @tags 厂商信息
   * @name CreateUsingPost10
   * @summary 创建厂商信息
   * @request POST:/sys/appSupplier/create
   */
  createUsingPost10 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appSupplier/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 物理删除厂商信息
   *
   * @tags 厂商信息
   * @name DelUsingPost11
   * @summary 删除厂商信息
   * @request POST:/sys/appSupplier/del/{id}
   */
  delUsingPost11 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appSupplier/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 查询厂商信息列表
   *
   * @tags 厂商信息
   * @name GetListUsingGet
   * @summary 查询厂商信息列表
   * @request GET:/sys/appSupplier/getAppSuppliers
   */
  getListUsingGet = (query: GetListUsingGetParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appSupplier/getAppSuppliers`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 分页查询-获取厂商信息列表
   *
   * @tags 厂商信息
   * @name GetPageUsingPost
   * @summary 分页查询-获取厂商信息列表
   * @request POST:/sys/appSupplier/getPages
   */
  getPageUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appSupplier/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询厂商详情信息
   *
   * @tags 厂商信息
   * @name InfoUsingGet6
   * @summary 查询厂商详情信息
   * @request GET:/sys/appSupplier/info/{id}
   */
  infoUsingGet6 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appSupplier/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改厂商信息
   *
   * @tags 厂商信息
   * @name UpdateUsingPost5
   * @summary 修改厂商信息
   * @request POST:/sys/appSupplier/update
   */
  updateUsingPost5 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/appSupplier/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建全局常量
   *
   * @tags 全局常量
   * @name CreateUsingPost11
   * @summary 创建全局常量
   * @request POST:/sys/constant/create
   */
  createUsingPost11 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/constant/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除全局常量
   *
   * @tags 全局常量
   * @name DelUsingPost12
   * @summary 删除全局常量
   * @request POST:/sys/constant/del/{id}
   */
  delUsingPost12 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/constant/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取全局常量列表
   *
   * @tags 全局常量
   * @name GetPageUsingPost1
   * @summary 分页查询-获取全局常量列表
   * @request POST:/sys/constant/getPages
   */
  getPageUsingPost1 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/constant/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询全局常量信息详情
   *
   * @tags 全局常量
   * @name InfoUsingGet7
   * @summary 查询全局常量信息详情
   * @request GET:/sys/constant/info/{id}
   */
  infoUsingGet7 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/constant/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改全局常量
   *
   * @tags 全局常量
   * @name UpdateUsingPost6
   * @summary 修改全局常量
   * @request POST:/sys/constant/update
   */
  updateUsingPost6 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/constant/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建数据同步任务
   *
   * @tags 数据同步任务
   * @name CreateUsingPost13
   * @summary 创建数据同步任务
   * @request POST:/sys/dataSyncTask/create
   */
  createUsingPost13 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/dataSyncTask/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除工作节点
   *
   * @tags 数据同步任务
   * @name DelUsingPost15
   * @summary 删除工作节点
   * @request POST:/sys/dataSyncTask/del/{id}
   */
  delUsingPost15 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/dataSyncTask/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取数据同步任务列表
   *
   * @tags 数据同步任务
   * @name GetPageUsingPost4
   * @summary 分页查询-获取数据同步任务列表
   * @request POST:/sys/dataSyncTask/getPages
   */
  getPageUsingPost4 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/dataSyncTask/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询工作节点详情
   *
   * @tags 数据同步任务
   * @name InfoUsingGet9
   * @summary 查询工作节点详情
   * @request GET:/sys/dataSyncTask/info/{id}
   */
  infoUsingGet9 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/dataSyncTask/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改工作节点
   *
   * @tags 数据同步任务
   * @name UpdateUsingPost8
   * @summary 修改工作节点
   * @request POST:/sys/dataSyncTask/update
   */
  updateUsingPost8 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/dataSyncTask/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建数据源
   *
   * @tags 数据源
   * @name CreateUsingPost12
   * @summary 创建数据源
   * @request POST:/sys/datasource/create
   */
  createUsingPost12 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/datasource/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除数据源
   *
   * @tags 数据源
   * @name DelUsingPost14
   * @summary 删除数据源
   * @request POST:/sys/datasource/del/{id}
   */
  delUsingPost14 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/datasource/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取数据源列表
   *
   * @tags 数据源
   * @name GetPageUsingPost3
   * @summary 分页查询-获取数据源列表
   * @request POST:/sys/datasource/getPages
   */
  getPageUsingPost3 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/datasource/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询数据源详情
   *
   * @tags 数据源
   * @name InfoUsingGet8
   * @summary 查询数据源详情
   * @request GET:/sys/datasource/info/{id}
   */
  infoUsingGet8 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/datasource/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 获取数据源列表
   *
   * @tags 数据源
   * @name ListUsingPost4
   * @summary 获取数据源列表
   * @request POST:/sys/datasource/list
   */
  listUsingPost4 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/datasource/list`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改数据源
   *
   * @tags 数据源
   * @name UpdateUsingPost7
   * @summary 修改数据源
   * @request POST:/sys/datasource/update
   */
  updateUsingPost7 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/datasource/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建机构信息
   *
   * @tags 机构信息
   * @name CreateUsingPost14
   * @summary 创建机构信息
   * @request POST:/sys/organization/create
   */
  createUsingPost14 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/organization/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除机构信息
   *
   * @tags 机构信息
   * @name DelUsingPost16
   * @summary 删除机构信息
   * @request POST:/sys/organization/del/{id}
   */
  delUsingPost16 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/organization/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 如用于分页需要传递page和limit
   *
   * @tags 机构信息
   * @name GetOrganizationsUsingGet
   * @summary 获取机构列表信息
   * @request GET:/sys/organization/getOrganizations
   */
  getOrganizationsUsingGet = (query: GetOrganizationsUsingGetParams, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/organization/getOrganizations`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags 机构信息
   * @name GetTreeUsingGet2
   * @summary 获取机构树信息
   * @request GET:/sys/organization/getOrganizations/tree
   */
  getTreeUsingGet2 = (query: GetTreeUsingGet2Params, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/organization/getOrganizations/tree`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * @description 根据id查询机构信息
   *
   * @tags 机构信息
   * @name InfoUsingGet10
   * @summary 查询机构信息
   * @request GET:/sys/organization/info/{id}
   */
  infoUsingGet10 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/organization/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改本节点及其子节点状态, status: 0-停用， 1-启用
   *
   * @tags 机构信息
   * @name SwUsingPost1
   * @summary 修改状态
   * @request POST:/sys/organization/switch/{id}/{status}
   */
  swUsingPost1 = (id: any, status: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/organization/switch/${id}/${status}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改机构信息
   *
   * @tags 机构信息
   * @name UpdateUsingPost9
   * @summary 修改机构信息
   * @request POST:/sys/organization/update
   */
  updateUsingPost9 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/organization/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 预览文件
   *
   * @tags 数据资源
   * @name ConvertJarUsingPost
   * @summary 动态加载文件
   * @request POST:/sys/resource/convertJar/{id}
   */
  convertJarUsingPost = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/resource/convertJar/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除数据资源
   *
   * @tags 数据资源
   * @name DelUsingPost13
   * @summary 删除数据资源
   * @request POST:/sys/resource/del/{id}
   */
  delUsingPost13 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/resource/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取应用系统列表
   *
   * @tags 数据资源
   * @name GetPageUsingPost2
   * @summary 分页查询-获取应用系统列表
   * @request POST:/sys/resource/getPages
   */
  getPageUsingPost2 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/resource/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 预览文件
   *
   * @tags 数据资源
   * @name PreviewFileUsingPost
   * @summary 预览文件
   * @request POST:/sys/resource/preview/{id}
   */
  previewFileUsingPost = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/resource/preview/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 上传文件，重新上传需传id
   *
   * @tags 数据资源
   * @name UploadFileUsingPost
   * @summary 上传文件
   * @request POST:/sys/resource/upload
   */
  uploadFileUsingPost = (
    query: UploadFileUsingPostParams,
    data?: UploadFileUsingPostPayload,
    params: RequestParams = {},
  ) =>
    this.request<void, void>({
      path: `/sys/resource/upload`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description 创建第三方API服务
   *
   * @tags 第三方API服务
   * @name CreateUsingPost15
   * @summary 创建第三方API服务
   * @request POST:/sys/third/service/create
   */
  createUsingPost15 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/third/service/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除第三方API服务
   *
   * @tags 第三方API服务
   * @name DelUsingPost17
   * @summary 删除第三方API服务
   * @request POST:/sys/third/service/del/{id}
   */
  delUsingPost17 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/third/service/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取第三方API服务列表
   *
   * @tags 第三方API服务
   * @name GetPageUsingPost5
   * @summary 分页查询-获取第三方API服务列表
   * @request POST:/sys/third/service/getPages
   */
  getPageUsingPost5 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/third/service/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询第三方API服务详情
   *
   * @tags 第三方API服务
   * @name InfoUsingGet11
   * @summary 查询第三方API服务详情
   * @request GET:/sys/third/service/info/{id}
   */
  infoUsingGet11 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/third/service/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改第三方API服务
   *
   * @tags 第三方API服务
   * @name UpdateUsingPost10
   * @summary 修改第三方API服务
   * @request POST:/sys/third/service/update
   */
  updateUsingPost10 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/third/service/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建工作节点分组
   *
   * @tags 工作节点分组
   * @name CreateUsingPost16
   * @summary 创建工作节点分组
   * @request POST:/sys/worker/group/create
   */
  createUsingPost16 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/group/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除工作节点分组
   *
   * @tags 工作节点分组
   * @name DelUsingPost18
   * @summary 删除工作节点分组
   * @request POST:/sys/worker/group/del/{id}
   */
  delUsingPost18 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/group/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取工作节点分组列表
   *
   * @tags 工作节点分组
   * @name GetPageUsingPost6
   * @summary 分页查询-获取工作节点分组列表
   * @request POST:/sys/worker/group/getPages
   */
  getPageUsingPost6 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/group/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询工作节点分组详情
   *
   * @tags 工作节点分组
   * @name InfoUsingGet12
   * @summary 查询工作节点分组详情
   * @request GET:/sys/worker/group/info/{id}
   */
  infoUsingGet12 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/group/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改工作节点分组
   *
   * @tags 工作节点分组
   * @name UpdateUsingPost11
   * @summary 修改工作节点分组
   * @request POST:/sys/worker/group/update
   */
  updateUsingPost11 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/group/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 创建工作节点
   *
   * @tags 工作节点
   * @name CreateUsingPost17
   * @summary 创建工作节点
   * @request POST:/sys/worker/node/create
   */
  createUsingPost17 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/node/create`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除工作节点
   *
   * @tags 工作节点
   * @name DelUsingPost19
   * @summary 删除工作节点
   * @request POST:/sys/worker/node/del/{id}
   */
  delUsingPost19 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/node/del/${id}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 分页查询-获取工作节点列表
   *
   * @tags 工作节点
   * @name GetPageUsingPost7
   * @summary 分页查询-获取工作节点列表
   * @request POST:/sys/worker/node/getPages
   */
  getPageUsingPost7 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/node/getPages`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据id查询工作节点详情
   *
   * @tags 工作节点
   * @name InfoUsingGet13
   * @summary 查询工作节点详情
   * @request GET:/sys/worker/node/info/{id}
   */
  infoUsingGet13 = (id: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/node/info/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 修改状态, status: 0-停用， 1-启用
   *
   * @tags 工作节点
   * @name SwUsingPost2
   * @summary 修改状态
   * @request POST:/sys/worker/node/switch/{id}/{status}
   */
  swUsingPost2 = (id: any, status: any, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/node/switch/${id}/${status}`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 修改工作节点
   *
   * @tags 工作节点
   * @name UpdateUsingPost12
   * @summary 修改工作节点
   * @request POST:/sys/worker/node/update
   */
  updateUsingPost12 = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/sys/worker/node/update`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
}
