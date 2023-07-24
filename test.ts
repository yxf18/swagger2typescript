import { ContentType, HttpClient, RequestParams } from './http-client';

export class Syslogin<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 【系统权限】登录、菜单等
   * @name GetSysLogoUsingGet
   * @summary 获取系统Logo
   * @request GET:/syslogin/getSysLogo
   */
  getSysLogoUsingGet = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/syslogin/getSysLogo`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 包括用户信息、权限列表、角色列表
   *
   * @tags 【系统权限】登录、菜单等
   * @name GetUserInfoUsingGet
   * @summary 获取当前用户详情
   * @request GET:/syslogin/getUserInfo
   */
  getUserInfoUsingGet = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/syslogin/getUserInfo`,
      method: 'GET',
      ...params,
    });
  /**
   * @description 如检查是否开启srp登录
   *
   * @tags 【系统权限】登录、菜单等
   * @name InitUsingGet
   * @summary 初始化
   * @request GET:/syslogin/init
   */
  initUsingGet = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/syslogin/init`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 【系统权限】登录、菜单等
   * @name ListRouterUsingGet
   * @summary 获取当前用户路由
   * @request GET:/syslogin/listRouter
   */
  listRouterUsingGet = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/syslogin/listRouter`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 【系统权限】登录、菜单等
   * @name LoginUsingPost
   * @summary 登录
   * @request POST:/syslogin/login
   */
  loginUsingPost = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/syslogin/login`,
      method: 'POST',
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 【系统权限】登录、菜单等
   * @name LogoutUsingGet
   * @summary 注销登录
   * @request GET:/syslogin/logout
   */
  logoutUsingGet = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/syslogin/logout`,
      method: 'GET',
      ...params,
    });
}
nstance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}
{
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
