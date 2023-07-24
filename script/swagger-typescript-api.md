这是一段命令行工具的使用说明文本，描述了如何使用名为 `swagger-typescript-api` 的工具以及它的各种选项和命令。

该工具主要用于从 Swagger 文档中生成 TypeScript 客户端 API。以下是这段文本的翻译：

使用方法：swagger-typescript-api [选项]

选项：
  -v, --version                 输出当前版本号
  -p, --path <string>           Swagger 文档的路径/URL
  -o, --output <string>         TypeScript API 文件的输出路径（默认为 "./"）
  -n, --name <string>           输出的 TypeScript API 文件的名称（默认为 "Api.ts"）
  -t, --templates <string>      包含模板的文件夹路径
  -d, --default-as-success      将 "default" 响应状态码也作为成功响应处理。
                                有些 Swagger 模式默认将 "default" 响应状态码作为成功响应类型。（默认为 false）
  -r, --responses               生成关于请求响应的附加信息，还会为错误响应添加类型定义。（默认为 false）
  --union-enums                 将所有 "enum" 类型生成为联合类型（T1 | T2 | TN）（默认为 false）
  --add-readonly                生成只读属性（默认为 false）
  --route-types                 为 API 路由生成类型定义（默认为 false）
  --no-client                   不生成 API 类
  --enum-names-as-values        使用 'x-enumNames' 中的值作为枚举值（而不仅仅作为键）（默认为 false）
  --extract-request-params      将请求参数提取到数据合同中（还会将路径参数和查询参数合并为一个对象）（默认为 false）
  --extract-request-body        将请求体类型提取到数据合同中（默认为 false）
  --extract-response-body       将响应体类型提取到数据合同中（默认为 false）
  --extract-response-error      将响应错误类型提取到数据合同中（默认为 false）
  --modular                     为 HttpClient、数据合同和路由生成分离的文件（默认为 false）
  --js                          生成带有声明文件的 JavaScript API 模块（默认为 false）
  --module-name-index <number>  确定用于路由分隔的路径索引（示例：GET:/fruites/getFruit -> 索引:0 -> moduleName -> fruites）（默认为 0）
  --module-name-first-tag       基于第一个标签分割路由（默认为 false）
  --disableStrictSSL            禁用严格的 SSL（默认为 false）
  --disableProxy                禁用代理（默认为 false）
  --axios                       生成 Axios HTTP 客户端（默认为 false）
  --unwrap-response-data        从响应中解包数据项（默认为 false）
  --disable-throw-on-error      当 response.ok 不为 true 时不抛出错误（默认为 false）
  --single-http-client          允许将 HttpClient 实例发送给 Api 构造函数（默认为 false）
  --silent                      仅将错误输出到控制台（默认为 false）
  --default-response <type>     空响应模式的默认类型（默认为 "void"）
  --type-prefix <string>        数据合同名称前缀（默认为空字符串）
  --type-suffix <string>        数据合同名称后缀（默认为空字符串）
  --clean-output                生成 API 之前清理输出文件夹。警告：可能导致数据丢失（默认为 false）
  --api-class-name <string>     API 类的名称（默认为 "Api"）
  --patch                       修复 Swagger 源定义中的小错误（默认为 false）
  --debug                       提供关于工具内部进程的额外信息（默认为 false）
  --another-array-type          将数组类型生成为 Array<Type>（默认为 Type[]）（默认为 false）
  --sort-types                  对字段和类型进行排序（默认为 false）
  --extract-enums               将所有枚举从内联接口/类型内容中提取到 TypeScript 枚举构造中（默认为 false）
  -h, --help                    显示命令的帮助信息

命令：
  generate-templates           生成生成 API 所需的 ".ejs" 模板
    -o, --output <string>      生成模板的输出路径
    -m, --modular              为 HttpClient、数据合同和路由生成分离的文件的模板（默认为 false）
    --http-client <string>     HTTP 客户端类型（可能的值："fetch"、"axios"）（默认为 "fetch"）
    -c, --clean-output         在生成模板之前清理输出文件夹。警告：可能导致数据丢失（默认为 false）
    -r, --rewrite              重写现有模板中的内容（默认为 false）
    --silent                   仅将错误输出到控制台（默认为 false）
    -h, --help                 显示命令的帮助信息

这些选项和命令允许用户根据自己的需求定制生成的 TypeScript 客户端 API。