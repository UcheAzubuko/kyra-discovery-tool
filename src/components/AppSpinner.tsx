import { FC } from 'react'

type AppSpinnerPropsType = {
  size?: 'small' | 'large'
  loadingInfo?: string
}

const AppSpinner: FC<AppSpinnerPropsType> = ({ size, loadingInfo }) => {
  return (
    <div className={`flex items-center justify-center auto`}>
      <div className="space-y-4">
        <div
          className={`mx-auto rounded-full border border-dashed border-primary animate-spin ${size === 'large' ? 'h-[40px] w-[40px] border-[4px]' : 'h-[20px] w-[20px] border-[2px]'}`}
        ></div>
        {loadingInfo && <div className="text-xs text-center">{loadingInfo}</div>}
      </div>
    </div>
  )
}

export default AppSpinner
