import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import useSWR, { KeyedMutator, SWRConfiguration } from 'swr'
import useSWRImmutable from 'swr/immutable'

import { NEXT_PUBLIC_PROJECT_URL } from '@/constants/env'

import { formatUrlWithParams } from './format'

export interface IResponseWithId {
  id: string
  message: string
}

export const api = axios.create({
  baseURL: NEXT_PUBLIC_PROJECT_URL,
  timeout: 1000 * 30, // 20 segundos
  paramsSerializer: {
    indexes: null
  }
})

const responseInterceptorError = (error: AxiosError): Promise<AxiosError> => {
  const { response } = error
  return Promise.reject({
    statusText: response?.statusText ?? '',
    status: response?.status ?? 400,
    message: response?.data ?? ''
  })
}

api.interceptors.response.use((res) => res, responseInterceptorError)

export const adapterResponse = <T>(
  response: AxiosResponse<T>,
  statusCodeSuccess = 200
) => {
  return {
    response: response?.data,
    success: response?.status === statusCodeSuccess
  }
}

export const fetcherGet = (url: string, config?: AxiosRequestConfig) =>
  api.get(url, config)

export const fetcherPost = (
  url: string,
  data = {},
  config?: AxiosRequestConfig
) =>
  api
    .post(url, data, config)
    .then((response) => adapterResponse<IResponseWithId>(response, 201))

export const fetcherPut = (
  url: string,
  data = {},
  config?: AxiosRequestConfig
) => api.put(url, data, config).then((response) => adapterResponse(response))

export const fetcherDelete = (url: string, config?: AxiosRequestConfig) =>
  api.delete(url, config).then((response) => adapterResponse(response))

export interface SWRRequest {
  url: string
  params?: Record<string, string[] | string | number | boolean>
  shouldFetch?: boolean
  isImmutable?: boolean
  additionalOptions?: SWRConfiguration
}

export interface ISWRRequestReturn<T> {
  response?: T
  status?: number
  error?: Error
  isLoading: boolean
  isValidating: boolean
  loading: boolean
  mutate: KeyedMutator<AxiosResponse<T>>
}

export const useSWRRequest = <T>({
  url = '',
  params = {},
  shouldFetch = true,
  isImmutable = true,
  additionalOptions = {}
}: SWRRequest): ISWRRequestReturn<T> => {
  const swrInstance = isImmutable ? useSWRImmutable : useSWR
  const urlWithParams = formatUrlWithParams(url, params)

  const { data, error, isLoading, isValidating, mutate } = swrInstance(
    shouldFetch ? urlWithParams : null,
    fetcherGet,
    {
      errorRetryCount: 3,
      errorRetryInterval: 10000,
      ...additionalOptions
    }
  )

  const requestIsLoading = isLoading && !error

  return {
    response: data?.data ?? (data as T),
    status: data?.status ?? error?.status,
    error,
    isLoading: requestIsLoading,
    isValidating,
    loading: requestIsLoading || isValidating,
    mutate
  }
}
