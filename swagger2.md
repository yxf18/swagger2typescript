Swagger 2.0 是一种用于描述 RESTful API 的规范，它使用 JSON 或 YAML 格式进行定义。下面是 Swagger 2.0 中常用的 JSON 字段说明：

1. `swagger`: 指定采用的 Swagger 版本，对于 Swagger 2.0，该字段的值为 "2.0"。

2. `info`: 包含 API 的元信息，如版本号、标题、描述等。它是一个对象，包含以下字段：
   - `version`: API 的版本号。
   - `title`: API 的标题。
   - `description`: API 的描述。
   - `termsOfService`: API 的服务条款。
   - `contact`: 联系方式，包含 `name`、`url`、`email` 字段。
   - `license`: API 的许可信息，包含 `name`、`url` 字段。

3. `host`: API 的主机名（域名或 IP 地址），包含端口号。

4. `basePath`: API 的基本路径，会添加在 API 的路径前面。

5. `schemes`: API 支持的协议，如 HTTP、HTTPS 等，以数组形式表示。

6. `consumes`: API 接受的请求内容类型（MIME 类型），以数组形式表示。

7. `produces`: API 返回的内容类型（MIME 类型），以数组形式表示。

8. `paths`: 包含 API 路径和操作的定义。它是一个对象，其中的 key 是 API 的路径，value 是该路径下的操作定义。

9. `definitions`: 定义 API 使用的数据模型，以便在路径操作中引用。它是一个对象，包含多个数据模型定义。

10. `parameters`: 定义可重用的参数，在路径操作中引用。它是一个对象，包含多个参数定义。

11. `responses`: 定义可重用的响应，在路径操作中引用。它是一个对象，包含多个响应定义。

12. `securityDefinitions`: 定义 API 的安全要求，例如 API Key、OAuth 等认证方式。

13. `security`: 定义 API 的全局安全要求，应用于所有的路径操作。

这些是 Swagger 2.0 中最常用的 JSON 字段，它们用于描述 API 的元信息、路径操作、数据模型、参数等。通过使用这些字段，可以创建清晰且可交互的 API 文档，并方便客户端开发者理解和使用您的 API。请注意，Swagger 2.0 还有其他一些可选的字段和扩展选项，您可以根据需要参考 Swagger 官方文档来进一步了解。