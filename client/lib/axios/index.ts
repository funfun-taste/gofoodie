import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosStatic,} from "axios";
import {BASE_URL, LOCAL_DOCKER_RUN} from "@config/processConfig";

const baseURL = LOCAL_DOCKER_RUN ? `http://server:4000/api` : `${BASE_URL}/api`;

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
  withCredentials: true,
});

export interface RequestConfig extends AxiosRequestConfig {
  suppressStatusCode?: number[];
}

function AxiosAuthInterceptor<T>(response: AxiosResponse<T>): AxiosResponse {
  return response;
}

instance.interceptors.request.use((config) => {
  // config.headers["Content-type"] = "application/json; charset=UTF-8";
  // config.headers["Accept"] = "application/json";
  return config;
});

export const axiosInstance = instance as AxiosStatic;
