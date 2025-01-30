import { FC } from 'react'
import { InlineIcon } from '@iconify/react'
import type { BaseDataResponseType, Iso2 } from '../types/discovery'
import { getCountryNameFromIso2 } from '../utils/country'
import { formatCommaSeparatedNumber, formatTwoDecimalPlaces } from '../utils/number'
import FeeCard from './FeeCard'
import SocialMediaCard from './SocialMediaCard'
import { capitalizeFirstLetter } from '../utils/text'

type BioDataPropsType = {
  baseData?: BaseDataResponseType
}

const BioData: FC<BioDataPropsType> = ({ baseData }) => {
  const feeData = [
    { label: 'Average Kyra fee', value: null },
    { label: 'Average Kyra CPV', value: null },
    { label: 'Predicted fee', value: formatCommaSeparatedNumber(baseData?.predictedFee) },
    { label: 'Predicted CPV', value: formatTwoDecimalPlaces(baseData?.predictedCpv) }
  ]

  const socialLinks = [
    { platform: 'tiktok', handle: baseData?.data?.tiktok?.handle },
    { platform: 'instagram', handle: baseData?.data?.instagram?.handle },
    { platform: 'youtube', handle: baseData?.data?.youtube?.channelId }
  ]

  return (
    <section className="flex flex-col gap-y-4">
      <img
        src={baseData?.data?.tiktok?.profilePicture}
        alt={`${baseData?.data?.tiktok?.nickname}'s avatar`}
        className="block w-[124px] h-[124px] rounded-full self-center"
      />

      <div className="flex items-center gap-x-3 self-center">
        <h1 className="text-2xl font-bold text-white">
          {capitalizeFirstLetter(baseData?.data?.tiktok?.nickname)}
        </h1>
        <InlineIcon icon="heroicons:bookmark-solid" className={'text-primary cursor-pointer'} />
        <InlineIcon icon="heroicons:share-16-solid" className={'text-primary cursor-pointer'} />
      </div>

      <div className="flex items-center flex-wrap gap-x-3 self-center">
        <div className="flex items-center gap-x-1 text-white">
          <InlineIcon icon="heroicons:map-pin-16-solid" color="white" />
          {getCountryNameFromIso2(baseData?.data?.tiktok?.region as Iso2)}
        </div>
        <div className="flex items-center gap-x-1 text-white">
          <InlineIcon icon="heroicons:language-16-solid" color="white" />
          {'English'}
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-2 self-center">
        {socialLinks?.map((link) => (
          <SocialMediaCard
            platform={link.platform}
            handle={link.handle}
            key={link.platform}
            isLink
          />
        ))}
      </div>

      <div className="self-center  grid laptop:grid-cols-4 items-center justify-center flex-wrap gap-x-9 gap-y-4">
        {feeData.map((fee) => (
          <FeeCard {...fee} key={fee.label} />
        ))}
      </div>
    </section>
  )
}

export default BioData
