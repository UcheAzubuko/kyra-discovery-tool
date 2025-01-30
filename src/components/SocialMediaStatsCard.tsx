import { FC } from 'react'
import { InlineIcon } from '@iconify/react'
import { BaseDataResponseType } from '../types/discovery'
import SocialMediaStatItem from './SocialMediaStatItem'
import { formatSocialStatsCompactNumber } from '../utils/number'

type SocialMediaStatsCardPropsType = {
  baseData?: BaseDataResponseType
}

const SocialMediaStatsCard: FC<SocialMediaStatsCardPropsType> = ({ baseData }) => {
  const socialData = [
    {
      platform: 'tiktok',
      icon: <InlineIcon icon="cib:tiktok" color="white" height={30} />,
      stats: [
        {
          statName: 'Followers',
          statValue: formatSocialStatsCompactNumber(baseData?.data?.tiktok?.followersCount),
          statValueChange: 107
        },
        {
          statName: 'Average views',
          statValue: formatSocialStatsCompactNumber(baseData?.data?.tiktok?.medianViews),
          statValueChange: null
        },
        {
          statName: 'Potential sponsored views',
          statValue: formatSocialStatsCompactNumber(baseData?.data?.tiktok?.sponsoredMedianViews),
          statValueChange: null
        },
        {
          statName: 'Total likes',
          statValue: formatSocialStatsCompactNumber(baseData?.data?.tiktok?.likesCount),
          statValueChange: 78.5
        },
        {
          statName: 'Engagement rate',
          statValue: `${formatSocialStatsCompactNumber(Number(baseData?.data?.tiktok?.engagementRate) / 100)}%`,
          statValueChange: null
        },
        {
          statName: 'Total posts',
          statValue: formatSocialStatsCompactNumber(baseData?.data?.tiktok?.postsCount),
          statValueChange: 28
        }
      ]
    },
    {
      platform: 'instagram',
      icon: <InlineIcon icon="cib:instagram" color="white" height={30} />,
      stats: [
        {
          statName: 'Followers',
          statValue: formatSocialStatsCompactNumber(42800000),
          statValueChange: null
        },
        {
          statName: 'Average views',
          statValue: null,
          statValueChange: null
        },
        {
          statName: 'Potential sponsored views',
          statValue: 0,
          statValueChange: null
        },
        {
          statName: 'Total likes',
          statValue: 0,
          statValueChange: null
        },
        {
          statName: 'Engagement rate',
          statValue: `${formatSocialStatsCompactNumber(32880000 / 100)}%`,
          statValueChange: null
        },
        {
          statName: 'Total posts',
          statValue: 0,
          statValueChange: null
        }
      ]
    }
  ]

  return (
    <div className="rounded-3xl border border-dark-grey flex flex-col gap-y-7 px-8 py-6">
      {socialData.map((platform, index) => (
        <div key={index} className="flex items-center space-x-8 overflow-hidden">
          <div className="shrink-0">{platform.icon}</div>

          <div className="flex flex-1 space-x-10 overflow-x-auto scrollbar-hide">
            {platform.stats.map((stat, i) => (
              <div key={i} className="flex-1">
                <SocialMediaStatItem
                  title={stat.statName}
                  value={stat.statValue}
                  delta={stat.statValueChange}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SocialMediaStatsCard
