import { useState, useEffect } from 'react'
import BioData from '../components/BioData'
import TabsContainer from '../components/TabContainer'
import useDiscoveryStore from '../stores'
import { StatsHistoryResponseType, BaseDataResponseType } from '../types/discovery'
import AppSpinner from '../components/AppSpinner'

export default function DiscoveryProfilePage() {
  const { fetchDiscoveryStatsHistory, fetchDiscoveryBaseData } = useDiscoveryStore()

  const [statsHistory, setStatsHistory] = useState<StatsHistoryResponseType | undefined>(undefined)
  const [baseData, setBaseData] = useState<BaseDataResponseType | undefined>(undefined)
  const [isFetchingPageData, setIsFetchingPageData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsFetchingPageData(true)
      try {
        const statsResponse = await fetchDiscoveryStatsHistory()
        setStatsHistory(statsResponse || undefined)
        const baseResponse = await fetchDiscoveryBaseData()
        setBaseData(baseResponse || undefined)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsFetchingPageData(false)
      }
    }

    fetchData()
  }, [fetchDiscoveryBaseData, fetchDiscoveryStatsHistory])

  let discoveryProfilePageContent = (
    <div className="max-w-[1440px] mx-auto">
      <BioData baseData={baseData} />
      <TabsContainer baseData={baseData} statsHistory={statsHistory} />
    </div>
  )

  if (isFetchingPageData) {
    discoveryProfilePageContent = <AppSpinner size="large" />
  }

  return (
    <main className="min-h-screen bg-background pt-7 px-4 laptop:px-7 pb-36 ">
      {discoveryProfilePageContent}
    </main>
  )
}
