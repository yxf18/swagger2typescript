// Generate by swagger2ts
  /* default type by generation start */
interface MapAny {
  [key: string]: any
}
interface MapString {
  [key: string]: string | undefined
}

type IDefaultOptions = Omit<RequestInit, "body" | "method"> & { timeout?: number }
/* default type by generation end */



export interface SwaggerApi{
  /**
   * @tag 字典[主要用于前端下拉框]
   * @summary 获取字典列表
   */
  get(url: "/admin/dict/list", options: {query: {
    codes?: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 健康状况
   * @summary 连通测试
   * @description 用于测试接口是否可以
   */
  post(url: "/admin/health/ping", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag basic-error-controller
   * @summary error
   */
  get(url: "/error", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag basic-error-controller
   * @summary error
   */
  post(url: "/error", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag basic-error-controller
   * @summary error
   */
  delete(url: "/error", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag basic-error-controller
   * @summary error
   */
  put(url: "/error", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag basic-error-controller
   * @summary error
   */
  head(url: "/error", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag basic-error-controller
   * @summary error
   */
  options(url: "/error", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag basic-error-controller
   * @summary error
   */
  patch(url: "/error", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 交互日志
   * @summary 交互日志-详情
   * @description 交互日志-详情
   */
  get(url: "/log/interaction/info/{traceId}", options: {path: {
    traceId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 交互日志
   * @summary 交互日志-列表
   */
  post(url: "/log/interaction/list", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据统计展示
   * @summary 仪表盘聚合数据
   */
  post(url: "/monitor/ui/dashboard", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务分组
   * @summary 创建服务分组
   * @description 创建服务分组
   */
  post(url: "/sm/category/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务分组
   * @summary 删除服务分组
   * @description 递归删除子节点
   */
  post(url: "/sm/category/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务分组
   * @summary 获取服务分组树
   * @description 获取服务分组树
   */
  get(url: "/sm/category/getAppCategory/tree", options: {query: {
    lazy: any
    parentId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务分组
   * @summary 分页查询-获取服务分组列表
   * @description 分页查询-获取服务分组列表
   */
  post(url: "/sm/category/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务分组
   * @summary 查询服务分组
   * @description 根据id查询服务分组
   */
  get(url: "/sm/category/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务分组
   * @summary 修改服务分组
   * @description 修改服务分组
   */
  post(url: "/sm/category/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】整体预处理器
   * @summary 创建个性预处理器
   * @description 创建个性预处理器
   */
  post(url: "/sm/common/pre/processor/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】整体预处理器
   * @summary 删除个性预处理器
   * @description 删除个性预处理器
   */
  post(url: "/sm/common/pre/processor/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】整体预处理器
   * @summary 根据服务id查询整体预处理
   * @description 根据服务id查询整体预处理
   */
  post(url: "/sm/common/pre/processor/list/{serviceId}", options: {path: {
    serviceId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】整体结果处理器
   * @summary 创建个性预处理器
   * @description 创建个性预处理器
   */
  post(url: "/sm/common/result/processor/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】整体结果处理器
   * @summary 删除个性预处理器
   * @description 删除个性预处理器
   */
  post(url: "/sm/common/result/processor/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】整体结果处理器
   * @summary 根据服务id查询整体预处理
   * @description 根据服务id查询整体预处理
   */
  post(url: "/sm/common/result/processor/list/{serviceId}", options: {path: {
    serviceId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务配置
   * @summary 新增或更新提供方-HTTP(GET)
   * @description 新增或更新提供方-HTTP(GET)
   */
  post(url: "/sm/endpoint/httpGet/createOrUpdate", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务配置
   * @summary 新增或更新提供方-HTTP(POST)
   * @description 新增或更新提供方-HTTP(POST)
   */
  post(url: "/sm/endpoint/httpPost/createOrUpdate", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务配置
   * @summary 新增或更新提供方-SP
   * @description 新增或更新提供方-存储过程
   */
  post(url: "/sm/endpoint/sp/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务配置
   * @summary 新增或更新提供方-SQL
   * @description 新增或更新提供方-SQL
   */
  post(url: "/sm/endpoint/sql/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务配置
   * @summary 新增或更新提供方-Webservice
   * @description 新增或更新提供方-Webservice
   */
  post(url: "/sm/endpoint/web/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】个性结果处理器
   * @summary 创建个性结果处理器
   * @description 创建个性结果处理器
   */
  post(url: "/sm/my/post/processor/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】个性结果处理器
   * @summary 删除个性结果处理器
   * @description 删除个性结果处理器
   */
  post(url: "/sm/my/post/processor/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】个性预处理器
   * @summary 创建个性预处理器
   * @description 创建个性预处理器
   */
  post(url: "/sm/my/pre/processor/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】个性预处理器
   * @summary 删除个性预处理器
   * @description 删除个性预处理器
   */
  post(url: "/sm/my/pre/processor/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 批量维护参数
   * @description 批量维护参数
   */
  post(url: "/sm/param/batch/maintain", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 创建服务参数
   * @description 创建服务参数
   */
  post(url: "/sm/param/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 删除服务参数
   * @description 删除服务参数
   */
  post(url: "/sm/param/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 查询服务参数详情
   * @description 根据id查询服务参数详情
   */
  get(url: "/sm/param/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 新增提供方-值
   */
  get(url: "/sm/param/listValues/{serviceId}/{paramType}", options: {path: {
    paramType: any
    serviceId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 查询服务下所有参数
   * @description 根据服务id查询服务下所有参数
   */
  get(url: "/sm/param/paramsOfServiceInfo/{serviceId}", options: {path: {
    serviceId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 预览消息结构
   */
  get(url: "/sm/param/previewDoc/{serviceId}/{paramType}", options: {path: {
    paramType: any
    serviceId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 修改服务参数
   * @description 修改服务参数
   */
  post(url: "/sm/param/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务参数配置
   * @summary 上传消息结构
   */
  post(url: "/sm/param/upload/{serviceId}", options: {path: {
    serviceId: any
  }, query: {
    content: any
    fileType: any
    paramType: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 服务定义
   * @description 服务定义
   */
  post(url: "/sm/serviceInfo/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 删除服务基本信息
   * @description 删除服务基本信息
   */
  post(url: "/sm/serviceInfo/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 分页查询-获取服务基本信息列表
   * @description 分页查询-获取服务基本信息列表
   */
  post(url: "/sm/serviceInfo/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 查询服务基本信息详情
   * @description 根据id查询服务基本信息详情
   */
  get(url: "/sm/serviceInfo/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 获取服务基本信息列表-服务订阅使用
   * @description 获取服务基本信息列表
   */
  post(url: "/sm/serviceInfo/subscribe/list", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 路由图谱展示
   * @description 根据服务id，查询路由图谱
   */
  get(url: "/sm/serviceInfo/topologyMap/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 修改服务基本信息
   * @description 修改服务基本信息
   */
  post(url: "/sm/serviceInfo/update", options: {query: {
    categoryId: any
    code: any
    id: any
    logLevel?: any
    memo?: any
    name: any
    openProtocol: any
    optType: any
    serviceMode?: any
    serviceModeName?: any
    urlPath?: any
    version: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 申请服务
   * @description 申请服务
   */
  post(url: "/sm/subscription/apply", options: {query: {
    appId?: any
    serviceId?: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【服务】服务基本信息配置
   * @summary 删除申请服务
   * @description 删除申请服务
   */
  post(url: "/sm/subscription/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 创建应用系统
   * @description 创建应用系统
   */
  post(url: "/sys/app/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 删除应用系统
   * @description 删除应用系统
   */
  post(url: "/sys/app/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 分页查询-获取应用系统列表
   * @description 分页查询-获取应用系统列表
   */
  post(url: "/sys/app/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 查询应用系统详情
   * @description 根据id查询应用系统详情
   */
  get(url: "/sys/app/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 查询系统提供方
   * @description 根据状态返回系统提供方，不传状态则查所有数据， 0-停用， 1-启用
   */
  get(url: "/sys/app/listAllAppProvider", options: {path: {
    status?: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 查询系统提供方
   * @description 根据状态返回系统提供方，不传状态则查所有数据， 0-停用， 1-启用
   */
  get(url: "/sys/app/listAllAppProvider/{status}", options: {path: {
    status: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 根据厂商id查询应用系统列表
   * @description 根据厂商id查询应用系统列表
   */
  get(url: "/sys/app/listByAppSupplierId/{appSupplierId}", options: {path: {
    appSupplierId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 修改状态
   * @description 修改状态, status: 0-停用， 1-启用
   */
  post(url: "/sys/app/switch/{id}/{status}", options: {path: {
    id: any
    status: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统
   * @summary 修改应用系统
   * @description 修改应用系统
   */
  post(url: "/sys/app/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统分组
   * @summary 创建应用类别
   * @description 创建应用类别
   */
  post(url: "/sys/appCategory/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统分组
   * @summary 删除应用类别
   * @description 递归删除子节点
   */
  post(url: "/sys/appCategory/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统分组
   * @summary 获取应用类别树
   * @description 获取应用类别树
   */
  get(url: "/sys/appCategory/getAppCategory/tree", options: {query: {
    lazy: any
    parentId: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统分组
   * @summary 分页查询-获取应用类别列表
   * @description 分页查询-获取应用类别列表
   */
  post(url: "/sys/appCategory/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统分组
   * @summary 查询应用类别
   * @description 根据id查询应用类别
   */
  get(url: "/sys/appCategory/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 应用系统分组
   * @summary 修改应用类别
   * @description 修改应用类别
   */
  post(url: "/sys/appCategory/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 厂商信息
   * @summary 创建厂商信息
   * @description 创建厂商信息
   */
  post(url: "/sys/appSupplier/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 厂商信息
   * @summary 删除厂商信息
   * @description 物理删除厂商信息
   */
  post(url: "/sys/appSupplier/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 厂商信息
   * @summary 查询厂商信息列表
   * @description 查询厂商信息列表
   */
  get(url: "/sys/appSupplier/getAppSuppliers", options: {query: {
    appContactsPhone?: any
    condition?: any
    status?: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 厂商信息
   * @summary 分页查询-获取厂商信息列表
   * @description 分页查询-获取厂商信息列表
   */
  post(url: "/sys/appSupplier/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 厂商信息
   * @summary 查询厂商详情信息
   * @description 根据id查询厂商详情信息
   */
  get(url: "/sys/appSupplier/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 厂商信息
   * @summary 修改厂商信息
   * @description 修改厂商信息
   */
  post(url: "/sys/appSupplier/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 全局常量
   * @summary 创建全局常量
   * @description 创建全局常量
   */
  post(url: "/sys/constant/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 全局常量
   * @summary 删除全局常量
   * @description 删除全局常量
   */
  post(url: "/sys/constant/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 全局常量
   * @summary 分页查询-获取全局常量列表
   * @description 分页查询-获取全局常量列表
   */
  post(url: "/sys/constant/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 全局常量
   * @summary 查询全局常量信息详情
   * @description 根据id查询全局常量信息详情
   */
  get(url: "/sys/constant/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 全局常量
   * @summary 修改全局常量
   * @description 修改全局常量
   */
  post(url: "/sys/constant/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据同步任务
   * @summary 创建数据同步任务
   * @description 创建数据同步任务
   */
  post(url: "/sys/dataSyncTask/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据同步任务
   * @summary 删除工作节点
   * @description 删除工作节点
   */
  post(url: "/sys/dataSyncTask/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据同步任务
   * @summary 分页查询-获取数据同步任务列表
   * @description 分页查询-获取数据同步任务列表
   */
  post(url: "/sys/dataSyncTask/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据同步任务
   * @summary 查询工作节点详情
   * @description 根据id查询工作节点详情
   */
  get(url: "/sys/dataSyncTask/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据同步任务
   * @summary 修改工作节点
   * @description 修改工作节点
   */
  post(url: "/sys/dataSyncTask/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据源
   * @summary 创建数据源
   * @description 创建数据源
   */
  post(url: "/sys/datasource/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据源
   * @summary 删除数据源
   * @description 删除数据源
   */
  post(url: "/sys/datasource/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据源
   * @summary 分页查询-获取数据源列表
   * @description 分页查询-获取数据源列表
   */
  post(url: "/sys/datasource/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据源
   * @summary 查询数据源详情
   * @description 根据id查询数据源详情
   */
  get(url: "/sys/datasource/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据源
   * @summary 获取数据源列表
   * @description 获取数据源列表
   */
  post(url: "/sys/datasource/list", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据源
   * @summary 修改数据源
   * @description 修改数据源
   */
  post(url: "/sys/datasource/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 机构信息
   * @summary 创建机构信息
   * @description 创建机构信息
   */
  post(url: "/sys/organization/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 机构信息
   * @summary 删除机构信息
   * @description 删除机构信息
   */
  post(url: "/sys/organization/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 机构信息
   * @summary 获取机构列表信息
   * @description 如用于分页需要传递page和limit
   */
  get(url: "/sys/organization/getOrganizations", options: {query: {
    limit?: any
    page?: any
    parentId: any
    status?: any
    type?: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 机构信息
   * @summary 获取机构树信息
   */
  get(url: "/sys/organization/getOrganizations/tree", options: {query: {
    lazy: any
    parentId: any
    status?: any
    type?: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 机构信息
   * @summary 查询机构信息
   * @description 根据id查询机构信息
   */
  get(url: "/sys/organization/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 机构信息
   * @summary 修改状态
   * @description 修改本节点及其子节点状态, status: 0-停用， 1-启用
   */
  post(url: "/sys/organization/switch/{id}/{status}", options: {path: {
    id: any
    status: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 机构信息
   * @summary 修改机构信息
   * @description 修改机构信息
   */
  post(url: "/sys/organization/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据资源
   * @summary 创建数据资源
   * @description 创建数据资源
   */
  post(url: "/sys/resource/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据资源
   * @summary 删除数据资源
   * @description 删除数据资源
   */
  post(url: "/sys/resource/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据资源
   * @summary 分页查询-获取应用系统列表
   * @description 分页查询-获取应用系统列表
   */
  post(url: "/sys/resource/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据资源
   * @summary 查询应用系统详情
   * @description 根据id查询应用系统详情
   */
  get(url: "/sys/resource/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 数据资源
   * @summary 修改数据资源
   * @description 修改数据资源
   */
  post(url: "/sys/resource/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 第三方API服务
   * @summary 创建第三方API服务
   * @description 创建第三方API服务
   */
  post(url: "/sys/third/service/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 第三方API服务
   * @summary 删除第三方API服务
   * @description 删除第三方API服务
   */
  post(url: "/sys/third/service/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 第三方API服务
   * @summary 分页查询-获取第三方API服务列表
   * @description 分页查询-获取第三方API服务列表
   */
  post(url: "/sys/third/service/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 第三方API服务
   * @summary 查询第三方API服务详情
   * @description 根据id查询第三方API服务详情
   */
  get(url: "/sys/third/service/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 第三方API服务
   * @summary 修改第三方API服务
   * @description 修改第三方API服务
   */
  post(url: "/sys/third/service/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点分组
   * @summary 创建工作节点分组
   * @description 创建工作节点分组
   */
  post(url: "/sys/worker/group/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点分组
   * @summary 删除工作节点分组
   * @description 删除工作节点分组
   */
  post(url: "/sys/worker/group/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点分组
   * @summary 分页查询-获取工作节点分组列表
   * @description 分页查询-获取工作节点分组列表
   */
  post(url: "/sys/worker/group/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点分组
   * @summary 查询工作节点分组详情
   * @description 根据id查询工作节点分组详情
   */
  get(url: "/sys/worker/group/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点分组
   * @summary 修改工作节点分组
   * @description 修改工作节点分组
   */
  post(url: "/sys/worker/group/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点
   * @summary 创建工作节点
   * @description 创建工作节点
   */
  post(url: "/sys/worker/node/create", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点
   * @summary 删除工作节点
   * @description 删除工作节点
   */
  post(url: "/sys/worker/node/del/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点
   * @summary 分页查询-获取工作节点列表
   * @description 分页查询-获取工作节点列表
   */
  post(url: "/sys/worker/node/getPages", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点
   * @summary 查询工作节点详情
   * @description 根据id查询工作节点详情
   */
  get(url: "/sys/worker/node/info/{id}", options: {path: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点
   * @summary 修改状态
   * @description 修改状态, status: 0-停用， 1-启用
   */
  post(url: "/sys/worker/node/switch/{id}/{status}", options: {path: {
    id: any
    status: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 工作节点
   * @summary 修改工作节点
   * @description 修改工作节点
   */
  post(url: "/sys/worker/node/update", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统控制参数】
   * @summary 获取参数列表
   */
  post(url: "/sysconfigparam/list", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统控制参数】
   * @summary 更改参数值
   */
  post(url: "/sysconfigparam/updateValue", options: {query: {
    code: any
    value: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统日志】
   * @summary 获取系统日志列表
   */
  post(url: "/syslog/list", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统权限】登录、菜单等
   * @summary 获取系统Logo
   */
  get(url: "/syslogin/getSysLogo", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统权限】登录、菜单等
   * @summary 获取当前用户详情
   * @description 包括用户信息、权限列表、角色列表
   */
  get(url: "/syslogin/getUserInfo", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统权限】登录、菜单等
   * @summary 初始化
   * @description 如检查是否开启srp登录
   */
  get(url: "/syslogin/init", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统权限】登录、菜单等
   * @summary 获取当前用户路由
   */
  get(url: "/syslogin/listRouter", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统权限】登录、菜单等
   * @summary 登录
   */
  post(url: "/syslogin/login", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统权限】登录、菜单等
   * @summary 注销登录
   */
  get(url: "/syslogin/logout", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统消息】
   * @summary 获取当前用户的消息列表
   */
  post(url: "/sysmsg/list", options?: {} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统消息】
   * @summary 根据用户消息表id，设为已读
   */
  post(url: "/sysmsg/markReadById", options: {query: {
    id: any
  }} & IDefaultOptions): Promise<null>

  /**
   * @tag 【系统消息】
   * @summary 将当前用户的消息，都设为已读
   */
  post(url: "/sysmsg/markReadForCurrentUser", options?: {} & IDefaultOptions): Promise<null>
}

  // swagger runtime. generate by swagger2ts
interface IRuntimeHeaderMapString {
  [key: string]: string;
}

interface IRuntimeHeaderConfig {
  common: IRuntimeHeaderMapString;
  [method: string]: IRuntimeHeaderMapString;
}

interface IRuntimeRequestCommonOptions extends Omit<RequestInit, "body" | "method"> {
  path?: {
    [key: string]: string;
  };
  query?: {
    [key: string]: string;
  };
  header?: {
    [key: string]: string;
  };
  body?: any;
  timeout?: number;
}

interface IRuntimeRequestOptions extends IRuntimeRequestCommonOptions {
  url: string;
  method: Uppercase<string>;
}

interface IRequestInterceptor {
  use(fn: IRequestInterceptorFn): IInterceptorCancelFn;
}

interface IResponseInterceptor {
  use(success: IResponseInterceptorSuccessFn<any>, error: IResponseInterceptorErrorFn<any>): IInterceptorCancelFn;
}

type IInterceptorCancelFn = () => void;
type IRequestInterceptorFn = (config: IRuntimeRequestOptions) => Promise<IRuntimeRequestOptions>;
type IResponseInterceptorSuccessFn<T> = (config: IRuntimeRequestOptions, response: Response, data: T) => Promise<T>;
type IResponseInterceptorErrorFn<T> = (config: IRuntimeRequestOptions, Error: RuntimeError) => Promise<T>;

interface IRuntimeForm {
  [key: string]: any;
}
class RequestInterceptor implements IRequestInterceptor {
  private _fns: IRequestInterceptorFn[] = [];
  public use(fn: IRequestInterceptorFn) {
    this._fns.push(fn);

    return () => {
      const index = this._fns.findIndex((v) => v === fn);

      if (index > -1) {
        this._fns.splice(index, 1);
      }
    };
  }

  async run(config: IRuntimeRequestOptions): Promise<IRuntimeRequestOptions> {
    for (const fn of this._fns) {
      config = await fn(config);
    }

    return config;
  }
}

class ResponseInterceptor implements IResponseInterceptor {
  private _fnsSuccess: IResponseInterceptorSuccessFn<any>[] = [];
  private _fnsError: IResponseInterceptorErrorFn<any>[] = [];
  public use(successFn: IResponseInterceptorSuccessFn<any>, errorFn: IResponseInterceptorErrorFn<any>) {
    this._fnsSuccess.push(successFn);
    this._fnsError.push(errorFn);

    return () => {
      const successIndex = this._fnsSuccess.findIndex((v) => v === successFn);
      const errorIndex = this._fnsError.findIndex((v) => v === errorFn);

      if (successIndex > -1) {
        this._fnsSuccess.splice(successIndex, 1);
      }

      if (errorIndex > -1) {
        this._fnsError.splice(errorIndex, 1);
      }
    };
  }

  async runSuccess<T>(config: IRuntimeRequestOptions, response: Response, data: T): Promise<T> {
    for (const fn of this._fnsSuccess) {
      data = await fn(config, response, data);
    }

    return data;
  }

  async runError<T>(config: IRuntimeRequestOptions, err: RuntimeError): Promise<T> {
    let res!: T;

    for (const fn of this._fnsError) {
      res = await fn(config, err);
    }

    return res;
  }
}

export class RuntimeForm<T extends IRuntimeForm> {
  constructor(private _form: T) {}
  public formData(): FormData {
    const form = new FormData();

    for (const key in this._form) {
      if (this._form[key] !== undefined) {
        form.append(key, this._form[key]);
      }
    }

    return form;
  }
}

export class RuntimeError extends Error {
  constructor(message: string, private _resp?: Response) {
    super(message);
  }

  public get response(): Response | undefined {
    return this._resp;
  }

  static fromResponse(resp: Response) {
    return new RuntimeError(resp.statusText, resp);
  }

  static fromError(err: Error) {
    return new RuntimeError(err.message || "unknown error: " + err);
  }
}

export interface IRuntime {
  readonly interceptors: { readonly request: IRequestInterceptor; readonly response: IResponseInterceptor };
  readonly defaults: { readonly timeout: number; readonly headers: IRuntimeHeaderConfig };
  readonly baseURL: string;
  domain: string;
  prefix: string;
  request<T>(config: IRuntimeRequestOptions): Promise<T>;
}
export class Runtime implements IRuntime {
  constructor(private _domain: string, private _prefix: string) {
    const methods = ["get", "post", "delete", "put", "head", "options", "trace", "patch"];

    for (const method of methods) {
      // @ts-ignore ignore error
      this[method] = (url: string, config?: IRuntimeRequestCommonOptions = {}) => {
        return this.request({
          method: method.toUpperCase(),
          url,
          ...config,
        });
      };
    }
  }

  private _requestInterceptor = new RequestInterceptor();
  private _responseInterceptor = new ResponseInterceptor();

  private _defaults = {
    timeout: 60 * 1000, // 60s,
    headers: {
      common: {
        "Content-Type": "application/json",
      },
    } as IRuntimeHeaderConfig,
  };

  public get interceptors() {
    const self = this;
    return {
      get request() {
        return self._requestInterceptor as IRequestInterceptor;
      },
      get response() {
        return self._responseInterceptor as IResponseInterceptor;
      },
    };
  }

  public get defaults() {
    return this._defaults;
  }

  private _timeout<T>(ms: number, promise: Promise<T>) {
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new RuntimeError(`timeout of ${ms}ms`));
      }, ms);

      promise
        .then((value) => {
          clearTimeout(timer);
          resolve(value);
        })
        .catch((reason) => {
          clearTimeout(timer);
          reject(reason);
        });
    });
  }

  public get baseURL(): string {
    const baseUrl = this._domain.replace(/\/$/, "") + (!/^\//.test(this._prefix) ? "/" : "") + this._prefix;

    return baseUrl.replace(/\/$/, "");
  }

  public set domain(domain: string) {
    this._domain = domain;
  }

  public set prefix(prefix: string) {
    this._prefix = prefix;
  }

  public async request<T>(config: IRuntimeRequestOptions): Promise<T> {
    const url = new URL(this.baseURL + config.url);
    config.header = config.header || {};

    const defaults = this.defaults;

    // set default header
    for (const key in defaults.headers.common) {
      config.header[key] = defaults.headers.common[key];
    }

    // set header for this method
    for (const key in defaults.headers[config.method] || {}) {
      config.header[key] = defaults.headers[config.method][key];
    }

    if (config.query) {
      for (const key in config.query) {
        const value = config.query[key];
        if (value !== undefined) {
          url.searchParams.append(key, value);
        }
      }
    }

    if (config.path) {
      for (const key in config.path) {
        const t1 = encodeURI("{");
        const t2 = encodeURI("}");
        const reg = new RegExp(`${t1}${key}${t2}`, "g");
        url.pathname = url.pathname.replace(reg, config.path[key]);
      }
    }

    config = await this._requestInterceptor.run(config);

    const headers = new Headers();

    for (const key in config.header) {
      const value = config.header[key];
      if (value !== undefined) {
        headers.set(key, value);
      }
    }

    const timeout = config.timeout || defaults.timeout;

    const body =
      config.body === undefined
        ? undefined
        : ["GET", "HEAD"].indexOf(config.method.toUpperCase()) > -1
        ? undefined
        : config.body instanceof RuntimeForm
        ? config.body.formData()
        : config.body instanceof Blob
        ? config.body
        : typeof config.body === "object"
        ? JSON.stringify(config.body)
        : config.body.toString();

    const exec = () =>
      fetch(url.toString(), {
        method: config.method,
        body: body,
        headers: headers,

        // common options
        cache: config.cache,
        credentials: config.credentials,
        integrity: config.integrity,
        keepalive: config.keepalive,
        mode: config.mode,
        redirect: config.redirect,
        referrer: config.referrer,
        referrerPolicy: config.referrerPolicy,
        signal: config.signal,
        window: config.window,
      });

    return (timeout ? this._timeout(timeout, exec()) : exec())
      .then(async (resp) => {
        if (!resp.ok) return Promise.reject(RuntimeError.fromResponse(resp));
        const contentType = resp.headers.get("content-type");
        switch (contentType) {
          case "application/json":
            return { data: await resp.json(), resp };
          case "application/x-www-form-urlencoded":
            return { data: await resp.formData(), resp };
          case "application/octet-stream":
            return { data: await resp.blob(), resp };
          default:
            return { data: await resp.text(), resp };
        }
      })
      .then(({ data, resp }) => {
        return this._responseInterceptor.runSuccess<T>(config, resp, data);
      })
      .catch((err) => {
        const runtimeErr = err instanceof RuntimeError ? err : err instanceof Error ? RuntimeError.fromError(err) : new RuntimeError(err + "");

        return this._responseInterceptor.runError<T>(config, runtimeErr);
      });
  }
}

export type IClient = SwaggerApi & IRuntime
export const defaultApi = new Runtime("http://localhost", "") as unknown as IClient
  