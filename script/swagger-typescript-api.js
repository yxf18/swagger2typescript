const { generateApi, generateTemplates } = require('swagger-typescript-api');
const path = require('path');
const fs = require('fs');
console.log('[ path.resolve(process.cwd() ]', path.resolve(process.cwd(), './api-templates'));
const PATH_TO_OUTPUT_DIR_TEMPLATES = path.resolve(
  process.cwd(),
  './src/__generated__/api-templates',
);
const PATH_TO_OUTPUT_DIR_API = path.resolve(process.cwd(), './src/__generated__/api');
// const URL = 'http://192.168.0.220:16261/v2/api-docs';
const URL = 'http://127.0.0.1:4523/export/openapi?projectId=3112687&specialPurpose=openapi-generator';
// const INPUT = path.resolve(process.cwd(), './src/swagger2.json');

/* NOTE: all fields are optional expect one of `input`, `url`, `spec` */
generateApi({
  name: 'MySuperbApi.ts',
  // set to `false` to prevent the tool from writing to disk
  output: PATH_TO_OUTPUT_DIR_API,
  // url: 'http://api.com/swagger.json',
  url: URL,
  // input: INPUT,
  // input: path.resolve(process.cwd(), './src/swagger1.json'),
  //   spec: {
  //     swagger: '2.0',
  //     info: {
  //       version: '1.0.0',
  //       title: 'Swagger Petstore',
  //     },
  //     // ...
  //   },
  //   templates: path.resolve(process.cwd(), './api-templates'),
  // templates: path.resolve(process.cwd(), './script/api-templates'),
  httpClientType: 'axios', // or "fetch"
  //   defaultResponseAsSuccess: false,
  //   generateClient: true,
  //   generateRouteTypes: false,
  //   generateResponses: true,
  //   toJS: false,
  //   enumNamesAsValues: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseError: true,
  extractEnums: true,
  modular: true,
  axios: true,
  toJS: false,
  //   unwrapResponseData: false,
  //   prettier: { // By default prettier config is load from your project
  //     printWidth: 120,
  //     tabWidth: 2,
  //     trailingComma: "all",
  //     parser: "typescript",
  //   },
  //   defaultResponseType: "void",
  //   singleHttpClient: true,
  //   cleanOutput: false,
  //   enumNamesAsValues: false,
  //   moduleNameFirstTag: false,
  //   generateUnionEnums: false,
  //   typePrefix: '',
  //   typeSuffix: '',
  //   enumKeyPrefix: '',
  //   enumKeySuffix: '',
  //   addReadonly: false,
  //   extractingOptions: {
  //     requestBodySuffix: ["Payload", "Body", "Input"],
  //     requestParamsSuffix: ["Params"],
  //     responseBodySuffix: ["Data", "Result", "Output"],
  //     responseErrorSuffix: ["Error", "Fail", "Fails", "ErrorData", "HttpError", "BadResponse"],
  //   },
  //   /** allow to generate extra files based with this extra templates, see more below */
  //   extraTemplates: [],
  //   anotherArrayType: false,
  //   fixInvalidTypeNamePrefix: "Type",
  //   fixInvalidEnumKeyPrefix: "Value",
  //   codeGenConstructs: (constructs) => ({
  //     ...constructs,
  //     RecordType: (key, value) => `MyRecord<key, value>`
  //   }),
  //   primitiveTypeConstructs: (constructs) => ({
  //       ...constructs,
  //       string: {
  //         'date-time': 'Date'
  //       }
  //   }),
  // hooks: {
  //   onCreateComponent: (component) => {},
  //   onCreateRequestParams: (rawType) => {},
  //   onCreateRoute: (routeData) => {},
  //   onCreateRouteName: (routeNameInfo, rawRouteInfo) => {},
  //   onFormatRouteName: (routeInfo, templateRouteName) => {},
  //   onFormatTypeName: (typeName, rawTypeName, schemaType) => {},
  //   onInit: (configuration) => {},
  //   onPreParseSchema: (originalSchema, typeName, schemaType) => {},
  //   onParseSchema: (originalSchema, parsedSchema) => {},
  //   onPrepareConfig: (currentConfiguration) => {},
  // }
})
  .then(({ files, configuration }) => {
    console.log('[ files ]', files);
    // files.forEach(({ fileContent, name }) => {
    //   //   fs.writeFile(path, fileContent);
    //   fs.writeFile('./test2.ts', fileContent, (err) => {
    //     console.log('[ err ]', err);
    //   });
    // });
  })
  .catch((e) => console.error(e));

// return;
// generateTemplates({
//   cleanOutput: false,
//   //   input: path.resolve(process.cwd(), '../src/swagger.json'),
//   input: INPUT,
//   output: PATH_TO_OUTPUT_DIR_TEMPLATES,
//   //   httpClientType: "fetch",
//   httpClientType: 'axios',
//   modular: false,
//   silent: false,
//   rewrite: false,
//   templates: path.resolve(process.cwd(), '../src/__generated__/api-templates')
// });
