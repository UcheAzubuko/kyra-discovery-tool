import { useAxios } from '../use.axios'

export function useDiscoveryApi() {
  const axiosInstance = useAxios()
  const API_BASE_URL = 'discovery/creators/5831967/'

  const fetchDiscoveryStatsHistoryApi = async (signal?: AbortSignal) => {
    const response = await axiosInstance.get(`${API_BASE_URL}stats-history`, { signal })
    return response.data
  }

  const fetchDiscoveryBaseDataApi = async (signal: AbortSignal) => {
    const response = await axiosInstance.get(`${API_BASE_URL}base-data`, {
      signal
    })
    return response.data
  }

  return {
    fetchDiscoveryStatsHistoryApi,
    fetchDiscoveryBaseDataApi
  }
}
