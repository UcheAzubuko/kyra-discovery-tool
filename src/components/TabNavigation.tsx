import { FC } from 'react'

type TabNavigationPropsType = {
  activeTab: string
  setActiveTab: (tab: string) => void
  tabs: string[]
}

const TabNavigation: FC<TabNavigationPropsType> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className=" text-white p-4">
      <div className="flex  items-center gap-x-14 mobile:justify-start tablet:justify-center border-b border-dark-grey overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 text-base whitespace-nowrap transition-colors font-medium ${
              activeTab === tab ? 'text-primary' : 'text-white'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-primary transition-all"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TabNavigation
