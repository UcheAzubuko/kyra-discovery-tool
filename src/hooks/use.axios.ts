import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
  type InternalAxiosRequestConfig
} from 'axios'
import { APP_BASE_URL } from '../data/api'

export function useAxios(): AxiosInstance {
  const instance = axios.create({
    baseURL: APP_BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-kyra-swagger': 'f583305f-9bc3-42dd-a520-8520483cff5a'
    }
  })

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      return config
    },
    (error: AxiosError) => Promise.reject(error)
  )

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      if (error.response) {
        console.error(error.response)
      }

      return Promise.reject(error)
    }
  )

  return instance
}
