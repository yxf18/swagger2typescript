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
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** AppCategoryResDto */
export interface AppCategoryResDto {
  /** 分组代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /** 分组名 */
  name?: string;
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId?: number;
  /** 父级类别名称 */
  parentName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** AppCategoryTree */
export interface AppCategoryTree {
  /** 子节点 */
  children?: any[];
  /** 分组代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /** 分组名 */
  name?: string;
  /** @format int32 */
  objType?: number;
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId?: number;
  /** 父级类别名称 */
  parentName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** AppCreateDto */
export interface AppCreateDto {
  /**
   * 应用类别id
   * @format int32
   */
  appCategoryId: number;
  /**
   * 提供商id
   * @format int32
   */
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
  /**
   * 机构id
   * @format int32
   */
  organizationId: number;
  /** 密钥，调用api的加密签名要根据密钥计算而出 */
  secret: string;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status: number;
}

/** AppResDto */
export interface AppResDto {
  /** 应用类别名称 */
  appCategory?: string;
  /**
   * 应用类别id
   * @format int32
   */
  appCategoryId?: number;
  /** 应用提供商名称 */
  appSupplier?: string;
  /**
   * 提供商id
   * @format int32
   */
  appSupplierId?: number;
  /** 应用程序版本号 */
  appVersion?: string;
  /** 代码，或称应用id */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 名称 */
  name?: string;
  /** 机构名称 */
  organization?: string;
  /**
   * 机构id
   * @format int32
   */
  organizationId?: number;
  /** 密钥，调用api的加密签名要根据密钥计算而出 */
  secret?: string;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
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
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /** 电子邮件 */
  email?: string;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 名称 */
  name?: string;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用
   * @format int32
   */
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
  /**
   * id
   * @format int32
   */
  id: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 名称 */
  name: string;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用
   * @format int32
   */
  status: number;
}

/** AppUpdateDto */
export interface AppUpdateDto {
  /**
   * 应用类别id
   * @format int32
   */
  appCategoryId: number;
  /**
   * 提供商id
   * @format int32
   */
  appSupplierId: number;
  /**
   * 主鍵
   * @format int32
   */
  id: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 名称 */
  name: string;
  /**
   * 机构id
   * @format int32
   */
  organizationId: number;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
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
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** CategoryResDto */
export interface CategoryResDto {
  /** 分组代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /** 分组名 */
  name?: string;
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId?: number;
  /** 父级类别名称 */
  parentName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** CategoryTree */
export interface CategoryTree {
  /** 子节点 */
  children?: any[];
  /** 分组代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /** 分组名 */
  name?: string;
  /** @format int32 */
  objType?: number;
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId?: number;
  /** 父级类别名称 */
  parentName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** Map«string,List«前端下拉列表项»» */
export type MapStringList前端下拉列表项 = Record<string, any>;

/** ModelAndView */
export interface ModelAndView {
  empty?: boolean;
  model?: object;
  modelMap?: Record<string, object>;
  reference?: boolean;
  status?: ModelAndViewStatusEnum;
  view?: any;
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
  /**
   * 父级机构id
   * @format int32
   */
  parentId: number;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status: number;
  /**
   * 机构类型：0-机构(默认)，1-科室
   * @format int32
   */
  type: number;
}

/** OrganizationResDto */
export interface OrganizationResDto {
  /** 机构代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /** 是否有子节点 */
  hasChildren?: boolean;
  /**
   * id
   * @format int32
   */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 机构名称 */
  name?: string;
  /**
   * 父级机构id
   * @format int32
   */
  parentId?: number;
  /** 父级机构 */
  parentName?: string;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status?: number;
  /**
   * 机构类型：0-机构(默认)，1-科室
   * @format int32
   */
  type?: number;
}

/** OrganizationTree */
export interface OrganizationTree {
  /** 子节点 */
  children?: any[];
  /** 机构代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /**
   * ID
   * @format int32
   */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 机构名称 */
  name?: string;
  /** @format int32 */
  objType?: number;
  /**
   * 父级ID
   * @format int32
   */
  parentId?: number;
  /** 父级机构 */
  parentName?: string;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status?: number;
  /**
   * 机构类型：0-机构(默认)，1-科室
   * @format int32
   */
  type?: number;
}

/** R */
export interface R {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

/** R«AppCategoryResDto» */
export interface RAppCategoryResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«AppResDto» */
export interface RAppResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«AppSupplierResDto» */
export interface RAppSupplierResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«CategoryResDto» */
export interface RCategoryResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«List«AppCategoryResDto»» */
export interface RListAppCategoryResDto {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«AppCategoryTree»» */
export interface RListAppCategoryTree {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«CategoryResDto»» */
export interface RListCategoryResDto {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«CategoryTree»» */
export interface RListCategoryTree {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«OrganizationResDto»» */
export interface RListOrganizationResDto {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«OrganizationTree»» */
export interface RListOrganizationTree {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«ServiceInfoDetailDto对象»» */
export interface RListServiceInfoDetailDto对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sm_common_pre_processor表的po对象»» */
export interface RListSmCommonPreProcessor表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sm_common_result_processor表的po对象»» */
export interface RListSmCommonResultProcessor表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sys_app_supplier表的po对象»» */
export interface RListSysAppSupplier表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sys_app表的po对象»» */
export interface RListSysApp表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sys_constant表的po对象»» */
export interface RListSysConstant表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sys_data_source表的po对象»» */
export interface RListSysDataSource表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sys_data_sync_task表的po对象»» */
export interface RListSysDataSyncTask表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sys_third_service表的po对象»» */
export interface RListSysThirdService表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«sys_worker_node表的po对象»» */
export interface RListSysWorkerNode表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«交互日志-高级检索结果»» */
export interface RList交互日志高级检索结果 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«数据资源列表返回对象»» */
export interface RList数据资源列表返回对象 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«新增提供方-值»» */
export interface RList新增提供方值 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«服务列表»» */
export interface RList服务列表 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«路由配置信息»» */
export interface RList路由配置信息 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«List«返回系统提供方»» */
export interface RList返回系统提供方 {
  /** @format int32 */
  code?: number;
  data?: any[];
  msg?: string;
}

/** R«Map«string,List«前端下拉列表项»»» */
export interface RMapStringList前端下拉列表项 {
  /** @format int32 */
  code?: number;
  data?: Record<string, any[]>;
  msg?: string;
}

/** R«OrganizationResDto» */
export interface ROrganizationResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«ServiceInfoDetailDto对象» */
export interface RServiceInfoDetailDto对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«ServiceParamResDto» */
export interface RServiceParamResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«ServiceParamTreeResDto» */
export interface RServiceParamTreeResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«SysDataSyncTaskResDto» */
export interface RSysDataSyncTaskResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«SysLogo对象» */
export interface RSysLogo对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«SysWorkerNodeResDto» */
export interface RSysWorkerNodeResDto {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«UserInfo» */
export interface RUserInfo {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«int» */
export interface RInt {
  /** @format int32 */
  code?: number;
  /** @format int32 */
  data?: number;
  msg?: string;
}

/** R«sm_category表的po对象» */
export interface RSmCategory表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sm_common_pre_processor表的po对象» */
export interface RSmCommonPreProcessor表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sm_common_result_processor表的po对象» */
export interface RSmCommonResultProcessor表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sm_my_pre_processor表的po对象» */
export interface RSmMyPreProcessor表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sm_my_result_processor表的po对象» */
export interface RSmMyResultProcessor表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sm_subscription表的po对象» */
export interface RSmSubscription表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«string» */
export interface RString {
  /** @format int32 */
  code?: number;
  data?: string;
  msg?: string;
}

/** R«sys_app_category表的po对象» */
export interface RSysAppCategory表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_app_supplier表的po对象» */
export interface RSysAppSupplier表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_app表的po对象» */
export interface RSysApp表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_constant表的po对象» */
export interface RSysConstant表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_data_source表的po对象» */
export interface RSysDataSource表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_data_sync_task表的po对象» */
export interface RSysDataSyncTask表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_organization表的po对象» */
export interface RSysOrganization表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_third_service表的po对象» */
export interface RSysThirdService表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_worker_group表的po对象» */
export interface RSysWorkerGroup表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«sys_worker_node表的po对象» */
export interface RSysWorkerNode表的po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«交互日志-详情» */
export interface R交互日志详情 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«基本的分页结果对象«系统审计日志po对象»» */
export interface R基本的分页结果对象系统审计日志po对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«基本的分页结果对象«系统消息vo对象»» */
export interface R基本的分页结果对象系统消息vo对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«基本的分页结果对象«系统配置参数vo对象»» */
export interface R基本的分页结果对象系统配置参数vo对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«提供方(Webservice)返回对象» */
export interface R提供方Webservice返回对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«提供方配置返回对象» */
export interface R提供方配置返回对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«登录初始化vo对象» */
export interface R登录初始化vo对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/** R«路由图谱返回对象» */
export interface R路由图谱返回对象 {
  /** @format int32 */
  code?: number;
  data?: any;
  msg?: string;
}

/**
 * ServiceInfoDetailDto对象
 * 服务详情对象
 */
export interface ServiceInfoDetailDto对象 {
  /**
   * 是否可删除：0-否，1-是，对于一些系统固化的api，禁止在前端删除
   * @format int32
   */
  canDelete?: number;
  /**
   * 是否可编辑：0-否，1-是，对于一些系统固化的api，禁止在前端修改
   * @format int32
   */
  canEdit?: number;
  /**
   * 所属分组ID，关联：sm_category.id
   * @format int32
   */
  categoryId?: number;
  /** 所属服务类别名称 */
  categoryName?: string;
  /** 服务代码 */
  code?: string;
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 入参具体字段树形json字符串 */
  inJsonParam?: string;
  /** 入参树 */
  inParamTree?: any;
  /** 日志级别：all-全链路，entry-入口日志（记录入出参消息，不记录中间步骤日志），entryNoParam-入口日志（不记录入出参消息，不记录中间步骤日志，便于监控统计服务调用耗时与次数等），none-不记录日志 */
  logLevel?: string;
  /**
   * 主版本号，暂定规则：从1开始，用户根据情况，界面上可手工加一
   * @format int32
   */
  majorVersion?: number;
  memo?: string;
  /**
   * 次版本号，每次修改时都要加一，生成规则：从1开始，自增数字(从1开始)
   * @format int32
   */
  minorVersion?: number;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  /** 服务名称 */
  name?: string;
  /** 通信模式，取值：sync - 同步，async - 异步 */
  openMode?: string;
  /** 开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
  openProtocol?: string;
  /** 操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
  optType?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** 出参树 */
  outParamTree?: any;
  /** 路由执行模式，取值：parallel - 并行（默认，同时调用所有路由），serial - 串行（按顺序依次调用，一个执行完成后，才会调用下一个） */
  routeExecMode?: string;
  /** 路由的条件关系，取值：broadcast - 广播（默认，满足条件的路由都会执行），single - 单路（只会执行满足条件的第一个路由） */
  routeRelation?: string;
  /** 服务模式，取值：hosp - 院标，hlht - 国标(互联互通)，diy-定制(自定义) */
  serviceMode?: string;
  /** 服务模式名称 */
  serviceModeName?: string;
  /** @format int32 */
  sortNo?: number;
  /**
   * 服务状态：1=待设计，2=待配置，3=待发布，4=已发布服务定义步骤点击「保存」退出，此服务为「待设计」状态参数设计步骤点击「保存」退出，此服务为「待配置提供方」状态服务配置步骤点击「保存」退出，此服务为「待发布」状态脚本校验步骤点击「完成」退出，此服务为「待发布」状态
   * @format int32
   */
  status?: number;
  /** 对外开放的url路径，全局唯一 */
  urlPath?: string;
  /** 版本号，由主版本号与次版本号拼接而成，英文句号分隔 */
  version?: string;
  /**
   * 引擎分组id，如果有值，则在服务发布时，不可改变引擎分组，关联：sys_worker_group.id
   * @format int32
   */
  workerGroupId?: number;
  /** 所属引擎类别名称 */
  workerGroupName?: string;
}

/** ServiceParamResDto */
export interface ServiceParamResDto {
  /** 子节点 */
  children?: any[];
  /** 数据长度 */
  dataLength?: string;
  /** 数据类型 */
  dataType?: string;
  /** 默认值 */
  defaultVal?: string;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /**
   * id
   * @format int32
   */
  id?: number;
  /**
   * 是否属性,0=否(非xml默认为0)，1=是，仅适用于xml节点属性
   * @format int32
   */
  isAttr?: number;
  /**
   * 是否循环,0=否，1=是
   * @format int32
   */
  loopFlag?: number;
  /** 描述 */
  memo?: string;
  /** 参数代码 */
  paramCode?: string;
  /** 参数名称 */
  paramName?: string;
  /** 参数类型，取值：in-header、in-query、in-path、in-body、out-header、out-body */
  paramType?: string;
  /**
   * 上级节点id,0表示根级
   * @format int32
   */
  parentId?: number;
  /** 上级节点名称 */
  parentParamName?: string;
  /** 小数点位数 */
  pointLength?: string;
  /**
   * 是否必填,0=否，1=是
   * @format int32
   */
  requiredFlag?: number;
  /** 示例值 */
  sampleVal?: string;
  /**
   * 服务id,对应sm_service_info表的id
   * @format int32
   */
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

/**
 * ServiceParamTreeDto对象
 * 服务参数树对象
 */
export interface ServiceParamTreeDto对象 {
  /** 子节点 */
  children?: any[];
  /**
   * 创建人id
   * @format int64
   */
  createdById?: number;
  /** 创建人名称 */
  createdByName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createdTime?: string;
  /**
   * 数据长度
   * @format int32
   */
  dataLength?: number;
  /** 数据类型，Object = 节点,S = 字符型,L = 布尔型,N = 数值型,D = 日期型(格式：YYYYMMDD),DT = 日期时间型(格式：YYYYMMDDThhmmss),T = 时间型(格式：hhmmss) */
  dataType?: string;
  /** 数据类型对应中文描述 */
  dataTypeDesc?: string;
  /** 默认值 */
  defaultVal?: string;
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /**
   * ID
   * @format int32
   */
  id?: number;
  /** 参数jsonPath */
  jsonPath?: string;
  /**
   * 是否循环,0=否，1=是
   * @format int32
   */
  loopFlag?: number;
  /** 参数代码 */
  paramCode?: string;
  /** 参数名称 */
  paramName?: string;
  /**
   * 参数类型，1=入参，2=出参
   * @format int32
   */
  paramType?: number;
  /**
   * 父级ID
   * @format int32
   */
  parentId?: number;
  /**
   * 小数点位数，默认为0，当data_type=N的时候，此字段才有意义
   * @format int32
   */
  pointLength?: number;
  /** 参数描述 */
  remark?: string;
  /**
   * 是否必填,0=否，1=是
   * @format int32
   */
  requiredFlag?: number;
  /**
   * 对应sm_service_info表的id
   * @format int64
   */
  serviceId?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 更新人id
   * @format int64
   */
  updatedById?: number;
  /** 更新人名称 */
  updatedByName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string;
  /**
   * 版本号,可用于乐观锁
   * @format int32
   */
  version?: number;
}

/** ServiceParamTreeResDto */
export interface ServiceParamTreeResDto {
  /** 对应参数类型中的in-body */
  inBodyList?: any[];
  /** 对应参数类型中的in-header */
  inHeaderList?: any[];
  /** 对应参数类型中的in-path */
  inPathList?: any[];
  /** 对应参数类型中的in-query */
  inQueryList?: any[];
  /** 对应参数类型中的out-body */
  outBodyList?: any[];
  /** 对应参数类型中的out-header */
  outHeaderList?: any[];
}

/**
 * SysAppCategory对象
 * 应用类别表
 */
export interface SysAppCategory对象 {
  /** 分组代码 */
  code: string;
  /**
   * id
   * @format int32
   */
  id: number;
  /** 备注 */
  memo?: string;
  /** 分组名 */
  name: string;
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** SysDataSyncTaskResDto */
export interface SysDataSyncTaskResDto {
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  /**
   * 重试次数，从1开始，最大30次，重试间隔30秒
   * @format int32
   */
  retryIndex?: number;
  /** 源对象本次同步信息的上下文内容，json格式，如果为空，则表示删除，“source_type”不同，对应不同的json格式 */
  sourceContext?: string;
  /** 源对象的主键 */
  sourceKeyValue?: string;
  /** 源对象类型 */
  sourceType?: string;
  /**
   * 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败
   * @format int32
   */
  status?: number;
  /**
   * 工作节点id
   * @format int32
   */
  workerId?: number;
  /** 工作节点名称 */
  workerName?: string;
}

/** SysDept对象 */
export interface SysDept对象 {
  /** 祖级列表 */
  ancestors?: string;
  /** 区域编码 */
  areaCode?: string;
  /** 区域名称 */
  areaName?: string;
  /** 子部门 */
  children?: any[];
  /**
   * 创建人id
   * @format int64
   */
  createdById?: number;
  /** 创建人名称 */
  createdByName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createdTime?: string;
  /**
   * 删除标记
   * @format int64
   */
  deleted?: number;
  /** 【机构编码/科室编码】 */
  deptCode?: string;
  /**
   * 部门id
   * @format int64
   */
  deptId?: number;
  /**
   * 中心机构【0分中心 1中心机构】
   * @format int32
   */
  deptIscenter?: number;
  /** 组织logo */
  deptLogo?: string;
  /** 部门名称 */
  deptName?: string;
  /**
   * 组织类型【0机构 1科室】
   * @format int32
   */
  deptType?: number;
  /** 邮箱 */
  email?: string;
  /** 负责人 */
  leader?: string;
  /**
   * 显示顺序
   * @format int32
   */
  orderNum?: number;
  /**
   * 父部门id
   * @format int64
   */
  parentId?: number;
  /** 联系电话 */
  phone?: string;
  /** 部门状态（0正常 1停用） */
  status?: string;
  /**
   * 更新人id
   * @format int64
   */
  updatedById?: number;
  /** 更新人名称 */
  updatedByName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string;
  /**
   * 版本号,可用于乐观锁
   * @format int32
   */
  version?: number;
}

/** SysLogo对象 */
export interface SysLogo对象 {
  /**
   * 创建时间
   * @format date-time
   */
  createdTime?: string;
  /** 页脚Logo */
  footerLogo?: string;
  /** 页首Logo */
  headerLogo?: string;
  /**
   * 主键id
   * @format int64
   */
  id?: number;
  /** 系统编码 */
  sysCode?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string;
  /**
   * 版本号,可用于乐观锁
   * @format int32
   */
  version?: number;
}

/** SysRole对象 */
export interface SysRole对象 {
  /**
   * 创建人id
   * @format int64
   */
  createdById?: number;
  /** 创建人名称 */
  createdByName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createdTime?: string;
  /**
   * 0全部机构数据 1部分机构数据 2所在机构数据
   * @format int32
   */
  dataPower?: number;
  /** 数据权限所包含depId,分割 */
  dataPowerDept?: string;
  /** 数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限） */
  dataScope?: string;
  /**
   * 删除标记
   * @format int64
   */
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
  /**
   * 角色ID
   * @format int64
   */
  roleId?: number;
  /** 角色权限字符串 */
  roleKey?: string;
  /** 角色名称 */
  roleName?: string;
  /**
   * 显示顺序
   * @format int32
   */
  roleSort?: number;
  /**
   * 0系统角色  1项目角色
   * @format int32
   */
  roleType?: number;
  /** 角色状态（0正常 1停用） */
  status?: string;
  /**
   * 更新人id
   * @format int64
   */
  updatedById?: number;
  /** 更新人名称 */
  updatedByName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string;
  /**
   * 版本号,可用于乐观锁
   * @format int32
   */
  version?: number;
}

/** SysUser对象 */
export interface SysUser对象 {
  /** 头像地址 */
  avatar?: string;
  /**
   * 创建人id
   * @format int64
   */
  createdById?: number;
  /** 创建人名称 */
  createdByName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createdTime?: string;
  /** 科室 */
  curDept?: any;
  /** 机构 */
  curOrgan?: any;
  /**
   * 删除标记
   * @format int64
   */
  deleted?: number;
  /** 部门对象 */
  dept?: any;
  /**
   * 部门ID
   * @format int64
   */
  deptId?: number;
  /** 用户邮箱 */
  email?: string;
  /** 工号 */
  jobNumber?: string;
  /**
   * 最后登录时间
   * @format date-time
   */
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
  roles?: any[];
  /** 用户性别（0男 1女 2未知） */
  sex?: string;
  /** 帐号状态（0正常 1停用） */
  status?: string;
  /**
   * 更新人id
   * @format int64
   */
  updatedById?: number;
  /** 更新人名称 */
  updatedByName?: string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedTime?: string;
  /**
   * 用户ID
   * @format int64
   */
  userId?: number;
  /** 用户账号 */
  userName?: string;
  /** 用户编号 */
  userNumber?: string;
  /** 用户类型（00系统用户） */
  userType?: string;
  /**
   * 版本号,可用于乐观锁
   * @format int32
   */
  version?: number;
  /** 水印内容 */
  waterContent?: string;
  /** 是否开启下载水印 0-否 1-是 */
  waterFlag?: boolean;
}

/** SysWorkerNodeResDto */
export interface SysWorkerNodeResDto {
  /**
   * 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量
   * @format int32
   */
  apiMaxNo?: number;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** IP地址 */
  ip?: string;
  /** 最近心跳测试结果说明 */
  lastHeartbeatMemo?: string;
  /**
   * 上一次心跳正常的时间
   * @format date-time
   */
  lastHeartbeatOkTime?: string;
  /**
   * 最近心跳测试结果状态：0-失败，1-正常
   * @format int32
   */
  lastHeartbeatStatus?: number;
  /**
   * 最近心跳测试时间
   * @format date-time
   */
  lastHeartbeatTime?: string;
  /**
   * 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务）
   * @format int32
   */
  loadWeight?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 工作节点名称 */
  name?: string;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType?: string;
  /**
   * 在线状态：0-离线，1-在线
   * @format int32
   */
  onlineStatus?: number;
  /**
   * 用于集成引擎，此字段存放的是对外开放的http协议端口号
   * @format int32
   */
  portApi?: number;
  /**
   * 用于存放Springboot的web容器端口
   * @format int32
   */
  portBoot?: number;
  /**
   * 最近心跳失败的次数，从最近一次心跳正常之后开始计数
   * @format int32
   */
  recentHeartbeatFailCount?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 上线时间，结合当前时间可以计算运行时长
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status?: number;
  /**
   * 离线时间，结合上线时间可以计算运行时长
   * @format date-time
   */
  stopTime?: string;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode?: string;
  /** 工作节点的程序版本 */
  version?: string;
  /**
   * 是否可见：0-否，1-是(默认)
   * @format int32
   */
  visible?: number;
  /**
   * 引擎分组id
   * @format int32
   */
  workerGroupId?: number;
  /** 引擎分组名称 */
  workerGroupName?: string;
}

/** TreeNode */
export interface TreeNode {
  /** 子节点 */
  children?: any[];
  /** 是否有子节点，true表示有 */
  hasChildren?: boolean;
  /**
   * ID
   * @format int32
   */
  id?: number;
  /**
   * 父级ID
   * @format int32
   */
  parentId?: number;
}

/** UserInfo */
export interface UserInfo {
  /** 权限码列表 */
  permissions?: string[];
  /** 角色列表 */
  roles?: string[];
  /** 用户 */
  sysUser?: any;
}

/** View */
export interface View {
  contentType?: string;
}

/**
 * bodyOneParam的属性
 * bodyOneParam的属性
 */
export interface BodyOneParam的属性 {
  /** 参数代码 */
  code?: string;
  /** 子级参数 */
  innerParams?: any[];
  /** 参数名称 */
  name?: string;
  /** 取值路径 */
  valuePath?: string;
  /** 值来源类别 */
  valueSourceType?: string;
}

/** sm_category表的po对象 */
export interface SmCategory表的po对象 {
  /** 分组代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 分组名 */
  name?: string;
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** sm_common_pre_processor表的po对象 */
export interface SmCommonPreProcessor表的po对象 {
  /** 处理器定义(json) */
  compSchema?: string;
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  memo?: string;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  /** 处理器名称 */
  name?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId?: number;
  /** 处理器类型 */
  type?: string;
}

/** sm_common_result_processor表的po对象 */
export interface SmCommonResultProcessor表的po对象 {
  /** 处理器定义(json) */
  compSchema?: string;
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /**
   * 是否异常处理器：0-否，1-是(默认0)
   * @format int32
   */
  isErr?: number;
  memo?: string;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  /** 处理器名称 */
  name?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId?: number;
  /** 处理器类型 */
  type?: string;
}

/** sm_my_pre_processor表的po对象 */
export interface SmMyPreProcessor表的po对象 {
  /** 处理器定义(json) */
  compSchema?: string;
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  memo?: string;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  /** 处理器名称 */
  name?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId?: number;
  /** 处理器类型 */
  type?: string;
}

/** sm_my_result_processor表的po对象 */
export interface SmMyResultProcessor表的po对象 {
  /** 处理器定义(json) */
  compSchema?: string;
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  memo?: string;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  /** 处理器名称 */
  name?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId?: number;
  /** 处理器类型 */
  type?: string;
}

/** sm_subscription表的po对象 */
export interface SmSubscription表的po对象 {
  /**
   * 应用系统id
   * @format int32
   */
  appId?: number;
  /**
   * 申请时间
   * @format date-time
   */
  applyTime?: string;
  /**
   * 申请者id
   * @format int32
   */
  applyUid?: number;
  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string;
  /**
   * 审核者id
   * @format int32
   */
  auditUid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /**
   * 服务id
   * @format int32
   */
  serviceId?: number;
  /**
   * 状态：0=待审核(默认)，1=已通过，2=未通过
   * @format int32
   */
  status?: number;
}

/** sys_app_category表的po对象 */
export interface SysAppCategory表的po对象 {
  /** 分组代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /** 分组名 */
  name?: string;
  /**
   * 父级分组id，0(默认)表示根级分组
   * @format int32
   */
  parentId?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** sys_app_supplier表的po对象 */
export interface SysAppSupplier表的po对象 {
  /** 联系地址 */
  addr?: string;
  /** 联系人 */
  appContacts?: string;
  /** 联系电话 */
  appContactsPhone?: string;
  /** 代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /** 电子邮件 */
  email?: string;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 名称 */
  name?: string;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用
   * @format int32
   */
  status?: number;
}

/** sys_app表的po对象 */
export interface SysApp表的po对象 {
  /**
   * 应用类别id
   * @format int32
   */
  appCategoryId?: number;
  /**
   * 提供商id
   * @format int32
   */
  appSupplierId?: number;
  /** 应用程序版本号 */
  appVersion?: string;
  /** 代码，或称应用id */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 名称 */
  name?: string;
  /**
   * 机构id
   * @format int32
   */
  organizationId?: number;
  /** 密钥，调用api的加密签名要根据密钥计算而出 */
  secret?: string;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status?: number;
}

/** sys_constant表的po对象 */
export interface SysConstant表的po对象 {
  /** 常量编码 */
  code?: string;
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  memo?: string;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  name?: string;
  /**
   * 排序号
   * @format int32
   */
  sortNo?: number;
  /** 常量值 */
  value?: string;
}

/** sys_data_source表的po对象 */
export interface SysDataSource表的po对象 {
  /**
   * 是否自动提交池中返回的连接，取值：0-否，1-是（默认）
   * @format int32
   */
  autoCommit?: number;
  /** 内码，不对外开放，便于内置一些数据源，其他地方可以引用此内码 */
  code?: string;
  /**
   * 程序向连接池中请求连接时，单位：毫秒。默认：30000
   * @format int32
   */
  connectionTimeout?: number;
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /** 数据源类名 */
  dataSourceClassName?: string;
  /** 库名 */
  dbName?: string;
  /** 驱动类名 */
  driverClassName?: string;
  /**
   * 驱动jar的文件id
   * @format int32
   */
  driverJarId?: number;
  /** jdbc连接串的额外参数，用于和ip、port等信息拼接，自动生成完整的连接串 */
  extJdbcParams?: string;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /**
   * 空闲时间，单位：毫秒。默认:600000
   * @format int32
   */
  idleTimeout?: number;
  /** 数据源ip地址 */
  ip?: string;
  /** jdbc连接串，前端通过aes加密传到后端，后端解密后明文存库 */
  jdbcConnection?: string;
  /**
   * 跟数据库保持心跳连接的间隔，单位：毫秒。默认：30000
   * @format int32
   */
  keepaliveTime?: number;
  /**
   * 该属性用于控制连接在池中的最大生存时间，超过该时间强制逐出，连接池向数据申请新的连接进行补充，单位：毫秒。默认:1800000
   * @format int32
   */
  maxLifetime?: number;
  /**
   * 连接池中最多支持多少个活动连接，默认：CPU核心数的两倍
   * @format int32
   */
  maxPoolSize?: number;
  /** 备注 */
  memo?: string;
  /**
   * 回收空闲连接时，将保证最少连接数，默认：CPU核心数的两倍
   * @format int32
   */
  minIdle?: number;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  /** 连接名 */
  name?: string;
  /** 数据库密码，前端通过aes加密传到后端，后端解密后明文存库 */
  password?: string;
  /**
   * 数据源端口号
   * @format int32
   */
  port?: number;
  /**
   * 排序号
   * @format int32
   */
  sortNo?: number;
  /** 测试的sql查询脚本 */
  testQuerySql?: string;
  /** 数据库类型：SQLServer，Oracle，MySQL，PgSQL等 */
  type?: string;
  /** 数据库用户名，前端通过aes加密传到后端，后端解密后明文存库 */
  username?: string;
}

/** sys_data_sync_task表的po对象 */
export interface SysDataSyncTask表的po对象 {
  /** @format date-time */
  ctime?: string;
  /** @format int32 */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /** @format date-time */
  mtime?: string;
  /** @format int32 */
  muid?: number;
  /**
   * 重试次数，从1开始，最大30次，重试间隔30秒
   * @format int32
   */
  retryIndex?: number;
  /** 源对象本次同步信息的上下文内容，json格式，如果为空，则表示删除，“source_type”不同，对应不同的json格式 */
  sourceContext?: string;
  /** 源对象的主键 */
  sourceKeyValue?: string;
  /** 源对象类型 */
  sourceType?: string;
  /**
   * 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败
   * @format int32
   */
  status?: number;
  /**
   * 工作节点id
   * @format int32
   */
  workerId?: number;
}

/** sys_organization表的po对象 */
export interface SysOrganization表的po对象 {
  /** 机构代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 机构名称 */
  name?: string;
  /**
   * 父级机构id
   * @format int32
   */
  parentId?: number;
  /** 简称 */
  shortName?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status?: number;
  /**
   * 机构类型：0-机构(默认)，1-科室
   * @format int32
   */
  type?: number;
}

/** sys_third_service表的po对象 */
export interface SysThirdService表的po对象 {
  /**
   * 应用id
   * @format int32
   */
  appId?: number;
  /** 代码，默认用guid，便于导入时根据此代码覆盖 */
  code?: string;
  /** 终端定义(json)，包括请求体、请求头、路径参数、安全机制、响应体等 */
  compSchema?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /**
   * 执行超时，单位：秒
   * @format int32
   */
  execTimeout?: number;
  /**
   * 熔断时长，单位：秒
   * @format int32
   */
  fuseDuration?: number;
  /**
   *  熔断异常数，即连续失败多少次才会触发熔断
   * @format int32
   */
  fuseFailCount?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 服务名称 */
  name?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /**
   * 重试间隔，单位：秒
   * @format int32
   */
  retryInterval?: number;
  /**
   * 最大重试次数，如果为-1，则表示一直重试
   * @format int32
   */
  retryMax?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
  type?: string;
}

/** sys_worker_group表的po对象 */
export interface SysWorkerGroup表的po对象 {
  /** 引擎分组代码 */
  code?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 引擎分组名 */
  name?: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** sys_worker_node表的po对象 */
export interface SysWorkerNode表的po对象 {
  /**
   * 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量
   * @format int32
   */
  apiMaxNo?: number;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建人
   * @format int32
   */
  cuid?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** IP地址 */
  ip?: string;
  /** 最近心跳测试结果说明 */
  lastHeartbeatMemo?: string;
  /**
   * 上一次心跳正常的时间
   * @format date-time
   */
  lastHeartbeatOkTime?: string;
  /**
   * 最近心跳测试结果状态：0-失败，1-正常
   * @format int32
   */
  lastHeartbeatStatus?: number;
  /**
   * 最近心跳测试时间
   * @format date-time
   */
  lastHeartbeatTime?: string;
  /**
   * 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务）
   * @format int32
   */
  loadWeight?: number;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改人
   * @format int32
   */
  muid?: number;
  /** 工作节点名称 */
  name?: string;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType?: string;
  /**
   * 在线状态：0-离线，1-在线
   * @format int32
   */
  onlineStatus?: number;
  /**
   * 用于集成引擎，此字段存放的是对外开放的http协议端口号
   * @format int32
   */
  portApi?: number;
  /**
   * 用于存放Springboot的web容器端口
   * @format int32
   */
  portBoot?: number;
  /**
   * 最近心跳失败的次数，从最近一次心跳正常之后开始计数
   * @format int32
   */
  recentHeartbeatFailCount?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 上线时间，结合当前时间可以计算运行时长
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status?: number;
  /**
   * 离线时间，结合上线时间可以计算运行时长
   * @format date-time
   */
  stopTime?: string;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode?: string;
  /** 工作节点的程序版本 */
  version?: string;
  /**
   * 是否可见：0-否，1-是(默认)
   * @format int32
   */
  visible?: number;
  /**
   * 引擎分组id
   * @format int32
   */
  workerGroupId?: number;
}

/**
 * 交互日志-详情
 * 交互日志-详情
 */
export interface Type交互日志详情 {
  /**
   * 应用id
   * @format int32
   */
  consumerId?: number;
  /** 请求方IP地址 */
  consumerIp?: string;
  /**
   * 是否有重试，取值：0-否，1-是，当result_code=1时，如果此字段为1，说明最终结果为成功但过程中有异常或错误
   * @format int32
   */
  haveRetry?: number;
  /** 入参内容 */
  inMsg?: string;
  /** 入参格式 */
  inType?: string;
  /** 出参内容 */
  outMsg?: string;
  /** 出参格式 */
  outType?: string;
  /**
   * 请求时间，入口步骤收到请求的时间，精确到毫秒，示例：2022-02-10 17:15:09.034
   * @format date-time
   */
  reqTime?: string;
  /**
   * 响应时间，出口步骤返回响应的时间，精确到毫秒，示例：2022-02-10 17:15:09.034
   * @format date-time
   */
  respTime?: string;
  /**
   * 结果
   * @format int32
   */
  resultCode?: number;
  /**
   * 服务id
   * @format int32
   */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /** 应用名称 */
  sysAppName?: string;
  /**
   * 处理时长，单位：毫秒
   * @format int32
   */
  timeCost?: number;
  /** id */
  traceId?: string;
}

/**
 * 交互日志-高级检索
 * 交互日志-高级检索
 */
export interface Type交互日志高级检索 {
  /**
   * 应用id
   * @format int32
   */
  appId?: number;
  /** 全文检索 */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 结束时间
   * @format date-time
   */
  end?: string;
  /**
   * 结果代码，取值：0-失败，1-成功
   * @format int32
   */
  resultCode?: number;
  /**
   * API服务id
   * @format int32
   */
  serviceId?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /**
   * 开始时间
   * @format date-time
   */
  start?: string;
  /** @format int32 */
  startIndex?: number;
  /**
   * 处理时长，单位：毫秒
   * @format int32
   */
  timeCost?: number;
}

/**
 * 交互日志-高级检索结果
 * 交互日志-高级检索结果
 */
export interface Type交互日志高级检索结果 {
  /**
   * 应用id
   * @format int32
   */
  consumerId?: number;
  /**
   * 请求时间，入口步骤收到请求的时间，精确到毫秒，示例：2022-02-10 17:15:09.034
   * @format date-time
   */
  reqTime?: string;
  /**
   * 结果
   * @format int32
   */
  resultCode?: number;
  /**
   * 服务id
   * @format int32
   */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /** 应用名称 */
  sysAppName?: string;
  /**
   * 处理时长，单位：毫秒
   * @format int32
   */
  timeCost?: number;
  /** id */
  traceId?: string;
}

/**
 * 全局常量-新增
 * 全局常量-新增
 */
export interface Type全局常量新增 {
  /** 常量编码 */
  code: string;
  /** 备注 */
  memo?: string;
  /** 常量名称 */
  name: string;
  /** 常量值 */
  value: string;
}

/**
 * 全局常量-更新
 * 全局常量-更新
 */
export interface Type全局常量更新 {
  /** 常量编码 */
  code: string;
  /**
   * 主键id
   * @format int32
   */
  id: number;
  memo?: string;
  /** 常量名称 */
  name: string;
  /** 常量值 */
  value: string;
}

/** 全局常量查询条件 */
export interface Type全局常量查询条件 {
  /** 输入条件(code 或 name) */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
}

/**
 * 分页查询对象
 * 分页查询对象
 */
export interface Type分页查询对象 {
  /**
   * 所属服务分组id
   * @format int32
   */
  categoryId?: number;
  /** 服务名称或服务code（模糊查询） */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /** 操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
  optType?: string;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 服务状态：1=待设计，2=待配置，3=待发布，4=已发布
   * @format int32
   */
  status?: number;
}

/** 前端下拉列表项 */
export interface Type前端下拉列表项 {
  /** 下拉项代码，类似key的作用，传给后端使用 */
  code?: object;
  /**
   * 是否禁用选项：0-否，1-是
   * @format int32
   */
  disabled?: number;
  /** 扩展信息 */
  ext?: object;
  /**
   * 是否默认选项：0-否，1-是
   * @format int32
   */
  isDefault?: number;
  /** 下拉项名称，用于显示 */
  name?: string;
}

/** 前端下拉列表项«string» */
export interface Type前端下拉列表项String {
  /** 下拉项代码，类似key的作用，传给后端使用 */
  code?: string;
  /**
   * 是否禁用选项：0-否，1-是
   * @format int32
   */
  disabled?: number;
  /** 扩展信息 */
  ext?: object;
  /**
   * 是否默认选项：0-否，1-是
   * @format int32
   */
  isDefault?: number;
  /** 下拉项名称，用于显示 */
  name?: string;
}

/**
 * 厂商信息-新增
 * 厂商信息-新增
 */
export interface Type厂商信息新增 {
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
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用
   * @format int32
   */
  status: number;
}

/** 厂商信息查询条件 */
export interface Type厂商信息查询条件 {
  /** 手机号 */
  appContactsPhone?: string;
  /** 输入条件(code 或 name) */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 状态：0-停用，1-启用
   * @format int32
   */
  status?: number;
}

/** 基本的分页查询对象 */
export interface Type基本的分页查询对象 {
  /** 机构代码 */
  code: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * id
   * @format int32
   */
  id: number;
  /** MDM中对应的主键 */
  mdmId?: string;
  /** 备注 */
  memo?: string;
  /** 机构名称 */
  name: string;
  /**
   * 父级机构id
   * @format int32
   */
  parentId: number;
  /** 简称 */
  shortName?: string;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status: number;
  /**
   * 机构类型：0-机构(默认)，1-科室
   * @format int32
   */
  type: number;
}

/** 基本的分页结果对象«系统审计日志po对象» */
export interface Type基本的分页结果对象系统审计日志po对象 {
  /** 列表数据 */
  records?: any[];
  /**
   * 总记录数
   * @format int32
   */
  total?: number;
}

/** 基本的分页结果对象«系统消息vo对象» */
export interface Type基本的分页结果对象系统消息vo对象 {
  /** 列表数据 */
  records?: any[];
  /**
   * 总记录数
   * @format int32
   */
  total?: number;
}

/** 基本的分页结果对象«系统配置参数vo对象» */
export interface Type基本的分页结果对象系统配置参数vo对象 {
  /** 列表数据 */
  records?: any[];
  /**
   * 总记录数
   * @format int32
   */
  total?: number;
}

/**
 * 存储过程参数
 * 存储过程参数
 */
export interface Type存储过程参数 {
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

/**
 * 工作节点-新增
 * 工作节点-新增
 */
export interface Type工作节点新增 {
  /**
   * 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量
   * @format int32
   */
  apiMaxNo?: number;
  /** IP地址 */
  ip: string;
  /** 最近心跳测试结果说明 */
  lastHeartbeatMemo?: string;
  /**
   * 上一次心跳正常的时间
   * @format date-time
   */
  lastHeartbeatOkTime?: string;
  /**
   * 最近心跳测试结果状态：0-失败，1-正常
   * @format int32
   */
  lastHeartbeatStatus?: number;
  /**
   * 最近心跳测试时间
   * @format date-time
   */
  lastHeartbeatTime?: string;
  /**
   * 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务）
   * @format int32
   */
  loadWeight?: number;
  /** 备注 */
  memo?: string;
  /** 工作节点名称 */
  name: string;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType: string;
  /**
   * 在线状态：0-离线，1-在线
   * @format int32
   */
  onlineStatus: number;
  /**
   * 用于集成引擎，此字段存放的是对外开放的http协议端口号
   * @format int32
   */
  portApi?: number;
  /**
   * 用于存放Springboot的web容器端口
   * @format int32
   */
  portBoot: number;
  /**
   * 最近心跳失败的次数，从最近一次心跳正常之后开始计数
   * @format int32
   */
  recentHeartbeatFailCount?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 上线时间，结合当前时间可以计算运行时长
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status: number;
  /**
   * 离线时间，结合上线时间可以计算运行时长
   * @format date-time
   */
  stopTime?: string;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode: string;
  /** 工作节点的程序版本 */
  version?: string;
  /**
   * 是否可见：0-否，1-是(默认)
   * @format int32
   */
  visible: number;
  /**
   * 引擎分组id
   * @format int32
   */
  workerGroupId?: number;
}

/**
 * 工作节点-更新
 * 工作节点-更新
 */
export interface Type工作节点更新 {
  /**
   * 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量
   * @format int32
   */
  apiMaxNo?: number;
  /**
   * id
   * @format int32
   */
  id: number;
  /** IP地址 */
  ip: string;
  /** 最近心跳测试结果说明 */
  lastHeartbeatMemo?: string;
  /**
   * 上一次心跳正常的时间
   * @format date-time
   */
  lastHeartbeatOkTime?: string;
  /**
   * 最近心跳测试结果状态：0-失败，1-正常
   * @format int32
   */
  lastHeartbeatStatus?: number;
  /**
   * 最近心跳测试时间
   * @format date-time
   */
  lastHeartbeatTime?: string;
  /**
   * 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务）
   * @format int32
   */
  loadWeight?: number;
  /** 备注 */
  memo?: string;
  /** 工作节点名称 */
  name: string;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType: string;
  /**
   * 在线状态：0-离线，1-在线
   * @format int32
   */
  onlineStatus: number;
  /**
   * 用于集成引擎，此字段存放的是对外开放的http协议端口号
   * @format int32
   */
  portApi?: number;
  /**
   * 用于存放Springboot的web容器端口
   * @format int32
   */
  portBoot: number;
  /**
   * 最近心跳失败的次数，从最近一次心跳正常之后开始计数
   * @format int32
   */
  recentHeartbeatFailCount?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /**
   * 上线时间，结合当前时间可以计算运行时长
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status: number;
  /**
   * 离线时间，结合上线时间可以计算运行时长
   * @format date-time
   */
  stopTime?: string;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode: string;
  /** 工作节点的程序版本 */
  version?: string;
  /**
   * 是否可见：0-否，1-是(默认)
   * @format int32
   */
  visible: number;
  /**
   * 引擎分组id
   * @format int32
   */
  workerGroupId?: number;
}

/**
 * 工作节点分组-新增
 * 工作节点分组-新增
 */
export interface Type工作节点分组新增 {
  /** 备注 */
  memo?: string;
  /** 分组名 */
  name: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/**
 * 工作节点分组-更新
 * 工作节点分组-更新
 */
export interface Type工作节点分组更新 {
  /**
   * id
   * @format int32
   */
  id: number;
  /** 备注 */
  memo?: string;
  /** 分组名 */
  name: string;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
}

/** 工作节点分组查询条件 */
export interface Type工作节点分组查询条件 {
  /** 输入条件(name) */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
}

/** 工作节点查询条件 */
export interface Type工作节点查询条件 {
  /** 输入条件(name) */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 最近心跳测试结果状态：0-失败，1-正常
   * @format int32
   */
  lastHeartbeatStatus?: number;
  /** 节点类型：admin-管理中心，engine-集成引擎，gateway-网关节点，monitor-监控日志节点 */
  nodeType?: string;
  /**
   * 在线状态：0-离线，1-在线
   * @format int32
   */
  onlineStatus?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 状态：0-停用，1-启用(默认)
   * @format int32
   */
  status?: number;
  /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
  syncMode?: string;
}

/** 应用系统分组 */
export interface Type应用系统分组 {
  /** 输入框条件（组织名称/类别代码） */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
}

/** 应用系统分页查询对象 */
export interface Type应用系统分页查询对象 {
  /** appId列表 */
  appIds?: number[];
  /** 输入条件 */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /** 懒加载 */
  lazy?: boolean;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 0-停用，1-在用
   * @format int32
   */
  status?: number;
}

/**
 * 批量维护参数
 * 批量维护参数
 */
export interface Type批量维护参数 {
  /** 新增或修改参数列表 */
  serviceParamUpdateDtoList: any[];
  /** 要删除的参数id集合 */
  toDoDeleted?: number[];
}

/**
 * 提供方(Webservice)返回对象
 * 提供方(Webservice)返回对象
 */
export interface Type提供方Webservice返回对象 {
  /**
   * 提供方id
   * @format int32
   */
  appId?: number;
  /** 提供方地址 */
  endpointUrl?: string;
  /** 方法名 */
  func?: string;
  /**
   * id
   * @format int32
   */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 提供方名称 */
  name?: string;
  /** 命名空间 */
  ns?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /**
   * 个性预处理器id
   * @format int32
   */
  preId?: number;
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /**
   * 个性结果处理器id
   * @format int32
   */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /**
   * 是否启用：0-停用，1-启用
   * @format int32
   */
  status?: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type?: string;
}

/**
 * 提供方-参数«string»
 * 提供方-参数
 */
export interface Type提供方参数String {
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
 * 提供方-新增(HttpGet)
 * 提供方-新增(HttpGet)
 */
export interface Type提供方新增HttpGet {
  /**
   * 提供方id
   * @format int32
   */
  appId: number;
  /** 提供方地址 */
  endpointUrl: string;
  /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
  headerParams?: any[];
  /**
   * id, 新增不传值, 更新传值
   * @format int32
   */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** url路径中的参数 */
  pathParams?: any[];
  /**
   * 个性预处理器id
   * @format int32
   */
  preId?: number;
  /** url中的query参数 */
  queryParams?: any[];
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /**
   * 个性结果处理器id
   * @format int32
   */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId: number;
  /**
   * 是否启用：0-停用，1-启用
   * @format int32
   */
  status: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * 提供方-新增(HttpPost)
 * 提供方-新增(HttpPost)
 */
export interface Type提供方新增HttpPost {
  /**
   * 提供方id
   * @format int32
   */
  appId: number;
  /** 请求消息体，适用于“contentType”属性为json、xml、text等情况，消息内部结构定义id，用于json、xml、hl7等复杂结构 */
  bodyOneParam?: any;
  /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
  bodyTableParams?: any[];
  /** 提供方地址 */
  endpointUrl: string;
  /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
  headerParams?: any[];
  /**
   * id, 新增不传值, 更新传值
   * @format int32
   */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** url路径中的参数 */
  pathParams?: any[];
  /**
   * 个性预处理器id
   * @format int32
   */
  preId?: number;
  /** url中的query参数 */
  queryParams?: any[];
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /**
   * 个性结果处理器id
   * @format int32
   */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId: number;
  /**
   * 是否启用：0-停用，1-启用
   * @format int32
   */
  status: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * 提供方-新增(SP)
 * 提供方-新增(SP)
 */
export interface Type提供方新增SP {
  /**
   * 提供方id
   * @format int32
   */
  appId: number;
  /**
   * 数据源id
   * @format int32
   */
  dsId?: number;
  /**
   * id, 新增不传值, 更新传值
   * @format int32
   */
  id?: number;
  /** 入参配置 */
  params?: any[];
  /**
   * 服务ID
   * @format int32
   */
  serviceId: number;
  /** 存储过程名 */
  spName?: string;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * 提供方-新增(SQL)
 * 提供方-新增(SQL)
 */
export interface Type提供方新增SQL {
  /**
   * 提供方id
   * @format int32
   */
  appId: number;
  /** 提供方地址 */
  endpointUrl: string;
  /**
   * id, 新增不传值, 更新传值
   * @format int32
   */
  id?: number;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /**
   * 个性预处理器id
   * @format int32
   */
  preId?: number;
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /**
   * 个性结果处理器id
   * @format int32
   */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId: number;
  /** SQL配置集合 */
  sqlConfigurations?: any[];
  /**
   * 是否启用：0-停用，1-启用
   * @format int32
   */
  status: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * 提供方-新增(Webservice)
 * 提供方-新增(Webservice)
 */
export interface Type提供方新增Webservice {
  /**
   * 提供方id
   * @format int32
   */
  appId: number;
  /** 提供方地址 */
  endpointUrl: string;
  /** 方法名 */
  func: string;
  /**
   * id, 新增不传值, 更新传值
   * @format int32
   */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat: string;
  /** 命名空间 */
  ns: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /**
   * 个性预处理器id
   * @format int32
   */
  preId?: number;
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /**
   * 个性结果处理器id
   * @format int32
   */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId: number;
  /**
   * 是否启用：0-停用，1-启用
   * @format int32
   */
  status: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type: string;
}

/**
 * 提供方-新增SQL树结构
 * 提供方-新增SQL树结构
 */
export interface Type提供方新增SQL树结构 {
  /** 子级sql对象 */
  children?: any[];
  /**
   * 数据源id
   * @format int32
   */
  dsId?: number;
  /**
   * 是否开启总事务：0-否，1-是，用于将所有Sql脚本放在一个事务中控制
   * @format int32
   */
  isTrans?: number;
  /** SQL脚本内容 */
  scriptContent?: string;
  /** SQL脚本名称 */
  scriptName?: string;
}

/**
 * 提供方-树形参数
 * 提供方-树形参数
 */
export interface Type提供方树形参数 {
  /** 子级参数 */
  children?: any[];
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
 * 提供方配置返回对象
 * 提供方配置返回对象
 */
export interface Type提供方配置返回对象 {
  /**
   * 提供方id
   * @format int32
   */
  appId?: number;
  /** 请求消息体，适用于“contentType”属性为json、xml、text等情况，消息内部结构定义id，用于json、xml、hl7等复杂结构 */
  bodyOneParam?: any;
  /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
  bodyTableParams?: any[];
  /** 提供方地址 */
  endpointUrl?: string;
  /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
  headerParams?: any[];
  /**
   * id
   * @format int32
   */
  id?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 提供方名称 */
  name?: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /** url路径中的参数 */
  pathParams?: any[];
  /**
   * 个性预处理器id
   * @format int32
   */
  preId?: number;
  /** url中的query参数 */
  queryParams?: any[];
  /** 消息头key */
  resultAttr?: string;
  /** 结果名 */
  resultCode?: string;
  /**
   * 个性结果处理器id
   * @format int32
   */
  resultId?: number;
  /** 匹配方式：equal - 相等，contain - 包含，beIncluded - 被包含，regex - 正则表达式 */
  resultMatchType?: string;
  /** 结果来源 */
  resultSource?: string;
  /** 成功值 */
  resultSuccessValue?: string;
  /**
   * 服务ID
   * @format int32
   */
  serviceId?: number;
  /** 服务名称 */
  serviceName?: string;
  /**
   * 是否启用：0-停用，1-启用
   * @format int32
   */
  status?: number;
  /** 提供方服务模式，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
  type?: string;
}

/**
 * 数据同步任务-新增
 * 数据同步任务-新增
 */
export interface Type数据同步任务新增 {
  /** 备注 */
  memo?: string;
  /**
   * 重试次数，从1开始，最大30次，重试间隔30秒
   * @format int32
   */
  retryIndex: number;
  /** 源对象本次同步信息的上下文内容，json格式，如果为空，则表示删除，“source_type”不同，对应不同的json格式 */
  sourceContext?: string;
  /** 源对象的主键 */
  sourceKeyValue: string;
  /** 源对象类型 */
  sourceType: string;
  /**
   * 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败
   * @format int32
   */
  status: number;
  /**
   * 工作节点id
   * @format int32
   */
  workerId: number;
}

/**
 * 数据同步任务-更新
 * 数据同步任务-更新
 */
export interface Type数据同步任务更新 {
  /**
   * id
   * @format int32
   */
  id: number;
  /** 备注 */
  memo?: string;
  /**
   * 重试次数，从1开始，最大30次，重试间隔30秒
   * @format int32
   */
  retryIndex: number;
  /** 源对象本次同步信息的上下文内容，json格式，如果为空，则表示删除，“source_type”不同，对应不同的json格式 */
  sourceContext?: string;
  /** 源对象的主键 */
  sourceKeyValue: string;
  /** 源对象类型 */
  sourceType: string;
  /**
   * 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败
   * @format int32
   */
  status: number;
  /**
   * 工作节点id
   * @format int32
   */
  workerId: number;
}

/** 数据同步任务查询条件 */
export interface Type数据同步任务查询条件 {
  /** 输入条件(name) */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** 源对象类型 */
  sourceType?: string;
  /** @format int32 */
  startIndex?: number;
  /** 任务状态：1-待同步，2-同步中，3-同步成功，4-同步失败 */
  status?: string;
  /**
   * 工作节点id
   * @format int32
   */
  workerId?: number;
}

/**
 * 数据源-新增
 * 数据源-新增
 */
export interface Type数据源新增 {
  /**
   * 程序向连接池中请求连接时，单位：毫秒。默认：30000
   * @format int32
   */
  connectionTimeout: number;
  /** 库名 */
  dbName?: string;
  /**
   * 驱动jar的文件id
   * @format int32
   */
  driverJarId: number;
  /**
   * 空闲时间，单位：毫秒。默认:600000
   * @format int32
   */
  idleTimeout: number;
  /** 数据源ip地址 */
  ip?: string;
  /**
   * 跟数据库保持心跳连接的间隔，单位：毫秒。默认：30000
   * @format int32
   */
  maxLifetime: number;
  /**
   * 连接池中最多支持多少个活动连接，默认：CPU核心数的两倍
   * @format int32
   */
  maxPoolSize: number;
  /**
   * 回收空闲连接时，将保证最少连接数，默认：CPU核心数的两倍
   * @format int32
   */
  minIdle: number;
  /** 连接名 */
  name: string;
  /** 数据库密码，前端通过aes加密传到后端，后端解密后明文存库 */
  password?: string;
  /**
   * 数据源端口号
   * @format int32
   */
  port?: number;
  /** 测试的sql查询脚本 */
  testQuerySql?: string;
  /** 数据库类型：SQLServer，Oracle，MySQL，PgSQL等 */
  type: string;
  /** 数据库用户名，前端通过aes加密传到后端，后端解密后明文存库 */
  username?: string;
}

/**
 * 数据源-更新
 * 数据源-更新
 */
export interface Type数据源更新 {
  /**
   * 程序向连接池中请求连接时，单位：毫秒。默认：30000
   * @format int32
   */
  connectionTimeout: number;
  /** 库名 */
  dbName?: string;
  /**
   * 驱动jar的文件id
   * @format int32
   */
  driverJarId?: number;
  /**
   * id
   * @format int32
   */
  id: number;
  /**
   * 空闲时间，单位：毫秒。默认:600000
   * @format int32
   */
  idleTimeout: number;
  /** 数据源ip地址 */
  ip?: string;
  /**
   * 跟数据库保持心跳连接的间隔，单位：毫秒。默认：30000
   * @format int32
   */
  maxLifetime: number;
  /**
   * 连接池中最多支持多少个活动连接，默认：CPU核心数的两倍
   * @format int32
   */
  maxPoolSize: number;
  /**
   * 回收空闲连接时，将保证最少连接数，默认：CPU核心数的两倍
   * @format int32
   */
  minIdle: number;
  /** 连接名 */
  name: string;
  /** 数据库密码，前端通过aes加密传到后端，后端解密后明文存库 */
  password?: string;
  /**
   * 数据源端口号
   * @format int32
   */
  port?: number;
  /** 测试的sql查询脚本 */
  testQuerySql?: string;
  /** 数据库类型：SQLServer，Oracle，MySQL，PgSQL等 */
  type: string;
  /** 数据库用户名，前端通过aes加密传到后端，后端解密后明文存库 */
  username?: string;
}

/** 数据源查询条件 */
export interface Type数据源查询条件 {
  /** 输入条件(name 或 type) */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
}

/** 数据资源列表返回对象 */
export interface Type数据资源列表返回对象 {
  /**
   * 上传时间
   * @format date-time
   */
  ctime?: string;
  /** 资源格式：xml、json、wsdl、text、html、hl7、dll、class、jar、ssl-certificate */
  fileFormat?: string;
  /** 文件内容大小 */
  fileSize?: string;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 资源名称 */
  name?: string;
}

/**
 * 新增提供方-值
 * 新增提供方-值
 */
export interface Type新增提供方值 {
  /** 参数代码 */
  paramCode?: string;
  /** 参数名称 */
  paramName?: string;
}

/**
 * 服务列表
 * 服务列表
 */
export interface Type服务列表 {
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
 * 服务参数-新增
 * 服务参数-新增
 */
export interface Type服务参数新增 {
  /** 数据长度 */
  dataLength?: string;
  /** 数据类型 */
  dataType?: string;
  /** 默认值 */
  defaultVal?: string;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /**
   * 是否属性,0=否(非xml默认为0)，1=是，仅适用于xml节点属性
   * @format int32
   */
  isAttr?: number;
  /**
   * 是否循环,0=否，1=是
   * @format int32
   */
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
  /**
   * 上级节点id,0表示根级
   * @format int32
   */
  parentId: number;
  /** 小数点位数 */
  pointLength?: string;
  /**
   * 是否必填,0=否，1=是
   * @format int32
   */
  requiredFlag?: number;
  /** 示例值 */
  sampleVal?: string;
  /**
   * 服务id,对应sm_service_info表的id
   * @format int32
   */
  serviceId: number;
  /** 值域代码 */
  valDictCode?: string;
  /** 值格式，例如可以指定日期时间格式 */
  valFormat?: string;
  /** 验证值的正则表达式 */
  valRegex?: string;
}

/**
 * 服务参数-更新
 * 服务参数-更新
 */
export interface Type服务参数更新 {
  /** 数据长度 */
  dataLength?: string;
  /** 数据类型 */
  dataType?: string;
  /** 默认值 */
  defaultVal?: string;
  /**
   * id
   * @format int32
   */
  id: number;
  /**
   * 是否属性,0=否(非xml默认为0)，1=是，仅适用于xml节点属性
   * @format int32
   */
  isAttr?: number;
  /**
   * 是否循环,0=否，1=是
   * @format int32
   */
  loopFlag?: number;
  /** 描述 */
  memo?: string;
  /** 参数代码 */
  paramCode: string;
  /** 参数名称 */
  paramName?: string;
  /** 参数类型，取值：in-header、in-query、in-path、in-body、out-header、out-body */
  paramType: string;
  /**
   * 上级节点id,0表示根级
   * @format int32
   */
  parentId: number;
  /** 小数点位数 */
  pointLength?: string;
  /**
   * 是否必填,0=否，1=是
   * @format int32
   */
  requiredFlag?: number;
  /** 示例值 */
  sampleVal?: string;
  /**
   * 服务id,对应sm_service_info表的id
   * @format int32
   */
  serviceId: number;
  /** 值域代码 */
  valDictCode?: string;
  /** 值格式，例如可以指定日期时间格式 */
  valFormat?: string;
  /** 验证值的正则表达式 */
  valRegex?: string;
}

/**
 * 服务定义
 * 服务定义
 */
export interface Type服务定义 {
  /**
   * 所属服务类别id，对应sm_category表的数据id
   * @format int32
   */
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
 * 服务订阅-查询服务列表
 * 服务订阅-查询服务列表
 */
export interface Type服务订阅查询服务列表 {
  /** 服务名称或服务code（模糊查询） */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
}

/** 用户登录对象 */
export interface Type用户登录对象 {
  /** 验证码 */
  code?: string;
  /** 密码 */
  password?: string;
  /** 用户名 */
  username?: string;
  /** 唯一标识 */
  uuid?: string;
}

/** 登录初始化vo对象 */
export interface Type登录初始化vo对象 {
  /** 对接的统一权限系统类型：local（使用本地权限和登录），srp（使用SRP管理后台），sso（使用单点登录管理后台） */
  authType?: string;
  /** 统一权限的前端登录页地址 */
  loginUiUrl?: string;
  /** 注销登录的后端api地址 */
  logoutApiUrl?: string;
}

/**
 * 第三方API服务-新增
 * 第三方API服务-新增
 */
export interface Type第三方API服务新增 {
  /**
   * 应用id
   * @format int32
   */
  appId?: number;
  /** 代码，默认用guid，便于导入时根据此代码覆盖 */
  code?: string;
  /** 终端定义(json)，包括请求体、请求头、路径参数、安全机制、响应体等 */
  compSchema?: string;
  /**
   * 执行超时，单位：秒
   * @format int32
   */
  execTimeout?: number;
  /**
   * 熔断时长，单位：秒
   * @format int32
   */
  fuseDuration?: number;
  /**
   *  熔断异常数，即连续失败多少次才会触发熔断
   * @format int32
   */
  fuseFailCount?: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 备注 */
  memo?: string;
  /** 服务名称 */
  name: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /**
   * 重试间隔，单位：秒
   * @format int32
   */
  retryInterval?: number;
  /**
   * 最大重试次数，如果为-1，则表示一直重试
   * @format int32
   */
  retryMax?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
  type: string;
}

/**
 * 第三方API服务-更新
 * 第三方API服务-更新
 */
export interface Type第三方API服务更新 {
  /**
   * 应用id
   * @format int32
   */
  appId?: number;
  /** 代码，默认用guid，便于导入时根据此代码覆盖 */
  code?: string;
  /** 终端定义(json)，包括请求体、请求头、路径参数、安全机制、响应体等 */
  compSchema?: string;
  /**
   * 执行超时，单位：秒
   * @format int32
   */
  execTimeout?: number;
  /**
   * 熔断时长，单位：秒
   * @format int32
   */
  fuseDuration?: number;
  /**
   *  熔断异常数，即连续失败多少次才会触发熔断
   * @format int32
   */
  fuseFailCount?: number;
  /**
   * id
   * @format int32
   */
  id: number;
  /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
  inBodyFormat?: string;
  /** 备注 */
  memo?: string;
  /** 服务名称 */
  name: string;
  /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
  outBodyFormat?: string;
  /**
   * 重试间隔，单位：秒
   * @format int32
   */
  retryInterval?: number;
  /**
   * 最大重试次数，如果为-1，则表示一直重试
   * @format int32
   */
  retryMax?: number;
  /**
   * 排序号，默认999999
   * @format int32
   */
  sortNo?: number;
  /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
  type: string;
}

/** 第三方API服务查询条件 */
export interface Type第三方API服务查询条件 {
  /** 输入条件(code 或 name) */
  condition?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
  /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
  type: string;
}

/** 系统审计日志po对象 */
export interface Type系统审计日志po对象 {
  /** 客户端IP */
  clientIp?: string;
  /**
   * 执行时长(毫秒)
   * @format int64
   */
  cost?: number;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 请求方法 */
  method?: string;
  /**
   * 操作时间
   * @format date-time
   */
  operTime?: string;
  /** 请求URL */
  operUrl?: string;
  /** 操作名称 */
  operation?: string;
  /** 请求参数（json格式） */
  requestParamJson?: string;
  /** 返回参数（json格式） */
  responseParamJson?: string;
  /**
   * 状态（0-成功，1-失败）
   * @format int32
   */
  status?: number;
  /** 模块标题 */
  title?: string;
  /** 用户名 */
  username?: string;
}

/** 系统控制参数的查询对象 */
export interface Type系统控制参数的查询对象 {
  /** 参数代码，模糊匹配 */
  code?: string;
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /** 参数名，模糊匹配 */
  name?: string;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
}

/** 系统日志的查询对象 */
export interface Type系统日志的查询对象 {
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 状态（0-成功，1-失败）
   * @format int32
   */
  status?: number;
  /** 用户名 */
  username?: string;
}

/** 系统消息vo对象 */
export interface Type系统消息vo对象 {
  /** 消息内容 */
  content?: string;
  /**
   * 主键id，用户消息表主键id
   * @format int32
   */
  id?: number;
  /**
   * 消息发布时间
   * @format date-time
   */
  publishTime?: string;
  /** 消息发布者的用户名 */
  publishUsername?: string;
  /**
   * 消息阅读时间
   * @format date-time
   */
  readTime?: string;
  /**
   * 消息状态：0 - 未读，1 - 已读
   * @format int32
   */
  status?: number;
  /** 消息简介 */
  summary?: string;
  /** 消息标题 */
  title?: string;
}

/** 系统消息的查询对象 */
export interface Type系统消息的查询对象 {
  /**
   * 页码
   * @format int32
   */
  current?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 页大小
   * @format int32
   */
  size?: number;
  /** @format int32 */
  startIndex?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 阅读状态：0-未读，1-已读
   * @format int32
   */
  status?: number;
}

/** 系统配置参数vo对象 */
export interface Type系统配置参数vo对象 {
  /** 候选值，主要用于界面的下拉列表，多项使用英文逗号分隔，每项组成规则：“值:名称,值:名称,…”，如果候选值包含英文逗号或冒号，需要斜线转义，格式为：\,和 \: ，示例：【0:隐藏,1:显示】、【0:否,1:是】 */
  candidateValues?: string;
  /** 参数代码 */
  code?: string;
  /** 控件类型：INPUT（默认）、SELECT、DATE、TIME、DATETIME、RADIO、CHECKBOX等 */
  controlType?: string;
  /**
   * 创建时间
   * @format date-time
   */
  ctime?: string;
  /**
   * 创建者id
   * @format int32
   */
  cuid?: number;
  dropdownItems?: any[];
  /** 分组名称，例如某些参数是同一个页面的，则可以设置相同的组名 */
  groupName?: string;
  /** 备注 */
  memo?: string;
  /**
   * 修改时间
   * @format date-time
   */
  mtime?: string;
  /**
   * 修改者id
   * @format int32
   */
  muid?: number;
  /** 参数名 */
  name?: string;
  /** 验证参数值的正则表达式 */
  regex?: string;
  /**
   * 排序号
   * @format int32
   */
  sortNo?: number;
  /**
   * 状态：0-停用，1-启用
   * @format int32
   */
  status?: number;
  /** 计量单位代码 */
  unitCode?: string;
  /** 计量单位名称 */
  unitName?: string;
  /** 参数值 */
  value?: string;
  /**
   * 是否可见：0-否，1-是
   * @format int32
   */
  visible?: number;
}

/**
 * 路由图谱-服务模块
 * 路由图谱-服务模块
 */
export interface Type路由图谱服务模块 {
  /** 服务代码 */
  code?: string;
  /**
   * 服务id
   * @format int32
   */
  endpointId?: number;
  /** 服务id */
  endpointName?: string;
  /**
   * 是否启用：0-停用，1-启用
   * @format int32
   */
  status?: number;
}

/**
 * 路由图谱-系统模块
 * 路由图谱-系统模块
 */
export interface Type路由图谱系统模块 {
  /**
   * 主键id
   * @format int32
   */
  appId?: number;
  /** 名称 */
  appName?: string;
  /** 简称 */
  shortName?: string;
}

/**
 * 路由图谱返回对象
 * 路由图谱返回对象
 */
export interface Type路由图谱返回对象 {
  /** 系统列表 */
  appList?: any[];
  /** 服务列表 */
  endpointList?: any[];
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 服务名称 */
  name?: string;
  /**
   * 服务状态：1=待设计，2=待配置，3=待发布，4=已发布
   * @format int32
   */
  status?: number;
}

/** 路由显示信息 */
export interface Type路由显示信息 {
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

/** 路由配置信息 */
export interface Type路由配置信息 {
  /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
  alwaysShow?: boolean;
  /** 子路由 */
  children?: any[];
  /** 组件地址 */
  component?: string;
  /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
  hidden?: boolean;
  /** 其他元素 */
  meta?: any;
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
 * 返回系统提供方
 * 供服务生命周期-新增提供方中使用
 */
export interface Type返回系统提供方 {
  /** 代码，或称应用id */
  code?: string;
  /**
   * 主键id
   * @format int32
   */
  id?: number;
  /** 名称 */
  name?: string;
  /** 简称 */
  shortName?: string;
}

/**
 * 预处理器-新增
 * 预处理器-新增
 */
export interface Type预处理器新增 {
  /** 处理器定义 */
  compSchema: string;
  /**
   * 服务id
   * @format int32
   */
  serviceId: number;
  /** 处理器类型 */
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

export interface GetTreeUsingGetParams {
  /** lazy */
  lazy: boolean;
  /**
   * parentId
   * @format int32
   */
  parentId: number;
}

export interface ImportServiceUsingPostParams {
  /** content */
  content: string;
  /** fileType */
  fileType: string;
  /** paramType */
  paramType: string;
  /**
   * serviceId
   * @format int32
   */
  serviceId: number;
}

export interface UpdateUsingPost1Params {
  /**
   * 所属服务类别id，对应sm_category表的数据id
   * @format int32
   */
  categoryId: number;
  /** 服务编码（格式：只能包含字母数字中划线,最多50位） */
  code: string;
  /**
   * id
   * @format int32
   */
  id: number;
  /** 日志级别：all-全链路，entry-入口日志（记录入出参消息，不记录中间步骤日志），entryNoParam-入口日志（不记录入出参消息，不记录中间步骤日志，便于监控统计服务调用耗时与次数等），error-仅错误时记录日志 */
  logLevel?: string;
  /** 服务描述 */
  memo?: string;
  /** 服务名称 */
  name: string;
  /** 开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
  openProtocol: string;
  /**
   * 操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务
   * @format int32
   */
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

export interface UpdateLogLevelUsingGetParams {
  /** ids */
  ids: number[];
  /** logLevel */
  logLevel: string;
}

export interface CreateUsingPost7Params {
  /**
   * 应用系统id
   * @format int32
   */
  appId?: number;
  /**
   * 服务id
   * @format int32
   */
  serviceId?: number;
}

export interface GetTreeUsingGet1Params {
  /** lazy */
  lazy: boolean;
  /**
   * parentId
   * @format int32
   */
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
  /**
   * limit
   * @format int64
   */
  limit?: number;
  /**
   * page
   * @format int64
   */
  page?: number;
  /**
   * parentId
   * @format int32
   */
  parentId: number;
  /**
   * status
   * @format int32
   */
  status?: number;
  /**
   * type
   * @format int32
   */
  type?: number;
}

export interface GetTreeUsingGet2Params {
  /** lazy */
  lazy: boolean;
  /**
   * parentId
   * @format int32
   */
  parentId: number;
  /**
   * status
   * @format int32
   */
  status?: number;
  /**
   * type
   * @format int32
   */
  type?: number;
}

export interface UploadFileUsingPostPayload {
  /** file */
  file: File;
}

export interface UploadFileUsingPostParams {
  /** fileFormat */
  fileFormat: string;
  /**
   * id
   * @format int32
   */
  id?: number;
  /** name */
  name: string;
}

export interface UpdateValueUsingPostParams {
  /** 参数代码 */
  code: string;
  /** 参数值 */
  value: string;
}

export interface MarkReadByIdUsingPostParams {
  /**
   * 用户的消息主键id
   * @format int32
   */
  id: number;
}
