import { FC } from 'react'
import { InlineIcon } from '@iconify/react'

type BioDataSocialCardType = {
  platform: string
  handle?: string
  isLink?: boolean
}

const BioDataSocialCard: FC<BioDataSocialCardType> = ({ platform, handle, isLink = false }) => {
  const links: Record<BioDataSocialCardType['platform'], string> = {
    tiktok: `https://www.tiktok.com/@${handle}`,
    youtube: `https://www.youtube.com/channel/${handle}`,
    instagram: `https://www.instagram.com/${handle}`
  }

  const link = links[platform]

  const content = (
    <div className="flex items-center gap-x-1 py-[2px] px-2 rounded bg-grey bg-opacity-10 text-white cursor-pointer">
      <InlineIcon icon={`cib:${platform}`} color="white" />
      {platform === 'youtube' ? 'YouTube' : `@${handle}`}
      {isLink && <InlineIcon icon="heroicons:arrow-top-right-on-square-16-solid" color="white" />}
    </div>
  )

  return isLink ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  )
}

export default BioDataSocialCard
