import { create } from 'zustand'
import { BaseDataResponseType, StatsHistoryResponseType } from '../types/discovery'
import { useDiscoveryApi } from '../hooks/api/use.discovery.api'

type Store = {
  isFetchingDiscoveryStatsHistory: boolean
  isFetchingDiscoveryBaseData: boolean
  fetchDiscoveryStatsHistory: (
    signal?: AbortSignal
  ) => Promise<StatsHistoryResponseType | undefined>
  abortFetchDiscoveryStatsHistoryRequest: () => void
  fetchDiscoveryBaseData: (signal?: AbortSignal) => Promise<BaseDataResponseType | undefined>
  abortFetchDiscoveryBaseDataRequest: () => void
}

const useDiscoveryStore = create<Store>((set) => {
  const { fetchDiscoveryStatsHistoryApi, fetchDiscoveryBaseDataApi } = useDiscoveryApi()

  let fetchDiscoveryStatsHistoryAbortController: AbortController | null = null
  let fetchDiscoveryBaseDataAbortController: AbortController | null = null

  return {
    isFetchingDiscoveryStatsHistory: false,

    fetchDiscoveryStatsHistory: async () => {
      fetchDiscoveryStatsHistoryAbortController = new AbortController()

      set({ isFetchingDiscoveryStatsHistory: true })
      try {
        const response = await fetchDiscoveryStatsHistoryApi(
          fetchDiscoveryStatsHistoryAbortController.signal
        )
        return response
      } catch (error) {
        console.error('Error fetching discovery stats history:', error)
        return error
      } finally {
        set({ isFetchingDiscoveryStatsHistory: false })
      }
    },

    abortFetchDiscoveryStatsHistoryRequest: () => {
      if (fetchDiscoveryStatsHistoryAbortController) {
        fetchDiscoveryStatsHistoryAbortController.abort()
        fetchDiscoveryStatsHistoryAbortController = null
      }
    },

    isFetchingDiscoveryBaseData: false,

    fetchDiscoveryBaseData: async () => {
      fetchDiscoveryBaseDataAbortController = new AbortController()

      set({ isFetchingDiscoveryBaseData: true })
      try {
        const response = await fetchDiscoveryBaseDataApi(
          fetchDiscoveryBaseDataAbortController.signal
        )
        return response
      } catch (error) {
        console.error('Error fetching discovery base data:', error)
        return error
      } finally {
        set({ isFetchingDiscoveryBaseData: false })
      }
    },

    abortFetchDiscoveryBaseDataRequest: () => {
      if (fetchDiscoveryBaseDataAbortController) {
        fetchDiscoveryBaseDataAbortController.abort()
        fetchDiscoveryBaseDataAbortController = null
      }
    }
  }
})

export default useDiscoveryStore
