import axios, {
  AxiosResponse,
  AxiosError,
  CreateAxiosDefaults,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";


export interface TCustomConfigAttr {
  customConfig?: { isShowLoading?: boolean };
}

class HttpClient {
  config: CreateAxiosDefaults;
  isNeedLoading: boolean;

  constructor(props?: { isNeedLoading?: boolean }) {
    const { isNeedLoading = true } = props ?? {};

    this.config = {};
    this.isNeedLoading = isNeedLoading;
  }

  static loadingCount = 0;

  create(payload: CreateAxiosDefaults) {
    this.config = payload;

    const httpInstance = axios.create({
      timeout: 50000,
      ...this.config,
    });

    httpInstance.defaults.headers["Content-Type"] =
      "application/json;charset=utf-8";
    this._setDefaultInterceptors(httpInstance);
    return httpInstance;
  }

  private _setDefaultInterceptors(httpInstance: AxiosInstance) {
    httpInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    httpInstance.interceptors.response.use(
      (res: AxiosResponse) => {
        const resData = res.data;
        const code: number = resData.code;
        if (code === 200 || code === 0) {
          return Promise.resolve(
            typeof resData === "object" && "data" in resData
              ? resData.data
              : resData
          );
        } else if (!code) {
          return Promise.resolve(resData);
        } else {

          return Promise.reject(resData);
        }
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }
}

export default HttpClient;
