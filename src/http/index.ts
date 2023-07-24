import { AxiosInstance, AxiosResponse } from "axios";
import HttpClient from "./base";

const instanceInterceptorsFunction = (httpInstance: AxiosInstance) => {
  httpInstance.interceptors.response.use(
    (res: AxiosResponse) => {
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
};

const httpInstance: AxiosInstance = new HttpClient().create({
  baseURL: "/app-api",
});
instanceInterceptorsFunction(httpInstance);

export { httpInstance };
