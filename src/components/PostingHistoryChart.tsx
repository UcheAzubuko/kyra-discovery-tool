import { FC } from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import { InlineIcon } from '@iconify/react'
import type { StatsHistoryPoint } from '../types/discovery'
import { formatDayMonthYear } from '../utils/date'

type DailyLikesVersusFollowersChartPropsType = {
  statsHistory?: StatsHistoryPoint[]
}

const PostingHistoryChart: FC<DailyLikesVersusFollowersChartPropsType> = ({ statsHistory }) => {
  const startDate = new Date(new Date().getFullYear() - 1, 2, 1)
  const endDate = new Date(new Date().getFullYear(), 0, 31, 23, 59, 59, 999)
  const heatmapValues = statsHistory?.map((point) => ({
    date: point.createdAt,
    count: point.postsCount
  }))

  return (
    <section className="rounded-3xl border border-dark-grey flex flex-col gap-y-6 p-6 md:p-8 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-4">
        <div className="flex items-center flex-wrap gap-x-4">
          <h3 className="text-lg sm:text-2xl font-semibold">Posting history</h3>
          <div className="inline-flex items-center gap-x-1">
            {
              <p>
                Last posted:{' '}
                {statsHistory
                  ? formatDayMonthYear(statsHistory[statsHistory?.length - 1].createdAt)
                  : null}
              </p>
            }
          </div>
        </div>

        <div className="inline-flex items-center gap-x-1 py-[2px] px-2 rounded-xl bg-grey bg-opacity-10 text-white cursor-pointer text-xs w-max">
          <InlineIcon icon="cib:tiktok" color="white" />
          TikTok data only
        </div>
      </div>

      {statsHistory && (
        <div className="overflow-x-auto">
          <CalendarHeatmap
            startDate={startDate}
            endDate={endDate}
            values={heatmapValues}
            classForValue={(value: { count: number }) => {
              if (!value || value.count === 0) return 'color-empty'
              return 'color-filled'
            }}
            monthLabels={[
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
            ]}
            gutterSize={window.innerWidth < 640 ? 1 : 2.5}
          />
        </div>
      )}
    </section>
  )
}

export default PostingHistoryChart
