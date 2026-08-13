import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { env } from '@/shared/config/env';

const DEFAULT_TIMEOUT_MS = 30_000;

export const httpClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: DEFAULT_TIMEOUT_MS,
  headers: {
    Accept: 'application/json',
  },
});

function onRequest(config: InternalAxiosRequestConfig) {
  // Add the JWT authorization header here when authentication is implemented.
  return config;
}

function onRequestError(error: AxiosError) {
  return Promise.reject(error);
}

function onResponse(response: AxiosResponse) {
  return response;
}

function onResponseError(error: AxiosError) {
  return Promise.reject(error);
}

httpClient.interceptors.request.use(onRequest, onRequestError);
httpClient.interceptors.response.use(onResponse, onResponseError);
