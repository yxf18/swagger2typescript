declare namespace API {
  type ApiCallBucketDto = {
    /** 平均耗时 */
    durationAvg?: number;
    /** 请求失败量 */
    fail?: number;
    id?: string;
    /** 请求量 */
    requestQty?: number;
    /** 请求成功量 */
    success?: number;
    /** 成功率 */
    successRate?: number;
  };

  type ApiCallChainDto = {
    /** 应用ID */
    appId?: number;
    /** 应用名称 */
    appName?: string;
    /** 平均耗时 */
    durationAvg?: number;
    /** 请求失败量 */
    fail?: number;
    /** 最大耗时 */
    maxDuration?: number;
    /** 最小耗时 */
    minDuration?: number;
    /** 请求总量 */
    requestTotal?: number;
    /** 服务ID */
    serviceId?: number;
    /** 服务名称 */
    serviceName?: string;
    /** 请求成功量 */
    success?: number;
    /** 成功率 */
    successRate?: number;
  };

  type ApiDimensionDto = {
    /** 所属分组名称 */
    categoryName?: string;
    /** 服务/应用清单 */
    children?: ApiDimensionDto[];
    /** 平均耗时 */
    durationAvg?: number;
    /** 请求量 */
    fail?: number;
    /** 应用/服务ID */
    id?: number;
    /** 最大耗时 */
    maxDuration?: number;
    /** 最小耗时 */
    minDuration?: number;
    /** 应用/服务名称 */
    name?: string;
    /** (服务类型)操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
    optType?: string;
    /** 最小耗时 */
    parentId?: number;
    /** 请求量 */
    requestQty?: number;
    /** (标准分类)服务模式，取值：hosp - 院标，hl7v2-行标，hlht - 国标(互联互通)，diy-定制(自定义) */
    serviceMode?: string;
    /** 服务状态：1=待设计，2=待配置，3=待发布，4=已发布 */
    status?: number;
    /** 成功率 */
    successRate?: number;
  };

  type ApiDto = {
    /** 平均耗时 */
    durationAvg?: number;
    /** 请求失败量 */
    fail?: number;
    /** 请求总量 */
    requestTotal?: number;
    /** api编号 */
    serviceId?: number;
    /** api名称 */
    serviceName?: string;
    /** 请求成功量 */
    success?: number;
    /** 成功率 */
    successRate?: number;
  };

  type ApiHistoryDataDto = {
    details?: Detail[];
  };

  type AppCategoryCreateDto = {
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
  };

  type AppCategoryResDto = {
    /** 分组代码 */
    code?: string;
    /** 主键id */
    id?: number;
    /** 备注 */
    memo?: string;
    /** 分组名 */
    name?: string;
    /** 父级分组id，0(默认)表示根级分组 */
    parentId?: number;
    /** 父级类别名称 */
    parentName?: string;
  };

  type AppCategoryTree = {
    /** 子节点 */
    children?: TreeNode[];
    /** 分组代码 */
    code?: string;
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** 主键id */
    id?: number;
    /** 备注 */
    memo?: string;
    /** 分组名 */
    name?: string;
    /** 父级分组id，0(默认)表示根级分组 */
    parentId?: number;
    /** 父级类别名称 */
    parentName?: string;
  };

  type AppCategoryUpdateDto = {
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
  };

  type AppCreateDto = {
    /** 应用类别id */
    appCategoryId: number;
    /** 提供商id */
    appSupplierId: number;
    /** 应用程序版本号 */
    appVersion?: string;
    /** 应用系统id */
    code: string;
    /** 描述 */
    memo?: string;
    /** 名称 */
    name: string;
    /** 机构id */
    organizationId: number;
    /** 密钥，调用api的加密签名要根据密钥计算而出 */
    secret: string;
    /** 最近生成的长期令牌，建议只保存有效期大于一个月的令牌 */
    token?: string;
    /** 关联用户名称 */
    usernames: string[];
  };

  type AppDto = {
    /** 应用ID */
    appId?: number;
    /** 应用名称 */
    appName?: string;
    /** 请求总量 */
    requestTotal?: number;
  };

  type AppIdAndAppNameDto = {
    /** 应用系统ID */
    appId?: number;
    /** 应用系统名称 */
    name?: string;
  };

  type AppNameResDto = {
    /** 主鍵id */
    id?: number;
    /** 应用系统名称 */
    name?: string;
  };

  type AppProviderResDto = {
    /** 代码，或称应用id */
    code?: string;
    /** 主键id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 简称 */
    shortName?: string;
  };

  type AppResDto = {
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
    /** 主键id */
    id?: number;
    /** 详情 */
    memo?: string;
    /** 名称 */
    name?: string;
    /** 机构名称 */
    organization?: string;
    /** 机构id */
    organizationId?: number;
    /** 密钥，调用api的加密签名要根据密钥计算而出 */
    secret?: string;
    /** 状态：0-停用，1-启用(默认) */
    status?: number;
    /** 关联用户信息 */
    usernames?: UserAppDto[];
  };

  type AppStatisticsDto = {
    /** 耗时 */
    duration?: number;
    id?: string;
    /** 请求量 */
    requestQty?: number;
    /** 成功率 */
    successRate?: number;
  };

  type AppSubscriptionOnServiceResDto = {
    /** 应用编码 */
    appCode?: string;
    /** 应用名称 */
    appName?: string;
    /** 应用类别 */
    categoryName?: string;
    /** 所属机构 */
    organizationName?: string;
    /** 订阅id */
    subscriptionId?: number;
  };

  type AppSubscriptionResDto = {
    /** 应用id */
    appId?: number;
    /** 应用名称 */
    appName?: string;
    /** 父机构名称 */
    departmentName?: string;
    /** 可用服务数 */
    onlineServiceCount?: number;
    /** 父机构名称 */
    organizationName?: string;
    /** 服务总数 */
    serviceCount?: number;
  };

  type AppSubscriptionSearchCriteria = {
    /** 应用类别id */
    appCategoryId?: number;
    /** 应用名称/ID, 支持模糊查询 */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 是否订阅服务 */
    isSubscription?: number;
    /** 科室id */
    organizationId?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type AppSupplierCreateDto = {
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
  };

  type AppSupplierDto = {
    /** 子节点 */
    children?: TreeNode[];
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** ID */
    id?: number;
    /** 厂商名称 */
    name?: string;
    /** 父级ID */
    parentId?: number;
    /** 1：厂商，2：应用 */
    type?: number;
  };

  type AppSupplierResDto = {
    /** 联系地址 */
    addr?: string;
    /** 联系人 */
    appContacts?: string;
    /** 联系电话 */
    appContactsPhone?: string;
    /** 代码 */
    code?: string;
    /** 电子邮件 */
    email?: string;
    /** 主键id */
    id?: number;
    /** 备注 */
    memo?: string;
    /** 名称 */
    name?: string;
    /** 简称 */
    shortName?: string;
    /** 状态：0-停用，1-启用 */
    status?: number;
  };

  type AppSupplierUpdateDto = {
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
  };

  type AppUpdateDto = {
    /** 应用类别id */
    appCategoryId: number;
    /** 提供商id */
    appSupplierId: number;
    /** 应用程序版本号 */
    appVersion?: string;
    /** 应用系统id */
    code: string;
    /** 主鍵 */
    id: number;
    /** 描述 */
    memo?: string;
    /** 名称 */
    name: string;
    /** 机构id */
    organizationId: number;
    /** 密钥，调用api的加密签名要根据密钥计算而出 */
    secret: string;
    /** 最近生成的长期令牌，建议只保存有效期大于一个月的令牌 */
    token?: string;
    /** 关联用户名称 */
    usernames: string[];
  };

  type auditUsingPOSTParams = {
    /** 状态：0=待审核，1=已通过，2=未通过 */
    status: string;
    /** 待审核id列表 */
    ids?: string;
  };

  type BaseBodyDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
  };

  type BatchSaveDto = {
    /** 业务结束日期(包含) */
    bizEndTime?: string;
    /** 业务开始时间(包含) */
    bizStartTime?: string;
    dailyEndTime?: LocalTime;
    dailyStartTime?: LocalTime;
    details?: HsmStrategyDetailDto[];
    /**  是否历史任务重复记录再次执行 */
    ishistoryTaskExecute?: boolean;
    /** 备注信息 */
    memo?: string;
  };

  type BigDecimalBuket = {
    id?: string;
    value?: number;
  };

  type BigIntBuket = {
    id?: string;
    value?: number;
  };

  type CategoryAndServiceTreeDto = {
    /** 子节点 */
    children?: TreeNode[];
    /** 编码 */
    code?: string;
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 父级ID */
    parentId?: number;
    /** 类型，1=服务类别，2=服务；当type=2时，使用id的绝对值值来查询服务订阅信息 */
    type?: number;
  };

  type CategoryCreateDto = {
    /** 分组代码 */
    code: string;
    /** 备注 */
    memo?: string;
    /** 分组名 */
    name: string;
    /** 父级分组id，0(默认)表示根级分组 */
    parentId: number;
  };

  type CategoryResDto = {
    /** 分组代码 */
    code?: string;
    /** 主键id */
    id?: number;
    /** 备注 */
    memo?: string;
    /** 分组名 */
    name?: string;
    /** 父级分组id，0(默认)表示根级分组 */
    parentId?: number;
    /** 父级类别名称 */
    parentName?: string;
  };

  type CategoryTree = {
    /** 子节点 */
    children?: TreeNode[];
    /** 分组代码 */
    code?: string;
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** 主键id */
    id?: number;
    /** 备注 */
    memo?: string;
    /** 分组名 */
    name?: string;
    /** 父级分组id，0(默认)表示根级分组 */
    parentId?: number;
    /** 父级类别名称 */
    parentName?: string;
  };

  type CategoryUpdateDto = {
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
  };

  type ChangShangXinXiChaXunTiaoJian = {
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
  };

  type checkIsExistUsingGETParams = {
    /** 请求方ID */
    consumerId?: number;
    /** 服务ID */
    serviceId?: number;
  };

  type CommonProcessorInfoResDto = {
    pre?: ServiceEndpointProcessorDto;
    resultException?: ServiceEndpointProcessorDto;
    resultNormal?: ServiceEndpointProcessorDto;
  };

  type ConfigsQueryDto = {
    createtime?: string;
    /** 数据元标识符 */
    dataelementid?: string;
    /** 数据显示格式 */
    dataformat?: string;
    datalength?: string;
    datatype?: string;
    /** 数据元数据类型 */
    datatypeid?: string;
    /** 值域编码 */
    datavaluecode?: string;
    /** 值域名称 */
    datavaluename?: string;
    /** 描述 */
    description?: string;
    /** 字段名称 */
    fieldname?: string;
    id?: string;
    isdeleted?: number;
    isfixed?: string;
    isneedmapping?: string;
    isprimarykey?: string;
    isrequired?: string;
    /** 最大出现次数 */
    maxoccurs?: string;
    /** 最小出现次数 */
    minoccurs?: string;
    nodepath?: string;
    parenttablename?: string;
    rangcode?: string;
    /** 服务编码 */
    servicecode?: string;
    /** 服务名称 */
    servicename?: string;
    tablename?: string;
    type?: number;
    /** 唯一节点路径 */
    uniquenodepath?: string;
    updatetime?: string;
    validdescription?: string;
    validpattern?: string;
  };

  type ConnectionTestReqDto = {
    /** 数据库名称 */
    dbName?: string;
    /** 驱动包的文件id */
    driverJarId?: number;
    /** 数据库地址ip */
    ip?: string;
    /** jdbc连接串 */
    jdbcConnection?: string;
    /** 数据库密码，前端是通过rsa加密后传给后端的 */
    password?: string;
    /** 数据库端口 */
    port?: number;
    /** 测试的sql查询脚本 */
    testQuerySql?: string;
    /** 数据库类型，对应枚举code:oracle、mysql等 */
    type: string;
    /** 数据库用户名，前端是通过rsa加密后传给后端的 */
    username?: string;
  };

  type Consumer1Dto = {
    /** 调用方id */
    consumerId?: number;
    /** 调用方名称 */
    consumerName?: string;
  };

  type consumerCodeNameByServiceIdUsingGETParams = {
    /** serviceId */
    serviceId?: number;
  };

  type consumerCodeNameByServiceIdUsingGETParams = {
    /** serviceId */
    serviceId?: number;
  };

  type ConsumerCodeNameDto = {
    /** 请求方id */
    id?: number;
    /** 请求方名称 */
    name?: string;
  };

  type ConsumerDto = {
    /** 请求方id，关联：sys_app.id */
    consumerId?: string;
    /** 比例值，取值：0-100000 */
    ratio?: number;
  };

  type copyServiceUsingGET1Params = {
    /** id */
    id: number;
  };

  type copyServiceUsingGET2Params = {
    /** id */
    id: number;
  };

  type copyServiceUsingGETParams = {
    /** id */
    id: number;
  };

  type DashboardResDto = {
    /** 图表数据（时间桶） */
    apiCallTimeBucket?: ApiCallBucketDto[];
    /** 图表数据（API桶-平均耗时） */
    apiDurationAvgBucket?: BigDecimalBuket[];
    /** 图表数据（API桶-请求量） */
    apiRequestQtyBucket?: BigIntBuket[];
    /** 图表数据（API桶-成功率） */
    apiSuccessRateBucket?: BigDecimalBuket[];
    /** 失败量 */
    failQty?: number;
    /** 请求量 */
    requestQty?: number;
    /** 成功量 */
    successQty?: number;
    /** 成功率 */
    successRate?: number;
  };

  type DataElementQueryDto = {
    /** 表示格式 */
    dataformat?: string;
    /** 数据元值的数据类型 */
    datatypeid?: string;
    /** 数据值域编号 */
    datavaluecode?: string;
    /** 数据值域名称 */
    datavaluename?: string;
  };

  type DataValueCodeByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type dataValueCodeDownUsingGETParams = {
    /** dataValueCode */
    dataValueCode?: string;
  };

  type DatavalueCodeQueryDto = {
    /** 编码 */
    code?: string;
    /** 值 */
    value?: string;
  };

  type DatavalueQueryDto = {
    /** 创建时间 */
    createtime?: string;
    id?: string;
    /** 值域编码 */
    rangecode?: string;
    /** 值域描述 */
    rangename?: string;
    /** 业务系统编码 */
    syscode?: string;
    /** 更新时间 */
    updatetime?: string;
  };

  type DefaultOpenUrlDto = {
    /** 提示信息 */
    tips?: string;
    /** 开放地址 */
    url?: string;
    /** wsdl地址路径 */
    wsdlPath?: string;
  };

  type deleteSysRangeDictUsingGETParams = {
    /** id */
    id?: string;
  };

  type DelKeyStrUsingGETParams = {
    /** keys */
    keys?: string[];
  };

  type delMyPreUsingPOSTParams = {
    /** id */
    id: number;
  };

  type delMyResultUsingPOSTParams = {
    /** id */
    id: number;
  };

  type delPreUsingPOSTParams = {
    /** id */
    id: number;
  };

  type DelRedisHashIdUsingGETParams = {
    /** hashids */
    hashids?: string[];
  };

  type delUsingPOST10Params = {
    /** id */
    id: number;
  };

  type delUsingPOST11Params = {
    /** id */
    id: number;
  };

  type delUsingPOST12Params = {
    /** id */
    id: number;
  };

  type delUsingPOST13Params = {
    /** id */
    id: number;
  };

  type delUsingPOST14Params = {
    /** id */
    id: number;
  };

  type delUsingPOST15Params = {
    /** id */
    id: number;
  };

  type delUsingPOST16Params = {
    /** id */
    id: number;
  };

  type delUsingPOST17Params = {
    /** id */
    id: number;
  };

  type delUsingPOST18Params = {
    /** id */
    id: number;
  };

  type delUsingPOST1Params = {
    /** id */
    id: number;
  };

  type delUsingPOST2Params = {
    /** id */
    id: number;
  };

  type delUsingPOST3Params = {
    /** id */
    id: number;
  };

  type delUsingPOST4Params = {
    /** id */
    id: number;
  };

  type delUsingPOST5Params = {
    /** id */
    id: number;
  };

  type delUsingPOST6Params = {
    /** id */
    id: number;
  };

  type delUsingPOST7Params = {
    /** id */
    id: number;
  };

  type delUsingPOST8Params = {
    /** id */
    id: number;
  };

  type delUsingPOST9Params = {
    /** id */
    id: number;
  };

  type delUsingPOSTParams = {
    /** id */
    id: number;
  };

  type DengLuChuShiHuaVoDuiXiang = {
    /** 对接的统一权限系统类型：local（使用本地权限和登录），srp（使用SRP管理后台），sso（使用单点登录管理后台） */
    authType?: string;
    /** 统一权限的前端登录页地址 */
    loginUiUrl?: string;
    /** 注销登录的后端api地址 */
    logoutApiUrl?: string;
  };

  type Detail = {
    /** 应用代码 */
    appId?: string;
    /** 应用名称 */
    appName?: string;
    /** 关联度评分 */
    correlationScore?: number;
    /** 健康度评分 */
    healthScore?: number;
    /** 应用主键id */
    id?: number;
    /** 指标列表 */
    metricItems?: MetricItemDto[];
  };

  type DiSanFangApiFuWuChaXunTiaoJian = {
    /** 应用id */
    appId?: number;
    /** 页码 */
    current?: number;
    /** 服务名称 */
    name?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type EndpointIdAndName = {
    /** 提供方id */
    endpointId?: number;
    /** 提供方名称 */
    endpointName?: string;
  };

  type endpointInfoUsingGETParams = {
    /** endpointId */
    endpointId: number;
    /** type */
    type: string;
  };

  type EndpointParameterDtoString = {
    /** 参数代码 */
    code?: string;
    /** 请求体格式 */
    format?: string;
    /** 参数名称 */
    name?: string;
    /** 取值路径 */
    valuePath?: string;
    /** 值来源类别，对应枚举code:ValueSourceType */
    valueSourceType?: string;
  };

  type EndpointTreeParameterDto = {
    /** 子级参数 */
    children?: EndpointTreeParameterDto[];
    /** 参数代码 */
    code?: string;
    /** 参数名称 */
    name?: string;
    /** 取值路径 */
    valuePath?: string;
    /** 值来源类别，对应枚举code:ValueSourceType */
    valueSourceType?: string;
  };

  type EngineMetricDto = {
    cpu?: HardMetricDto;
    disk?: HardMetricDto;
    memory?: HardMetricDto;
    nodeStatus?: NodeStatusDto;
  };

  type ExecutionProgressDto = {
    /** 进度 */
    process?: number;
    /** sqlId */
    sqlId?: number;
  };

  type exportPdfUsingPOSTParams = {
    /** serviceIds */
    serviceIds: string[];
  };

  type exportServicesByIdsUsingGETParams = {
    /** ids */
    ids: string[];
  };

  type FileReaderDto = {
    /** 字符集，如：UTF-8 */
    charset?: string;
    /** 读完是否删除：0 - 否，1 - 是 */
    deleteAfterRead?: number;
    /** 磁盘目录 */
    directory?: string;
    /** 文件名，根据“fileNameType”决定如何生成文件名 */
    fileName?: string;
    /** 文件名类别 */
    fileNameType?: string;
    /** 文件不存在时，采取的策略：fail - 报错、ignore - 忽略 */
    fileNotFound?: string;
    /** 实现类型：normal - 普通（直接进行磁盘操作），jndi - 通过JNDI实现 */
    implementType?: string;
    /** 上下文初始化工厂（initial context factory） */
    initialContextFactory?: string;
  };

  type FileWriterDto = {
    /** 字符集，如：UTF-8 */
    charset?: string;
    /** 文件内容 */
    content?: string;
    /** 磁盘目录 */
    directory?: string;
    /** 当同名文件存在时，采取的策略：override - 覆盖、append - 追加、fail - 报错、ignore - 忽略 */
    fileExist?: string;
    /** 文件名，根据“fileNameType”决定如何生成文件名 */
    fileName?: string;
    /** 文件名类别 */
    fileNameType?: string;
    /** 实现类型：normal - 普通（直接进行磁盘操作），jndi - 通过JNDI实现 */
    implementType?: string;
    /** 上下文初始化工厂（initial context factory） */
    initialContextFactory?: string;
  };

  type FilterCreateDto = {
    /** 同步方式，同步：sync，异步：async，高级：highLevel */
    callMode: string;
    /** 服务返回方 */
    endpointIds?: number[];
    filterDtoList?: FilterDto[];
    /** 服务基本信息id */
    serviceId: number;
  };

  type FilterDto = {
    /** 服务终端id */
    endpointId: number;
    /** 过滤器主键id */
    id?: number;
    /** 匹配方式，枚举code: MatchType */
    matchType?: string;
    /** 预期值 */
    successValue?: string;
    /** 其他 */
    valueAttr?: string;
    /** 筛选条件，枚举code: ValueSource */
    valueSourceType: string;
  };

  type FilterResDto = {
    /** 提供方id */
    endpointId?: number;
    /** 提供方名称 */
    endpointName?: string;
    /** 提供方状态：0-停用，1-启用 */
    endpointStatus?: number;
    /** 过滤器主键id */
    id?: number;
    /** 匹配方式 */
    matchType?: string;
    /** 预期值 */
    successValue?: string;
    /** 其他 */
    valueAttr?: string;
    /** 筛选条件 */
    valueSourceType?: string;
  };

  type FormatStrDto = {
    /** 格式：json、xml */
    contentFormat: string;
    /** 待格式化的字符串 */
    sawStr: string;
  };

  type FtpDownloadDto = {
    /** 文件内容字符集，如：UTF-8 */
    charset?: string;
    /** 连接模式，取值：Active - 主动、Passive - 被动 */
    connectionMode?: string;
    /** 下载完是否删除：0 - 否，1 - 是 */
    deleteAfterDownload?: number;
    /** 用完远端服务器后是否断开，取值：0-否，1-是 */
    disconnect?: number;
    /** 文件不存在时，采取的策略：fail - 报错、ignore - 忽略 */
    fileNotFound?: string;
    /** IP地址或域名 */
    ip?: string;
    /** 下载后处理，true：传给下一步；false：保存到本地文件 */
    isNextStep?: boolean;
    /** 本地目录 */
    localDirectory?: string;
    /** 本地文件名 */
    localFileName?: string;
    /** 文件名类别 */
    localFileNameType?: string;
    /** 登录密码 */
    password?: string;
    /** 端口号 */
    port?: number;
    /** 通信协议，如FTP、FTPS、SFTP等 */
    protocol?: string;
    /** 远端目录 */
    remoteDirectory?: string;
    /** 远端文件名 */
    remoteFileName?: string;
    /** 远端文件名类别 */
    remoteFileNameType?: string;
    /** 传输模式，如BINARY、ASCII等 */
    transferMode?: string;
    /** 登录用户名 */
    username?: string;
  };

  type FtpUploadDto = {
    /** 文件内容字符集，如：UTF-8 */
    charset?: string;
    /** 连接模式，取值：Active - 主动、Passive - 被动 */
    connectionMode?: string;
    /** 文件内容 */
    content?: string;
    /** 用完远端服务器后是否断开，取值：0-否，1-是 */
    disconnect?: number;
    /** 当同名文件存在时，采取的策略：override - 覆盖、append - 追加、fail - 报错、ignore - 忽略 */
    fileExist?: string;
    /** IP地址或域名 */
    ip?: string;
    /** 登录密码 */
    password?: string;
    /** 端口号 */
    port?: number;
    /** 通信协议，如FTP、FTPS、SFTP等 */
    protocol?: string;
    /** 文件目录 */
    remoteDirectory?: string;
    /** 文件名称 */
    remoteFileName?: string;
    /** 文件名类别 */
    remoteFileNameType?: string;
    /** 传输模式，如BINARY、ASCII等 */
    transferMode?: string;
    /** 登录用户名 */
    username?: string;
  };

  type FuWuCanShuJianSuo = {
    /** 业务id */
    bizId?: string;
    /** 页码 */
    current?: number;
    /** 请求体模板 */
    isReqTpl?: number;
    /** 相应体模板 */
    isRespTpl?: number;
    /** 服务 */
    service?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
    /** 类型 */
    type?: string;
  };

  type GenJuYinQingFaBuFuWuShuXiaZuanChaXunDuiXiang = {
    /** 页码 */
    current?: number;
    /** 服务编码 */
    serviceCode?: string;
    /** 服务id列表 */
    serviceIdList?: number[];
    /** 服务名称 */
    serviceName?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type GenJuZhiYuBianMaChaXunShuJuYuanZhiYuLieBiaoJianSuo = {
    /** 页码 */
    current?: number;
    /** 数据值域编号  必填 */
    datavaluecode?: string;
    /** 编码/值 */
    key?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type getDataElementByIdUsingGETParams = {
    /** dataElementId */
    dataElementId?: string;
  };

  type getDefaultUrlUsingGET1Params = {
    /** 是否外部引擎 */
    isOuterEngine?: number;
    /** 标准分类代码 */
    openProtocolCode: string;
    /** 服务模式代码 */
    serviceModeCode: string;
    /** Url地址路径 */
    urlPath?: string;
  };

  type getDefaultUrlUsingGET2Params = {
    /** 是否外部引擎 */
    isOuterEngine?: number;
    /** 标准分类代码 */
    openProtocolCode: string;
    /** 服务模式代码 */
    serviceModeCode: string;
    /** Url地址路径 */
    urlPath?: string;
  };

  type getDefaultUrlUsingGET3Params = {
    /** 是否外部引擎 */
    isOuterEngine?: number;
    /** 标准分类代码 */
    openProtocolCode: string;
    /** 服务模式代码 */
    serviceModeCode: string;
    /** Url地址路径 */
    urlPath?: string;
  };

  type getDefaultUrlUsingGET4Params = {
    /** 是否外部引擎 */
    isOuterEngine?: number;
    /** 标准分类代码 */
    openProtocolCode: string;
    /** 服务模式代码 */
    serviceModeCode: string;
    /** Url地址路径 */
    urlPath?: string;
  };

  type getDefaultUrlUsingGETParams = {
    /** 是否外部引擎 */
    isOuterEngine?: number;
    /** 标准分类代码 */
    openProtocolCode: string;
    /** 服务模式代码 */
    serviceModeCode: string;
    /** Url地址路径 */
    urlPath?: string;
  };

  type getDropdownItemsUsingGETParams = {
    /** app: 应用系统厂商、organization: 应用所属机构、 appCategory: 应用系统类别 */
    type: string;
  };

  type getEndpointResponseUsingGETParams = {
    /** logTraceId */
    logTraceId: string;
  };

  type getEnvConfigFileUsingPOSTParams = {
    /** 配置文件名，例如：application-prod.yml */
    configFileName: string;
  };

  type getEnvPropertyUsingPOSTParams = {
    /** 参数的完整路径，例如：clinbrain.engine.monitor.address */
    completePath: string;
  };

  type getFilePathNameUsingGETParams = {
    /** 参数的完整路径，例如：classpath*:/upgrade/* */
    path: string;
  };

  type getListByAppSupplierIdUsingGETParams = {
    /** appSupplierId */
    appSupplierId: number;
  };

  type getListByOrganizationIdUsingGETParams = {
    /** organizationId */
    organizationId: number;
  };

  type getListUsingGETParams = {
    /** 手机号码 */
    appContactsPhone?: string;
    /** 输入条件(code 或 name), 支持模糊查询 */
    condition?: string;
    /** 状态：0-停用，1-启用 */
    status?: string;
  };

  type getOrganizationsUsingGETParams = {
    /** condition */
    condition?: string;
    /** limit */
    limit?: number;
    /** page */
    page?: number;
    /** parentId */
    parentId?: number;
    /** status */
    status?: number;
  };

  type getParamsOfServiceInfoUsingGET1Params = {
    /** 组件类型：freemarker：模板，sql-out：SQL提供方 */
    compType?: string;
    /** 服务id */
    serviceId: number;
  };

  type getParamsOfServiceInfoUsingGETParams = {
    /** 组件类型：freemarker：模板，sql-out：SQL提供方 */
    compType?: string;
    /** 服务id */
    serviceId: number;
  };

  type getSingleSqlUsingGETParams = {
    /** consumerId */
    consumerId?: number;
    /** serviceId */
    serviceId?: number;
  };

  type getTasksAllUsingGETParams = {
    /** type */
    type?: string;
  };

  type getTasksAllUsingGETParams = {
    /** type */
    type?: string;
  };

  type getTreeUsingGET1Params = {
    /** lazy */
    lazy: string;
    /** parentId */
    parentId: number;
  };

  type getTreeUsingGET2Params = {
    /** 懒加载：0-否，1-是 */
    lazy?: string;
    /** 0-查询所有结构 */
    parentId?: string;
    /** 状态：0-停用，1-启用 */
    status?: string;
    /** 机构类型：0-机构，1-科室 */
    type?: string;
  };

  type getTreeUsingGETParams = {
    /** lazy */
    lazy: string;
    /** parentId */
    parentId: number;
  };

  type getUserlistUsingGETParams = {
    /** deptId */
    deptId?: number;
  };

  type getValueUsingGETParams = {
    /** 参数代码 */
    code: string;
  };

  type GongZuoJieDianChaXunTiaoJian = {
    /** 页码 */
    current?: number;
    /** 服务器IP */
    ip?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
    /** 状态：0-停用，1-启用(默认) */
    status?: number;
    /** 引擎分组id */
    workGroupId?: number;
  };

  type GongZuoJieDianFenZuChaXunTiaoJian = {
    /** 输入条件(name) */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type HardMetricDto = {
    /** 总磁盘大小 */
    total?: number;
    /** 内存单位，如：MB、GB等 */
    unit?: string;
    /** 已用磁盘大小 */
    used?: number;
  };

  type HistoryResDto = {
    /** 系统接入数 */
    appQty?: number;
    /** 今日异常数 */
    daysFailQty?: number;
    /** 上线天数 */
    daysQty?: number;
    /** 今日交互总量 */
    daysRequestQty?: number;
    /** 今日请求成功率 */
    daysSuccessRate?: number;
    /** 请求总数 */
    requestQty?: number;
    /** 已发布服务数 */
    serviceQty?: number;
    /** 厂商接入数 */
    supplierQty?: number;
  };

  type HsmBizServiceLinkDto = {
    id?: number;
    /** 请求体模板（Freemarker规范） */
    reqTpl?: string;
    /** 响应体模板（Freemarker规范） */
    respTpl?: string;
  };

  type hsmServiceBizConfigByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type hsmServiceBizConfigByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type HsmServiceBizConfigSaveDto = {
    /** 批量数据源id，可能是CDR或业务库，关联：sys_data_source.id */
    batchDsId?: number;
    batchSqlScript?: SqlScriptDto;
    /** 服务业务id，关联：hsm_service_biz.id */
    bizId?: number;
    /** 请求方应用主键id，即服务的订阅方（以新增类服务为准），关联：sys_app.id */
    consumerId?: number;
    /** 请求方ip列表，多个用英文逗号分隔【预留，以后有需要再开发】 */
    consumerIps?: string;
    id?: number;
    /** 单条数据源id，必须是业务库，关联：sys_data_source.id */
    singleDsId?: number;
    singleSqlScript?: SqlScriptDto;
  };

  type HsmServiceDto = {
    id?: number;
    /** 业务名称，如患者信息、申请单、医嘱等 */
    name?: string;
  };

  type HsmStrategyDetailDto = {
    /** 按请求方应用配置的查询服务触发比例 */
    consumerSelectRatio?: ConsumerDto[];
    /** 按请求方应用配置的修改服务触发比例 */
    consumerUpdateRatio?: ConsumerDto[];
    id?: number;
    /** 新增服务的触发比例，固定值：100 */
    insertRatio?: number;
    /** 新增服务id，无需前端输入，自动根据biz_id从hsm_biz_service_link表提取，关联：sm_service_info.id */
    insertServiceId?: number;
    /** 是否触发新增服务：0-否，1-是 */
    insertStatus?: number;
    /** 查询服务的触发比例(以新增服务为基数)，取值：0~100000 */
    selectRatio?: number;
    /** 查询服务id，无需前端输入，自动根据biz_id从hsm_biz_service_link表提取，关联：sm_service_info.id */
    selectServiceId?: number;
    /** 是否触发查询服务：0-否，1-是 */
    selectStatus?: number;
    /** SQL配置表id，关联：hsm_service_biz_config.id */
    sqlId?: number;
    /** 修改服务的触发比例(以新增服务为基数)，取值：0~100000 */
    updateRatio?: number;
    /** 修改服务id，无需前端输入，自动根据biz_id从hsm_biz_service_link表提取，关联：sm_service_info.id */
    updateServiceId?: number;
    /** 是否触发修改服务：0-否，1-是 */
    updateStatus?: number;
  };

  type httpCallPingUsingGETParams = {
    /** 地址(ip或域名) */
    address: string;
    /** 节点类型 */
    nodeType: string;
    /** 端口号 */
    port: number;
  };

  type HttpPostParamDto = {
    /** 参数代码 */
    code?: string;
    /** 请求体格式 */
    format?: string;
    /** 子级参数 */
    innerParams?: EndpointTreeParameterDto[];
    /** 参数名称 */
    name?: string;
    /** 请求体 */
    valuePath?: string;
    /** 值来源类别，对应枚举code:ValueSourceType */
    valueSourceType?: string;
  };

  type ImportServicesResDto = {
    /** 失败数 */
    failCount?: number;
    /** 失败报告 */
    failReasons?: string[];
    /** 成功数 */
    successCount?: number;
  };

  type infoUsingGET10Params = {
    /** id */
    id: number;
  };

  type infoUsingGET11Params = {
    /** id */
    id: number;
  };

  type infoUsingGET12Params = {
    /** id */
    id: number;
  };

  type infoUsingGET13Params = {
    /** id */
    id: number;
  };

  type infoUsingGET14Params = {
    /** id */
    id: number;
  };

  type infoUsingGET15Params = {
    /** id */
    id: number;
  };

  type infoUsingGET16Params = {
    /** id */
    id: number;
  };

  type infoUsingGET17Params = {
    /** id */
    id: number;
  };

  type infoUsingGET18Params = {
    /** id */
    id: number;
  };

  type infoUsingGET1Params = {
    /** traceId */
    traceId: string;
  };

  type infoUsingGET2Params = {
    /** id */
    id: number;
  };

  type infoUsingGET3Params = {
    /** serviceId */
    serviceId: number;
  };

  type infoUsingGET4Params = {
    /** serviceId */
    serviceId: number;
  };

  type infoUsingGET5Params = {
    /** id */
    id: number;
  };

  type infoUsingGET6Params = {
    /** id */
    id: number;
  };

  type infoUsingGET7Params = {
    /** id */
    id: number;
  };

  type infoUsingGET8Params = {
    /** id */
    id: number;
  };

  type infoUsingGET9Params = {
    /** id */
    id: number;
  };

  type infoUsingGETParams = {
    /** id */
    id: number;
  };

  type initByIdSourceTypeUsingGETParams = {
    /** 源类型 */
    sourceType: string;
    /** workerId */
    workerId: number;
  };

  type initByIdUsingGETParams = {
    /** workerId */
    workerId: number;
  };

  type InteractionLogDetailsDto = {
    /** 应用id */
    consumerId?: number;
    /** 请求方IP地址 */
    consumerIp?: string;
    /** 是否有重试，取值：0-否，1-是，当result_code=1时，如果此字段为1，说明最终结果为成功但过程中有异常或错误 */
    haveRetry?: number;
    /** 入参内容(Body) */
    inBody?: string;
    /** 请求体类型 */
    inBodyType?: string;
    /** 入参内容(Head) */
    inHeads?: Record<string, any>;
    /** 入参内容(Path) */
    inPaths?: Record<string, any>;
    /** 是否展示链路日志 */
    linkFlag?: boolean;
    /** 同步方式，取值：sync - 同步，async - 异步 */
    openMode?: string;
    /** 出参内容(Body) */
    outBody?: string;
    /** 相应体类型 */
    outBodyType?: string;
    /** 出参内容(Head) */
    outHeads?: Record<string, any>;
    /** 出参内容(Path) */
    outPaths?: Record<string, any>;
    /** 请求时间，入口步骤收到请求的时间，精确到毫秒，示例：2022-02-10 17:15:09.034 */
    reqTime?: string;
    /** 响应时间，出口步骤返回响应的时间，精确到毫秒，示例：2022-02-10 17:15:09.034 */
    respTime?: string;
    /** 结果 */
    resultCode?: number;
    /** 服务id */
    serviceId?: number;
    /** (标准分类)服务模式，取值：hosp - 院标，hl7v2-行标，hlht - 国标(互联互通)，diy-定制(自定义) */
    serviceMode?: string;
    /** 服务名称 */
    serviceName?: string;
    /** 应用名称 */
    sysAppName?: string;
    /** 处理时长，单位：毫秒 */
    timeCost?: number;
    /** id */
    traceId?: string;
  };

  type InteractionLogResDto = {
    /** 应用id */
    consumerId?: number;
    /** 请求时间，入口步骤收到请求的时间，精确到毫秒，示例：2022-02-10 17:15:09.034 */
    reqTime?: string;
    /** 结果 */
    resultCode?: number;
    /** 错误信息 */
    resultInfo?: string;
    /** 重试次数 */
    retryNumber?: number;
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
  };

  type JiaoHuRiZhiGaoJiJianSuo = {
    /** 应用id */
    appId?: number;
    /** 全文检索 */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 结束时间 */
    end?: string;
    /** 服务器ip */
    hostIp?: string;
    /** 当前日志是否被重发过：0-否，1-是 */
    isResend?: number;
    /** 【重发信息统计】直接父级链路id，如果是重发产生的新日志，此字段记录直接来源的日志链路id */
    parentTraceId?: string;
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
  };

  type JiBenDeFenYeChaXunDuiXiang = {
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
  };

  type JiBenDeFenYeJieGuoDuiXiangApiDimensionDto = {
    /** 列表数据 */
    records?: ApiDimensionDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangAppCategoryResDto = {
    /** 列表数据 */
    records?: AppCategoryResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangAppResDto = {
    /** 列表数据 */
    records?: AppResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangAppSubscriptionResDto = {
    /** 列表数据 */
    records?: AppSubscriptionResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangAppSupplierResDto = {
    /** 列表数据 */
    records?: AppSupplierResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangConfigsQueryDto = {
    /** 列表数据 */
    records?: ConfigsQueryDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangDatavalueCodeQueryDto = {
    /** 列表数据 */
    records?: DatavalueCodeQueryDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangDatavalueQueryDto = {
    /** 列表数据 */
    records?: DatavalueQueryDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangInteractionLogResDto = {
    /** 列表数据 */
    records?: InteractionLogResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangKaiFangShuJuFuWuLieBiaoDuiXiang = {
    /** 列表数据 */
    records?: KaiFangShuJuFuWuLieBiaoDuiXiang[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangListAppUnsubscriptionResDto = {
    /** 列表数据 */
    records?: ListAppUnsubscriptionResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangListServiceSearchResDto = {
    /** 列表数据 */
    records?: ListServiceSearchResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangOrganizationResDto = {
    /** 列表数据 */
    records?: OrganizationResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangServiceInfoDetailDto = {
    /** 列表数据 */
    records?: ServiceInfoDetailDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangServiceInfoListResDto = {
    /** 列表数据 */
    records?: ServiceInfoListResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangServiceOnlineDocResDto = {
    /** 列表数据 */
    records?: ServiceOnlineDocResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangServiceParametersDto = {
    /** 列表数据 */
    records?: ServiceParametersDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangShuJuZiYuanLieBiaoFanHuiDuiXiang = {
    /** 列表数据 */
    records?: ShuJuZiYuanLieBiaoFanHuiDuiXiang[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangSmFlowControlResDto = {
    /** 列表数据 */
    records?: SmFlowControlResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangSqlConfigureDto = {
    /** 列表数据 */
    records?: SqlConfigureDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangSubscriptionListApplyResDto = {
    /** 列表数据 */
    records?: SubscriptionListApplyResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangSysConstantResDto = {
    /** 列表数据 */
    records?: SysConstantResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangSysDataSourcePo = {
    /** 列表数据 */
    records?: SysDataSourcePo[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangSysThirdServiceListResDto = {
    /** 列表数据 */
    records?: SysThirdServiceListResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangSysWorkerGroupBiaoDePoDuiXiang = {
    /** 列表数据 */
    records?: SysWorkerGroupBiaoDePoDuiXiang[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangSysWorkerNodeResDto = {
    /** 列表数据 */
    records?: SysWorkerNodeResDto[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangXiTongPeiZhiCanShuVoDuiXiang = {
    /** 列表数据 */
    records?: XiTongPeiZhiCanShuVoDuiXiang[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangXiTongShenJiRiZhiPoDuiXiang = {
    /** 列表数据 */
    records?: XiTongShenJiRiZhiPoDuiXiang[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangXiTongXiaoXiVoDuiXiang = {
    /** 列表数据 */
    records?: XiTongXiaoXiVoDuiXiang[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangZiDianMingXiBiao = {
    /** 列表数据 */
    records?: ZiDianMingXiBiao[];
    /** 总记录数 */
    total?: number;
  };

  type JiBenDeFenYeJieGuoDuiXiangZiDianZhuBiao = {
    /** 列表数据 */
    records?: ZiDianZhuBiao[];
    /** 总记录数 */
    total?: number;
  };

  type JieDianLieBiaoJianSuo = {
    /** 页码 */
    current?: number;
    /** 数据识符 */
    dataElementId?: string;
    /** 描述 */
    description?: string;
    /** 字段名称 */
    fieldName?: string;
    /** 是否映射 */
    isNeedMapping?: string;
    /** 节点类型 */
    nodeTypeOption?: string;
    /** 节点路径 */
    query?: string;
    /** 服务名称 */
    serviceNameOptions?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type JndiTestFileWriter2UsingGETParams = {
    /** 文件内容字符集编码 */
    charset?: string;
    /** 路径目录 */
    dirPath?: string;
    /** 文件内容 */
    fileContent?: string;
    /** 文件名 */
    fileName?: string;
  };

  type JndiTestFileWriterUsingGETParams = {
    /** 文件内容字符集编码 */
    charset?: string;
    /** 路径目录 */
    dirPath?: string;
    /** 文件内容 */
    fileContent?: string;
    /** 文件名 */
    fileName?: string;
  };

  type KaiFangShuJuFuWuLieBiaoDuiXiang = {
    /** 服务代码 */
    code?: string;
    /** 创建人-用户姓名 */
    createRealname?: string;
    /** 数据源名称 */
    dataSourceName?: string;
    /** 数据库名称 */
    dbName?: string;
    /** 数据库类型 */
    dbType?: string;
    /** 提供方模式 */
    endpointType?: string;
    /** 主键id */
    id?: number;
    /** 数据库地址 */
    ip?: string;
    /** 服务描述 */
    memo?: string;
    /** 维护人-用户姓名 */
    modifyRealname?: string;
    /** 最后更新时间 */
    mtime?: string;
    /** 服务名称 */
    name?: string;
    /** (服务模式)开放的通信协议 */
    openProtocol?: string;
    /** (服务模式)开放的通信协议“openProtocol”对应的名称 */
    openProtocolName?: string;
    /** (服务类型)操作类型 */
    optType?: string;
    /** 标准分类 */
    serviceMode?: string;
    /** 状态 */
    status?: number;
    /** 数据源id */
    targetDsid?: number;
    /** 模板名称 */
    templateName?: string;
    /** 服务地址 */
    urlPath?: string;
    /** 版本号 */
    version?: string;
  };

  type LingPaiDtoQingQiuDuiXiang = {
    /** 有效天数 */
    days?: number;
    /** 应用主键id */
    id?: number;
  };

  type LingPaiDtoXiangYingDuiXiang = {
    /** 应用ID */
    appId?: string;
    /** 失效时间 */
    expireTime?: string;
    /** 令牌原文 */
    token?: string;
  };

  type LinkLogDetailsDtoDuiXiang = {
    /** 子节点 */
    children?: LinkLogDetailsDtoDuiXiang[];
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** ID */
    id?: string;
    /** 入参内容(Body) */
    inBody?: string;
    /** 请求体类型 */
    inBodyType?: string;
    /** 入参内容(Head) */
    inHeads?: Record<string, any>;
    /** 输入的消息报文内容 */
    inMsg?: string;
    /** 输入消息位置：0-使用上一步骤的输出报文内容作为本步骤的输入内容，1-就用本步骤的in_msg内容 */
    inMsgPlace?: number;
    /** 入参内容(Path) */
    inPaths?: Record<string, any>;
    /** 本步骤收到请求的时间，与“pre_out_time”比较，如果不一致，说明本步骤处理性能不足，可能有阻塞，示例：2022-02-10 17:15:09.034 */
    inTime?: string;
    /** 是否为层级合并节点 */
    mergeFlag?: boolean;
    /** 出参内容(Body) */
    outBody?: string;
    /** 相应体类型 */
    outBodyType?: string;
    /** 出参内容(Head) */
    outHeads?: Record<string, any>;
    /** 输出的消息报文内容 */
    outMsg?: string;
    /** 输出消息位置：0-使用下一步骤的输入报文内容作为本步骤的输出内容，1-就用本步骤的out_msg内容 */
    outMsgPlace?: number;
    /** 出参内容(Path) */
    outPaths?: Record<string, any>;
    /** 输出消息类型，如json、xml等 */
    outType?: string;
    /** 父级ID */
    parentId?: string;
    /** 前置的步骤id列表，如果没有前步或只有一个前步，该字段为空，如果有多个前步，该字段需存放所有的前步id。便于前端生成流程图，适用于聚合链路。 */
    prevSpanIds?: string[];
    /** 提供方id */
    providerId?: number;
    /** 入口步骤收到请求的时间，精确到毫秒，示例：2022-02-10 17:15:09.034 */
    reqTime?: string;
    /** 结果代码【取值：0-失败，1-成功】 */
    resultCode?: number;
    /** 结果说明 */
    resultInfo?: string;
    /** 服务id */
    serviceId?: number;
    /** 链路步骤id，用前一步骤的spanId与本步骤id拼接，使用英文句号分隔，如：1.2.6.13，其中“1.2.6”是前一步的spanId，“13”是当前步骤id */
    spanId?: string;
    /** 链路步骤名称 */
    spanName?: string;
    /** 步骤类型，即组件类型，便于前端显示不同的样式图标 */
    spanType?: string;
    /** 处理时长，单位：毫秒 */
    timeCost?: number;
    /** 链路id，根据此id串联起完整链路 */
    traceId?: string;
  };

  type linkUsingGETParams = {
    /** traceId */
    traceId: string;
  };

  type listAllAppProviderUsingGET1Params = {
    /** status */
    status: number;
  };

  type listAllAppProviderUsingGETParams = {
    /** status */
    status: number;
  };

  type listAppSubscriptionUsingGETParams = {
    /** 应用编码/应用名称 */
    condition?: string;
    /** 服务id，[订阅管理-服务订阅类别目录]返回对象中type为2对应的id绝对值 */
    serviceId?: string;
  };

  type ListAppUnsubscriptionCriteria = {
    /** 应用类别id */
    appCategoryId?: number;
    /** 应用名称/ID, 支持模糊查询 */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 机构id */
    organizationId?: number;
    /** 服务id */
    serviceId?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type ListAppUnsubscriptionResDto = {
    /** 应用编码 */
    appCode?: string;
    /** 应用id */
    appId?: number;
    /** 应用名称 */
    appName?: string;
    /** 应用类别 */
    categoryName?: string;
    /** 所属机构 */
    organizationName?: string;
  };

  type listDbDataTypeUsingGETParams = {
    /** 数据源id */
    dsId?: number;
  };

  type listEndpointUsingGETParams = {
    /** serviceId */
    serviceId: number;
  };

  type listJarUsingPOSTParams = {
    /** dbType */
    dbType: string;
  };

  type listParameterValueUsingGETParams = {
    /** paramType */
    paramType: string;
    /** serviceId */
    serviceId: number;
  };

  type listPreUsingPOSTParams = {
    /** serviceId */
    serviceId: number;
  };

  type listResultUsingPOSTParams = {
    /** serviceId */
    serviceId: number;
  };

  type listServiceCategoryTreeUsingGET1Params = {
    /** appId */
    appId?: number;
  };

  type ListServiceCriteria = {
    /** 应用id组 */
    appIds?: number[];
    /** 服务名称和编码, 支持模糊查询 */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 服务类别id */
    serviceCategoryId?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type ListServiceSearchResDto = {
    /** 服务编码 */
    code?: string;
    /** 服务id */
    id?: number;
    /** 描述 */
    memo?: string;
    /** 服务名称 */
    name?: string;
    /** 服务版本 */
    version?: string;
  };

  type ListServicesSearchCriteria = {
    /** 应用id */
    appId?: number;
    /** 服务编码/名称, 支持模糊查询 */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type listUsingGET1Params = {
    /** 字典代码列表 */
    codes?: string[];
  };

  type listUsingGET2Params = {
    /** condition */
    condition?: string;
  };

  type listUsingGETParams = {
    /** 字典代码列表 */
    code?: string;
  };

  type listValueUsingGETParams = {
    /** 参数代码 */
    codes: string[];
  };

  type loadCategoryAndServiceTreeUsingGETParams = {
    /** serviceName */
    serviceName?: string;
  };

  type LocalTime = {
    hour?: number;
    minute?: number;
    nano?: number;
    second?: number;
  };

  type LuYouPeiZhiXinXi = {
    /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
    alwaysShow?: boolean;
    /** 子路由 */
    children?: LuYouPeiZhiXinXi[];
    /** 代码 */
    code?: string;
    /** 组件地址 */
    component?: string;
    /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
    hidden?: boolean;
    meta?: LuYouXianShiXinXi;
    /** 路由名字 */
    name?: string;
    /** 路由地址 */
    path?: string;
    /** 路由参数：如 {"id": 1, "name": "ry"} */
    query?: string;
    /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
    redirect?: string;
    /** 类型 */
    type?: string;
  };

  type LuYouTuPuXiTongMoKuai = {
    /** 主键id */
    appId?: number;
    /** 名称 */
    appName?: string;
    /** 应用系统id */
    code?: string;
  };

  type LuYouXianShiXinXi = {
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
  };

  type MapStringListQianDuanXiaLaLieBiaoXiang = {};

  type MapStringObject = {};

  type markReadByIdUsingPOSTParams = {
    /** 用户的消息主键id */
    id: number;
  };

  type MetricItemDto = {
    /** 指标代码 */
    code?: string;
    /** 指标说明，不为空时，前端tooltip显示 */
    memo?: string;
    /** 指标名称 */
    name?: string;
    /** 指标单位 */
    unit?: string;
    /** 指标值 */
    value?: Record<string, any>;
  };

  type MonitorSearchCriteria = {
    /** 应用ID */
    appId?: number;
    /** 平均耗时是否倒序 */
    avgSort?: boolean;
    /** 所属分组ID，关联：sm_category.id */
    categoryId?: number;
    /** 页码 */
    current?: number;
    /** 结束时间 */
    end?: string;
    /** (服务类型)操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
    optType?: string;
    /** 请求量是否倒序 */
    requestSort?: boolean;
    /** API编号 */
    serviceCode?: string;
    /** API服务ID */
    serviceId?: number;
    /** (标准分类)服务模式，取值：hosp - 院标，hl7v2-行标，hlht - 国标(互联互通)，diy-定制(自定义) */
    serviceMode?: string;
    /** API版本 */
    serviceVersion?: string;
    /** 页大小 */
    size?: number;
    /** 开始时间 */
    start?: string;
    startIndex?: number;
    /** 服务状态：1=待设计，2=待配置，3=待发布，4=已发布 */
    status?: number;
    /** 成功率是否倒序 */
    successSort?: boolean;
    /** 时间维度(MON-月 HOUR-小时 DAY-天 MIN-分钟) */
    timeFlag?: string;
    /** 1-服务维度;2-应用维度 */
    type?: number;
  };

  type nationUsingGETParams = {
    /** 请求方应用ID */
    appCode: string;
  };

  type NodeStatusDto = {
    /** 错误信息 */
    error?: string;
    /** 初次启动时间 */
    firstStartTime?: string;
    /** IP地址 */
    ip?: string;
    /** 最近启动时间 */
    latestStartTime?: string;
    /** 引擎名称 */
    name?: string;
    /** 端口号 */
    port?: number;
    /** 状态名称 */
    statusName?: string;
    /** 今日输入消息数量 */
    todayInCount?: number;
    /** 今日输入消息流量（今日消息数量/今日0点到此时的秒数），单位：条/秒 */
    todayInSpeed?: number;
  };

  type OnlineDocumentsDto = {
    /** 全局常量：符合组件规则的占位符 */
    constantCompPlaceholder?: string;
    /** 全局常量 */
    constantList?: ServiceParamResDto[];
    /** in-body：符合组件规则的占位符 */
    inBodyCompPlaceholder?: string;
    /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
    inBodyFormat?: string;
    /** 对应参数类型中的in-body */
    inBodyList?: ServiceParamResDto[];
    /** in-header：符合组件规则的占位符 */
    inHeaderCompPlaceholder?: string;
    /** 对应参数类型中的in-header */
    inHeaderList?: ServiceParamResDto[];
    /** in-path：符合组件规则的占位符 */
    inPathCompPlaceholder?: string;
    /** 对应参数类型中的in-path */
    inPathList?: ServiceParamResDto[];
    /** my-body：符合组件规则的占位符 */
    myBodyCompPlaceholder?: string;
    /** 对应参数类型中的my-body */
    myBodyList?: ServiceParamResDto[];
    /** my-header：符合组件规则的占位符 */
    myHeaderCompPlaceholder?: string;
    /** 对应参数类型中的my-header */
    myHeaderList?: ServiceParamResDto[];
    /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** 对应参数类型中的out-body */
    outBodyList?: ServiceParamResDto[];
    /** 对应参数类型中的out-header */
    outHeaderList?: ServiceParamResDto[];
    serviceDescription?: ServiceDescriptionDto;
  };

  type onlineDocumentsUsingGETParams = {
    /** serviceId */
    serviceId: number;
  };

  type OrganizationCreateDto = {
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
  };

  type OrganizationResDto = {
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
  };

  type OrganizationTree = {
    /** 子节点 */
    children?: TreeNode[];
    /** 机构代码 */
    code?: string;
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** ID */
    id?: number;
    /** MDM中对应的主键 */
    mdmId?: string;
    /** 备注 */
    memo?: string;
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
  };

  type paramDelUsingPOSTParams = {
    /** id */
    id: number;
  };

  type ParameterCodeResDto = {
    /** 参数代码 */
    paramCode?: string;
    /** 参数名称 */
    paramName?: string;
  };

  type paramInfoUsingGETParams = {
    /** id */
    id: number;
  };

  type pingUsingPOST1Params = {
    /** 提供方地址 */
    url: string;
  };

  type previewDocUsingGETParams = {
    /** paramType */
    paramType: string;
    /** serviceId */
    serviceId: number;
  };

  type previewFileUsingGETParams = {
    /** id */
    id: number;
  };

  type ProcessorEmptyDto = {
    /** id */
    id?: number;
    /** 只有全局处理器的结果处理器需要填。是否异常处理器：0-否，1-是 */
    isErr?: number;
    /** 处理器名称 */
    name?: string;
    /** 处理器位置, 预处理器使用：pre，结果处理器使用：result */
    processorPosition?: string;
    /** 服务id，全局处理器需要传值 */
    serviceId?: number;
  };

  type ProcessorFreemarkerDto = {
    /** id */
    id?: number;
    /** 只有全局处理器的结果处理器需要填。是否异常处理器：0-否，1-是 */
    isErr?: number;
    /** 处理器名称 */
    name?: string;
    /** 处理器位置, 预处理器使用：pre，结果处理器使用：result */
    processorPosition?: string;
    /** 脚本内容 */
    script?: string;
    /** 服务id，全局处理器需要传值 */
    serviceId?: number;
  };

  type ProcessorGroovyLanguageDto = {
    /** id */
    id?: number;
    /** 只有全局处理器的结果处理器需要填。是否异常处理器：0-否，1-是 */
    isErr?: number;
    /** 处理器名称 */
    name?: string;
    /** 处理器位置, 预处理器使用：pre，结果处理器使用：result */
    processorPosition?: string;
    /** 脚本内容 */
    script?: string;
    /** 服务id，全局处理器需要传值 */
    serviceId?: number;
  };

  type processorInfoUsingPOSTParams = {
    /** serviceId */
    serviceId: number;
  };

  type ProcessorJavaLanguageDto = {
    /** id */
    id?: number;
    /** 只有全局处理器的结果处理器需要填。是否异常处理器：0-否，1-是 */
    isErr?: number;
    /** 处理器名称 */
    name?: string;
    /** 处理器位置, 预处理器使用：pre，结果处理器使用：result */
    processorPosition?: string;
    /** 脚本内容 */
    script?: string;
    /** 服务id，全局处理器需要传值 */
    serviceId?: number;
  };

  type ProcessorJsonToXmlDto = {
    /** id */
    id?: number;
    /** 只有全局处理器的结果处理器需要填。是否异常处理器：0-否，1-是 */
    isErr?: number;
    /** 处理器名称 */
    name?: string;
    /** 处理器位置, 预处理器使用：pre，结果处理器使用：result */
    processorPosition?: string;
    /** 根节点名 */
    rootName?: string;
    /** 服务id，全局处理器需要传值 */
    serviceId?: number;
  };

  type ProcessorRequestDto = {
    /** 预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 预处理器类型 */
    preProcessorType?: string;
    /** 结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 结果正常处理器类型 */
    resultOkProcessorType?: string;
  };

  type ProcessorSqlSelectDto = {
    /** 数据源id */
    dsId?: number;
    /** 超时时间，超时结束调用，单位：毫秒 */
    execTimeout?: number;
    /** id */
    id?: number;
    /** SQL编辑校验：0-否，1-是 */
    isCheckSql?: number;
    /** 只有全局处理器的结果处理器需要填。是否异常处理器：0-否，1-是 */
    isErr?: number;
    /** 是否开启事务：0-否，1-是 */
    isTrans?: number;
    /** 处理器名称 */
    name?: string;
    /** 处理器位置, 预处理器使用：pre，结果处理器使用：result */
    processorPosition?: string;
    /** 服务id，全局处理器需要传值 */
    serviceId?: number;
    /** SQL配置集合 */
    sqlItems?: SqlTreeDto[];
  };

  type ProcessorXmlToJsonDto = {
    /** id */
    id?: number;
    /** 只有全局处理器的结果处理器需要填。是否异常处理器：0-否，1-是 */
    isErr?: number;
    /** 处理器名称 */
    name?: string;
    /** 处理器位置, 预处理器使用：pre，结果处理器使用：result */
    processorPosition?: string;
    /** 是否移除根节点：0-否，1-是 */
    removeRoot?: number;
    /** 服务id，全局处理器需要传值 */
    serviceId?: number;
  };

  type ProcessorXsltDto = {
    /** id */
    id?: number;
    /** 只有全局处理器的结果处理器需要填。是否异常处理器：0-否，1-是 */
    isErr?: number;
    /** 处理器名称 */
    name?: string;
    /** 处理器位置, 预处理器使用：pre，结果处理器使用：result */
    processorPosition?: string;
    /** 脚本内容 */
    script?: string;
    /** 服务id，全局处理器需要传值 */
    serviceId?: number;
  };

  type PullTodoTaskDto = {
    /** 本节点ip或域名 */
    myIp?: string;
    /** 本节点类型 */
    myNodeType?: string;
    /** 本节点端口号 */
    myPort?: number;
    /** 上一次同步任务的执行结果，需要更新到库里 */
    resultTasks?: ShuJuTongBuDeZiYuanDto[];
    /** 工作节点id */
    workerId?: number;
  };

  type QianDuanXiaLaLieBiaoXiang = {
    /** 下拉项代码，类似key的作用，传给后端使用 */
    code?: Record<string, any>;
    /** 是否禁用选项：0-否，1-是 */
    disabled?: number;
    /** 扩展信息 */
    ext?: Record<string, any>;
    /** 是否默认选项：0-否，1-是 */
    isDefault?: number;
    /** 备注信息 */
    memo?: string;
    /** 下拉项名称，用于显示 */
    name?: string;
  };

  type QianDuanXiaLaLieBiaoXiangLong = {
    /** 下拉项代码，类似key的作用，传给后端使用 */
    code?: number;
    /** 是否禁用选项：0-否，1-是 */
    disabled?: number;
    /** 扩展信息 */
    ext?: Record<string, any>;
    /** 是否默认选项：0-否，1-是 */
    isDefault?: number;
    /** 备注信息 */
    memo?: string;
    /** 下拉项名称，用于显示 */
    name?: string;
  };

  type QianDuanXiaLaLieBiaoXiangString = {
    /** 下拉项代码，类似key的作用，传给后端使用 */
    code?: string;
    /** 是否禁用选项：0-否，1-是 */
    disabled?: number;
    /** 扩展信息 */
    ext?: Record<string, any>;
    /** 是否默认选项：0-否，1-是 */
    isDefault?: number;
    /** 备注信息 */
    memo?: string;
    /** 下拉项名称，用于显示 */
    name?: string;
  };

  type QuanJuChangLiangChaXunTiaoJian = {
    /** 输入条件(code 或 name) */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type R = {
    code?: number;
    data?: Record<string, any>;
    msg?: string;
  };

  type RabbitMqPublishDto = {
    /** 字符集编码，如：UTF-8 */
    charset?: string;
    /** 文件内容，符合Freemarker格式 */
    content?: string;
    /** 交换机名称 */
    exchangeName?: string;
    /** 远端IP地址或域名 */
    ip?: string;
    /** 登录密码 */
    password?: string;
    /** 端口号 */
    port?: number;
    /** 队列名称 */
    queueName?: string;
    /** 路由key */
    routingKey?: string;
    /** 超时时间，超时结束调用，单位：毫秒 */
    timeout?: number;
    /** 登录用户名 */
    username?: string;
  };

  type RabbitMqSubscribeDto = {
    /** 字符集编码，如：UTF-8 */
    charset?: string;
    /** 文件内容，符合Freemarker格式 */
    content?: string;
    /** 交换机名称 */
    exchangeName?: string;
    /** 远端IP地址或域名 */
    ip?: string;
    /** 登录密码 */
    password?: string;
    /** 端口号 */
    port?: number;
    /** 队列名称 */
    queueName?: string;
    /** 路由key */
    routingKey?: string;
    /** 超时时间，超时结束调用，单位：毫秒 */
    timeout?: number;
    /** 登录用户名 */
    username?: string;
  };

  type RApiHistoryDataDto = {
    code?: number;
    data?: ApiHistoryDataDto;
    msg?: string;
  };

  type RAppCategoryResDto = {
    code?: number;
    data?: AppCategoryResDto;
    msg?: string;
  };

  type RAppResDto = {
    code?: number;
    data?: AppResDto;
    msg?: string;
  };

  type RAppSupplierResDto = {
    code?: number;
    data?: AppSupplierResDto;
    msg?: string;
  };

  type RBaseBodyDto = {
    code?: number;
    data?: BaseBodyDto;
    msg?: string;
  };

  type RBatchSaveDto = {
    code?: number;
    data?: BatchSaveDto;
    msg?: string;
  };

  type RBoolean = {
    code?: number;
    data?: boolean;
    msg?: string;
  };

  type RCategoryAndServiceTreeDto = {
    code?: number;
    data?: CategoryAndServiceTreeDto;
    msg?: string;
  };

  type RCategoryResDto = {
    code?: number;
    data?: CategoryResDto;
    msg?: string;
  };

  type RCollectionAppStatisticsDto = {
    code?: number;
    data?: AppStatisticsDto[];
    msg?: string;
  };

  type RCommonProcessorInfoResDto = {
    code?: number;
    data?: CommonProcessorInfoResDto;
    msg?: string;
  };

  type RDashboardResDto = {
    code?: number;
    data?: DashboardResDto;
    msg?: string;
  };

  type RDataElementQueryDto = {
    code?: number;
    data?: DataElementQueryDto;
    msg?: string;
  };

  type RDefaultOpenUrlDto = {
    code?: number;
    data?: DefaultOpenUrlDto;
    msg?: string;
  };

  type RDengLuChuShiHuaVoDuiXiang = {
    code?: number;
    data?: DengLuChuShiHuaVoDuiXiang;
    msg?: string;
  };

  type releaseUsingPOST1Params = {
    /** id */
    id: number;
  };

  type releaseUsingPOST2Params = {
    /** id */
    id: number;
  };

  type releaseUsingPOSTParams = {
    /** id */
    id: number;
  };

  type ResourceAtomicMetricColumnDto = {
    /** 字段名 */
    code: string;
    /** 数据长度 */
    dataLen?: number;
    /** 数据精度，主要用于decimal等数据类型 */
    dataPrecision?: number;
    /** 数据类型 */
    dataType?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 数据格式，例如定义日期时间类型的格式 */
    format?: string;
    /** 是否必填：0-否，1-是 */
    isRequired?: number;
    /** 度量的统计规则SQL。例如：sum(字段名)、count(字段)等 */
    measureRuleSql: string;
    /** 描述信息 */
    memo?: string;
    /** 字段中文名 */
    name?: string;
    /** 条件运算符字段，符合对应的数据库规范，取值包括：between、in、>=、<、等等。如果为空，则默认是“=”；如果为between，则会生成两个入参条件（上限值入参、下限值入参）；如果为in，则入参类型是数组 */
    operator?: string;
  };

  type ResourceAtomicMetricInDto = {
    /** 指标类别id */
    categoryId?: string;
    /** 指标代码 */
    code: string;
    /** 维度参数列表 */
    dimensions?: ResourceColumnDto[];
    ds?: ResourceDsDto;
    /** 主键id */
    id?: number;
    /** 资源匹配规则：byCode - 根据资源代码匹配，byCodeVersion - 根据资源代码和版本号匹配 */
    matchRule?: string;
    measure?: ResourceAtomicMetricColumnDto;
    /** 描述信息 */
    memo?: string;
    /** 指标名称 */
    name: string;
    /** 服务代码，如果为空，则根据资源代码和版本号生成 */
    serviceCode?: string;
    /** 服务名称，如果为空，则根据资源名称和版本号生成 */
    serviceName?: string;
    /** 指标SQL脚本 */
    sqlScript?: string;
    /** 系统代码 */
    sysCode?: string;
    sysDataSourceBiz?: SysDataSourceBiz;
    /** 指标版本号 */
    version: string;
  };

  type ResourceColumnDto = {
    /** 字段名 */
    code: string;
    /** 数据长度 */
    dataLen?: number;
    /** 数据精度，主要用于decimal等数据类型 */
    dataPrecision?: number;
    /** 数据类型 */
    dataType?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 数据格式，例如定义日期时间类型的格式 */
    format?: string;
    /** 是否必填：0-否，1-是 */
    isRequired?: number;
    /** 描述信息 */
    memo?: string;
    /** 字段中文名 */
    name?: string;
    /** 条件运算符字段，符合对应的数据库规范，取值包括：between、in、>=、<、等等。如果为空，则默认是“=”；如果为between，则会生成两个入参条件（上限值入参、下限值入参）；如果为in，则入参类型是数组 */
    operator?: string;
  };

  type ResourceCompositeMetricColumnDto = {
    /** 字段名 */
    code: string;
    /** 数据长度 */
    dataLen?: number;
    /** 数据精度，主要用于decimal等数据类型 */
    dataPrecision?: number;
    /** 数据类型 */
    dataType?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 数据格式，例如定义日期时间类型的格式 */
    format?: string;
    /** 是否必填：0-否，1-是 */
    isRequired?: number;
    /** 度量的统计规则SQL。例如：sum(字段名)/count(字段名)等 */
    measureRuleSql: string;
    /** 描述信息 */
    memo?: string;
    /** 字段中文名 */
    name?: string;
    /** 条件运算符字段，符合对应的数据库规范，取值包括：between、in、>=、<、等等。如果为空，则默认是“=”；如果为between，则会生成两个入参条件（上限值入参、下限值入参）；如果为in，则入参类型是数组 */
    operator?: string;
  };

  type ResourceCompositeMetricInDto = {
    /** 指标类别id */
    categoryId?: string;
    /** 指标代码 */
    code: string;
    /** 维度参数列表 */
    dimensions?: ResourceColumnDto[];
    ds?: ResourceDsDto;
    /** 主键id */
    id?: number;
    /** 资源匹配规则：byCode - 根据资源代码匹配，byCodeVersion - 根据资源代码和版本号匹配 */
    matchRule?: string;
    measure?: ResourceCompositeMetricColumnDto;
    /** 描述信息 */
    memo?: string;
    /** 指标名称 */
    name: string;
    /** 服务代码，如果为空，则根据资源代码和版本号生成 */
    serviceCode?: string;
    /** 服务名称，如果为空，则根据资源名称和版本号生成 */
    serviceName?: string;
    /** 指标SQL脚本 */
    sqlScript?: string;
    /** 系统代码 */
    sysCode?: string;
    /** 指标版本号 */
    version: string;
  };

  type ResourceDsDto = {
    /** 数据库名称 */
    dbName: string;
    /** IP地址 */
    ip: string;
    /** 密码 */
    password: string;
    /** 端口号 */
    port: number;
    /** 数据库类型，对应：SQLServer，Oracle，MySQL等 */
    type: string;
    /** 用户名 */
    username: string;
  };

  type ResourceSpInDto = {
    /** 存储过程名 */
    code: string;
    ds?: ResourceDsDto;
    /** 主键id */
    id?: number;
    /** 资源匹配规则：byCode - 根据资源代码匹配，byCodeVersion - 根据资源代码和版本号匹配 */
    matchRule?: string;
    /** 描述信息 */
    memo?: string;
    /** 存储过程中文名 */
    name?: string;
    /** 参数列表 */
    params?: ResourceSpParamDto[];
    /** 服务代码，如果为空，则根据资源代码和版本号生成 */
    serviceCode?: string;
    /** 服务名称，如果为空，则根据资源名称和版本号生成 */
    serviceName?: string;
    /** 系统代码 */
    sysCode?: string;
    /** 资源的版本号 */
    version?: string;
  };

  type ResourceSpParamDto = {
    /** 参数名 */
    code: string;
    /** 数据长度 */
    dataLen?: number;
    /** 数据精度，主要用于decimal等数据类型 */
    dataPrecision?: number;
    /** 数据类型，按数据库的实际类型传 */
    dataType?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 参数方向，枚举：in-输入，out-输出，inout-输入输出 */
    direct?: string;
    /** 数据格式，例如定义日期时间类型的格式 */
    format?: string;
    /** 是否必填：0-否，1-是 */
    isRequired?: number;
    /** 描述信息 */
    memo?: string;
    /** 参数中文名 */
    name?: string;
  };

  type ResourceTableInDto = {
    /** 表名 */
    code: string;
    /** 字段列表。当optType为新增时，就是需新增的字段，且必填；当optType为修改时，就是需修改的字段，且必填；当optType为删除时，不需要传此值；当optType为查询时，就是需要返回的字段列表，如果为空，生成“select * ”返回所有字段 */
    columns?: ResourceColumnDto[];
    ds?: ResourceDsDto;
    /** 主键id */
    id?: number;
    /** 资源匹配规则：byCode - 根据资源代码匹配，byCodeVersion - 根据资源代码和版本号匹配 */
    matchRule?: string;
    /** 描述信息 */
    memo?: string;
    /** 表中文名 */
    name?: string;
    /** 操作类型，将按操作类型生成相应的sql语句，取值：add-新增(即insert)，update-修改，delete-删除，query-查询 */
    optType?: string;
    /** 服务代码，如果为空，则根据资源代码和版本号生成 */
    serviceCode?: string;
    /** 服务名称，如果为空，则根据资源名称和版本号生成 */
    serviceName?: string;
    /** 系统代码 */
    sysCode?: string;
    /** 资源的版本号 */
    version?: string;
    /** 条件字段列表（and关系）。当optType为删除时，不需要传值。当optType为其他情况时，建议用主键或索引字段，必填 */
    whereColumns?: ResourceColumnDto[];
  };

  type ResourceViewInDto = {
    /** 视图名 */
    code: string;
    /** 返回的字段列表。如果为空，生成“select * ”返回所有字段 */
    columns?: ResourceColumnDto[];
    ds?: ResourceDsDto;
    /** 主键id */
    id?: number;
    /** 资源匹配规则：byCode - 根据资源代码匹配，byCodeVersion - 根据资源代码和版本号匹配 */
    matchRule?: string;
    /** 描述信息 */
    memo?: string;
    /** 视图中文名 */
    name?: string;
    /** 服务代码，如果为空，则根据资源代码和版本号生成 */
    serviceCode?: string;
    /** 服务名称，如果为空，则根据资源名称和版本号生成 */
    serviceName?: string;
    /** 系统代码 */
    sysCode?: string;
    /** 资源的版本号 */
    version?: string;
    /** 查询条件字段列表（and关系），建议用主键或索引字段 */
    whereColumns?: ResourceColumnDto[];
  };

  type revokeUsingPOST1Params = {
    /** id */
    id: number;
    /** revokeReason */
    revokeReason: string;
  };

  type revokeUsingPOST2Params = {
    /** id */
    id: number;
    /** revokeReason */
    revokeReason: string;
  };

  type revokeUsingPOSTParams = {
    /** id */
    id: number;
    /** revokeReason */
    revokeReason: string;
  };

  type RHistoryResDto = {
    code?: number;
    data?: HistoryResDto;
    msg?: string;
  };

  type RImportServicesResDto = {
    code?: number;
    data?: ImportServicesResDto;
    msg?: string;
  };

  type RInteractionLogDetailsDto = {
    code?: number;
    data?: InteractionLogDetailsDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangApiDimensionDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangApiDimensionDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangAppCategoryResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangAppCategoryResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangAppResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangAppResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangAppSubscriptionResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangAppSubscriptionResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangAppSupplierResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangAppSupplierResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangConfigsQueryDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangConfigsQueryDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangDatavalueCodeQueryDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangDatavalueCodeQueryDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangDatavalueQueryDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangDatavalueQueryDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangInteractionLogResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangInteractionLogResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangKaiFangShuJuFuWuLieBiaoDuiXiang = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangKaiFangShuJuFuWuLieBiaoDuiXiang;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangListAppUnsubscriptionResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangListAppUnsubscriptionResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangListServiceSearchResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangListServiceSearchResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangOrganizationResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangOrganizationResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangServiceInfoDetailDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangServiceInfoDetailDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangServiceInfoListResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangServiceInfoListResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangServiceOnlineDocResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangServiceOnlineDocResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangServiceParametersDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangServiceParametersDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangShuJuZiYuanLieBiaoFanHuiDuiXiang = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangShuJuZiYuanLieBiaoFanHuiDuiXiang;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangSmFlowControlResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangSmFlowControlResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangSqlConfigureDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangSqlConfigureDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangSubscriptionListApplyResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangSubscriptionListApplyResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangSysConstantResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangSysConstantResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangSysDataSourcePo = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangSysDataSourcePo;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangSysThirdServiceListResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangSysThirdServiceListResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangSysWorkerGroupBiaoDePoDuiXiang = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangSysWorkerGroupBiaoDePoDuiXiang;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangSysWorkerNodeResDto = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangSysWorkerNodeResDto;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangXiTongPeiZhiCanShuVoDuiXiang = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangXiTongPeiZhiCanShuVoDuiXiang;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangXiTongShenJiRiZhiPoDuiXiang = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangXiTongShenJiRiZhiPoDuiXiang;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangXiTongXiaoXiVoDuiXiang = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangXiTongXiaoXiVoDuiXiang;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangZiDianMingXiBiao = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangZiDianMingXiBiao;
    msg?: string;
  };

  type RJiBenDeFenYeJieGuoDuiXiangZiDianZhuBiao = {
    code?: number;
    data?: JiBenDeFenYeJieGuoDuiXiangZiDianZhuBiao;
    msg?: string;
  };

  type RLingPaiDtoXiangYingDuiXiang = {
    code?: number;
    data?: LingPaiDtoXiangYingDuiXiang;
    msg?: string;
  };

  type RLinkedHashSetString = {
    code?: number;
    data?: string[];
    msg?: string;
  };

  type RLinkLogDetailsDtoDuiXiang = {
    code?: number;
    data?: LinkLogDetailsDtoDuiXiang;
    msg?: string;
  };

  type RListApiCallBucketDto = {
    code?: number;
    data?: ApiCallBucketDto[];
    msg?: string;
  };

  type RListApiCallChainDto = {
    code?: number;
    data?: ApiCallChainDto[];
    msg?: string;
  };

  type RListAppCategoryTree = {
    code?: number;
    data?: AppCategoryTree[];
    msg?: string;
  };

  type RListAppIdAndAppNameDto = {
    code?: number;
    data?: AppIdAndAppNameDto[];
    msg?: string;
  };

  type RListAppNameResDto = {
    code?: number;
    data?: AppNameResDto[];
    msg?: string;
  };

  type RListAppProviderResDto = {
    code?: number;
    data?: AppProviderResDto[];
    msg?: string;
  };

  type RListAppResDto = {
    code?: number;
    data?: AppResDto[];
    msg?: string;
  };

  type RListAppSubscriptionOnServiceResDto = {
    code?: number;
    data?: AppSubscriptionOnServiceResDto[];
    msg?: string;
  };

  type RListAppSupplierDto = {
    code?: number;
    data?: AppSupplierDto[];
    msg?: string;
  };

  type RListAppSupplierResDto = {
    code?: number;
    data?: AppSupplierResDto[];
    msg?: string;
  };

  type RListCategoryTree = {
    code?: number;
    data?: CategoryTree[];
    msg?: string;
  };

  type RListConsumer1Dto = {
    code?: number;
    data?: Consumer1Dto[];
    msg?: string;
  };

  type RListConsumerCodeNameDto = {
    code?: number;
    data?: ConsumerCodeNameDto[];
    msg?: string;
  };

  type RListEngineMetricDto = {
    code?: number;
    data?: EngineMetricDto[];
    msg?: string;
  };

  type RListExecutionProgressDto = {
    code?: number;
    data?: ExecutionProgressDto[];
    msg?: string;
  };

  type RListHsmServiceDto = {
    code?: number;
    data?: HsmServiceDto[];
    msg?: string;
  };

  type RListLuYouPeiZhiXinXi = {
    code?: number;
    data?: LuYouPeiZhiXinXi[];
    msg?: string;
  };

  type RListMetricItemDto = {
    code?: number;
    data?: MetricItemDto[];
    msg?: string;
  };

  type RListOrganizationTree = {
    code?: number;
    data?: OrganizationTree[];
    msg?: string;
  };

  type RListParameterCodeResDto = {
    code?: number;
    data?: ParameterCodeResDto[];
    msg?: string;
  };

  type RListQianDuanXiaLaLieBiaoXiang = {
    code?: number;
    data?: QianDuanXiaLaLieBiaoXiang[];
    msg?: string;
  };

  type RListQianDuanXiaLaLieBiaoXiangLong = {
    code?: number;
    data?: QianDuanXiaLaLieBiaoXiangLong[];
    msg?: string;
  };

  type RListServiceCategoryDto = {
    code?: number;
    data?: ServiceCategoryDto[];
    msg?: string;
  };

  type RListServiceCategoryTreeResDto = {
    code?: number;
    data?: ServiceCategoryTreeResDto[];
    msg?: string;
  };

  type RListServiceHealthLevelDto = {
    code?: number;
    data?: ServiceHealthLevelDto[];
    msg?: string;
  };

  type RListServiceIdCodeDto = {
    code?: number;
    data?: ServiceIdCodeDto[];
    msg?: string;
  };

  type RListServiceNameQueryDto = {
    code?: number;
    data?: ServiceNameQueryDto[];
    msg?: string;
  };

  type RListShuJuTongBuDeZiYuanDto = {
    code?: number;
    data?: ShuJuTongBuDeZiYuanDto[];
    msg?: string;
  };

  type RListSmCommonPreProcessorBiaoDePoDuiXiang = {
    code?: number;
    data?: SmCommonPreProcessorBiaoDePoDuiXiang[];
    msg?: string;
  };

  type RListSmCommonResultProcessorBiaoDePoDuiXiang = {
    code?: number;
    data?: SmCommonResultProcessorBiaoDePoDuiXiang[];
    msg?: string;
  };

  type RListSmServiceInfoBiaoDePoDuiXiang = {
    code?: number;
    data?: SmServiceInfoBiaoDePoDuiXiang[];
    msg?: string;
  };

  type RListString = {
    code?: number;
    data?: string[];
    msg?: string;
  };

  type RListSysConstantResDto = {
    code?: number;
    data?: SysConstantResDto[];
    msg?: string;
  };

  type RListSysDataSourcePo = {
    code?: number;
    data?: SysDataSourcePo[];
    msg?: string;
  };

  type RListSysDeptDuiXiang = {
    code?: number;
    data?: SysDeptDuiXiang[];
    msg?: string;
  };

  type RListSysUserDuiXiang = {
    code?: number;
    data?: SysUserDuiXiang[];
    msg?: string;
  };

  type RListTasksDto = {
    code?: number;
    data?: TasksDto[];
    msg?: string;
  };

  type RListValueNameDto = {
    code?: number;
    data?: ValueNameDto[];
    msg?: string;
  };

  type RLong = {
    code?: number;
    data?: number;
    msg?: string;
  };

  type RMapStringListQianDuanXiaLaLieBiaoXiang = {
    code?: number;
    data?: Record<string, any>;
    msg?: string;
  };

  type RMapStringObject = {
    code?: number;
    data?: Record<string, any>;
    msg?: string;
  };

  type RObject = {
    code?: number;
    data?: Record<string, any>;
    msg?: string;
  };

  type ROnlineDocumentsDto = {
    code?: number;
    data?: OnlineDocumentsDto;
    msg?: string;
  };

  type ROrganizationResDto = {
    code?: number;
    data?: OrganizationResDto;
    msg?: string;
  };

  type RouteInfoResDto = {
    /** 同步方式，初始化为空字符串 */
    callMode?: string;
    /** 服务返回方 */
    endpointIdAndNameList?: EndpointIdAndName[];
    /** 服务提供方列表 */
    filterResDtoList?: FilterResDto[];
  };

  type RProcessorEmptyDto = {
    code?: number;
    data?: ProcessorEmptyDto;
    msg?: string;
  };

  type RProcessorFreemarkerDto = {
    code?: number;
    data?: ProcessorFreemarkerDto;
    msg?: string;
  };

  type RProcessorGroovyLanguageDto = {
    code?: number;
    data?: ProcessorGroovyLanguageDto;
    msg?: string;
  };

  type RProcessorJavaLanguageDto = {
    code?: number;
    data?: ProcessorJavaLanguageDto;
    msg?: string;
  };

  type RProcessorJsonToXmlDto = {
    code?: number;
    data?: ProcessorJsonToXmlDto;
    msg?: string;
  };

  type RProcessorRequestDto = {
    code?: number;
    data?: ProcessorRequestDto;
    msg?: string;
  };

  type RProcessorSqlSelectDto = {
    code?: number;
    data?: ProcessorSqlSelectDto;
    msg?: string;
  };

  type RProcessorXmlToJsonDto = {
    code?: number;
    data?: ProcessorXmlToJsonDto;
    msg?: string;
  };

  type RProcessorXsltDto = {
    code?: number;
    data?: ProcessorXsltDto;
    msg?: string;
  };

  type RRouteInfoResDto = {
    code?: number;
    data?: RouteInfoResDto;
    msg?: string;
  };

  type RServiceCategoryTreeDto = {
    code?: number;
    data?: ServiceCategoryTreeDto;
    msg?: string;
  };

  type RServiceEndpointCreateHttpPostDto = {
    code?: number;
    data?: ServiceEndpointCreateHttpPostDto;
    msg?: string;
  };

  type RServiceEndpointCreateHttpPutDto = {
    code?: number;
    data?: ServiceEndpointCreateHttpPutDto;
    msg?: string;
  };

  type RServiceEndpointFtpDownloadDto = {
    code?: number;
    data?: ServiceEndpointFtpDownloadDto;
    msg?: string;
  };

  type RServiceEndpointFtpUploadDto = {
    code?: number;
    data?: ServiceEndpointFtpUploadDto;
    msg?: string;
  };

  type RServiceEndpointHttpDeleteDto = {
    code?: number;
    data?: ServiceEndpointHttpDeleteDto;
    msg?: string;
  };

  type RServiceEndpointRabbitMqPublishDto = {
    code?: number;
    data?: ServiceEndpointRabbitMqPublishDto;
    msg?: string;
  };

  type RServiceEndpointRabbitMqSubscribeDto = {
    code?: number;
    data?: ServiceEndpointRabbitMqSubscribeDto;
    msg?: string;
  };

  type RServiceEndpointResDto = {
    code?: number;
    data?: ServiceEndpointResDto;
    msg?: string;
  };

  type RServiceEndpointResHttpDto = {
    code?: number;
    data?: ServiceEndpointResHttpDto;
    msg?: string;
  };

  type RServiceEndpointResWebserviceDto = {
    code?: number;
    data?: ServiceEndpointResWebserviceDto;
    msg?: string;
  };

  type RServiceEndpointSpDto = {
    code?: number;
    data?: ServiceEndpointSpDto;
    msg?: string;
  };

  type RServiceEndpointSqlDto = {
    code?: number;
    data?: ServiceEndpointSqlDto;
    msg?: string;
  };

  type RServiceInfoDetailDto = {
    code?: number;
    data?: ServiceInfoDetailDto;
    msg?: string;
  };

  type RServiceInfoSelectDto = {
    code?: number;
    data?: ServiceInfoSelectDto;
    msg?: string;
  };

  type RServiceParamResDto = {
    code?: number;
    data?: ServiceParamResDto;
    msg?: string;
  };

  type RServiceParamTreeResDto = {
    code?: number;
    data?: ServiceParamTreeResDto;
    msg?: string;
  };

  type RServiceTestResDto = {
    code?: number;
    data?: ServiceTestResDto;
    msg?: string;
  };

  type RServiceTopologyMapResDto = {
    code?: number;
    data?: ServiceTopologyMapResDto;
    msg?: string;
  };

  type RShengChengLingPaiTokenShuChuDto = {
    code?: number;
    data?: ShengChengLingPaiTokenShuChuDto;
    msg?: string;
  };

  type RShengChengQianMingSignatureShuChuDto = {
    code?: number;
    data?: ShengChengQianMingSignatureShuChuDto;
    msg?: string;
  };

  type RSingleSqlSeleteDataDto = {
    code?: number;
    data?: SingleSqlSeleteDataDto;
    msg?: string;
  };

  type RSmFlowControlResDto = {
    code?: number;
    data?: SmFlowControlResDto;
    msg?: string;
  };

  type RString = {
    code?: number;
    data?: string;
    msg?: string;
  };

  type RSysConstantBiaoDePoDuiXiang = {
    code?: number;
    data?: SysConstantBiaoDePoDuiXiang;
    msg?: string;
  };

  type RSysConstantResDto = {
    code?: number;
    data?: SysConstantResDto;
    msg?: string;
  };

  type RSysDataResourceInfoResDto = {
    code?: number;
    data?: SysDataResourceInfoResDto;
    msg?: string;
  };

  type RSysDataSourcePo = {
    code?: number;
    data?: SysDataSourcePo;
    msg?: string;
  };

  type RSysLogoDuiXiang = {
    code?: number;
    data?: SysLogoDuiXiang;
    msg?: string;
  };

  type RSysOrganizationBiaoDePoDuiXiang = {
    code?: number;
    data?: SysOrganizationBiaoDePoDuiXiang;
    msg?: string;
  };

  type RSysRangeDictPoDuiXiang = {
    code?: number;
    data?: SysRangeDictPoDuiXiang;
    msg?: string;
  };

  type RSysTempNodesConfigDuiXiang = {
    code?: number;
    data?: SysTempNodesConfigDuiXiang;
    msg?: string;
  };

  type RSysThirdServiceBiaoDePoDuiXiang = {
    code?: number;
    data?: SysThirdServiceBiaoDePoDuiXiang;
    msg?: string;
  };

  type RSysThirdServiceResHttpDto = {
    code?: number;
    data?: SysThirdServiceResHttpDto;
    msg?: string;
  };

  type RSysThirdServiceResWebserviceDto = {
    code?: number;
    data?: SysThirdServiceResWebserviceDto;
    msg?: string;
  };

  type RSysWorkerGroupBiaoDePoDuiXiang = {
    code?: number;
    data?: SysWorkerGroupBiaoDePoDuiXiang;
    msg?: string;
  };

  type RSysWorkerNodeBiaoDePoDuiXiang = {
    code?: number;
    data?: SysWorkerNodeBiaoDePoDuiXiang;
    msg?: string;
  };

  type RSysWorkerNodeDetailResDto = {
    code?: number;
    data?: SysWorkerNodeDetailResDto;
    msg?: string;
  };

  type RTongBuDeChuShiHuaShuJuDeXiangYingDtoDuiXiang = {
    code?: number;
    data?: TongBuDeChuShiHuaShuJuDeXiangYingDtoDuiXiang;
    msg?: string;
  };

  type RTopologyDto = {
    code?: number;
    data?: TopologyDto;
    msg?: string;
  };

  type RUserInfo = {
    code?: number;
    data?: UserInfo;
    msg?: string;
  };

  type RXinTiaoJieGuoDto = {
    code?: number;
    data?: XinTiaoJieGuoDto;
    msg?: string;
  };

  type RZiDianMingXiBiao = {
    code?: number;
    data?: ZiDianMingXiBiao;
    msg?: string;
  };

  type RZiDianZhuBiao = {
    code?: number;
    data?: ZiDianZhuBiao;
    msg?: string;
  };

  type ServiceCategoryDto = {
    /** 类别id */
    categoryId?: number;
    /** 代码，或称应用id */
    code?: string;
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
  };

  type ServiceCategoryTreeDto = {
    /** 子节点 */
    children?: TreeNode[];
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 父级ID */
    parentId?: number;
    /** 类型，1=服务类别，2=服务；当type=2时，使用id的绝对值值来查询服务订阅信息 */
    type?: number;
  };

  type ServiceCategoryTreeResDto = {
    /** 子节点 */
    children?: TreeNode[];
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 父级ID */
    parentId?: number;
  };

  type ServiceDescriptionDto = {
    /** 服务类别 */
    categoryName?: string;
    /** 服务代码 */
    code?: string;
    /** 服务描述 */
    memo?: string;
    /** 服务名称 */
    name?: string;
    /** (服务模式)开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
    openProtocol?: string;
    /** (标准分类)服务模式，取值：hosp - 院标，hl7v2-行标，hlht - 国标(互联互通)，diy-定制(自定义) */
    serviceMode?: string;
    /** 服务地址 */
    urlPath?: string;
    /** 版本号，由主版本号与次版本号拼接而成，英文句号分隔 */
    version?: string;
  };

  type ServiceEndpointCreateFileReaderDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    fileReaderDto?: FileReaderDto;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointCreateFileWriterDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    fileWriterDto?: FileWriterDto;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointCreateHttpGetDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** url路径中的参数 */
    pathParams?: EndpointParameterDtoString[];
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** url中的query参数 */
    queryParams?: EndpointParameterDtoString[];
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointCreateHttpPostDto = {
    /** 提供方id */
    appId: number;
    bodyOneParam?: HttpPostParamDto;
    /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
    bodyTableParams?: EndpointParameterDtoString[];
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** url路径中的参数 */
    pathParams?: EndpointParameterDtoString[];
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** url中的query参数 */
    queryParams?: EndpointParameterDtoString[];
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointCreateHttpPutDto = {
    /** 提供方id */
    appId: number;
    bodyOneParam?: HttpPostParamDto;
    /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
    bodyTableParams?: EndpointParameterDtoString[];
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** url路径中的参数 */
    pathParams?: EndpointParameterDtoString[];
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** url中的query参数 */
    queryParams?: EndpointParameterDtoString[];
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointCreateWebserviceDto = {
    /** 提供方id */
    appId: number;
    bodyOneParam?: HttpPostParamDto;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** 方法名 */
    func: string;
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 入参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
    inBodyFormat?: string;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 命名空间 */
    ns: string;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 是否移除响应体的soap外壳：0-否，1-是 */
    takeOffSoapOutShell?: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointFtpDownloadDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    ftpDownloadDto?: FtpDownloadDto;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
  };

  type ServiceEndpointFtpUploadDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    ftpUploadDto?: FtpUploadDto;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
  };

  type ServiceEndpointHttpDeleteDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** url路径中的参数 */
    pathParams?: EndpointParameterDtoString[];
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** url中的query参数 */
    queryParams?: EndpointParameterDtoString[];
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointProcessorDto = {
    /** 处理器id */
    id?: number;
    /** 是否移除根节点：0-否，1-是，对应XML转JSON */
    removeRoot?: number;
    /** 根节点名，对应JSON转XML */
    rootName?: string;
    /** 脚本内容 */
    script?: string;
    /** 处理器类型，枚举code：CompType */
    type?: string;
  };

  type ServiceEndpointRabbitMqPublishDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    rabbitMqPublishDto?: RabbitMqPublishDto;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
  };

  type ServiceEndpointRabbitMqSubscribeDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    rabbitMqSubscribeDto?: RabbitMqSubscribeDto;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
  };

  type ServiceEndpointResDto = {
    serviceEndpointResponseList?: ServiceEndpointResponse[];
  };

  type ServiceEndpointResHttpDto = {
    /** 提供方id */
    appId?: number;
    bodyOneParam?: HttpPostParamDto;
    /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
    bodyTableParams?: EndpointParameterDtoString[];
    /** 业务名称 */
    endpointName: string;
    /** 提供方地址 */
    endpointUrl?: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** id */
    id?: number;
    /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
    inBodyFormat?: string;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 提供方名称 */
    name?: string;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** url路径中的参数 */
    pathParams?: EndpointParameterDtoString[];
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** url中的query参数 */
    queryParams?: EndpointParameterDtoString[];
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId?: number;
    /** 服务名称 */
    serviceName?: string;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status?: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    type?: string;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointResponse = {
    /** 提供方编码 */
    endpointCode?: string;
    /** 提供方名称 */
    endpointName?: string;
    /** 测试结果 */
    resultCode?: number;
    /** 失败原因 */
    resultInfo?: string;
    /** 服务模式 */
    type?: string;
  };

  type ServiceEndpointResWebserviceDto = {
    /** 提供方id */
    appId: number;
    /** 业务名称 */
    endpointName: string;
    /** 提供方地址 */
    endpointUrl?: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** 方法名 */
    func?: string;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 入参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
    inBodyFormat?: string;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 提供方名称 */
    name?: string;
    /** 命名空间 */
    ns?: string;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 服务名称 */
    serviceName?: string;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceEndpointSpDto = {
    /** 提供方id */
    appId: number;
    /** 数据源id */
    dsId?: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 是否开启事务：0-否，1-是 */
    isTrans?: number;
    /** 入参配置 */
    params?: SpParamDto[];
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** 存储过程名 */
    spName?: string;
    /** 是否启用：0-停用，1-启用 */
    status: number;
  };

  type ServiceEndpointSqlDto = {
    /** 提供方id */
    appId: number;
    /** 数据源id */
    dsId?: number;
    /** 业务名称 */
    endpointName: string;
    /** 超时时长，单位：秒 */
    execTimeout: number;
    /** id, 新增不传值, 更新传值 */
    id?: number;
    /** SQL编辑校验：0-否，1-是 */
    isCheckSql?: number;
    /** 前端不需要传值，0：否，1：是。默认：0 */
    isCommonProcessor?: number;
    /** 是否开启事务：0-否，1-是 */
    isTrans?: number;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** 个性预处理器id */
    preId?: number;
    /** 公共或自定义预处理器内容 */
    preProcessorContent?: Record<string, any>;
    /** 公共或自定义预处理器类型 */
    preProcessorType?: string;
    processorRequestDto?: ProcessorRequestDto;
    /** 消息头key。当resultSource为“header”时此字段存储响应头的key，当resultSource为“bodyPath”时此字段存储节点路径（jsonpath、xpath等） */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 公共结果异常处理器内容 */
    resultFailProcessorContent?: Record<string, any>;
    /** 公共结果异常处理器类型 */
    resultFailProcessorType?: string;
    /** 个性结果处理器id */
    resultId?: number;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 公共或自定义结果正常处理器内容 */
    resultOkProcessorContent?: Record<string, any>;
    /** 公共或自定义结果正常处理器类型 */
    resultOkProcessorType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 服务ID */
    serviceId: number;
    /** 提供方服务模式，对应枚举code:ServiceType，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    serviceType: string;
    /** SQL配置集合 */
    sqlItems?: SqlTreeDto[];
    /** 是否启用：0-停用，1-启用 */
    status: number;
    /** 提供方地址 */
    url?: string;
  };

  type ServiceHealthLevelDto = {
    /** 最大平均耗时（毫秒） */
    maxAvgCost?: number;
    /** 最大成功率 */
    maxOkRate?: number;
    /** 最小平均耗时（毫秒） */
    minAvgCost?: number;
    /** 最小成功率 */
    minOkRate?: number;
    /** 最终评分 */
    score?: number;
  };

  type ServiceIdCodeByConsumerIdUsingGETParams = {
    /** consumerId */
    consumerId?: number;
  };

  type ServiceIdCodeDto = {
    /** 服务代码 */
    code?: string;
    /** id */
    id?: number;
    /** 服务名称 */
    name?: string;
  };

  type ServiceInfoCreateDto = {
    /** 服务类别id，对应sm_category表的数据id */
    categoryId: number;
    /** 服务编码（格式：只能包含字母数字中划线,最多50位） */
    code: string;
    /** 是否是模板 0-否  1-是 */
    isTemplate?: number;
    /** 服务描述 */
    memo?: string;
    /** 服务名称 */
    name: string;
    /** (服务模式)开放的通信协议，对应枚举code:OpenProtocol */
    openProtocol: string;
    /** (服务类型)操作类型，对应枚举code:OptType */
    optType: string;
    /** 源系统id（用于标记资源是由哪个系统注册的） */
    resourceAppId?: number;
    /** 资源类别id */
    resourceCategoryId?: string;
    /** 资源代码（服务代码生成规则：资源代码与资源版本号拼接，中间用“-”分隔） */
    resourceCode?: string;
    /** 源系统中的资源主键id */
    resourceKeyId?: number;
    /** 资源匹配规则，取值：byCodeVersion-按资源代码和版本号，byCode - 按资源代码 */
    resourceMatchRule?: string;
    /** 资源名称 */
    resourceName?: string;
    /** 资源版本号 */
    resourceVersion?: string;
    /** 路由执行模式，取值：parallel - 并行（默认，同时调用所有路由），serial - 串行（按顺序依次调用，一个执行完成后，才会调用下一个） */
    routeExecMode?: string;
    /** 服务场景，取值来自枚举类：com.clinbrain.esb.common.core.po.sys.SysWorkerNodePo.NodeTypeEnum，取值：dataEngine - 数据开放，serviceEngine - 服务共享，busEngine - 业务集成，jobEngine - 任务调度，etlEngine - 数据同步(ETL) */
    scene?: string;
    /** (标准分类)服务模式，对应枚举code:ServiceMode */
    serviceMode?: string;
    /** 标准分类名称 */
    serviceModeName?: string;
    /** 模板名称 */
    templateName?: string;
    /** 服务请求路径，全局唯一 */
    urlPath?: string;
    /** 版本号，格式：只能由两个整数和点号拼接而成，其中点号左侧整数范围为1~999，点号右侧整数范围为0~999，例如【1.0】【999.999】）！ */
    version: string;
    /** 引擎分组id，如果有值，则在服务发布时，不可改变引擎分组，关联：sys_worker_group.id */
    workerGroupId?: number;
  };

  type ServiceInfoDetailDto = {
    /** 是否可删除：0-否，1-是，对于一些系统固化的api，禁止在前端删除 */
    canDelete?: number;
    /** 是否可编辑：0-否，1-是，对于一些系统固化的api，禁止在前端修改 */
    canEdit?: number;
    /** 所属服务类别编码 */
    categoryCode?: string;
    /** 所属分组ID，关联：sm_category.id */
    categoryId?: number;
    /** 所属服务类别名称 */
    categoryName?: string;
    /** 服务代码 */
    code?: string;
    /** 创建人-用户姓名 */
    createRealname?: string;
    /** 创建人-用户账号 */
    createUsername?: string;
    ctime?: string;
    cuid?: number;
    /** 主键id */
    id?: number;
    /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
    inBodyFormat?: string;
    /** 入参具体字段树形json字符串 */
    inJsonParam?: string;
    inParamTree?: ServiceParamTreeDto;
    /** 是否是模板 0-否  1-是 */
    isTemplate?: number;
    /** 日志级别：all-全链路，entry-入口日志（记录入出参消息，不记录中间步骤日志），entryNoParam-入口日志（不记录入出参消息，不记录中间步骤日志，便于监控统计服务调用耗时与次数等），none-不记录日志 */
    logLevel?: string;
    /** 主版本号，暂定规则：从1开始，用户根据情况，界面上可手工加一 */
    majorVersion?: number;
    memo?: string;
    /** 次版本号，每次修改时都要加一，生成规则：从1开始，自增数字(从1开始) */
    minorVersion?: number;
    /** 维护人-用户姓名 */
    modifyRealname?: string;
    /** 维护人-用户账号 */
    modifyUsername?: string;
    mtime?: string;
    muid?: number;
    /** 服务名称 */
    name?: string;
    /** 通信模式，取值：sync - 同步，async - 异步 */
    openMode?: string;
    /** (服务模式)开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
    openProtocol?: string;
    /** (服务模式)开放的通信协议“openProtocol”对应的名称 */
    openProtocolName?: string;
    /** (服务类型)操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
    optType?: string;
    /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    outParamTree?: ServiceParamTreeDto;
    /** 源系统id（用于标记资源是由哪个系统注册的） */
    resourceAppId?: number;
    /** 资源类别id */
    resourceCategoryId?: string;
    /** 资源代码（服务代码生成规则：资源代码与资源版本号拼接，中间用“-”分隔） */
    resourceCode?: string;
    /** 源系统中的资源主键id */
    resourceKeyId?: number;
    /** 资源匹配规则，取值：byCodeVersion-按资源代码和版本号，byCode - 按资源代码 */
    resourceMatchRule?: string;
    /** 资源名称 */
    resourceName?: string;
    /** 资源版本号 */
    resourceVersion?: string;
    /** 路由执行模式，取值：parallel - 并行（默认，同时调用所有路由），serial - 串行（按顺序依次调用，一个执行完成后，才会调用下一个） */
    routeExecMode?: string;
    /** 路由的条件关系，取值：broadcast - 广播（默认，满足条件的路由都会执行），single - 单路（只会执行满足条件的第一个路由） */
    routeRelation?: string;
    /** 服务场景，取值来自枚举类：com.clinbrain.esb.common.core.po.sys.SysWorkerNodePo.NodeTypeEnum，取值：dataEngine - 数据开放，serviceEngine - 服务共享，busEngine - 业务集成，jobEngine - 任务调度，etlEngine - 数据同步(ETL) */
    scene?: string;
    /** (标准分类)服务模式，取值：hosp - 院标，hl7v2-行标，hlht - 国标(互联互通)，diy-定制(自定义) */
    serviceMode?: string;
    /** 服务模式名称 */
    serviceModeName?: string;
    sortNo?: number;
    /** 服务状态：1=待设计，2=待配置，3=待发布，4=已发布服务定义步骤点击「保存」退出，此服务为「待设计」状态参数设计步骤点击「保存」退出，此服务为「待配置提供方」状态服务配置步骤点击「保存」退出，此服务为「待发布」状态脚本校验步骤点击「完成」退出，此服务为「待发布」状态 */
    status?: number;
    /** 模板名称 */
    templateName?: string;
    /** 对外开放的url路径，全局唯一 */
    urlPath?: string;
    /** 版本号，由主版本号与次版本号拼接而成，英文句号分隔 */
    version?: string;
    /** 所属引擎类别编码 */
    workerGroupCode?: string;
    /** 引擎分组id，如果有值，则在服务发布时，不可改变引擎分组，关联：sys_worker_group.id */
    workerGroupId?: number;
    /** 所属引擎类别名称 */
    workerGroupName?: string;
  };

  type ServiceInfoListResDto = {
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
  };

  type ServiceInfoSearchCriteria = {
    /** 所属服务分组id */
    categoryId?: number;
    /** 服务名称或服务code（模糊查询） */
    condition?: string;
    /** 创建人 */
    createRealname?: string;
    /** 页码 */
    current?: number;
    /** 数据库名称 */
    dbName?: string;
    /** 目的端系统Id */
    destinationSystemId?: number;
    /** 是否是模板 0-否  1-是 */
    isTemplate?: number;
    /** 服务描述 */
    memo?: string;
    /** 维护人 */
    modifyRealname?: string;
    /** 操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
    optType?: string;
    /** 服务场景，取值来自枚举类：com.clinbrain.esb.common.core.po.sys.SysWorkerNodePo.NodeTypeEnum，取值：dataEngine - 数据开放，serviceEngine - 服务共享，busEngine - 业务集成，jobEngine - 任务调度，etlEngine - 数据同步(ETL) */
    scene?: string;
    /** 标准分类，例如：hosp、hlht等 */
    serviceMode?: string;
    /** 页大小 */
    size?: number;
    /** 排序字段数组，入参规则：【列名 排序】 例：["id desc","ctime desc"]  列名选项：【id，opt_type，modify_realname，mtime，status】 */
    sortArray?: string[];
    /** 源端系统名称 */
    sourceSystemName?: string;
    startIndex?: number;
    /** 服务状态：1=待设计，2=待配置，3=待发布，4=已发布 */
    status?: number;
    /** 数据源id */
    targetDsid?: number;
    /** 模板名称 */
    templateName?: string;
    /** 服务地址 */
    urlPath?: string;
  };

  type ServiceInfoSelectDto = {
    /** 创建人 */
    createRealnameList?: string[];
    /** 目的端系统名称 */
    destinationSystemNameList?: MapStringObject[];
    /** 维护人 */
    modifyRealnameList?: string[];
    /** 源端系统名称 */
    sourceSystemNameList?: string[];
  };

  type ServiceInfoUpdateDto = {
    /** 所属服务类别id，对应sm_category表的数据id */
    categoryId: number;
    /** 服务编码（格式：只能包含字母数字中划线,最多50位） */
    code: string;
    /** id */
    id: number;
    /** 是否是模板 0-否  1-是 */
    isTemplate?: number;
    /** 日志级别：all-全链路，entry-入口日志（记录入出参消息，不记录中间步骤日志），entryNoParam-入口日志（不记录入出参消息，不记录中间步骤日志，便于监控统计服务调用耗时与次数等），error-仅错误时记录日志 */
    logLevel?: string;
    /** 服务描述 */
    memo?: string;
    /** 服务更新时间[用于服务版本锁定] */
    mtime?: string;
    /** 服务名称 */
    name: string;
    /** (服务模式)开放的通信协议，对应枚举code:OpenProtocol */
    openProtocol: string;
    /** (服务类型)操作类型，对应枚举code:OptType */
    optType: string;
    /** 源系统id（用于标记资源是由哪个系统注册的） */
    resourceAppId?: number;
    /** 资源类别id */
    resourceCategoryId?: string;
    /** 资源代码（服务代码生成规则：资源代码与资源版本号拼接，中间用“-”分隔） */
    resourceCode?: string;
    /** 源系统中的资源主键id */
    resourceKeyId?: number;
    /** 资源匹配规则，取值：byCodeVersion-按资源代码和版本号，byCode - 按资源代码 */
    resourceMatchRule?: string;
    /** 资源名称 */
    resourceName?: string;
    /** 资源版本号 */
    resourceVersion?: string;
    /** 路由执行模式，取值：parallel - 并行（默认，同时调用所有路由），serial - 串行（按顺序依次调用，一个执行完成后，才会调用下一个） */
    routeExecMode?: string;
    /** 服务场景，取值来自枚举类：com.clinbrain.esb.common.core.po.sys.SysWorkerNodePo.NodeTypeEnum，取值：dataEngine - 数据开放，serviceEngine - 服务共享，busEngine - 业务集成，jobEngine - 任务调度，etlEngine - 数据同步(ETL) */
    scene?: string;
    /** (标准分类)服务模式，对应枚举code:ServiceMode */
    serviceMode?: string;
    /** 服务模式名称 */
    serviceModeName?: string;
    /** 模板名称 */
    templateName?: string;
    /** 服务请求路径，全局唯一 */
    urlPath?: string;
  };

  type ServiceNameQueryDto = {
    /** 服务名称 */
    label?: string;
    /** 服务值 */
    value?: string;
  };

  type ServiceOnlineDocResDto = {
    /** 服务代码 */
    code?: string;
    /** 服务id */
    id?: number;
    /** 最后更新时间 */
    mtime?: string;
    /** 服务名称 */
    name?: string;
    /** 服务类型 */
    optType?: string;
    /** 版本号 */
    version?: string;
  };

  type ServiceParamBatchMaintainDto = {
    /** 新增或修改参数列表 */
    serviceParamUpdateDtoList?: ServiceParamUpdateDto[];
    /** 要删除的参数id集合 */
    toDoDeleted?: number[];
  };

  type ServiceParamCreateDto = {
    /** 数据长度 */
    dataLength?: string;
    /** 数据类型，对应枚举code:DataType，(节点传object) */
    dataType: string;
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
    paramName: string;
    /** 参数类型，对应枚举code:ParamType，取值：in-header、in-path、in-body、out-header、out-body */
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
  };

  type ServiceParametersDto = {
    /** 业务名称 */
    bizName?: string;
    /** id */
    id?: string;
    /** 请求模板是否已配置 0是已配置  1未配置 */
    isReqTpl?: string;
    /** 响应体模板是否已配置 0是已配置  1未配置 */
    isRespTpl?: string;
    /** 请求模板 */
    reqTpl?: string;
    /** 响应体模板 */
    respTpl?: string;
    /** 服务编码 */
    serviceCode?: string;
    /** 服务名称 */
    serviceName?: string;
    /** 类型 */
    type?: string;
  };

  type ServiceParamImportServiceDto = {
    /** 文件内容 */
    content: string;
    /** 文件类型：xml或json */
    fileType: string;
    /** 参数类型 */
    paramType: string;
    /** 服务id */
    serviceId: number;
  };

  type ServiceParamResDto = {
    /** 子节点 */
    children?: TreeNode[];
    /** 符合组件规则的占位符 */
    compPlaceholder?: string;
    /** 数据长度 */
    dataLength?: string;
    /** 数据类型，对应枚举code:DataType */
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
    /** 节点路径 */
    nodePath?: string;
    /** 参数代码 */
    paramCode?: string;
    /** 参数名称 */
    paramName?: string;
    /** 参数类型，对应枚举code:ParamType */
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
  };

  type ServiceParamTreeDto = {
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
  };

  type ServiceParamTreeResDto = {
    /** 全局常量：符合组件规则的占位符 */
    constantCompPlaceholder?: string;
    /** 全局常量 */
    constantList?: ServiceParamResDto[];
    /** in-body：符合组件规则的占位符 */
    inBodyCompPlaceholder?: string;
    /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
    inBodyFormat?: string;
    /** 对应参数类型中的in-body */
    inBodyList?: ServiceParamResDto[];
    /** in-header：符合组件规则的占位符 */
    inHeaderCompPlaceholder?: string;
    /** 对应参数类型中的in-header */
    inHeaderList?: ServiceParamResDto[];
    /** in-path：符合组件规则的占位符 */
    inPathCompPlaceholder?: string;
    /** 对应参数类型中的in-path */
    inPathList?: ServiceParamResDto[];
    /** my-body：符合组件规则的占位符 */
    myBodyCompPlaceholder?: string;
    /** 对应参数类型中的my-body */
    myBodyList?: ServiceParamResDto[];
    /** my-header：符合组件规则的占位符 */
    myHeaderCompPlaceholder?: string;
    /** 对应参数类型中的my-header */
    myHeaderList?: ServiceParamResDto[];
    /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** 对应参数类型中的out-body */
    outBodyList?: ServiceParamResDto[];
    /** 对应参数类型中的out-header */
    outHeaderList?: ServiceParamResDto[];
  };

  type ServiceParamUpdateDto = {
    /** 数据长度 */
    dataLength?: string;
    /** 数据类型，对应枚举code:DataType，(节点传object) */
    dataType: string;
    /** 默认值 */
    defaultVal?: string;
    /** id */
    id: number;
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
    paramName: string;
    /** 参数类型，对应枚举code:ParamType */
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
  };

  type ServiceSubscribeSearchCriteria = {
    /** 服务名称或服务code（模糊查询） */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type ServiceTestParamDto = {
    /** 参数代码 */
    code?: string;
    /** 参数值 */
    value?: Record<string, any>;
  };

  type ServiceTestReqDto = {
    /** 请求方应用主键id */
    consumerId: number;
    /** post请求json字符串 */
    data?: string;
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: ServiceTestParamDto[];
    /** url路径中的参数 */
    pathParams?: ServiceTestParamDto[];
    /** 服务id */
    serviceId: number;
  };

  type ServiceTestResDto = {
    /** 执行结果 */
    exeBody?: string;
    /** 日志链路id */
    logTraceId?: string;
    /** 响应码 */
    resultCode?: number;
    /** 请求耗时 */
    totalTimeMillis?: number;
  };

  type ServiceTopologyMapResDto = {
    /** 系统列表 */
    appList?: LuYouTuPuXiTongMoKuai[];
    /** 同步方式 */
    callMode?: string;
    /** 服务代码 */
    code?: string;
    /** 服务列表 */
    endpointList?: ServiceTopologyMapServiceResDto[];
    /** 主键id */
    id?: number;
    /** 服务名称 */
    name?: string;
    /** (服务模式)开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
    openProtocol?: string;
    /** 服务状态：1=待设计，2=待配置，3=待发布，4=已发布 */
    status?: number;
    /** 服务地址 */
    urlPath?: string;
    /** 版本号，由主版本号与次版本号拼接而成，英文句号分隔 */
    version?: string;
  };

  type ServiceTopologyMapServiceResDto = {
    /** 服务名称 */
    appName?: string;
    /** 服务代码 */
    code?: string;
    /** 服务id */
    endpointId?: number;
    /** 服务名称 */
    endpointName?: string;
    /** 是否为返回方：false-否，true-是 */
    isReturn?: boolean;
    /** 是否启用：0-停用，1-启用 */
    status?: number;
    /** 终端类型，取值：rest-post、rest-get、ws（webservice）、sql、sp（存储过程） */
    type?: string;
  };

  type ShengChengLingPaiTokenShuChuDto = {
    /** 令牌(token) */
    token?: string;
  };

  type ShengChengLingPaiTokenShuRuDto = {
    /** 应用AppId，即应用系统的代码 */
    appId?: string;
    /** 令牌的有效天数，最少1天，最大3天 */
    days?: number;
    /** 密钥 */
    secret?: string;
    /** 密钥的加密算法，如果为空，则说明secret是明文。如果为“RSA”，请说明secret是使用rsa算法加密的，加密模式：ECB/PKCS1Padding，加密公钥为：MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+jSigHK++SmbhxxcEb27lAi1HlSA7WsSB56cf9ObsBBKvThxx57RGQ+XMdzORYOx5HdjeL/tdw3sj6nKXE4SEsF0FX4kYqjaMHaDPg0xjer/4NcJDIub5BovipXsddTUQqpru9p8ivbbYMKcMFv+e3aGK92UWVjVubripzkOD/QIDAQAB */
    secretType?: string;
  };

  type ShengChengQianMingSignatureShuChuDto = {
    /** 签名(signature) */
    signature?: string;
  };

  type ShengChengQianMingSignatureShuRuDto = {
    /** 应用AppId，即应用系统的代码 */
    appId?: string;
    /** 密钥 */
    secret?: string;
    /** 密钥的加密算法，如果为空，则说明secret是明文。如果为“RSA”，请说明secret是使用rsa算法加密的，加密模式：ECB/PKCS1Padding，加密公钥为：MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+jSigHK++SmbhxxcEb27lAi1HlSA7WsSB56cf9ObsBBKvThxx57RGQ+XMdzORYOx5HdjeL/tdw3sj6nKXE4SEsF0FX4kYqjaMHaDPg0xjer/4NcJDIub5BovipXsddTUQqpru9p8ivbbYMKcMFv+e3aGK92UWVjVubripzkOD/QIDAQAB */
    secretType?: string;
    /** 服务代码 */
    serviceCode?: string;
    /** 时间戳，示例：1635400110869 */
    timestamp?: string;
    /** 服务版本号，仅用于v1版本，v2不需要 */
    version?: string;
  };

  type ShuJuTongBuDeZiYuanDto = {
    /** 主键id */
    id?: number;
    /** 备注 */
    memo?: string;
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
  };

  type ShuJuYuanChaXunTiaoJian = {
    /** 输入条件(数据源名称、服务器ip 或 数据库名称) */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type ShuJuZiYuanLieBiaoFanHuiDuiXiang = {
    /** 上传时间 */
    ctime?: string;
    /** 资源格式：xml、json、wsdl、text、html、hl7、dll、class、jar、ssl-certificate */
    fileFormat?: string;
    /** 资源格式名称 */
    fileFormatName?: string;
    /** 文件内容大小 */
    fileSize?: string;
    /** 主键id */
    id?: number;
    /** 资源名称 */
    name?: string;
  };

  type ShuXingCanShuLei = {
    /** 子级参数 */
    children?: ShuXingCanShuLei[];
    /** 参数代码 */
    code?: string;
    /** 数据长度 */
    dataLen?: number;
    /** 数据精度，主要用于decimal等数据类型 */
    dataPrecision?: number;
    /** 数据类型 */
    dataType?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 字典代码，关联：base_dict.code */
    dictCode?: string;
    /** 值是否可编辑：0-否，1-是 */
    editable?: number;
    /** 示例值 */
    example?: string;
    /** 数据格式，例如定义日期时间类型的格式 */
    format?: string;
    /** 值是否为数组：0-否，1-是 */
    isArray?: number;
    /** 是否是属性（仅XML）：0-否，1-是 */
    isAttr?: number;
    /** 是否必填：0-否，1-是 */
    isRequired?: number;
    /** 说明信息 */
    memo?: string;
    /** 参数名称 */
    name?: string;
    /** 正则表达式 */
    regex?: string;
    /** 排序号 */
    sortNo?: number;
    /** 取值路径 */
    valuePath?: string;
    /** 值来源类别 */
    valueSourceType?: string;
  };

  type SingleSqlDataDto = {
    /** 调用系统id */
    consumerId?: number;
    /** 返回结果数 */
    resultNum?: number;
    /** 服务id */
    serviceId?: number;
    /** sql */
    sql?: string;
  };

  type SingleSqlSeleteDataDto = {
    /** 数据 */
    data?: MapStringObject[];
    /** 字段 */
    titles?: Record<string, any>;
  };

  type SmCommonPreProcessorBiaoDePoDuiXiang = {
    /** 代码 */
    code?: string;
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
  };

  type SmCommonResultProcessorBiaoDePoDuiXiang = {
    /** 代码 */
    code?: string;
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
  };

  type SmFlowControlResDto = {
    /** 调用方 */
    consumerName?: string;
    /** 主键id */
    id?: number;
    /** 请求量 */
    reqNum?: number;
    /** 服务编码 */
    serviceCode?: string;
    /** 服务名称 */
    serviceName?: string;
    /** 时间单位 */
    timeUnit?: string;
    /** 服务版本 */
    version?: string;
  };

  type SmFlowControlSaveDto = {
    /** 请求方id */
    consumerId?: number;
    /** 主键id */
    id?: number;
    /** 请求量 */
    reqNum?: number;
    /** 服务ID */
    serviceId?: number;
    /** 时间单位 */
    timeUnit?: string;
  };

  type SmFlowSearchCriteria = {
    /** 服务名称或编码 */
    condition?: string;
    /** 调用方ID */
    consumerId?: number;
    /** 页码 */
    current?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type SmServiceInfoBiaoDePoDuiXiang = {
    /** 是否可删除：0-否，1-是，对于一些系统固化的api，禁止在前端删除 */
    canDelete?: number;
    /** 是否可编辑：0-否，1-是，对于一些系统固化的api，禁止在前端修改 */
    canEdit?: number;
    /** 所属分组ID，关联：sm_category.id */
    categoryId?: number;
    /** 服务代码 */
    code?: string;
    /** 创建人-用户姓名 */
    createRealname?: string;
    /** 创建人-用户账号 */
    createUsername?: string;
    ctime?: string;
    cuid?: number;
    /** 主键id */
    id?: number;
    /** 入参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
    inBodyFormat?: string;
    /** 是否是模板 0-否  1-是 */
    isTemplate?: number;
    /** 日志级别：all-全链路，entry-入口日志（记录入出参消息，不记录中间步骤日志），entryNoParam-入口日志（不记录入出参消息，不记录中间步骤日志，便于监控统计服务调用耗时与次数等），none-不记录日志 */
    logLevel?: string;
    /** 主版本号，暂定规则：从1开始，用户根据情况，界面上可手工加一 */
    majorVersion?: number;
    memo?: string;
    /** 次版本号，每次修改时都要加一，生成规则：从1开始，自增数字(从1开始) */
    minorVersion?: number;
    /** 维护人-用户姓名 */
    modifyRealname?: string;
    /** 维护人-用户账号 */
    modifyUsername?: string;
    mtime?: string;
    muid?: number;
    /** 服务名称 */
    name?: string;
    /** 通信模式，取值：sync - 同步，async - 异步 */
    openMode?: string;
    /** (服务模式)开放的通信协议，取值：ws（即“Webservice”，默认）、rest-post、rest-get */
    openProtocol?: string;
    /** (服务类型)操作类型：add-新增类服务，update-修改类服务，delete-删除类服务，query-查询类服务 */
    optType?: string;
    /** 出参消息体格式，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** 源系统id（用于标记资源是由哪个系统注册的） */
    resourceAppId?: number;
    /** 资源类别id */
    resourceCategoryId?: string;
    /** 资源代码（服务代码生成规则：资源代码与资源版本号拼接，中间用“-”分隔） */
    resourceCode?: string;
    /** 源系统中的资源主键id */
    resourceKeyId?: number;
    /** 资源匹配规则，取值：byCodeVersion-按资源代码和版本号，byCode - 按资源代码 */
    resourceMatchRule?: string;
    /** 资源名称 */
    resourceName?: string;
    /** 资源版本号 */
    resourceVersion?: string;
    /** 路由执行模式，取值：parallel - 并行（默认，同时调用所有路由），serial - 串行（按顺序依次调用，一个执行完成后，才会调用下一个） */
    routeExecMode?: string;
    /** 路由的条件关系，取值：broadcast - 广播（默认，满足条件的路由都会执行），single - 单路（只会执行满足条件的第一个路由） */
    routeRelation?: string;
    /** 服务场景，取值来自枚举类：com.clinbrain.esb.common.core.po.sys.SysWorkerNodePo.NodeTypeEnum，取值：dataEngine - 数据开放，serviceEngine - 服务共享，busEngine - 业务集成，jobEngine - 任务调度，etlEngine - 数据同步(ETL) */
    scene?: string;
    /** (标准分类)服务模式，取值：hosp - 院标，hl7v2-行标，hlht - 国标(互联互通)，diy-定制(自定义) */
    serviceMode?: string;
    /** 服务模式名称 */
    serviceModeName?: string;
    sortNo?: number;
    /** 服务状态：1=待设计，2=待配置，3=待发布，4=已发布服务定义步骤点击「保存」退出，此服务为「待设计」状态参数设计步骤点击「保存」退出，此服务为「待配置提供方」状态服务配置步骤点击「保存」退出，此服务为「待发布」状态脚本校验步骤点击「完成」退出，此服务为「待发布」状态 */
    status?: number;
    /** 模板名称 */
    templateName?: string;
    /** 对外开放的url路径，全局唯一 */
    urlPath?: string;
    /** 版本号，由主版本号与次版本号拼接而成，英文句号分隔 */
    version?: string;
    /** 引擎分组id，如果有值，则在服务发布时，不可改变引擎分组，关联：sys_worker_group.id */
    workerGroupId?: number;
  };

  type SpParamDto = {
    /** 参数代码 */
    code?: string;
    /** 对应数据库中的数据类型 */
    dataTypeDb?: string;
    /** 参数方向，枚举code：Direct，in-输入，out-输出，inout-输入输出，outcursor - 输出(游标) */
    direct?: string;
    /** 请求体格式 */
    format?: string;
    /** 参数名称 */
    name?: string;
    /** 取值路径 */
    valuePath?: string;
    /** 值来源类别，对应枚举code:ValueSourceType */
    valueSourceType?: string;
  };

  type SqlConfigureDto = {
    /** 业务id */
    bizId?: number;
    /** 业务名称 */
    bizName?: string;
    /** 业务数据库名 */
    bizdbName?: string;
    /** cda数据库名 */
    cdrdbName?: string;
    /** 调用方id */
    consumerId?: number;
    /** 调用方名称 */
    consumerName?: string;
    /** id */
    id?: string;
    /** 服务代码 */
    serviceCode?: string;
    /** 类型 */
    type?: string;
  };

  type sqlInfoUsingGETParams = {
    /** endpointId */
    endpointId: number;
    /** serviceId */
    serviceId: number;
    /** type */
    type: string;
  };

  type SqlJiaoBenCanShu = {
    /** 参数代码 */
    code?: string;
    /** 数据长度 */
    dataLen?: number;
    /** 数据精度，主要用于decimal等数据类型 */
    dataPrecision?: number;
    /** 数据类型 */
    dataType?: string;
    /** 对应数据库中的数据类型 */
    dataTypeDb?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 字典代码，关联：base_dict.code */
    dictCode?: string;
    /** 参数方向：in-输入，out-输出，inout-输入输出，outcursor - 输出(游标)，对于普通sql，参数方向都是“输入”，此属性可以不存在；对于存储过程，参数方向必填 */
    direct?: string;
    /** 值是否可编辑：0-否，1-是 */
    editable?: number;
    /** 示例值 */
    example?: string;
    /** 数据格式，例如定义日期时间类型的格式 */
    format?: string;
    /** 参数的内部结构定义 */
    innerParams?: ShuXingCanShuLei[];
    /** 值是否为数组：0-否，1-是 */
    isArray?: number;
    /** 是否是属性（仅XML）：0-否，1-是 */
    isAttr?: number;
    /** 是否为表的索引字段：0-否（默认），1-是 */
    isIndex?: number;
    /** 是否为表的主键：0-否（默认），1-是 */
    isKey?: number;
    /** 是否必填：0-否，1-是 */
    isRequired?: number;
    /** 说明信息 */
    memo?: string;
    /** 参数名称 */
    name?: string;
    /** 正则表达式 */
    regex?: string;
    /** 排序号 */
    sortNo?: number;
    /** 对应“java.sql.Types”中的类型索引 */
    sqlTypeIndex?: number;
    /** 取值路径 */
    valuePath?: string;
    /** 值来源类别 */
    valueSourceType?: string;
  };

  type SqlScriptChildrenDto = {
    /** 说明 */
    memo?: string;
    /** 0-结果名不能编辑，1-结果名可编辑 */
    resultFix?: string;
    /** 结果名（一般不能改，内置） */
    resultName?: string;
    /** 主sql */
    sql?: string;
    /** 标题 */
    title?: string;
  };

  type SqlScriptDto = {
    /** 子表sql */
    children?: SqlScriptChildrenDto[];
    /** 说明 */
    memo?: string;
    /** 主表结果名（一般不能改，内置）不启用 */
    resultName?: string;
    /** 主sql */
    sql?: string;
    /** 主表标题 */
    title?: string;
  };

  type SqlTreeDto = {
    /** 子级sql对象 */
    children?: SqlTreeDto[];
    /** 数据源id */
    dsId?: number;
    /** 入参配置 */
    params?: SqlJiaoBenCanShu[];
    /** SQL脚本内容 */
    scriptContent?: string;
    /** SQL脚本名称 */
    scriptName?: string;
  };

  type startUsingPOSTParams = {
    /** id */
    id: number;
  };

  type stopUsingPOSTParams = {
    /** id */
    id: number;
  };

  type SubscriptionAppCreateDto = {
    /** 应用系统id */
    appIds?: number[];
    /** 服务id */
    serviceId?: number;
  };

  type SubscriptionCreateDto = {
    /** 应用系统id */
    appId: number;
    /** 是否管理员操作，0：否，1：是(不需要审核) */
    isAdminOperation: boolean;
    /** 服务id集合 */
    serviceIdList: number[];
  };

  type SubscriptionListApplyResDto = {
    /** 应用名称 */
    appName?: string;
    /** 申请时间 */
    applyTime?: string;
    /** 申请人用户名 */
    applyUsername?: string;
    /** 审核时间 */
    auditTime?: string;
    /** 审核者用户名 */
    auditUsername?: string;
    /** 主键id */
    id?: number;
    /** 在线状态 */
    onlineStatus?: string;
    /** 服务编码 */
    serviceCode?: string;
    /** 服务描述 */
    serviceMemo?: string;
    /** 服务名称 */
    serviceName?: string;
    /** 服务版本 */
    serviceVersion?: string;
    /** 审核状态：0=待审核，1=已通过，2=未通过，3=直接分配（管理员直接分配） */
    status?: number;
  };

  type SubscriptionListApplySearchCriteria = {
    /** 应用id */
    appId?: number;
    /** 页码 */
    current?: number;
    /** 结束日期 */
    endTime?: string;
    /** 服务名称, 支持模糊查询 */
    serviceName?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
    /** 开始日期 */
    startTime?: string;
    /** 状态：0=待审核，1=已通过，2=未通过 */
    status?: number;
  };

  type swUsingPOST1Params = {
    /** id */
    id: number;
    /** status */
    status: number;
  };

  type swUsingPOST2Params = {
    /** 主键 */
    id: string;
    /** 状态：0-停用，1-启用 */
    status: string;
  };

  type swUsingPOST3Params = {
    /** id */
    id: number;
    /** status */
    status: number;
  };

  type swUsingPOSTParams = {
    /** id */
    id: number;
    /** status */
    status: number;
  };

  type SysAppSearchCriteria = {
    /** 应用名称/CODE, 支持模糊查询 */
    condition?: string;
    /** 页码 */
    current?: number;
    /** (标准分类)服务模式，取值：hosp - 院标，hl7v2-行标，hlht - 国标(互联互通)，diy-定制(自定义) */
    serviceMode?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type SysConstantBiaoDePoDuiXiang = {
    /** 常量编码 */
    code?: string;
    ctime?: string;
    cuid?: number;
    /** 主键id */
    id?: number;
    memo?: string;
    mtime?: string;
    muid?: number;
    name?: string;
    /** 排序号 */
    sortNo?: number;
    /** 常量值 */
    value?: string;
  };

  type SysConstantCreateDto = {
    /** 常量编码 */
    code: string;
    /** 备注 */
    memo?: string;
    /** 常量名称 */
    name: string;
    /** 常量值 */
    value: string;
  };

  type SysConstantResDto = {
    /** 常量编码 */
    code?: string;
    /** 主键id */
    id?: number;
    /** 备注 */
    memo?: string;
    name?: string;
    /** 常量值 */
    value?: string;
  };

  type SysConstantUpdateDto = {
    /** 常量编码 */
    code: string;
    /** 主键id */
    id: number;
    memo?: string;
    /** 常量名称 */
    name: string;
    /** 常量值 */
    value: string;
  };

  type SysDataResourceInfoResDto = {
    /** 上传时间 */
    ctime?: string;
    /** 数据库驱动名称 */
    dbDriverName?: string;
    /** 数据库类型 */
    dbType?: string;
    /** 文件后缀名 */
    extName?: string;
    /** 文本内容 */
    fileContent?: string;
    /** 文件类型：xml、json、wsdl、text、html、hl7、dll、class、jar、ssl-certificate */
    fileFormat?: string;
    /** 文件内容大小 */
    fileSize?: string;
    /** 主键id */
    id?: number;
    /** 资源名称 */
    name?: string;
  };

  type SysDataSourceBiz = {
    baseMapper?: SysDataSourceDao;
  };

  type SysDataSourceCreateDto = {
    /** 应用id */
    appId?: number;
    /** 程序向连接池中请求连接时，单位：秒。默认：30 */
    connectionTimeout?: number;
    /** 数据库名称 */
    dbName?: string;
    /** 驱动包文件id */
    driverJarId: number;
    /** 连接池其他参数 */
    extPoolParams?: SysWorkerNodeBiaoDeKuoZhanZiDuanExtPoolParamsJieGou[];
    /** 空闲时间，单位：秒。默认:600 */
    idleTimeout?: number;
    /** 数据源地址IP */
    ip?: string;
    /** jdbc连接串 */
    jdbcConnection?: string;
    /** 该属性用于控制连接在池中的最大生存时间，超过该时间强制逐出，连接池向数据申请新的连接进行补充，单位：秒。默认:1800 */
    maxLifetime?: number;
    /** 连接池中最多支持多少个活动连接，默认：CPU核心数的两倍 */
    maxPoolSize?: number;
    /** 回收空闲连接时，将保证最少连接数，默认：CPU核心数的两倍 */
    minIdle?: number;
    /** 连接名 */
    name: string;
    /** 数据库密码，前端是通过rsa加密后传给后端的，密文存库 */
    password: string;
    /** 数据库端口 */
    port?: number;
    /** 测试的sql查询脚本 */
    testQuerySql?: string;
    /** 数据库类型，对应枚举code:DbType，：SQLServer，Oracle，MySQL，PgSQL等 */
    type: string;
    /** 数据库用户名，前端是通过rsa加密后传给后端的，密文存库 */
    username: string;
  };

  type SysDataSourceDao = {};

  type SysDataSourcePo = {
    /** 应用id */
    appId?: number;
    /** 是否自动提交池中返回的连接，取值：0-否，1-是（默认） */
    autoCommit?: number;
    /** 内码，不对外开放，便于内置一些数据源，其他地方可以引用此内码 */
    code?: string;
    /** 程序向连接池中请求连接时，单位：秒。默认：30 */
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
    /** 连接池其他参数，格式：[{"code":"参数名","value":"参数值"}] */
    extPoolParams?: string;
    /** 主键id */
    id?: number;
    /** 空闲时间，单位：秒。默认:600 */
    idleTimeout?: number;
    /** 数据源ip地址 */
    ip?: string;
    /** jdbc连接串，前端通过aes加密传到后端，后端解密后明文存库 */
    jdbcConnection?: string;
    /** 跟数据库保持心跳连接的间隔，单位：秒。默认：30 */
    keepaliveTime?: number;
    /** 该属性用于控制连接在池中的最大生存时间，超过该时间强制逐出，连接池向数据申请新的连接进行补充，单位：秒。默认:1800 */
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
    /** 数据库类型：oracle、mysql、sqlserver等 */
    type?: string;
    /** 数据库用户名，前端通过aes加密传到后端，后端解密后明文存库 */
    username?: string;
  };

  type SysDataSourceUpdateDto = {
    /** 应用id */
    appId?: number;
    /** 程序向连接池中请求连接时，单位：毫秒。默认：30000 */
    connectionTimeout?: number;
    /** 数据库名称 */
    dbName?: string;
    /** 驱动包文件id */
    driverJarId: number;
    /** 连接池其他参数 */
    extPoolParams?: SysWorkerNodeBiaoDeKuoZhanZiDuanExtPoolParamsJieGou[];
    /** id */
    id: number;
    /** 空闲时间，单位：毫秒。默认:600000 */
    idleTimeout?: number;
    /** 数据源地址IP */
    ip?: string;
    /** jdbc连接串 */
    jdbcConnection?: string;
    /** 该属性用于控制连接在池中的最大生存时间，超过该时间强制逐出，连接池向数据申请新的连接进行补充，单位：毫秒。默认:1800000 */
    maxLifetime?: number;
    /** 连接池中最多支持多少个活动连接，默认：CPU核心数的两倍 */
    maxPoolSize?: number;
    /** 回收空闲连接时，将保证最少连接数，默认：CPU核心数的两倍 */
    minIdle?: number;
    /** 连接名 */
    name: string;
    /** 数据库密码，前端是通过rsa加密后传给后端的，密文存库 */
    password: string;
    /** 数据库端口 */
    port?: number;
    /** 测试的sql查询脚本 */
    testQuerySql?: string;
    /** 数据库类型，对应枚举code:DbType，：SQLServer，Oracle，MySQL，PgSQL等 */
    type: string;
    /** 数据库用户名，前端是通过rsa加密后传给后端的，密文存库 */
    username: string;
  };

  type SysDeptDuiXiang = {
    /** 祖级列表 */
    ancestors?: string;
    /** 区域编码 */
    areaCode?: string;
    /** 区域名称 */
    areaName?: string;
    /** 子部门 */
    children?: SysDeptDuiXiang[];
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
  };

  type SysLogoDuiXiang = {
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
    /** 系统名称 */
    sysName?: string;
    /** 更新时间 */
    updatedTime?: string;
    /** 版本号,可用于乐观锁 */
    version?: number;
  };

  type SysOrganizationBiaoDePoDuiXiang = {
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
  };

  type SysRangeDictPoDuiXiang = {
    createtime?: string;
    dataelementid?: string;
    id?: string;
    /** 服务代码 */
    isdeleted?: boolean;
    /** 节点id 必填 */
    nodeconfigid?: string;
    /** 值域编码  必填 */
    rangecode?: string;
    /** 值域描述  必填 */
    rangename?: string;
    /** 业务系统编码  必填 */
    syscode?: string;
    updatetime?: string;
  };

  type SysRoleDuiXiang = {
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
  };

  type SysTempNodesConfigByIdUsingGETParams = {
    /** id */
    id?: string;
  };

  type SysTempNodesConfigDuiXiang = {
    /** 元数据标识 */
    dataelementid?: string;
    /** 数据长度 */
    datalength?: string;
    /** 数据类型 */
    datatype?: string;
    /** 描述 */
    description?: string;
    /** 字段名 */
    fieldname?: string;
    id?: string;
    /** 固定值 */
    isfixed?: boolean;
    /** 映射 */
    isneedmapping?: boolean;
    /** 主键 */
    isprimarykey?: boolean;
    /** 必填 */
    isrequired?: boolean;
    /** 最大出现次数 */
    maxoccurs?: number;
    /** 最小出现次数 */
    minoccurs?: number;
    /** 路径 */
    nodepath?: string;
    /** 父表名 */
    parenttablename?: string;
    /** RangeCode */
    rangcode?: string;
    /** 服务代码 */
    servicecode?: string;
    /** 服务名称 */
    servicename?: string;
    /** 表名 */
    tablename?: string;
    /** 类型 1入参 2出参成功 3出参失败 */
    type?: number;
    /** 唯一路径 */
    uniquenodepath?: string;
    /** 验证描述 */
    validdescription?: string;
    /** 验证模式 */
    validpattern?: string;
  };

  type SysThirdServiceBiaoDePoDuiXiang = {
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
    /** 结果名 */
    resultCode?: string;
    /** 重试间隔，单位：秒 */
    retryInterval?: number;
    /** 最大重试次数，如果为-1，则表示一直重试 */
    retryMax?: number;
    /** 排序号，默认999999 */
    sortNo?: number;
    /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
    type?: string;
  };

  type SysThirdServiceCreateHttpGetDto = {
    /** 系统提供方id */
    appId: number;
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** 模板id，新增不传，更新传 */
    id?: number;
    /** 入参消息体格式，对应枚举code:DataFormat */
    inBodyFormat?: string;
    /** 模板名称 */
    name: string;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** url路径中的参数 */
    pathParams?: EndpointParameterDtoString[];
    /** url中的query参数 */
    queryParams?: EndpointParameterDtoString[];
    /** 消息头key */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 提供方服务模式，对应枚举code:ServiceType */
    type: string;
    /** 提供方地址 */
    url: string;
  };

  type SysThirdServiceCreateHttpPostDto = {
    /** 系统提供方id */
    appId: number;
    bodyOneParam?: HttpPostParamDto;
    /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
    bodyTableParams?: EndpointParameterDtoString[];
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** 模板id，新增不传，更新传 */
    id?: number;
    /** 入参消息体格式，对应枚举code:DataFormat */
    inBodyFormat?: string;
    /** 模板名称 */
    name: string;
    /** 出参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式 */
    outBodyFormat?: string;
    /** url路径中的参数 */
    pathParams?: EndpointParameterDtoString[];
    /** url中的query参数 */
    queryParams?: EndpointParameterDtoString[];
    /** 消息头key */
    resultAttr?: string;
    /** 结果名 */
    resultCode?: string;
    /** 匹配方式：对应枚举code：MatchType */
    resultMatchType?: string;
    /** 结果来源：对应枚举code:ResultSource */
    resultSource?: string;
    /** 成功值 */
    resultSuccessValue?: string;
    /** 提供方服务模式，对应枚举code:ServiceType */
    type: string;
    /** 提供方地址 */
    url: string;
  };

  type SysThirdServiceCreateWebserviceDto = {
    /** 系统提供方id */
    appId: number;
    /** 方法名 */
    func: string;
    /** 模板id，新增不传，更新传 */
    id?: number;
    /** 入参消息体格式，对应枚举code:DataFormat */
    inBodyFormat?: string;
    /** 模板名称 */
    name: string;
    /** 命名空间 */
    ns: string;
    /** 提供方服务模式，对应枚举code:ServiceType */
    type: string;
    /** 提供方地址 */
    url: string;
  };

  type SysThirdServiceListResDto = {
    /** 归属应用 */
    appName?: string;
    /** 主键id */
    id?: number;
    /** 服务名称 */
    name?: string;
    /** 服务类型，取值：rest-post、rest-get、ws（webservice） */
    type?: string;
    /** 服务地址 */
    url?: string;
  };

  type SysThirdServiceResHttpDto = {
    /** 系统提供方id */
    appId: number;
    bodyOneParam?: HttpPostParamDto;
    /** 请求消息，适用于“contentType”属性为form-data、x-www-form-urlencoded等情况 */
    bodyTableParams?: EndpointParameterDtoString[];
    /** 请求消息头参数，只包含用户自定义的header参数，不包括REST默认的参数(如content-type等) */
    headerParams?: EndpointParameterDtoString[];
    /** 模板id，新增不传，更新传 */
    id?: number;
    /** 入参消息体格式，对应枚举code:DataFormat，取值：空，json - json格式，xml - xml格式，hl7v2 - HL7v2格式，formData - “form-data”格式 */
    inBodyFormat?: string;
    /** 模板名称 */
    name: string;
    /** url路径中的参数 */
    pathParams?: EndpointParameterDtoString[];
    /** url中的query参数 */
    queryParams?: EndpointParameterDtoString[];
    /** 提供方服务模式，对应枚举code:ServiceType */
    type: string;
    /** 提供方地址 */
    url: string;
  };

  type SysThirdServiceResWebserviceDto = {
    /** 系统提供方id */
    appId: number;
    /** 方法名 */
    func: string;
    /** 模板id，新增不传，更新传 */
    id?: number;
    /** 入参消息体格式，对应枚举code:DataFormat */
    inBodyFormat?: string;
    /** 模板名称 */
    name: string;
    /** 命名空间 */
    ns: string;
    /** 提供方服务模式，对应枚举code:ServiceType */
    type: string;
    /** 提供方地址 */
    url: string;
  };

  type SysUserDuiXiang = {
    /** 头像地址 */
    avatar?: string;
    /** 创建人id */
    createdById?: number;
    /** 创建人名称 */
    createdByName?: string;
    /** 创建时间 */
    createdTime?: string;
    curDept?: SysDeptDuiXiang;
    curOrgan?: SysDeptDuiXiang;
    /** 删除标记 */
    deleted?: number;
    dept?: SysDeptDuiXiang;
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
    roles?: SysRoleDuiXiang[];
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
  };

  type SysWorkerGroupBiaoDePoDuiXiang = {
    /** 引擎分组代码 */
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
    /** 引擎分组名 */
    name?: string;
    /** 节点类型，同sys_worker_node.node_type，取值来自枚举类：SysWorkerNodePo.NodeTypeEnum */
    nodeType?: string;
    /** 开放地址(json)，如果为空，则用程序默认的地址，由开放协议和标准分组组成，对应唯一的开放地址 */
    openUrlPath?: string;
    /** 排序号，默认999999 */
    sortNo?: number;
    /** 状态：0-停用，1-启用 */
    status?: number;
  };

  type SysWorkerGroupCreateDto = {
    /** 引擎分组代码 */
    code?: string;
    /** 备注 */
    memo?: string;
    /** 分组名 */
    name: string;
    /** 节点类型，同sys_worker_node.node_type，取值来自枚举类：SysWorkerNodePo.NodeTypeEnum */
    nodeType?: string;
    /** 排序号，默认999999 */
    sortNo?: number;
  };

  type SysWorkerGroupUpdateDto = {
    /** 引擎分组代码 */
    code?: string;
    /** id */
    id: number;
    /** 备注 */
    memo?: string;
    /** 分组名 */
    name: string;
    /** 节点类型，同sys_worker_node.node_type，取值来自枚举类：SysWorkerNodePo.NodeTypeEnum */
    nodeType?: string;
    /** 排序号，默认999999 */
    sortNo?: number;
  };

  type SysWorkerNodeBiaoDeKuoZhanZiDuanExtPoolParamsJieGou = {
    /** 参数名 */
    code?: string;
    /** 参数值 */
    value?: string;
  };

  type SysWorkerNodeBiaoDePoDuiXiang = {
    /** 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量 */
    apiMaxNo?: number;
    /** 工作节点代码 */
    code?: string;
    /** 创建时间 */
    ctime?: string;
    /** 创建人 */
    cuid?: number;
    /** 扩展信息(json) */
    extInfo?: string;
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
    /** 节点类型：admin-管理中心，serviceEngine-服务引擎，busEngine-集成引擎，taskEngine-任务引擎，dataEngine-数据引擎(ETL)，gateway-网关节点，monitor-监控中心(日志) */
    nodeType?: string;
    /** 用于服务引擎，此字段存放的是对外开放的http协议端口号 */
    portApi?: number;
    /** 用于存放Springboot的web容器端口 */
    portBoot?: number;
    /** 最近心跳失败的次数，从最近一次心跳正常之后开始计数 */
    recentHeartbeatFailCount?: number;
    /** 排序号，默认999999 */
    sortNo?: number;
    /** 上线时间，结合当前时间可以计算运行时长 */
    startTime?: string;
    /** 状态：0-停用(离线)，1-启用(默认，在线)，9-强制停用（必须手工上线，否则不心跳也不上线） */
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
  };

  type SysWorkerNodeCreateDto = {
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
  };

  type SysWorkerNodeDetailResDto = {
    /** 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量 */
    apiMaxNo?: number;
    /** 创建时间 */
    ctime?: string;
    /** 创建人 */
    cuid?: number;
    /** 主键 */
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
  };

  type SysWorkerNodeResDto = {
    /** 主键id */
    id?: number;
    /** IP地址 */
    ip?: string;
    /** 工作节点名称 */
    name?: string;
    /** 用于存放Springboot的web容器端口 */
    portBoot?: number;
    /** 发布服务的id，可得到发布服务数 */
    serviceIdList?: number[];
    /** 状态：0-停用，1-启用(默认) */
    status?: number;
    /** 引擎分组名称 */
    workerGroupName?: string;
  };

  type SysWorkerNodeUpdateDto = {
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
  };

  type TasksDto = {
    /** 业务名称 */
    bizName?: string;
    /** 服务列表 */
    serviceList?: TaskServicesDto[];
    /** SQL配置表id */
    sqlId?: number;
  };

  type TaskServicesDto = {
    /** 默认数量 */
    count?: number;
    /** 服务id */
    serviceId?: number;
    /** 服务名称 */
    serviceName?: string;
    /** 服务类型 */
    type?: string;
  };

  type test1UsingGET1Params = {
    /** 测试代码 */
    code?: string;
  };

  type test1UsingGET2Params = {
    /** 测试代码 */
    code?: string;
  };

  type test1UsingGETParams = {
    /** 测试代码 */
    code?: string;
  };

  type testDeleteUsingDELETEParams = {
    /** id */
    id?: number;
  };

  type testPutUsingPUTParams = {
    /** msg */
    msg?: string;
  };

  type testReadChildrenUsingGETParams = {
    /** 路径目录 */
    dirPath?: string;
  };

  type testReadFileUsingGETParams = {
    /** 文件内容字符集编码 */
    charset?: string;
    /** 路径目录 */
    dirPath?: string;
    /** 文件名 */
    fileName?: string;
  };

  type testRetryUsingPOSTParams = {
    /** traceIds */
    traceIds: string[];
  };

  type TongBuDaoYinQingDeGongZuoJieDianDto = {
    /** 额定承载的最大api数量，如果为0，表示不能运行api，如果大于0，则是最大承载数量，如果为空，则不限制api数量 */
    apiMaxNo?: number;
    /** 主键id */
    id?: number;
    /** IP地址 */
    ip?: string;
    /** 负载均衡权重，如果为空则不限制，节点类型为工作节点时有效，取值范围：0-100，如果为0，表示不接受请求（例如某些机器专门用于定时任务） */
    loadWeight?: number;
    /** 修改时间 */
    mtime?: string;
    /** 工作节点名称 */
    name?: string;
    /** 节点类型：admin-管理中心，serviceEngine-服务引擎，busEngine-集成引擎，taskEngine-任务引擎，dataEngine-数据引擎(ETL)，gateway-网关节点，monitor-监控中心(日志) */
    nodeType?: string;
    /** 用于存放Springboot的web容器端口 */
    portBoot?: number;
    /** 状态：0-停用(离线)，1-启用(默认，在线) */
    status?: number;
    /** 与管理中心同步模式：pull-主动定时从主节点拉取，push-被动接收管理中心同步的信息 */
    syncMode?: string;
  };

  type TongBuDeChuShiHuaShuJuDeXiangYingDtoDuiXiang = {
    /** 本节点的dataCenterId，用于生成雪花id，由管理中心生成，必须在0-31之间 */
    meSnowFlakeDataCenterId?: number;
    /** 本节点的雪花workerId，用于生成雪花id，由管理中心生成，必须在0-31之间 */
    meSnowFlakeWorkerId?: number;
    /** 同步模式 */
    syncMode?: string;
    /** 管理中心生成的工作节点主键id */
    workerId?: number;
  };

  type TongBuDeChuShiHuaShuJuDtoDuiXiang = {
    /** 工作节点代码 */
    code?: string;
    /** 容器内ip，与外层的“ip”字段不同，外层的ip字段是用于对外开放的，containerIp是容器内的ip地址 */
    containerIp?: string;
    /** 容器内port，与外层的“port”字段不同，外层的port字段是用于对外开放的，containerPort是容器内的port */
    containerPort?: number;
    /** 工作节点ip */
    ip?: string;
    /** 节点类型 */
    nodeType?: string;
    /** 服务引擎对外开放的端口号，仅用于服务引擎 */
    portApi?: number;
    /** 工作节点Springboot的web容器端口号 */
    portBoot?: number;
    /** 需要初始化的数据类别，如果为空，需要全部初始化 */
    sourceTypes?: string[];
    /** 工作节点分组代码，即微服务名称 */
    workerGroupCode?: string;
    /** 工作节点id */
    workerId?: number;
  };

  type TopologyDto = {
    apiCallChainList?: ApiCallChainDto[];
    apiList?: ApiDto[];
    appList?: AppDto[];
  };

  type topologyMapUsingGETParams = {
    /** id */
    id: number;
  };

  type TreeNode = {
    /** 子节点 */
    children?: TreeNode[];
    /** 是否有子节点，true表示有 */
    hasChildren?: boolean;
    /** ID */
    id?: number;
    /** 父级ID */
    parentId?: number;
  };

  type updateLogLevelUsingGETParams = {
    /** ids */
    ids: string[];
    /** logLevel */
    logLevel: string;
  };

  type updateValueUsingPOSTParams = {
    /** 参数代码 */
    code: string;
    /** 参数值 */
    value: string;
  };

  type uploadFileUsingPOSTParams = {
    /** 数据库驱动名称 */
    dbDriverName?: string;
    /** 数据库类型 */
    dbType?: string;
    /** 文件格式，取枚举值的code */
    fileFormat?: string;
    /** id，重新上传时要求传递 */
    id?: string;
    /** 文件名称 */
    name?: string;
  };

  type UserAppDto = {
    /** 用户id */
    userId?: number;
    /** 用户名称 */
    userName?: string;
  };

  type UserInfo = {
    /** 权限码列表 */
    permissions?: string[];
    /** 角色列表 */
    roles?: string[];
    sysUser?: SysUserDuiXiang;
  };

  type ValueNameDto = {
    name?: string;
    value?: string;
  };

  type XinTiaoJieGuoDto = {
    /** 本程序筛选后可用的ip */
    myIp?: number;
    /** 对外开放的ip或域名 */
    openAddress?: number;
    /** 此字段存放的是对外开放的http协议端口号 */
    portApi?: number;
    /** 用于存放Springboot的web容器端口 */
    portBoot?: number;
  };

  type XinTiaoQingQiuDto = {
    /** 服务引擎的调度中心节点id */
    jobEngineCenterNodeId?: number;
    /** 本工作节点id */
    meNodeId?: number;
  };

  type XiTongKongZhiCanShuDeChaXunDuiXiang = {
    /** 参数代码，模糊匹配 */
    code?: string;
    /** 页码 */
    current?: number;
    /** 参数名，模糊匹配 */
    name?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type XiTongPeiZhiCanShuVoDuiXiang = {
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
    dropdownItems?: QianDuanXiaLaLieBiaoXiangString[];
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
  };

  type XiTongRiZhiDeChaXunDuiXiang = {
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
  };

  type XiTongShenJiRiZhiPoDuiXiang = {
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
  };

  type XiTongXiaoXiDeChaXunDuiXiang = {
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
  };

  type XiTongXiaoXiVoDuiXiang = {
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
  };

  type XiTongZiDianMingXiXinXiDeChaXunDuiXiang = {
    /** 页码 */
    current?: number;
    /** 字典主信息代码 */
    dictCode?: string;
    dictCodes?: string[];
    /** 查询关键字，模糊匹配代码和名称 */
    queryWord?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
    /** 状态：0-停用，1-正常 */
    status?: number;
  };

  type XiTongZiDianZhuXinXiDeChaXunDuiXiang = {
    /** 页码 */
    current?: number;
    /** 查询关键字，模糊匹配代码和名称 */
    queryWord?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
    /** 状态：0-停用，1-正常 */
    status?: number;
  };

  type XiuGaiJieDianXinXi = {
    /** 元数据标识 */
    dataelementid?: string;
    /** 数据长度 */
    datalength?: string;
    /** 数据类型 */
    datatype?: string;
    /** 描述 */
    description?: string;
    id?: string;
    /** 固定值 */
    isfixed?: boolean;
    /** 映射 */
    isneedmapping?: boolean;
    /** 主键 */
    isprimarykey?: boolean;
    /** 必填 */
    isrequired?: boolean;
    /** 最大出现次数 */
    maxoccurs?: number;
    /** 最小出现次数 */
    minoccurs?: number;
    /** RangeCode */
    rangcode?: string;
    /** 类型 1入参 2出参成功 3出参失败 */
    type?: number;
    /** 验证描述 */
    validdescription?: string;
    /** 验证模式 */
    validpattern?: string;
  };

  type YeWuSqlPeiZhiJianSuo = {
    /** 业务id */
    bizId?: number;
    /** 页码 */
    current?: number;
    /** 是否配置 0是配置  1没有配置 */
    isConfigure?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
    /** 调用方id */
    sysId?: string;
  };

  type YingYongXiTongFenYeChaXunDuiXiang = {
    /** 应用类别id */
    appCategoryId?: number;
    /** 厂商id */
    appSupplierId?: number;
    /** 输入条件 */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 机构id */
    organizationId?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type YingYongXiTongFenZu = {
    /** 输入框条件（组织名称/类别代码） */
    condition?: string;
    /** 页码 */
    current?: number;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type YongHuDengLuDuiXiang = {
    /** 验证码 */
    code?: string;
    /** 密码 */
    password?: string;
    /** 用户名 */
    username?: string;
    /** 唯一标识 */
    uuid?: string;
  };

  type ZhiYuLieBiao = {
    /** 页码 */
    current?: number;
    /** 必填 */
    id?: string;
    /** 编码/值 */
    key?: string;
    /** 页大小 */
    size?: number;
    startIndex?: number;
  };

  type ZiDianMingXiBiao = {
    /** 字典明细代码 */
    code?: string;
    /** 创建时间 */
    ctime?: string;
    /** 创建者id */
    cuid?: number;
    /** 字典代码 */
    dictCode?: string;
    /** 扩展属性(可以是简单类型、或json结构) */
    extAttrs?: string;
    /** 主键id */
    id?: number;
    /** 是否默认值：0-否，1-是 */
    isDefault?: number;
    /** 备注 */
    memo?: string;
    /** 修改时间 */
    mtime?: string;
    /** 修改者id */
    muid?: number;
    /** 字典明细名称 */
    name?: string;
    /** 排序号 */
    sortNo?: number;
    /** 状态：0-停用，1-启用 */
    status?: number;
  };

  type ZiDianZhuBiao = {
    /** 字典代码 */
    code?: string;
    /** 创建时间 */
    ctime?: string;
    /** 创建者id */
    cuid?: number;
    /** 备注 */
    memo?: string;
    /** 修改时间 */
    mtime?: string;
    /** 修改者id */
    muid?: number;
    /** 字典名称 */
    name?: string;
    /** 排序号 */
    sortNo?: number;
    /** 状态：0-停用，1-启用 */
    status?: number;
    /** 是否可见：0-否，1-是 */
    visible?: number;
  };
}
