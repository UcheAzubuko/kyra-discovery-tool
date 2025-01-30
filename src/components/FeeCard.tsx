import { FC } from 'react'

type FeeCardPropsType = {
  value?: number | null
  label: string
}

const FeeCard: FC<FeeCardPropsType> = ({ value, label }) => {
  return (
    <div className="rounded-3xl text-center border border-dark-grey flex flex-col justify-between gap-y-3 items-center px-8 py-2 w-60 h-full">
      <span className="text-base text-grey whitespace-nowrap">{label}</span>
      <span
        className={`inline-block text-2xl font-bold text-white ${value === null && 'w-6 h-[2px] bg-white mb-4'}`}
      >
        {value !== null ? `$${value}` : ''}
      </span>
    </div>
  )
}

export default FeeCard
