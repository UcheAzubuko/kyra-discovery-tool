import { FC } from 'react'
import SocialMediaCard from './SocialMediaCard'
import ProfileBioCard from './ProfileBioCard'
import type { BaseDataResponseType, StatsHistoryResponseType } from '../types/discovery'
import DailyLikesVersusFollowersChart from './DailyLikesVersusFollowersChart'
import PostingHistoryChart from './PostingHistoryChart'
import SocialMediaStatsCard from './SocialMediaStatsCard'

type AccountInfoPropsType = {
  baseData?: BaseDataResponseType
  statsHistory?: StatsHistoryResponseType
}

const AccountInfo: FC<AccountInfoPropsType> = ({ baseData, statsHistory }) => {
  const tiktokHandle = baseData?.data?.tiktok?.handle
  const bio = baseData?.data?.tiktok?.bio

  return (
    <section className="space-y-14">
      <ProfileBioCard>
        <div className="flex flex-wrap gap-x-8">
          <SocialMediaCard platform={'tiktok'} handle={tiktokHandle} />
          <div className="text-white">{bio}</div>
        </div>
      </ProfileBioCard>
      <SocialMediaStatsCard baseData={baseData} />
      <DailyLikesVersusFollowersChart statsHistory={statsHistory?.data?.historyPoints} />
      <PostingHistoryChart statsHistory={statsHistory?.data?.historyPoints} />
    </section>
  )
}

export default AccountInfo
