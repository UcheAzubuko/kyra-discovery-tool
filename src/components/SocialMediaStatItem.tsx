import { FC } from 'react'
import { InlineIcon } from '@iconify/react'

type SocialMediaStatItemProps = {
  title: string
  value?: string
  delta: number | null
}

const SocialMediaStatItem: FC<SocialMediaStatItemProps> = ({ title, value, delta }) => {
  const formattedDelta = title !== 'Total posts' ? `${delta}% in 30 days` : `${delta} in 30 days`

  const deltaContent =
    Number(delta) > 0 ? (
      <span className="inline-flex items-center gap-1 whitespace-nowrap text-[#659a76] text-[10px]">
        <InlineIcon icon="heroicons:arrow-small-up-solid" color="#659a76" height={20} />
        {formattedDelta}
      </span>
    ) : null

  return (
    <div className="flex flex-col items-center">
      <span className="text-base text-grey whitespace-nowrap">{title}</span>
      <span
        className={`inline-block text-2xl font-bold text-white ${value === null && 'w-6 h-[2px] bg-white mt-4'}`}
      >
        {value !== null ? `${value}` : ''}
      </span>
      {deltaContent}
    </div>
  )
}

export default SocialMediaStatItem
