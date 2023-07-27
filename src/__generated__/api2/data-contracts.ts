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

/** AppCategoryCreateDto */
export interface AppCategoryCreateDto {
  /** 分组代码 */
  code: string;
  /** 备注 */
  memo?: string;
  /** 分组名 */
  name: string;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId: number;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** AppCategoryResDto */
export interface AppCategoryResDto {
  /** 分组代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 分组名 */
  name?: string;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId?: number;
  /** 父级类别名称 */
  parentName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** AppCategoryTree */
export interface AppCategoryTree {
  /** 子节点 */
  children?: TreeNode[];
  /** 分组代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 分组名 */
  name?: string;
  objType?: number;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId?: number;
  /** 父级类别名称 */
  parentName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** AppCreateDto */
export interface AppCreateDto {
  /** 应用类别id */
  appCategoryId: number;
  /** 提供商id */
  appSupplierId: number;
  /** 应用程序版本号 */
  appVersion?: string;
  /** 代码，或称应用id */
  code?: string;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 名称 */
  name: string;
  /** 机构id */
  organizationId: number;
  /** 密钥，调用api的加密签名要根据密钥计算而出 */
  secret: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用(默认) */
  status: number;
}

/** AppResDto */
export interface AppResDto {
  /** 应用类别名称 */
  appCategory?: string;
  /** 应用类别id */
  appCategoryId?: number;
  /** 应用提供商名称 */
  appSupplier?: string;
  /** 提供商id */
  appSupplierId?: number;
  /** 应用程序版本号 */
  appVersion?: string;
  /** 代码，或称应用id */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 主键id */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 名称 */
  name?: string;
  /** 机构名称 */
  organization?: string;
  /** 机构id */
  organizationId?: number;
  /** 密钥，调用api的加密签名要根据密钥计算而出 */
  secret?: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用(默认) */
  status?: number;
}

/** AppSupplierResDto */
export interface AppSupplierResDto {
  /** 联系地址 */
  addr?: string;
  /** 联系人 */
  appContacts?: string;
  /** 联系电话 */
  appContactsPhone?: string;
  /** 代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 电子邮件 */
  email?: string;
  /** 主键id */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 名称 */
  name?: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用 */
  status?: number;
}

/** AppSupplierUpdateDto */
export interface AppSupplierUpdateDto {
  /** 联系地址 */
  addr?: string;
  /** 联系人 */
  appContacts?: string;
  /** 联系电话 */
  appContactsPhone?: string;
  /** 代码 */
  code: string;
  /** 电子邮件 */
  email?: string;
  /** id */
  id: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 名称 */
  name: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用 */
  status: number;
}

/** AppUpdateDto */
export interface AppUpdateDto {
  /** 应用类别id */
  appCategoryId: number;
  /** 提供商id */
  appSupplierId: number;
  /** 主鍵 */
  id: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 名称 */
  name: string;
  /** 机构id */
  organizationId: number;
  /** 简称 */
  shortName?: string;
  /** 排序号，999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用(默认) */
  status: number;
}

/** CategoryCreateDto */
export interface CategoryCreateDto {
  /** 分组代码 */
  code: string;
  /** 备注 */
  memo?: string;
  /** 分组名 */
  name: string;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId: number;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** CategoryResDto */
export interface CategoryResDto {
  /** 分组代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 分组名 */
  name?: string;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId?: number;
  /** 父级类别名称 */
  parentName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** CategoryTree */
export interface CategoryTree {
  /** 子节点 */
  children?: TreeNode[];
  /** 分组代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 分组名 */
  name?: string;
  objType?: number;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId?: number;
  /** 父级类别名称 */
  parentName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** DashboardResDto */
export interface DashboardResDto {
  /** 平均耗时 */
  durationAvg?: number;
  /** 失败量 */
  failQty?: number;
  /** 平均请求量 */
  requestAvg?: number;
  /** 请求量 */
  requestQty?: number;
  /** 成功量 */
  successQty?: number;
  /** 成功率 */
  successRate?: number;
}

/** MapStringListFrontDropdownListItems */
export type MapStringListFrontDropdownListItems = Record<string, any>;

/** ModelAndView */
export interface ModelAndView {
  empty?: boolean;
  model?: object;
  modelMap?: Record<string, object>;
  reference?: boolean;
  status?: ModelAndViewStatusEnum;
  view?: View;
  viewName?: string;
}

/** OrganizationCreateDto */
export interface OrganizationCreateDto {
  /** 机构代码 */
  code: string;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 机构名称 */
  name: string;
  /** 父级机构id */
  parentId: number;
  /** 简称 */
  shortName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用(默认) */
  status: number;
  /** 机构类型：0-机构(默认)，1-科室 */
  type: number;
}

/** OrganizationResDto */
export interface OrganizationResDto {
  /** 机构代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 是否有子节点 */
  hasChildren?: boolean;
  /** id */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 机构名称 */
  name?: string;
  /** 父级机构id */
  parentId?: number;
  /** 父级机构 */
  parentName?: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用(默认) */
  status?: number;
  /** 机构类型：0-机构(默认)，1-科室 */
  type?: number;
}

/** OrganizationTree */
export interface OrganizationTree {
  /** 子节点 */
  children?: TreeNode[];
  /** 机构代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /** ID */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 机构名称 */
  name?: string;
  objType?: number;
  /** 父级ID */
  parentId?: number;
  /** 父级机构 */
  parentName?: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用(默认) */
  status?: number;
  /** 机构类型：0-机构(默认)，1-科室 */
  type?: number;
}

/** R */
export interface R {
  code?: number;
  data?: object;
  msg?: string;
}

/** SmPoObjectOfCategoryTable */
export interface SmPoObjectOfCategoryTable {
  code?: number;
  data?: SmCategoryPo;
  msg?: string;
}

/** ServiceParamResDto */
export interface ServiceParamResDto {
  /** 子节点 */
  children?: TreeNode[];
  /** 数据长度 */
  dataLength?: string;
  /** 数据类型 */
  dataType?: string;
  /** 默认值 */
  defaultVal?: string;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /** id */
  id?: number;
  /** 是否属性,0=否(非xml默认为0)，1=是，仅适用于xml节点属性 */
  isAttr?: number;
  /** 是否循环,0=否，1=是 */
  loopFlag?: number;
  /** 描述 */
  memo?: string;
  /** 参数代码 */
  paramCode?: string;
  /** 参数名称 */
  paramName?: string;
  /** 参数类型，取值：in-header、in-query、in-path、in-body、out-header、out-body */
  paramType?: string;
  /** 上级节点id,0表示根级 */
  parentId?: number;
  /** 上级节点名称 */
  parentParamName?: string;
  /** 小数点位数 */
  pointLength?: string;
  /** 是否必填,0=否，1=是 */
  requiredFlag?: number;
  /** 示例值 */
  sampleVal?: string;
  /** 服务id,对应sm_service_info表的id */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /** 值域代码 */
  valDictCode?: string;
  /** 值格式，例如可以指定日期时间格式 */
  valFormat?: string;
  /** 验证值的正则表达式 */
  valRegex?: string;
}

/** ServiceParamTreeResDto */
export interface ServiceParamTreeResDto {
  /** 对应参数类型中的in-body */
  inBodyList?: ServiceParamResDto[];
  /** 对应参数类型中的in-header */
  inHeaderList?: ServiceParamResDto[];
  /** 对应参数类型中的in-path */
  inPathList?: ServiceParamResDto[];
  /** 对应参数类型中的in-query */
  inQueryList?: ServiceParamResDto[];
  /** 对应参数类型中的out-body */
  outBodyList?: ServiceParamResDto[];
  /** 对应参数类型中的out-header */
  outHeaderList?: ServiceParamResDto[];
}

/** SysDataSyncTaskResDto */
export interface SysDataSyncTaskResDto {
  ctime?: string;
  cuid?: number;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  mtime?: string;
  muid?: number;
  /** 重试次数，从1开始，最大30次，重试间隔30秒 */
  retryIndex?: number;
  /** 源对象本次同步信息的上下文内容，json格式，如果为空，则表示删除，“source_type”不同，对应不同的json格式 */
  sourceContext?: string;
  /** 源对象的主键 */
  sourceKeyValue?: string;
  /** 源对象类型 */
  sourceType?: string;
  /** 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败 */
  status?: number;
  /** 工作节点id */
  workerId?: number;
  /** 工作节点名称 */
  workerName?: string;
}

/** SysWorkerNodeResDto */
export interface SysWorkerNodeResDto {
  /** 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量 */
  apiMaxNo?: number;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 主键id */
  id?: number;
  /** IP地址 */
  ip?: string;
  /** 最近心跳测试结果说明 */
  lastHeartbeatMemo?: string;
  /** 上一次心跳正常的时间 */
  lastHeartbeatOkTime?: string;
  /** 最近心跳测试结果状态：0-失败，1-正常 */
  lastHeartbeatStatus?: number;
  /** 最近心跳测试时间 */
  lastHeartbeatTime?: string;
  /** 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务） */
  loadWeight?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 工作节点名称 */
  name?: string;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType?: string;
  /** 在线状态：0-离线，1-在线 */
  onlineStatus?: number;
  /** 用于集成引擎，此字段存放的是对外开放的http协议端口号 */
  portApi?: number;
  /** 用于存放Springboot的web容器端口 */
  portBoot?: number;
  /** 最近心跳失败的次数，从最近一次心跳正常之后开始计数 */
  recentHeartbeatFailCount?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 上线时间，结合当前时间可以计算运行时长 */
  startTime?: string;
  /** 状态：0-停用，1-启用(默认) */
  status?: number;
  /** 离线时间，结合上线时间可以计算运行时长 */
  stopTime?: string;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode?: string;
  /** 工作节点的程序版本 */
  version?: string;
  /** 是否可见：0-否，1-是(默认) */
  visible?: number;
  /** 引擎分组id */
  workerGroupId?: number;
  /** 引擎分组名称 */
  workerGroupName?: string;
}

/** TreeNode */
export interface TreeNode {
  /** 子节点 */
  children?: TreeNode[];
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /** ID */
  id?: number;
  /** 父级ID */
  parentId?: number;
}

/** UserInfo */
export interface UserInfo {
  /** 权限码列表 */
  permissions?: string[];
  /** 角色列表 */
  roles?: string[];
  /** 用户 */
  sysUser?: SysUser;
}

/** View */
export interface View {
  contentType?: string;
}

/** GlobalConstantQueryCriteria */
export interface GlobalConstantQueryCriteria {
  /** 输入条件(code 或 value) */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 页大小 */
  size?: number;
  startIndex?: number;
}

/**
 * PagingQueryObjects
 * PagingQueryObjects
 */
export interface PagingQueryObjects {
  /** 所属服务分组id */
  categoryId?: number;
  /** 服务编码 */
  code?: string;
  /** 服务名称或服务code（模糊查询） */
  condition?: string;
  /** 页码 */
  current?: number;
  /** id */
  id?: number;
  /** 服务名称 */
  name?: string;
  /** 操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
  optType?: string;
  /** 页大小 */
  size?: number;
  startIndex?: number;
  /** 服务状态：1=待设计，2=待配置，3=待发布，4=已发布 */
  status?: number;
  /** 引擎分组id */
  workerGroupId?: number;
}

/** FrontDropdownListItem */
export interface FrontDropdownListItem {
  /** 下拉项代码，类似key的作用，传给后端使用 */
  code?: object;
  /** 是否禁用选项：0-否，1-是 */
  disabled?: number;
  /** 扩展信息 */
  ext?: object;
  /** 是否默认选项：0-否，1-是 */
  isDefault?: number;
  /** 下拉项名称，用于显示 */
  name?: string;
}

/** FrontDropdownListItemString */
export interface FrontDropdownListItemString {
  /** 下拉项代码，类似key的作用，传给后端使用 */
  code?: string;
  /** 是否禁用选项：0-否，1-是 */
  disabled?: number;
  /** 扩展信息 */
  ext?: object;
  /** 是否默认选项：0-否，1-是 */
  isDefault?: number;
  /** 下拉项名称，用于显示 */
  name?: string;
}

/** ManufacturerInformationQueryCriteria */
export interface ManufacturerInformationQueryCriteria {
  /** 手机号 */
  appContactsPhone?: string;
  /** 输入条件(code 或 name) */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 页大小 */
  size?: number;
  startIndex?: number;
  /** 状态：0-停用，1-启用 */
  status?: number;
}

/** BasicPagingQueryObjects */
export interface BasicPagingQueryObjects {
  /** 机构代码 */
  code: string;
  /** 页码 */
  current?: number;
  /** id */
  id: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 机构名称 */
  name: string;
  /** 父级机构id */
  parentId: number;
  /** 简称 */
  shortName?: string;
  /** 页大小 */
  size?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
  startIndex?: number;
  /** 状态：0-停用，1-启用(默认) */
  status: number;
  /** 机构类型：0-机构(默认)，1-科室 */
  type: number;
}

/** BasicPagingResultObjectSystemAuditLogPoObject */
export interface BasicPagingResultObjectSystemAuditLogPoObject {
  /** 列表数据 */
  records?: SystemAuditLogPoObject[];
  /** 总记录数 */
  total?: number;
}

/** BasicPagingResultObjectSystemMessageVoObject */
export interface BasicPagingResultObjectSystemMessageVoObject {
  /** 列表数据 */
  records?: SystemMessageVoObject[];
  /** 总记录数 */
  total?: number;
}

/** BasicPagingResultObjectSystemConfigurationParameterVoObject */
export interface BasicPagingResultObjectSystemConfigurationParameterVoObject {
  /** 列表数据 */
  records?: SystemConfigurationParameterVoObject[];
  /** 总记录数 */
  total?: number;
}

/**
 * StoredProcedureParameters
 * StoredProcedureParameters
 */
export interface StoredProcedureParameters {
  /** 参数代码 */
  code?: string;
  /** 对应数据库中的数据类型 */
  dataTypeDb?: string;
  /** 参数方向：in-输入，out-输出，inout-输入输出，outcursor - 输出(游标) */
  direct?: string;
  /** 参数名称 */
  name?: string;
  /** 取值路径 */
  valuePath?: string;
  /** 值来源类别 */
  valueSourceType?: string;
}

/** WorkNodeGroupingQueryCriteria */
export interface WorkNodeGroupingQueryCriteria {
  /** 输入条件(name) */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 页大小 */
  size?: number;
  startIndex?: number;
}

/** WorkNodeQueryCriteria */
export interface WorkNodeQueryCriteria {
  /** 输入条件(name) */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 最近心跳测试结果状态：0-失败，1-正常 */
  lastHeartbeatStatus?: number;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType?: string;
  /** 在线状态：0-离线，1-在线 */
  onlineStatus?: number;
  /** 页大小 */
  size?: number;
  startIndex?: number;
  /** 状态：0-停用，1-启用(默认) */
  status?: number;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode?: string;
}

/** ApplicationSystemGrouping */
export interface ApplicationSystemGrouping {
  /** 输入框条件（组织名称/类别代码） */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 页大小 */
  size?: number;
  startIndex?: number;
}

/** ApplicationSystemPagingQueryObject */
export interface ApplicationSystemPagingQueryObject {
  /** appId列表 */
  appIds?: number[];
  /** 输入条件 */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 懒加载 */
  lazy?: boolean;
  /** 页大小 */
  size?: number;
  startIndex?: number;
  /** 0-停用，1-在用 */
  status?: number;
}

/**
 * BatchMaintenanceParameters
 * BatchMaintenanceParameters
 */
export interface BatchMaintenanceParameters {
  /** 新增或修改参数列表 */
  serviceParamUpdateDtoList: ServiceParametersUpdate[];
  /** 要删除的参数id集合 */
  toDoDeleted?: number[];
}

/**
 * TheProviderWebserviceReturnsTheObject
 * TheProviderWebserviceReturnsTheObject
 */
export interface TheProviderWebserviceReturnsTheObject {
  /** 提供方id */
  appId?: number;
  /** 提供方地址 */
  endpointUrl?: string;
  /** 方法名 */
  func?: string;
  /** id */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 提供方名称 */
  name?: string;
  /** 命名空间 */
  ns?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 个性预处理器id */
  preId?: number;
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /** 个性结果处理器id */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /** 服务ID */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /** 是否启用：0-停用，1-启用 */
  status?: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type?: string;
}

/**
 * ProviderParameterString
 * 提供方-参数
 */
export interface ProviderParameterString {
  /** 参数代码 */
  code?: string;
  /** 参数名称 */
  name?: string;
  /** 取值路径 */
  valuePath?: string;
  /** 值来源类别 */
  valueSourceType?: string;
}

/**
 * ProviderAddHttpGet
 * ProviderAddHttpGet
 */
export interface ProviderAddHttpGet {
  /** 提供方id */
  appId: number;
  /** 提供方地址 */
  endpointUrl: string;
  /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
  headerParams?: ProviderParameterString[];
  /** id, 新增不传值, 更新传值 */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** url路径中的参数 */
  pathParams?: ProviderParameterString[];
  /** 个性预处理器id */
  preId?: number;
  /** url中的query参数 */
  queryParams?: ProviderParameterString[];
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /** 个性结果处理器id */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /** 服务ID */
  serviceId: number;
  /** 是否启用：0-停用，1-启用 */
  status: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * ProviderNewHttpPost
 * ProviderNewHttpPost
 */
export interface ProviderNewHttpPost {
  /** 提供方id */
  appId: number;
  /** 请求消息体，适用于“contentType”属性为json、xml、text等情况，消息内部结构定义id，用于json、xml、hl7等复杂结构 */
  bodyOneParam?: BodyOneParam;
  /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
  bodyTableParams?: ProviderParameterString[];
  /** 提供方地址 */
  endpointUrl: string;
  /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
  headerParams?: ProviderParameterString[];
  /** id, 新增不传值, 更新传值 */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** url路径中的参数 */
  pathParams?: ProviderParameterString[];
  /** 个性预处理器id */
  preId?: number;
  /** url中的query参数 */
  queryParams?: ProviderParameterString[];
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /** 个性结果处理器id */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /** 服务ID */
  serviceId: number;
  /** 是否启用：0-停用，1-启用 */
  status: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * ProviderNewSp
 * ProviderNewSp
 */
export interface ProviderNewSp {
  /** 提供方id */
  appId: number;
  /** 数据源id */
  dsId?: number;
  /** id, 新增不传值, 更新传值 */
  id?: number;
  /** 入参配置 */
  params?: StoredProcedureParameters[];
  /** 服务ID */
  serviceId: number;
  /** 存储过程名 */
  spName?: string;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * ProviderNewSql
 * ProviderNewSql
 */
export interface ProviderNewSql {
  /** 提供方id */
  appId: number;
  /** 提供方地址 */
  endpointUrl: string;
  /** id, 新增不传值, 更新传值 */
  id?: number;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 个性预处理器id */
  preId?: number;
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /** 个性结果处理器id */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /** 服务ID */
  serviceId: number;
  /** SQL配置集合 */
  sqlConfigurations?: ProviderAddSqlTreeStructure[];
  /** 是否启用：0-停用，1-启用 */
  status: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * ProviderNewWebservice
 * ProviderNewWebservice
 */
export interface ProviderNewWebservice {
  /** 提供方id */
  appId: number;
  /** 提供方地址 */
  endpointUrl: string;
  /** 方法名 */
  func: string;
  /** id, 新增不传值, 更新传值 */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat: string;
  /** 命名空间 */
  ns: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 个性预处理器id */
  preId?: number;
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /** 个性结果处理器id */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /** 服务ID */
  serviceId: number;
  /** 是否启用：0-停用，1-启用 */
  status: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * ProviderAddSqlTreeStructure
 * ProviderAddSqlTreeStructure
 */
export interface ProviderAddSqlTreeStructure {
  /** 子级sql对象 */
  children?: ProviderAddSqlTreeStructure[];
  /** 数据源id */
  dsId?: number;
  /** 是否开启总事务：0-否，1-是，用于将所有Sql脚本放在一个事务中控制 */
  isTrans?: number;
  /** SQL脚本内容 */
  scriptContent?: string;
  /** SQL脚本名称 */
  scriptName?: string;
}

/**
 * ProviderTreeParameters
 * ProviderTreeParameters
 */
export interface ProviderTreeParameters {
  /** 子级参数 */
  children?: ProviderTreeParameters[];
  /** 参数代码 */
  code?: string;
  /** 参数名称 */
  name?: string;
  /** 取值路径 */
  valuePath?: string;
  /** 值来源类别 */
  valueSourceType?: string;
}

/**
 * ProviderConfigurationReturnObject
 * ProviderConfigurationReturnObject
 */
export interface ProviderConfigurationReturnObject {
  /** 提供方id */
  appId?: number;
  /** 请求消息体，适用于“contentType”属性为json、xml、text等情况，消息内部结构定义id，用于json、xml、hl7等复杂结构 */
  bodyOneParam?: BodyOneParam;
  /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
  bodyTableParams?: ProviderParameterString[];
  /** 提供方地址 */
  endpointUrl?: string;
  /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
  headerParams?: ProviderParameterString[];
  /** id */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 提供方名称 */
  name?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** url路径中的参数 */
  pathParams?: ProviderParameterString[];
  /** 个性预处理器id */
  preId?: number;
  /** url中的query参数 */
  queryParams?: ProviderParameterString[];
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /** 个性结果处理器id */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /** 服务ID */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /** 是否启用：0-停用，1-启用 */
  status?: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type?: string;
}

/** DataSynchronizationTaskQueryCriteria */
export interface DataSynchronizationTaskQueryCriteria {
  /** 输入条件(name) */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 页大小 */
  size?: number;
  /** 源对象类型 */
  sourceType?: string;
  startIndex?: number;
  /** 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败 */
  status?: string;
  /** 工作节点id */
  workerId?: number;
}

/**
 * NewProviderValue
 * NewProviderValue
 */
export interface NewProviderValue {
  /** 参数代码 */
  paramCode?: string;
  /** 参数名称 */
  paramName?: string;
}

/**
 * ServiceList
 * ServiceList
 */
export interface ServiceList {
  /** 服务代码 */
  code?: string;
  /** 描述 */
  memo?: string;
  /** 服务名称 */
  name?: string;
  /** 在线情况 */
  onlineStatus?: string;
  /** 版本号，由主版本号与次版本号拼接而成，英文句号分隔 */
  version?: string;
  /** 所属引擎类别名称 */
  workerGroupName?: string;
}

/**
 * ServiceParametersNew
 * ServiceParametersNew
 */
export interface ServiceParametersNew {
  /** 数据长度 */
  dataLength?: string;
  /** 数据类型 */
  dataType?: string;
  /** 默认值 */
  defaultVal?: string;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 是否属性,0=否(非xml默认为0)，1=是，仅适用于xml节点属性 */
  isAttr?: number;
  /** 是否循环,0=否，1=是 */
  loopFlag?: number;
  /** 描述 */
  memo?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 参数代码 */
  paramCode: string;
  /** 参数名称 */
  paramName?: string;
  /** 参数类型，取值：in-header、in-query、in-path、in-body、out-header、out-body */
  paramType: string;
  /** 上级节点id,0表示根级 */
  parentId: number;
  /** 小数点位数 */
  pointLength?: string;
  /** 是否必填,0=否，1=是 */
  requiredFlag?: number;
  /** 示例值 */
  sampleVal?: string;
  /** 服务id,对应sm_service_info表的id */
  serviceId: number;
  /** 值域代码 */
  valDictCode?: string;
  /** 值格式，例如可以指定日期时间格式 */
  valFormat?: string;
  /** 验证值的正则表达式 */
  valRegex?: string;
}

/**
 * ServiceParametersUpdate
 * ServiceParametersUpdate
 */
export interface ServiceParametersUpdate {
  /** 数据长度 */
  dataLength?: string;
  /** 数据类型 */
  dataType?: string;
  /** 默认值 */
  defaultVal?: string;
  /** id */
  id: number;
  /** 是否属性,0=否(非xml默认为0)，1=是，仅适用于xml节点属性 */
  isAttr?: number;
  /** 是否循环,0=否，1=是 */
  loopFlag?: number;
  /** 描述 */
  memo?: string;
  /** 参数代码 */
  paramCode: string;
  /** 参数名称 */
  paramName?: string;
  /** 参数类型，取值：in-header、in-query、in-path、in-body、out-header、out-body */
  paramType: string;
  /** 上级节点id,0表示根级 */
  parentId: number;
  /** 小数点位数 */
  pointLength?: string;
  /** 是否必填,0=否，1=是 */
  requiredFlag?: number;
  /** 示例值 */
  sampleVal?: string;
  /** 服务id,对应sm_service_info表的id */
  serviceId: number;
  /** 值域代码 */
  valDictCode?: string;
  /** 值格式，例如可以指定日期时间格式 */
  valFormat?: string;
  /** 验证值的正则表达式 */
  valRegex?: string;
}

/**
 * ServiceDefinition
 * ServiceDefinition
 */
export interface ServiceDefinition {
  /** 所属服务类别id，对应sm_category表的数据id */
  categoryId: number;
  /** 服务编码（格式：只能包含字母数字中划线,最多50位） */
  code: string;
  /** 日志级别：all-全链路，entry-入口日志（记录入出参消息，不记录中间步骤日志），entryNoParam-入口日志（不记录入出参消息，不记录中间步骤日志，便于监控统计服务调用耗时与次数等），error-仅错误时记录日志 */
  logLevel?: string;
  /** 服务描述 */
  memo?: string;
  /** 服务名称 */
  name: string;
  /** 开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
  openProtocol: string;
  /** 操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
  optType: string;
  /** 服务模式，取值：hosp - 院标，hlht - 国标(互联互通)，diy-定制(自定义) */
  serviceMode?: string;
  /** 服务模式名称 */
  serviceModeName?: string;
  /** 服务请求路径，全局唯一 */
  urlPath?: string;
  /** 服务版本号，格式：只能由两个整数和点号拼接而成，其中点号左侧整数范围为1~999，点号右侧整数范围为0~999，例如【1.0】【999.999】）！ */
  version: string;
}

/**
 * ServiceMonitoringPanelQuery
 * ServiceMonitoringPanelQuery
 */
export interface ServiceMonitoringPanelQuery {
  /** 应用ID */
  appId?: string;
  /** 结束时间 */
  end?: string;
  /** API服务ID */
  serviceId?: string;
  /** 开始时间 */
  start?: string;
}

/**
 * ServiceSubscriptionQueryServiceList
 * ServiceSubscriptionQueryServiceList
 */
export interface ServiceSubscriptionQueryServiceList {
  /** 服务名称或服务code（模糊查询） */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 页大小 */
  size?: number;
  startIndex?: number;
}

/** UserLoginObject */
export interface UserLoginObject {
  /** 验证码 */
  code?: string;
  /** 密码 */
  password?: string;
  /** 用户名 */
  username?: string;
  /** 唯一标识 */
  uuid?: string;
}

/** LoginInitializationVoObject */
export interface LoginInitializationVoObject {
  /** 对接的统一权限系统类型：local（使用本地权限和登录），srp（使用SRP管理后台），sso（使用单点登录管理后台） */
  authType?: string;
  /** 统一权限的前端登录页地址 */
  loginUiUrl?: string;
  /** 注销登录的后端api地址 */
  logoutApiUrl?: string;
}

/** QueryCriteriaForThirdPartyApiServices */
export interface QueryCriteriaForThirdPartyApiServices {
  /** 输入条件(code 或 name) */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 页大小 */
  size?: number;
  startIndex?: number;
  /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
  type: string;
}

/** SystemAuditLogPoObject */
export interface SystemAuditLogPoObject {
  /** 客户端IP */
  clientIp?: string;
  /** 执行时长(毫秒) */
  cost?: number;
  /** 主键id */
  id?: number;
  /** 请求方法 */
  method?: string;
  /** 操作时间 */
  operTime?: string;
  /** 请求URL */
  operUrl?: string;
  /** 操作名称 */
  operation?: string;
  /** 请求参数（json格式） */
  requestParamJson?: string;
  /** 返回参数（json格式） */
  responseParamJson?: string;
  /** 状态（0-成功，1-失败） */
  status?: number;
  /** 模块标题 */
  title?: string;
  /** 用户名 */
  username?: string;
}

/** QueryObjectsForSystemControlParameters */
export interface QueryObjectsForSystemControlParameters {
  /** 参数代码，模糊匹配 */
  code?: string;
  /** 页码 */
  current?: number;
  /** 参数名，模糊匹配 */
  name?: string;
  /** 页大小 */
  size?: number;
  startIndex?: number;
}

/** QueryObjectsForSystemLogs */
export interface QueryObjectsForSystemLogs {
  /** 页码 */
  current?: number;
  /** 结束时间 */
  endTime?: string;
  /** 页大小 */
  size?: number;
  startIndex?: number;
  /** 开始时间 */
  startTime?: string;
  /** 状态（0-成功，1-失败） */
  status?: number;
  /** 用户名 */
  username?: string;
}

/** SystemMessageVoObject */
export interface SystemMessageVoObject {
  /** 消息内容 */
  content?: string;
  /** 主键id，用户消息表主键id */
  id?: number;
  /** 消息发布时间 */
  publishTime?: string;
  /** 消息发布者的用户名 */
  publishUsername?: string;
  /** 消息阅读时间 */
  readTime?: string;
  /** 消息状态：0 - 未读，1 - 已读 */
  status?: number;
  /** 消息简介 */
  summary?: string;
  /** 消息标题 */
  title?: string;
}

/** QueryObjectsForSystemMessages */
export interface QueryObjectsForSystemMessages {
  /** 页码 */
  current?: number;
  /** 结束时间 */
  endTime?: string;
  /** 页大小 */
  size?: number;
  startIndex?: number;
  /** 开始时间 */
  startTime?: string;
  /** 阅读状态：0-未读，1-已读 */
  status?: number;
}

/** SystemConfigurationParameterVoObject */
export interface SystemConfigurationParameterVoObject {
  /** 候选值，主要用于界面的下拉列表，多项使用英文逗号分隔，每项组成规则：“值:名称,值:名称,…”，如果候选值包含英文逗号或冒号，需要斜线转义，格式为：\,和 \: ，示例：【0:隐藏,1:显示】、【0:否,1:是】 */
  candidateValues?: string;
  /** 参数代码 */
  code?: string;
  /** 控件类型：INPUT（默认）、SELECT、DATE、TIME、DATETIME、RADIO、CHECKBOX等 */
  controlType?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建者id */
  cuid?: number;
  dropdownItems?: FrontDropdownListItemString[];
  /** 分组名称，例如某些参数是同一个页面的，则可以设置相同的组名 */
  groupName?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改者id */
  muid?: number;
  /** 参数名 */
  name?: string;
  /** 验证参数值的正则表达式 */
  regex?: string;
  /** 排序号 */
  sortNo?: number;
  /** 状态：0-停用，1-启用 */
  status?: number;
  /** 计量单位代码 */
  unitCode?: string;
  /** 计量单位名称 */
  unitName?: string;
  /** 参数值 */
  value?: string;
  /** 是否可见：0-否，1-是 */
  visible?: number;
}

/**
 * RoutingGraphServiceModule
 * RoutingGraphServiceModule
 */
export interface RoutingGraphServiceModule {
  /** 服务代码 */
  code?: string;
  /** 服务id */
  endpointId?: number;
  /** 服务id */
  endpointName?: string;
  /** 是否启用：0-停用，1-启用 */
  status?: number;
}

/**
 * RoutingGraphSystemModule
 * RoutingGraphSystemModule
 */
export interface RoutingGraphSystemModule {
  /** 主键id */
  appId?: number;
  /** 名称 */
  appName?: string;
  /** 简称 */
  shortName?: string;
}

/**
 * RoutingGraphReturnObject
 * RoutingGraphReturnObject
 */
export interface RoutingGraphReturnObject {
  /** 系统列表 */
  appList?: RoutingGraphSystemModule[];
  /** ServiceList */
  endpointList?: RoutingGraphServiceModule[];
  /** 主键id */
  id?: number;
  /** 服务名称 */
  name?: string;
}

/** RouteDisplayInformation */
export interface RouteDisplayInformation {
  /** 设置该路由在侧边栏和面包屑中展示的名字 */
  activeMenu?: string;
  /** 设置该路由的图标，对应路径src/assets/icons/svg */
  icon?: string;
  /** 内链地址（http(s)://开头） */
  link?: string;
  /** 设置为true，则不会被 <keep-alive>缓存 */
  noCache?: boolean;
  /** 设置该路由在侧边栏和面包屑中展示的名字 */
  title?: string;
}

/** RoutingConfigurationInformation */
export interface RoutingConfigurationInformation {
  /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
  alwaysShow?: boolean;
  /** 子路由 */
  children?: RoutingConfigurationInformation[];
  /** 组件地址 */
  component?: string;
  /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
  hidden?: boolean;
  /** 其他元素 */
  meta?: RouteDisplayInformation;
  /** 路由名字 */
  name?: string;
  /** 路由地址 */
  path?: string;
  /** 路由参数：如 {"id": 1, "name": "ry"} */
  query?: string;
  /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
  redirect?: string;
}

/**
 * ReturnToSystemProvider
 * 供服务生命周期-新增提供方中使用
 */
export interface ReturnToSystemProvider {
  /** 代码，或称应用id */
  code?: string;
  /** 主键id */
  id?: number;
  /** 名称 */
  name?: string;
  /** 简称 */
  shortName?: string;
}

/**
 * PreprocessorNew
 * PreprocessorNew
 */
export interface PreprocessorNew {
  /** 处理器定义 */
  compSchema: string;
  /** 服务id */
  serviceId: number;
  /** 处理器类型 */
  type: string;
}

/** R«AppCategoryResDto» */
export interface RAppCategoryResDto {
  code?: number;
  data?: AppCategoryResDto;
  msg?: string;
}

/** R«AppResDto» */
export interface RAppResDto {
  code?: number;
  data?: AppResDto;
  msg?: string;
}

/** R«AppSupplierResDto» */
export interface RAppSupplierResDto {
  code?: number;
  data?: AppSupplierResDto;
  msg?: string;
}

/** R«CategoryResDto» */
export interface RCategoryResDto {
  code?: number;
  data?: CategoryResDto;
  msg?: string;
}

/** R«DashboardResDto» */
export interface RDashboardResDto {
  code?: number;
  data?: DashboardResDto;
  msg?: string;
}

/** R«List«AppCategoryResDto»» */
export interface RListAppCategoryResDto {
  code?: number;
  data?: AppCategoryResDto[];
  msg?: string;
}

/** R«List«AppCategoryTree»» */
export interface RListAppCategoryTree {
  code?: number;
  data?: AppCategoryTree[];
  msg?: string;
}

/** R«List«CategoryResDto»» */
export interface RListCategoryResDto {
  code?: number;
  data?: CategoryResDto[];
  msg?: string;
}

/** R«List«CategoryTree»» */
export interface RListCategoryTree {
  code?: number;
  data?: CategoryTree[];
  msg?: string;
}

/** R«List«OrganizationResDto»» */
export interface RListOrganizationResDto {
  code?: number;
  data?: OrganizationResDto[];
  msg?: string;
}

/** R«List«OrganizationTree»» */
export interface RListOrganizationTree {
  code?: number;
  data?: OrganizationTree[];
  msg?: string;
}

/** R«List«ServiceInfoDetailDto对象»» */
export interface RListServiceInfoDetailDto {
  code?: number;
  data?: ServiceInfoDetailDto[];
  msg?: string;
}

/** R«List«sm_common_pre_processor表的po对象»» */
export interface RListSmCommonPreProcessorPo {
  code?: number;
  data?: SmCommonPreProcessorPo[];
  msg?: string;
}

/** R«List«sm_common_result_processor表的po对象»» */
export interface RListSmCommonResultProcessorPo {
  code?: number;
  data?: SmCommonResultProcessorPo[];
  msg?: string;
}

/** R«List«sys_app_supplier表的po对象»» */
export interface RListSysAppSupplierPo {
  code?: number;
  data?: SysAppSupplierPo[];
  msg?: string;
}

/** R«List«sys_app表的po对象»» */
export interface RListSysAppPo {
  code?: number;
  data?: SysAppPo[];
  msg?: string;
}

/** R«List«sys_constant表的po对象»» */
export interface RListSysConstantPo {
  code?: number;
  data?: SysConstantPo[];
  msg?: string;
}

/** R«List«sys_data_resource表的po对象»» */
export interface RListSysDataResourcePo {
  code?: number;
  data?: SysDataResourcePo[];
  msg?: string;
}

/** R«List«sys_data_source表的po对象»» */
export interface RListSysDataSourcePo {
  code?: number;
  data?: SysDataSourcePo[];
  msg?: string;
}

/** R«List«sys_data_sync_task表的po对象»» */
export interface RListSysDataSyncTaskPo {
  code?: number;
  data?: SysDataSyncTaskPo[];
  msg?: string;
}

/** R«List«sys_third_service表的po对象»» */
export interface RListSysThirdServicePo {
  code?: number;
  data?: SysThirdServicePo[];
  msg?: string;
}

/** R«List«sys_worker_node表的po对象»» */
export interface RListSysWorkerNodePo {
  code?: number;
  data?: SysWorkerNodePo[];
  msg?: string;
}

/** R«List«交互日志-高级检索结果»» */
export interface RList {
  code?: number;
  data?: InteractionLog3[];
  msg?: string;
}

/** R«List«新增提供方-值»» */
export interface RList2 {
  code?: number;
  data?: NewProviderValue[];
  msg?: string;
}

/** R«List«服务列表»» */
export interface RList {
  code?: number;
  data?: ServiceList[];
  msg?: string;
}

/** R«List«路由配置信息»» */
export interface RList2 {
  code?: number;
  data?: RoutingConfigurationInformation[];
  msg?: string;
}

/** R«List«返回系统提供方»» */
export interface RList3 {
  code?: number;
  data?: ReturnToSystemProvider[];
  msg?: string;
}

/** R«Map«string,List«前端下拉列表项»»» */
export interface RMapStringList {
  code?: number;
  data?: Record<string, FrontDropdownListItem[]>;
  msg?: string;
}

/** R«OrganizationResDto» */
export interface ROrganizationResDto {
  code?: number;
  data?: OrganizationResDto;
  msg?: string;
}

/** R«ServiceInfoDetailDto对象» */
export interface RServiceInfoDetailDto {
  code?: number;
  /** 服务详情对象 */
  data?: ServiceInfoDetailDto;
  msg?: string;
}

/** R«ServiceParamResDto» */
export interface RServiceParamResDto {
  code?: number;
  data?: ServiceParamResDto;
  msg?: string;
}

/** R«ServiceParamTreeResDto» */
export interface RServiceParamTreeResDto {
  code?: number;
  data?: ServiceParamTreeResDto;
  msg?: string;
}

/** R«SysDataSyncTaskResDto» */
export interface RSysDataSyncTaskResDto {
  code?: number;
  data?: SysDataSyncTaskResDto;
  msg?: string;
}

/** R«SysLogo对象» */
export interface RSysLogo {
  code?: number;
  data?: SysLogo;
  msg?: string;
}

/** R«SysWorkerNodeResDto» */
export interface RSysWorkerNodeResDto {
  code?: number;
  data?: SysWorkerNodeResDto;
  msg?: string;
}

/** R«UserInfo» */
export interface RUserInfo {
  code?: number;
  data?: UserInfo;
  msg?: string;
}

/** R«sm_common_pre_processor表的po对象» */
export interface RSmCommonPreProcessorPo {
  code?: number;
  data?: SmCommonPreProcessorPo;
  msg?: string;
}

/** R«sm_common_result_processor表的po对象» */
export interface RSmCommonResultProcessorPo {
  code?: number;
  data?: SmCommonResultProcessorPo;
  msg?: string;
}

/** R«sm_my_pre_processor表的po对象» */
export interface RSmMyPreProcessorPo {
  code?: number;
  data?: SmMyPreProcessorPo;
  msg?: string;
}

/** R«sm_my_result_processor表的po对象» */
export interface RSmMyResultProcessorPo {
  code?: number;
  data?: SmMyResultProcessorPo;
  msg?: string;
}

/** R«sm_subscription表的po对象» */
export interface RSmSubscriptionPo {
  code?: number;
  data?: SmSubscriptionPo;
  msg?: string;
}

/** R«string» */
export interface RString {
  code?: number;
  data?: string;
  msg?: string;
}

/** R«sys_app_category表的po对象» */
export interface RSysAppCategoryPo {
  code?: number;
  data?: SysAppCategoryPo;
  msg?: string;
}

/** R«sys_app_supplier表的po对象» */
export interface RSysAppSupplierPo {
  code?: number;
  data?: SysAppSupplierPo;
  msg?: string;
}

/** R«sys_app表的po对象» */
export interface RSysAppPo {
  code?: number;
  data?: SysAppPo;
  msg?: string;
}

/** R«sys_constant表的po对象» */
export interface RSysConstantPo {
  code?: number;
  data?: SysConstantPo;
  msg?: string;
}

/** R«sys_data_resource表的po对象» */
export interface RSysDataResourcePo {
  code?: number;
  data?: SysDataResourcePo;
  msg?: string;
}

/** R«sys_data_source表的po对象» */
export interface RSysDataSourcePo {
  code?: number;
  data?: SysDataSourcePo;
  msg?: string;
}

/** R«sys_data_sync_task表的po对象» */
export interface RSysDataSyncTaskPo {
  code?: number;
  data?: SysDataSyncTaskPo;
  msg?: string;
}

/** R«sys_organization表的po对象» */
export interface RSysOrganizationPo {
  code?: number;
  data?: SysOrganizationPo;
  msg?: string;
}

/** R«sys_third_service表的po对象» */
export interface RSysThirdServicePo {
  code?: number;
  data?: SysThirdServicePo;
  msg?: string;
}

/** R«sys_worker_group表的po对象» */
export interface RSysWorkerGroupPo {
  code?: number;
  data?: SysWorkerGroupPo;
  msg?: string;
}

/** R«sys_worker_node表的po对象» */
export interface RSysWorkerNodePo {
  code?: number;
  data?: SysWorkerNodePo;
  msg?: string;
}

/** R«交互日志-详情» */
export interface R {
  code?: number;
  /** InteractionLog-详情 */
  data?: InteractionLog;
  msg?: string;
}

/** R«基本的分页结果对象«系统审计日志po对象»» */
export interface RPo {
  code?: number;
  data?: BasicPagingResultObjectSystemAuditLogPoObject;
  msg?: string;
}

/** R«基本的分页结果对象«系统消息vo对象»» */
export interface RVo {
  code?: number;
  data?: BasicPagingResultObjectSystemMessageVoObject;
  msg?: string;
}

/** R«基本的分页结果对象«系统配置参数vo对象»» */
export interface RVo2 {
  code?: number;
  data?: BasicPagingResultObjectSystemConfigurationParameterVoObject;
  msg?: string;
}

/** R«提供方(Webservice)返回对象» */
export interface RWebservice {
  code?: number;
  /** TheProviderWebserviceReturnsTheObject */
  data?: TheProviderWebserviceReturnsTheObject;
  msg?: string;
}

/** R«提供方配置返回对象» */
export interface R_ {
  code?: number;
  /** ProviderConfigurationReturnObject */
  data?: ProviderConfigurationReturnObject;
  msg?: string;
}

/** R«登录初始化vo对象» */
export interface RVo3 {
  code?: number;
  data?: LoginInitializationVoObject;
  msg?: string;
}

/** R«路由图谱返回对象» */
export interface R2 {
  code?: number;
  /** RoutingGraphReturnObject */
  data?: RoutingGraphReturnObject;
  msg?: string;
}

/**
 * ServiceInfoDetailDto对象
 * 服务详情对象
 */
export interface ServiceInfoDetailDto {
  /** 是否可删除：0-否，1-是，对于一些系统固化的api，禁止在前端删除 */
  canDelete?: number;
  /** 是否可编辑：0-否，1-是，对于一些系统固化的api，禁止在前端修改 */
  canEdit?: number;
  /** 所属分组ID，关联：sm_category.id */
  categoryId?: number;
  /** 所属服务类别名称 */
  categoryName?: string;
  /** 服务代码 */
  code?: string;
  ctime?: string;
  cuid?: number;
  /** 异步模式时，错误响应模板（符合freemarker规范） */
  failRespTpl?: string;
  /** 主键id */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 入参具体字段树形json字符串 */
  inJsonParam?: string;
  /** 入参树 */
  inParamTree?: ServiceParamTreeDto;
  /** 日志级别：all-全链路，entry-入口日志（记录入出参消息，不记录中间步骤日志），entryNoParam-入口日志（不记录入出参消息，不记录中间步骤日志，便于监控统计服务调用耗时与次数等），none-不记录日志 */
  logLevel?: string;
  /** 主版本号，暂定规则：从1开始，用户根据情况，界面上可手工加一 */
  majorVersion?: number;
  memo?: string;
  /** 次版本号，每次修改时都要加一，生成规则：从1开始，自增数字(从1开始) */
  minorVersion?: number;
  mtime?: string;
  muid?: number;
  /** 服务名称 */
  name?: string;
  /** 异步模式时，成功响应模板（符合freemarker规范） */
  okRespTpl?: string;
  /** 通信模式，取值：sync - 同步，async - 异步 */
  openMode?: string;
  /** 开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
  openProtocol?: string;
  /** 操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
  optType?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 出参树 */
  outParamTree?: ServiceParamTreeDto;
  /** 异步模式时，队列类型：normal - 普通队列（默认），order - 顺序队列 */
  queueMode?: string;
  /** 路由执行模式，取值：parallel - 并行（默认，同时调用所有路由），serial - 串行（按顺序依次调用，一个执行完成后，才会调用下一个） */
  routeExecMode?: string;
  /** 路由的条件关系，取值：broadcast - 广播（默认，满足条件的路由都会执行），single - 单路（只会执行满足条件的第一个路由） */
  routeRelation?: string;
  /** 服务模式，取值：hosp - 院标，hlht - 国标(互联互通)，diy-定制(自定义) */
  serviceMode?: string;
  /** 服务模式名称 */
  serviceModeName?: string;
  sortNo?: number;
  /** 服务状态：1=待设计，2=待配置，3=待发布，4=已发布服务定义步骤点击「保存」退出，此服务为「待设计」状态参数设计步骤点击「保存」退出，此服务为「待配置」状态服务配置步骤点击「保存」退出，此服务为「待发布」状态脚本校验步骤点击「完成」退出，此服务为「待发布」状态 */
  status?: number;
  /** 对外开放的url路径，全局唯一 */
  urlPath?: string;
  /** 版本号，由主版本号与次版本号拼接而成，英文句号分隔 */
  version?: string;
  /** 引擎分组id，如果有值，则在服务发布时，不可改变引擎分组，关联：sys_worker_group.id */
  workerGroupId?: number;
  /** 所属引擎类别名称 */
  workerGroupName?: string;
}

/**
 * ServiceParamTreeDto对象
 * 服务参数树对象
 */
export interface ServiceParamTreeDto {
  /** 子节点 */
  children?: TreeNode[];
  /** 创建人id */
  createdById?: number;
  /** 创建人名称 */
  createdByName?: string;
  /** 创建时间 */
  createdTime?: string;
  /** 数据长度 */
  dataLength?: number;
  /** 数据类型，Object = 节点,S = 字符型,L = 布尔型,N = 数值型,D = 日期型(格式：YYYYMMDD),DT = 日期时间型(格式：YYYYMMDDThhmmss),T = 时间型(格式：hhmmss) */
  dataType?: string;
  /** 数据类型对应中文描述 */
  dataTypeDesc?: string;
  /** 默认值 */
  defaultVal?: string;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /** ID */
  id?: number;
  /** 参数jsonPath */
  jsonPath?: string;
  /** 是否循环,0=否，1=是 */
  loopFlag?: number;
  /** 参数代码 */
  paramCode?: string;
  /** 参数名称 */
  paramName?: string;
  /** 参数类型，1=入参，2=出参 */
  paramType?: number;
  /** 父级ID */
  parentId?: number;
  /** 小数点位数，默认为0，当data_type=N的时候，此字段才有意义 */
  pointLength?: number;
  /** 参数描述 */
  remark?: string;
  /** 是否必填,0=否，1=是 */
  requiredFlag?: number;
  /** 对应sm_service_info表的id */
  serviceId?: number;
  /** 排序 */
  sort?: number;
  /** 更新人id */
  updatedById?: number;
  /** 更新人名称 */
  updatedByName?: string;
  /** 更新时间 */
  updatedTime?: string;
  /** 版本号,可用于乐观锁 */
  version?: number;
}

/**
 * SysAppCategory对象
 * 应用类别表
 */
export interface SysAppCategory {
  /** 分组代码 */
  code: string;
  /** id */
  id: number;
  /** 备注 */
  memo?: string;
  /** 分组名 */
  name: string;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId: number;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** SysDept对象 */
export interface SysDept {
  /** 祖级列表 */
  ancestors?: string;
  /** 区域编码 */
  areaCode?: string;
  /** 区域名称 */
  areaName?: string;
  /** 子部门 */
  children?: SysDept[];
  /** 创建人id */
  createdById?: number;
  /** 创建人名称 */
  createdByName?: string;
  /** 创建时间 */
  createdTime?: string;
  /** 删除标记 */
  deleted?: number;
  /** 【机构编码/科室编码】 */
  deptCode?: string;
  /** 部门id */
  deptId?: number;
  /** 中心机构【0分中心 1中心机构】 */
  deptIscenter?: number;
  /** 组织logo */
  deptLogo?: string;
  /** 部门名称 */
  deptName?: string;
  /** 组织类型【0机构 1科室】 */
  deptType?: number;
  /** 邮箱 */
  email?: string;
  /** 负责人 */
  leader?: string;
  /** 显示顺序 */
  orderNum?: number;
  /** 父部门id */
  parentId?: number;
  /** 联系电话 */
  phone?: string;
  /** 部门状态（0正常 1停用） */
  status?: string;
  /** 更新人id */
  updatedById?: number;
  /** 更新人名称 */
  updatedByName?: string;
  /** 更新时间 */
  updatedTime?: string;
  /** 版本号,可用于乐观锁 */
  version?: number;
}

/** SysLogo对象 */
export interface SysLogo {
  /** 创建时间 */
  createdTime?: string;
  /** 页脚Logo */
  footerLogo?: string;
  /** 页首Logo */
  headerLogo?: string;
  /** 主键id */
  id?: number;
  /** 系统编码 */
  sysCode?: string;
  /** 更新时间 */
  updatedTime?: string;
  /** 版本号,可用于乐观锁 */
  version?: number;
}

/** SysRole对象 */
export interface SysRole {
  /** 创建人id */
  createdById?: number;
  /** 创建人名称 */
  createdByName?: string;
  /** 创建时间 */
  createdTime?: string;
  /** 0全部机构数据 1部分机构数据 2所在机构数据 */
  dataPower?: number;
  /** 数据权限所包含depId,分割 */
  dataPowerDept?: string;
  /** 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限） */
  dataScope?: string;
  /** 删除标记 */
  deleted?: number;
  /** 部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ） */
  deptCheckStrictly?: boolean;
  /** 部门组（数据权限） */
  deptIds?: number[];
  /** 用户是否存在此角色标识 默认不存在 */
  flag?: boolean;
  /** 菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示） */
  menuCheckStrictly?: boolean;
  /** 菜单组 */
  menuIds?: number[];
  /** 菜单-属于哪个系统 */
  menuSysCode?: string;
  /** 备注 */
  remark?: string;
  /** 角色ID */
  roleId?: number;
  /** 角色权限字符串 */
  roleKey?: string;
  /** 角色名称 */
  roleName?: string;
  /** 显示顺序 */
  roleSort?: number;
  /** 0系统角色  1项目角色 */
  roleType?: number;
  /** 角色状态（0正常 1停用） */
  status?: string;
  /** 更新人id */
  updatedById?: number;
  /** 更新人名称 */
  updatedByName?: string;
  /** 更新时间 */
  updatedTime?: string;
  /** 版本号,可用于乐观锁 */
  version?: number;
}

/** SysUser对象 */
export interface SysUser {
  /** 头像地址 */
  avatar?: string;
  /** 创建人id */
  createdById?: number;
  /** 创建人名称 */
  createdByName?: string;
  /** 创建时间 */
  createdTime?: string;
  /** 科室 */
  curDept?: SysDept;
  /** 机构 */
  curOrgan?: SysDept;
  /** 删除标记 */
  deleted?: number;
  /** 部门对象 */
  dept?: SysDept;
  /** 部门ID */
  deptId?: number;
  /** 用户邮箱 */
  email?: string;
  /** 工号 */
  jobNumber?: string;
  /** 最后登录时间 */
  loginDate?: string;
  /** 最后登录IP */
  loginIp?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 密码 */
  password?: string;
  /** 手机号码 */
  phonenumber?: string;
  /** 备注 */
  remark?: string;
  /** 角色对象 */
  roles?: SysRole[];
  /** 用户性别（0男 1女 2未知） */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /** 更新人id */
  updatedById?: number;
  /** 更新人名称 */
  updatedByName?: string;
  /** 更新时间 */
  updatedTime?: string;
  /** 用户ID */
  userId?: number;
  /** 用户账号 */
  userName?: string;
  /** 用户编号 */
  userNumber?: string;
  /** 用户类型（00系统用户） */
  userType?: string;
  /** 版本号,可用于乐观锁 */
  version?: number;
  /** 水印内容 */
  waterContent?: string;
  /** 是否开启下载水印 0-否 1-是 */
  waterFlag?: boolean;
}

/**
 * bodyOneParam的属性
 * bodyOneParam的属性
 */
export interface BodyOneParam {
  /** 参数代码 */
  code?: string;
  /** 子级参数 */
  innerParams?: ProviderTreeParameters[];
  /** 参数名称 */
  name?: string;
  /** 取值路径 */
  valuePath?: string;
  /** 值来源类别 */
  valueSourceType?: string;
}

/** sm_category表的po对象 */
export interface SmCategoryPo {
  /** 分组代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 分组名 */
  name?: string;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** sm_common_pre_processor表的po对象 */
export interface SmCommonPreProcessorPo {
  /** 处理器定义(json) */
  compSchema?: string;
  ctime?: string;
  cuid?: number;
  /** 主键id */
  id?: number;
  memo?: string;
  mtime?: string;
  muid?: number;
  /** 处理器名称 */
  name?: string;
  /** 服务ID */
  serviceId?: number;
  /** 处理器类型 */
  type?: string;
}

/** sm_common_result_processor表的po对象 */
export interface SmCommonResultProcessorPo {
  /** 处理器定义(json) */
  compSchema?: string;
  ctime?: string;
  cuid?: number;
  /** 主键id */
  id?: number;
  /** 是否异常处理器：0-否，1-是(默认0) */
  isErr?: number;
  memo?: string;
  mtime?: string;
  muid?: number;
  /** 处理器名称 */
  name?: string;
  /** 服务ID */
  serviceId?: number;
  /** 处理器类型 */
  type?: string;
}

/** sm_my_pre_processor表的po对象 */
export interface SmMyPreProcessorPo {
  /** 处理器定义(json) */
  compSchema?: string;
  ctime?: string;
  cuid?: number;
  /** 主键id */
  id?: number;
  memo?: string;
  mtime?: string;
  muid?: number;
  /** 处理器名称 */
  name?: string;
  /** 服务ID */
  serviceId?: number;
  /** 处理器类型 */
  type?: string;
}

/** sm_my_result_processor表的po对象 */
export interface SmMyResultProcessorPo {
  /** 处理器定义(json) */
  compSchema?: string;
  ctime?: string;
  cuid?: number;
  /** 主键id */
  id?: number;
  memo?: string;
  mtime?: string;
  muid?: number;
  /** 处理器名称 */
  name?: string;
  /** 服务ID */
  serviceId?: number;
  /** 处理器类型 */
  type?: string;
}

/** sm_subscription表的po对象 */
export interface SmSubscriptionPo {
  /** 应用系统id */
  appId?: number;
  /** 申请时间 */
  applyTime?: string;
  /** 申请者id */
  applyUid?: number;
  /** 审核时间 */
  auditTime?: string;
  /** 审核者id */
  auditUid?: number;
  /** 主键id */
  id?: number;
  /** 服务id */
  serviceId?: number;
  /** 状态：0=待审核(默认)，1=已通过，2=未通过 */
  status?: number;
}

/** sys_app_category表的po对象 */
export interface SysAppCategoryPo {
  /** 分组代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 分组名 */
  name?: string;
  /** 父级分组id，0(默认)表示根级分组 */
  parentId?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** sys_app_supplier表的po对象 */
export interface SysAppSupplierPo {
  /** 联系地址 */
  addr?: string;
  /** 联系人 */
  appContacts?: string;
  /** 联系电话 */
  appContactsPhone?: string;
  /** 代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 电子邮件 */
  email?: string;
  /** 主键id */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 名称 */
  name?: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用 */
  status?: number;
}

/** sys_app表的po对象 */
export interface SysAppPo {
  /** 应用类别id */
  appCategoryId?: number;
  /** 提供商id */
  appSupplierId?: number;
  /** 应用程序版本号 */
  appVersion?: string;
  /** 代码，或称应用id */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 主键id */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 名称 */
  name?: string;
  /** 机构id */
  organizationId?: number;
  /** 密钥，调用api的加密签名要根据密钥计算而出 */
  secret?: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用(默认) */
  status?: number;
}

/** sys_constant表的po对象 */
export interface SysConstantPo {
  /** 常量名 */
  code?: string;
  ctime?: string;
  cuid?: number;
  /** 主键id */
  id?: number;
  memo?: string;
  mtime?: string;
  muid?: number;
  /** 排序号 */
  sortNo?: number;
  /** 常量值 */
  value?: string;
}

/** sys_data_resource表的po对象 */
export interface SysDataResourcePo {
  /** 内码，不对外开放，便于内置一些资源，其他地方需要时，可以引用此内码，适用于导入导出场景 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 资源内容，如果是文字类资源，存放内容，如果是dll、ssl、class、jar等文件，则存放base64内容（byte数组转为base64存放） */
  fileContent?: string;
  /** 资源格式：xml、json、wsdl、text、html、hl7、dll、class、jar、ssl-certificate */
  fileFormat?: string;
  /** 资源结构定义，如果是json、xml等则存放其定义结构(json)，如果是dll、ssl、class、jar等文件，则存放文件大小等信息(json) */
  fileSchema?: string;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 资源名称 */
  name?: string;
  /** 是否在文件管理界面显示，取值：0 - 隐藏，1 - 显示（默认），对于api服务的入出参一般都是隐藏（因为他们在服务管理页面维护） */
  showAtFileUi?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** sys_data_source表的po对象 */
export interface SysDataSourcePo {
  /** 是否自动提交池中返回的连接，取值：0-否，1-是（默认） */
  autoCommit?: number;
  /** 内码，不对外开放，便于内置一些数据源，其他地方可以引用此内码 */
  code?: string;
  /** 程序向连接池中请求连接时，单位：毫秒。默认：30000 */
  connectionTimeout?: number;
  ctime?: string;
  cuid?: number;
  /** 数据源类名 */
  dataSourceClassName?: string;
  /** 库名 */
  dbName?: string;
  /** 驱动类名 */
  driverClassName?: string;
  /** 驱动jar的文件id */
  driverJarId?: number;
  /** jdbc连接串的额外参数，用于和ip、port等信息拼接，自动生成完整的连接串 */
  extJdbcParams?: string;
  /** 主键id */
  id?: number;
  /** 空闲时间，单位：毫秒。默认:600000 */
  idleTimeout?: number;
  /** 数据源ip地址 */
  ip?: string;
  /** jdbc连接串，前端通过aes加密传到后端，后端解密后明文存库 */
  jdbcConnection?: string;
  /** 跟数据库保持心跳连接的间隔，单位：毫秒。默认：30000 */
  keepaliveTime?: number;
  /** 该属性用于控制连接在池中的最大生存时间，超过该时间强制逐出，连接池向数据申请新的连接进行补充，单位：毫秒。默认:1800000 */
  maxLifetime?: number;
  /** 连接池中最多支持多少个活动连接，默认：CPU核心数的两倍 */
  maxPoolSize?: number;
  /** 备注 */
  memo?: string;
  /** 回收空闲连接时，将保证最少连接数，默认：CPU核心数的两倍 */
  minIdle?: number;
  mtime?: string;
  muid?: number;
  /** 连接名 */
  name?: string;
  /** 数据库密码，前端通过aes加密传到后端，后端解密后明文存库 */
  password?: string;
  /** 数据源端口号 */
  port?: number;
  /** 排序号 */
  sortNo?: number;
  /** 测试的sql查询脚本 */
  testQuerySql?: string;
  /** 数据库类型：SQLServer，Oracle，MySQL，PgSQL等 */
  type?: string;
  /** 数据库用户名，前端通过aes加密传到后端，后端解密后明文存库 */
  username?: string;
}

/** sys_data_sync_task表的po对象 */
export interface SysDataSyncTaskPo {
  ctime?: string;
  cuid?: number;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  mtime?: string;
  muid?: number;
  /** 重试次数，从1开始，最大30次，重试间隔30秒 */
  retryIndex?: number;
  /** 源对象本次同步信息的上下文内容，json格式，如果为空，则表示删除，“source_type”不同，对应不同的json格式 */
  sourceContext?: string;
  /** 源对象的主键 */
  sourceKeyValue?: string;
  /** 源对象类型 */
  sourceType?: string;
  /** 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败 */
  status?: number;
  /** 工作节点id */
  workerId?: number;
}

/** sys_organization表的po对象 */
export interface SysOrganizationPo {
  /** 机构代码 */
  code?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 主键id */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 机构名称 */
  name?: string;
  /** 父级机构id */
  parentId?: number;
  /** 简称 */
  shortName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用(默认) */
  status?: number;
  /** 机构类型：0-机构(默认)，1-科室 */
  type?: number;
}

/** sys_third_service表的po对象 */
export interface SysThirdServicePo {
  /** 应用id */
  appId?: number;
  /** 代码，默认用guid，便于导入时根据此代码覆盖 */
  code?: string;
  /** 终端定义(json)，包括请求体、请求头、路径参数、安全机制、响应体等 */
  compSchema?: string;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 执行超时，单位：秒 */
  execTimeout?: number;
  /** 熔断时长，单位：秒 */
  fuseDuration?: number;
  /**  熔断异常数，即连续失败多少次才会触发熔断 */
  fuseFailCount?: number;
  /** 主键id */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 服务名称 */
  name?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 重试间隔，单位：秒 */
  retryInterval?: number;
  /** 最大重试次数，如果为-1，则表示一直重试 */
  retryMax?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
  type?: string;
}

/** sys_worker_group表的po对象 */
export interface SysWorkerGroupPo {
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 分组名 */
  name?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/** sys_worker_node表的po对象 */
export interface SysWorkerNodePo {
  /** 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量 */
  apiMaxNo?: number;
  /** 创建时间 */
  ctime?: string;
  /** 创建人 */
  cuid?: number;
  /** 主键id */
  id?: number;
  /** IP地址 */
  ip?: string;
  /** 最近心跳测试结果说明 */
  lastHeartbeatMemo?: string;
  /** 上一次心跳正常的时间 */
  lastHeartbeatOkTime?: string;
  /** 最近心跳测试结果状态：0-失败，1-正常 */
  lastHeartbeatStatus?: number;
  /** 最近心跳测试时间 */
  lastHeartbeatTime?: string;
  /** 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务） */
  loadWeight?: number;
  /** 备注 */
  memo?: string;
  /** 修改时间 */
  mtime?: string;
  /** 修改人 */
  muid?: number;
  /** 工作节点名称 */
  name?: string;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType?: string;
  /** 在线状态：0-离线，1-在线 */
  onlineStatus?: number;
  /** 用于集成引擎，此字段存放的是对外开放的http协议端口号 */
  portApi?: number;
  /** 用于存放Springboot的web容器端口 */
  portBoot?: number;
  /** 最近心跳失败的次数，从最近一次心跳正常之后开始计数 */
  recentHeartbeatFailCount?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 上线时间，结合当前时间可以计算运行时长 */
  startTime?: string;
  /** 状态：0-停用，1-启用(默认) */
  status?: number;
  /** 离线时间，结合上线时间可以计算运行时长 */
  stopTime?: string;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode?: string;
  /** 工作节点的程序版本 */
  version?: string;
  /** 是否可见：0-否，1-是(默认) */
  visible?: number;
  /** 引擎分组id */
  workerGroupId?: number;
}

/**
 * InteractionLog-详情
 * InteractionLog-详情
 */
export interface InteractionLog {
  /** 应用id */
  consumerId?: number;
  /** 请求方IP地址 */
  consumerIp?: string;
  /** 是否有重试，取值：0-否，1-是，当result_code=1时，如果此字段为1，说明最终结果为成功但过程中有异常或错误 */
  haveRetry?: number;
  /** 入参内容 */
  inMsg?: string;
  /** 入参格式 */
  inType?: string;
  /** 出参内容 */
  outMsg?: string;
  /** 出参格式 */
  outType?: string;
  /** 请求时间，入口步骤收到请求的时间，精确到毫秒，示例：2022-02-10 17:15:09.034 */
  reqTime?: string;
  /** 响应时间，出口步骤返回响应的时间，精确到毫秒，示例：2022-02-10 17:15:09.034 */
  respTime?: string;
  /** 结果 */
  resultCode?: number;
  /** 服务id */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /** 应用名称 */
  sysAppName?: string;
  /** 处理时长，单位：毫秒 */
  timeCost?: number;
  /** id */
  traceId?: string;
}

/**
 * InteractionLog-高级检索
 * InteractionLog-高级检索
 */
export interface InteractionLog2 {
  /** 应用id */
  appId?: number;
  /** 全文检索 */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 结束时间 */
  end?: string;
  /** 结果代码，取值：0-失败，1-成功 */
  resultCode?: number;
  /** API服务id */
  serviceId?: number;
  /** 页大小 */
  size?: number;
  /** 开始时间 */
  start?: string;
  startIndex?: number;
  /** 处理时长，单位：毫秒 */
  timeCost?: number;
}

/**
 * InteractionLog-高级检索结果
 * InteractionLog-高级检索结果
 */
export interface InteractionLog3 {
  /** 应用id */
  consumerId?: number;
  /** 请求时间，入口步骤收到请求的时间，精确到毫秒，示例：2022-02-10 17:15:09.034 */
  reqTime?: string;
  /** 结果 */
  resultCode?: number;
  /** 服务id */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /** 应用名称 */
  sysAppName?: string;
  /** 处理时长，单位：毫秒 */
  timeCost?: number;
  /** id */
  traceId?: string;
}

/**
 * GlobalConstant-新增
 * GlobalConstant-新增
 */
export interface GlobalConstant {
  /** 常量名 */
  code: string;
  /** 备注 */
  memo?: string;
  /** 排序号 */
  sortNo?: number;
  /** 常量值 */
  value: string;
}

/**
 * GlobalConstant-更新
 * GlobalConstant-更新
 */
export interface GlobalConstant2 {
  /** 常量名 */
  code: string;
  /** 主键id */
  id: number;
  memo?: string;
  /** 排序号 */
  sortNo?: number;
  /** 常量值 */
  value: string;
}

/**
 * ManufacturerInformation-新增
 * ManufacturerInformation-新增
 */
export interface ManufacturerInformation {
  /** 联系地址 */
  addr?: string;
  /** 联系人 */
  appContacts?: string;
  /** 联系电话 */
  appContactsPhone?: string;
  /** 代码 */
  code: string;
  /** 电子邮件 */
  email?: string;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 名称 */
  name: string;
  /** 简称 */
  shortName?: string;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 状态：0-停用，1-启用 */
  status: number;
}

/**
 * WorkNodes-新增
 * WorkNodes-新增
 */
export interface WorkNodes {
  /** 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量 */
  apiMaxNo?: number;
  /** IP地址 */
  ip: string;
  /** 最近心跳测试结果说明 */
  lastHeartbeatMemo?: string;
  /** 上一次心跳正常的时间 */
  lastHeartbeatOkTime?: string;
  /** 最近心跳测试结果状态：0-失败，1-正常 */
  lastHeartbeatStatus?: number;
  /** 最近心跳测试时间 */
  lastHeartbeatTime?: string;
  /** 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务） */
  loadWeight?: number;
  /** 备注 */
  memo?: string;
  /** 工作节点名称 */
  name: string;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType: string;
  /** 在线状态：0-离线，1-在线 */
  onlineStatus: number;
  /** 用于集成引擎，此字段存放的是对外开放的http协议端口号 */
  portApi?: number;
  /** 用于存放Springboot的web容器端口 */
  portBoot: number;
  /** 最近心跳失败的次数，从最近一次心跳正常之后开始计数 */
  recentHeartbeatFailCount?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 上线时间，结合当前时间可以计算运行时长 */
  startTime?: string;
  /** 状态：0-停用，1-启用(默认) */
  status: number;
  /** 离线时间，结合上线时间可以计算运行时长 */
  stopTime?: string;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode: string;
  /** 工作节点的程序版本 */
  version?: string;
  /** 是否可见：0-否，1-是(默认) */
  visible: number;
  /** 引擎分组id */
  workerGroupId?: number;
}

/**
 * WorkNodes-更新
 * WorkNodes-更新
 */
export interface WorkNodes2 {
  /** 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量 */
  apiMaxNo?: number;
  /** id */
  id: number;
  /** IP地址 */
  ip: string;
  /** 最近心跳测试结果说明 */
  lastHeartbeatMemo?: string;
  /** 上一次心跳正常的时间 */
  lastHeartbeatOkTime?: string;
  /** 最近心跳测试结果状态：0-失败，1-正常 */
  lastHeartbeatStatus?: number;
  /** 最近心跳测试时间 */
  lastHeartbeatTime?: string;
  /** 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务） */
  loadWeight?: number;
  /** 备注 */
  memo?: string;
  /** 工作节点名称 */
  name: string;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType: string;
  /** 在线状态：0-离线，1-在线 */
  onlineStatus: number;
  /** 用于集成引擎，此字段存放的是对外开放的http协议端口号 */
  portApi?: number;
  /** 用于存放Springboot的web容器端口 */
  portBoot: number;
  /** 最近心跳失败的次数，从最近一次心跳正常之后开始计数 */
  recentHeartbeatFailCount?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 上线时间，结合当前时间可以计算运行时长 */
  startTime?: string;
  /** 状态：0-停用，1-启用(默认) */
  status: number;
  /** 离线时间，结合上线时间可以计算运行时长 */
  stopTime?: string;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode: string;
  /** 工作节点的程序版本 */
  version?: string;
  /** 是否可见：0-否，1-是(默认) */
  visible: number;
  /** 引擎分组id */
  workerGroupId?: number;
}

/**
 * WorkNodeGrouping-新增
 * WorkNodeGrouping-新增
 */
export interface WorkNodeGrouping {
  /** 备注 */
  memo?: string;
  /** 分组名 */
  name: string;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/**
 * WorkNodeGrouping-更新
 * WorkNodeGrouping-更新
 */
export interface WorkNodeGrouping2 {
  /** id */
  id: number;
  /** 备注 */
  memo?: string;
  /** 分组名 */
  name: string;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/**
 * DataSynchronizationTask-新增
 * DataSynchronizationTask-新增
 */
export interface DataSynchronizationTask {
  /** 备注 */
  memo?: string;
  /** 重试次数，从1开始，最大30次，重试间隔30秒 */
  retryIndex: number;
  /** 源对象本次同步信息的上下文内容，json格式，如果为空，则表示删除，“source_type”不同，对应不同的json格式 */
  sourceContext?: string;
  /** 源对象的主键 */
  sourceKeyValue: string;
  /** 源对象类型 */
  sourceType: string;
  /** 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败 */
  status: number;
  /** 工作节点id */
  workerId: number;
}

/**
 * DataSynchronizationTask-更新
 * DataSynchronizationTask-更新
 */
export interface DataSynchronizationTask2 {
  /** id */
  id: number;
  /** 备注 */
  memo?: string;
  /** 重试次数，从1开始，最大30次，重试间隔30秒 */
  retryIndex: number;
  /** 源对象本次同步信息的上下文内容，json格式，如果为空，则表示删除，“source_type”不同，对应不同的json格式 */
  sourceContext?: string;
  /** 源对象的主键 */
  sourceKeyValue: string;
  /** 源对象类型 */
  sourceType: string;
  /** 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败 */
  status: number;
  /** 工作节点id */
  workerId: number;
}

/**
 * DataSource-新增
 * DataSource-新增
 */
export interface DataSource {
  /** 是否自动提交池中返回的连接，取值：0-否，1-是（默认） */
  autoCommit: number;
  /** 内码，不对外开放，便于内置一些数据源，其他地方可以引用此内码 */
  code?: string;
  /** 程序向连接池中请求连接时，单位：毫秒。默认：30000 */
  connectionTimeout: number;
  /** 数据源类名 */
  dataSourceClassName?: string;
  /** 库名 */
  dbName?: string;
  /** 驱动类名 */
  driverClassName?: string;
  /** 驱动jar的文件id */
  driverJarId?: number;
  /** 空闲时间，单位：毫秒。默认:600000 */
  idleTimeout: number;
  /** 数据源ip地址 */
  ip?: string;
  /** jdbc连接串，前端通过aes加密传到后端，后端解密后明文存库 */
  jdbcConnection?: string;
  /** 跟数据库保持心跳连接的间隔，单位：毫秒。默认：30000 */
  keepaliveTime: number;
  /** 该属性用于控制连接在池中的最大生存时间，超过该时间强制逐出，连接池向数据申请新的连接进行补充，单位：毫秒。默认:1800000 */
  maxLifetime: number;
  /** 连接池中最多支持多少个活动连接，默认：CPU核心数的两倍 */
  maxPoolSize: number;
  /** 备注 */
  memo?: string;
  /** 回收空闲连接时，将保证最少连接数，默认：CPU核心数的两倍 */
  minIdle: number;
  /** 连接名 */
  name: string;
  /** 数据库密码，前端通过aes加密传到后端，后端解密后明文存库 */
  password?: string;
  /** 数据源端口号 */
  port?: number;
  /** 模式名 */
  schemaName?: string;
  /** 排序号 */
  sortNo?: number;
  /** 测试的sql查询脚本 */
  testQuerySql?: string;
  /** 数据库类型：SQLServer，Oracle，MySQL，PgSQL等 */
  type: string;
  /** 数据库用户名，前端通过aes加密传到后端，后端解密后明文存库 */
  username?: string;
}

/**
 * DataSource-更新
 * DataSource-更新
 */
export interface DataSource2 {
  /** 是否自动提交池中返回的连接，取值：0-否，1-是（默认） */
  autoCommit: number;
  /** 内码，不对外开放，便于内置一些数据源，其他地方可以引用此内码 */
  code?: string;
  /** 程序向连接池中请求连接时，单位：毫秒。默认：30000 */
  connectionTimeout: number;
  /** 数据源类名 */
  dataSourceClassName?: string;
  /** 库名 */
  dbName?: string;
  /** 驱动类名 */
  driverClassName?: string;
  /** 驱动jar的文件id */
  driverJarId?: number;
  /** id */
  id: number;
  /** 空闲时间，单位：毫秒。默认:600000 */
  idleTimeout: number;
  /** 数据源ip地址 */
  ip?: string;
  /** jdbc连接串，前端通过aes加密传到后端，后端解密后明文存库 */
  jdbcConnection?: string;
  /** 跟数据库保持心跳连接的间隔，单位：毫秒。默认：30000 */
  keepaliveTime: number;
  /** 该属性用于控制连接在池中的最大生存时间，超过该时间强制逐出，连接池向数据申请新的连接进行补充，单位：毫秒。默认:1800000 */
  maxLifetime: number;
  /** 连接池中最多支持多少个活动连接，默认：CPU核心数的两倍 */
  maxPoolSize: number;
  /** 备注 */
  memo?: string;
  /** 回收空闲连接时，将保证最少连接数，默认：CPU核心数的两倍 */
  minIdle: number;
  /** 连接名 */
  name: string;
  /** 数据库密码，前端通过aes加密传到后端，后端解密后明文存库 */
  password?: string;
  /** 数据源端口号 */
  port?: number;
  /** 模式名 */
  schemaName?: string;
  /** 排序号 */
  sortNo?: number;
  /** 测试的sql查询脚本 */
  testQuerySql?: string;
  /** 数据库类型：SQLServer，Oracle，MySQL，PgSQL等 */
  type: string;
  /** 数据库用户名，前端通过aes加密传到后端，后端解密后明文存库 */
  username?: string;
}

/** 数据源查询条件 */
export interface _ {
  /** 输入条件(name 或 type) */
  condition?: string;
  /** 页码 */
  current?: number;
  /** 库名 */
  dbName?: string;
  /** 页大小 */
  size?: number;
  startIndex?: number;
  /** 数据库类型：SQLServer，Oracle，MySQL，PgSQL等 */
  type?: string;
}

/**
 * DataResources-新增
 * DataResources-新增
 */
export interface DataResources {
  /** 内码，不对外开放，便于内置一些资源，其他地方需要时，可以引用此内码，适用于导入导出场景 */
  code?: string;
  /** 资源内容，如果是文字类资源，存放内容，如果是dll、ssl、class、jar等文件，则存放base64内容（byte数组转为base64存放） */
  fileContent?: string;
  /** 资源格式：xml、json、wsdl、text、html、hl7、dll、class、jar、ssl-certificate */
  fileFormat?: string;
  /** 资源结构定义，如果是json、xml等则存放其定义结构(json)，如果是dll、ssl、class、jar等文件，则存放文件大小等信息(json) */
  fileSchema?: string;
  /** 备注 */
  memo?: string;
  /** 资源名称 */
  name: string;
  /** 是否在文件管理界面显示，取值：0 - 隐藏，1 - 显示（默认），对于api服务的入出参一般都是隐藏（因为他们在服务管理页面维护） */
  showAtFileUi?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/**
 * DataResources-更新
 * DataResources-更新
 */
export interface DataResources2 {
  /** 内码，不对外开放，便于内置一些资源，其他地方需要时，可以引用此内码，适用于导入导出场景 */
  code?: string;
  /** 资源内容，如果是文字类资源，存放内容，如果是dll、ssl、class、jar等文件，则存放base64内容（byte数组转为base64存放） */
  fileContent?: string;
  /** 资源格式：xml、json、wsdl、text、html、hl7、dll、class、jar、ssl-certificate */
  fileFormat?: string;
  /** 资源结构定义，如果是json、xml等则存放其定义结构(json)，如果是dll、ssl、class、jar等文件，则存放文件大小等信息(json) */
  fileSchema?: string;
  /** 主键id */
  id?: number;
  /** 备注 */
  memo?: string;
  /** 资源名称 */
  name: string;
  /** 是否在文件管理界面显示，取值：0 - 隐藏，1 - 显示（默认），对于api服务的入出参一般都是隐藏（因为他们在服务管理页面维护） */
  showAtFileUi?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
}

/**
 * ThirdPartyApiServices-新增
 * ThirdPartyApiServices-新增
 */
export interface ThirdPartyApiServices {
  /** 应用id */
  appId?: number;
  /** 代码，默认用guid，便于导入时根据此代码覆盖 */
  code?: string;
  /** 终端定义(json)，包括请求体、请求头、路径参数、安全机制、响应体等 */
  compSchema?: string;
  /** 执行超时，单位：秒 */
  execTimeout?: number;
  /** 熔断时长，单位：秒 */
  fuseDuration?: number;
  /**  熔断异常数，即连续失败多少次才会触发熔断 */
  fuseFailCount?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 备注 */
  memo?: string;
  /** 服务名称 */
  name: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 重试间隔，单位：秒 */
  retryInterval?: number;
  /** 最大重试次数，如果为-1，则表示一直重试 */
  retryMax?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
  type: string;
}

/**
 * ThirdPartyApiServices-更新
 * ThirdPartyApiServices-更新
 */
export interface ThirdPartyApiServices2 {
  /** 应用id */
  appId?: number;
  /** 代码，默认用guid，便于导入时根据此代码覆盖 */
  code?: string;
  /** 终端定义(json)，包括请求体、请求头、路径参数、安全机制、响应体等 */
  compSchema?: string;
  /** 执行超时，单位：秒 */
  execTimeout?: number;
  /** 熔断时长，单位：秒 */
  fuseDuration?: number;
  /**  熔断异常数，即连续失败多少次才会触发熔断 */
  fuseFailCount?: number;
  /** id */
  id: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 备注 */
  memo?: string;
  /** 服务名称 */
  name: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 重试间隔，单位：秒 */
  retryInterval?: number;
  /** 最大重试次数，如果为-1，则表示一直重试 */
  retryMax?: number;
  /** 排序号，默认999999 */
  sortNo?: number;
  /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
  type: string;
}

export enum ModelAndViewStatusEnum {
  Value100CONTINUE = '100 CONTINUE',
  Value101SWITCHINGPROTOCOLS = '101 SWITCHING_PROTOCOLS',
  Value102PROCESSING = '102 PROCESSING',
  Value103CHECKPOINT = '103 CHECKPOINT',
  Value200OK = '200 OK',
  Value201CREATED = '201 CREATED',
  Value202ACCEPTED = '202 ACCEPTED',
  Value203NONAUTHORITATIVEINFORMATION = '203 NON_AUTHORITATIVE_INFORMATION',
  Value204NOCONTENT = '204 NO_CONTENT',
  Value205RESETCONTENT = '205 RESET_CONTENT',
  Value206PARTIALCONTENT = '206 PARTIAL_CONTENT',
  Value207MULTISTATUS = '207 MULTI_STATUS',
  Value208ALREADYREPORTED = '208 ALREADY_REPORTED',
  Value226IMUSED = '226 IM_USED',
  Value300MULTIPLECHOICES = '300 MULTIPLE_CHOICES',
  Value301MOVEDPERMANENTLY = '301 MOVED_PERMANENTLY',
  Value302FOUND = '302 FOUND',
  Value302MOVEDTEMPORARILY = '302 MOVED_TEMPORARILY',
  Value303SEEOTHER = '303 SEE_OTHER',
  Value304NOTMODIFIED = '304 NOT_MODIFIED',
  Value305USEPROXY = '305 USE_PROXY',
  Value307TEMPORARYREDIRECT = '307 TEMPORARY_REDIRECT',
  Value308PERMANENTREDIRECT = '308 PERMANENT_REDIRECT',
  Value400BADREQUEST = '400 BAD_REQUEST',
  Value401UNAUTHORIZED = '401 UNAUTHORIZED',
  Value402PAYMENTREQUIRED = '402 PAYMENT_REQUIRED',
  Value403FORBIDDEN = '403 FORBIDDEN',
  Value404NOTFOUND = '404 NOT_FOUND',
  Value405METHODNOTALLOWED = '405 METHOD_NOT_ALLOWED',
  Value406NOTACCEPTABLE = '406 NOT_ACCEPTABLE',
  Value407PROXYAUTHENTICATIONREQUIRED = '407 PROXY_AUTHENTICATION_REQUIRED',
  Value408REQUESTTIMEOUT = '408 REQUEST_TIMEOUT',
  Value409CONFLICT = '409 CONFLICT',
  Value410GONE = '410 GONE',
  Value411LENGTHREQUIRED = '411 LENGTH_REQUIRED',
  Value412PRECONDITIONFAILED = '412 PRECONDITION_FAILED',
  Value413PAYLOADTOOLARGE = '413 PAYLOAD_TOO_LARGE',
  Value413REQUESTENTITYTOOLARGE = '413 REQUEST_ENTITY_TOO_LARGE',
  Value414URITOOLONG = '414 URI_TOO_LONG',
  Value414REQUESTURITOOLONG = '414 REQUEST_URI_TOO_LONG',
  Value415UNSUPPORTEDMEDIATYPE = '415 UNSUPPORTED_MEDIA_TYPE',
  Value416REQUESTEDRANGENOTSATISFIABLE = '416 REQUESTED_RANGE_NOT_SATISFIABLE',
  Value417EXPECTATIONFAILED = '417 EXPECTATION_FAILED',
  Value418IAMATEAPOT = '418 I_AM_A_TEAPOT',
  Value419INSUFFICIENTSPACEONRESOURCE = '419 INSUFFICIENT_SPACE_ON_RESOURCE',
  Value420METHODFAILURE = '420 METHOD_FAILURE',
  Value421DESTINATIONLOCKED = '421 DESTINATION_LOCKED',
  Value422UNPROCESSABLEENTITY = '422 UNPROCESSABLE_ENTITY',
  Value423LOCKED = '423 LOCKED',
  Value424FAILEDDEPENDENCY = '424 FAILED_DEPENDENCY',
  Value425TOOEARLY = '425 TOO_EARLY',
  Value426UPGRADEREQUIRED = '426 UPGRADE_REQUIRED',
  Value428PRECONDITIONREQUIRED = '428 PRECONDITION_REQUIRED',
  Value429TOOMANYREQUESTS = '429 TOO_MANY_REQUESTS',
  Value431REQUESTHEADERFIELDSTOOLARGE = '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
  Value451UNAVAILABLEFORLEGALREASONS = '451 UNAVAILABLE_FOR_LEGAL_REASONS',
  Value500INTERNALSERVERERROR = '500 INTERNAL_SERVER_ERROR',
  Value501NOTIMPLEMENTED = '501 NOT_IMPLEMENTED',
  Value502BADGATEWAY = '502 BAD_GATEWAY',
  Value503SERVICEUNAVAILABLE = '503 SERVICE_UNAVAILABLE',
  Value504GATEWAYTIMEOUT = '504 GATEWAY_TIMEOUT',
  Value505HTTPVERSIONNOTSUPPORTED = '505 HTTP_VERSION_NOT_SUPPORTED',
  Value506VARIANTALSONEGOTIATES = '506 VARIANT_ALSO_NEGOTIATES',
  Value507INSUFFICIENTSTORAGE = '507 INSUFFICIENT_STORAGE',
  Value508LOOPDETECTED = '508 LOOP_DETECTED',
  Value509BANDWIDTHLIMITEXCEEDED = '509 BANDWIDTH_LIMIT_EXCEEDED',
  Value510NOTEXTENDED = '510 NOT_EXTENDED',
  Value511NETWORKAUTHENTICATIONREQUIRED = '511 NETWORK_AUTHENTICATION_REQUIRED',
}

export interface ListUsingGetParams {
  /** 字典代码列表 */
  codes?: string[];
}

export type PingUsingPostPayload = string;

export interface GetTreeUsingGetParams {
  /** lazy */
  lazy: boolean;
  /** parentId */
  parentId: number;
}

export interface ImportServiceUsingPostParams {
  /** content */
  content: string;
  /** fileType */
  fileType: string;
  /** paramType */
  paramType: string;
  /** serviceId */
  serviceId: number;
}

export interface UpdateUsingPost1Params {
  /** 所属服务类别id，对应sm_category表的数据id */
  categoryId: number;
  /** 服务编码（格式：只能包含字母数字中划线,最多50位） */
  code: string;
  /** id */
  id: number;
  /** 日志级别：all-全链路，entry-入口日志（记录入出参消息，不记录中间步骤日志），entryNoParam-入口日志（不记录入出参消息，不记录中间步骤日志，便于监控统计服务调用耗时与次数等），error-仅错误时记录日志 */
  logLevel?: string;
  /** 服务描述 */
  memo?: string;
  /** 服务名称 */
  name: string;
  /** 开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
  openProtocol: string;
  /** 操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
  optType: number;
  /** 服务模式，取值：hosp - 院标，hlht - 国标(互联互通)，diy-定制(自定义) */
  serviceMode?: string;
  /** 服务模式名称 */
  serviceModeName?: string;
  /** 服务请求路径，全局唯一 */
  urlPath?: string;
  /** 服务版本号，格式：只能由两个整数和点号拼接而成，其中点号左侧整数范围为1~999，点号右侧整数范围为0~999，例如【1.0】【999.999】）！ */
  version: string;
}

export interface CreateUsingPost7Params {
  /** 应用系统id */
  appId?: number;
  /** 服务id */
  serviceId?: number;
}

export interface GetTreeUsingGet1Params {
  /** lazy */
  lazy: boolean;
  /** parentId */
  parentId: number;
}

export interface GetListUsingGetParams {
  /** 手机号码 */
  appContactsPhone?: string;
  /** 输入条件(code 或 name), 支持模糊查询 */
  condition?: string;
  /** 状态：0-停用，1-启用 */
  status?: string;
}

export interface GetOrganizationsUsingGetParams {
  /** limit */
  limit?: number;
  /** page */
  page?: number;
  /** parentId */
  parentId: number;
  /** status */
  status?: number;
  /** type */
  type?: number;
}

export interface GetTreeUsingGet2Params {
  /** lazy */
  lazy: boolean;
  /** parentId */
  parentId: number;
  /** status */
  status?: number;
  /** type */
  type?: number;
}

export interface UpdateValueUsingPostParams {
  /** 参数代码 */
  code: string;
  /** 参数值 */
  value: string;
}

export interface MarkReadByIdUsingPostParams {
  /** 用户的消息主键id */
  id: number;
}
