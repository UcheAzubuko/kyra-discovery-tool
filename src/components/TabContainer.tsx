import { FC, useState } from 'react'
import TabNavigation from './TabNavigation'
import { Media, PastBriefs, AudiencePersonas, Lookalikes } from './TabComponents'
import { profileTabMenu } from '../data/profile-tab'
import type { BaseDataResponseType, StatsHistoryResponseType } from '../types/discovery'
import AccountInfo from './AccountInfo'

type TabsContainerPropsType = {
  baseData?: BaseDataResponseType
  statsHistory?: StatsHistoryResponseType
}

const TabsContainer: FC<TabsContainerPropsType> = ({ baseData, statsHistory }) => {
  const [activeTab, setActiveTab] = useState(profileTabMenu[0])

  return (
    <div className="mt-6">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={profileTabMenu} />

      <div className="mt-4">
        {activeTab === 'Account info' && (
          <AccountInfo baseData={baseData} statsHistory={statsHistory} />
        )}
        {activeTab === 'Media' && <Media />}
        {activeTab === 'Past briefs' && <PastBriefs />}
        {activeTab === 'Audience personas' && <AudiencePersonas />}
        {activeTab === 'Lookalikes' && <Lookalikes />}
      </div>
    </div>
  )
}

export default TabsContainer
