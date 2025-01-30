import { FC } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { InlineIcon } from '@iconify/react'
import type { StatsHistoryPoint } from '../types/discovery'
import { formatCompactNumber } from '../utils/number'
import { formatDayAndMonth } from '../utils/date'

type DailyLikesVersusFollowersChartPropsType = {
  statsHistory?: StatsHistoryPoint[]
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  barThickness: 1,
  maintainAspectRatio: false,
  responsive: true,
  borderRadius: 2,
  spanGaps: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false,
      displayColors: true
    }
  },
  scales: {
    x: {
      display: true,
      beginAtZero: true,
      ticks: {
        color: '#ffffff',
        maxRotation: 90,
        minRotation: 90
      },
      border: {
        color: '#ffffff',
        width: 2,
        display: true
      },
      grid: {
        display: false,
        drawBorder: false
      },
      alignToPixels: true
    },
    y: {
      beginAtZero: true,
      display: true,
      ticks: {
        callback: (value: unknown) => formatCompactNumber(value as number),
        color: '#ffffff',
        padding: 2
      },
      border: {
        color: '#ffffff',
        width: 2,
        display: true
      },
      grid: {
        display: false,
        drawBorder: false
      }
    }
  },
  elements: {
    line: {
      tension: 0
    }
  }
}

const DailyLikesVersusFollowersChart: FC<DailyLikesVersusFollowersChartPropsType> = ({
  statsHistory
}) => {
  const data = {
    labels: statsHistory?.map((point) => formatDayAndMonth(point.createdAt)),
    datasets: [
      {
        data: statsHistory?.map((point) => point.likesCount),
        borderColor: '#659a76',
        pointRadius: 0,
        borderWidth: 2
      },
      {
        data: statsHistory?.map((point) => point.followersCount),
        borderColor: '#317267',
        pointRadius: 0,
        borderWidth: 2
      }
    ]
  }

  return (
    <section className="rounded-3xl border border-dark-grey flex flex-col gap-y-7 px-8 py-6 text-white">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-x-8">
          <div className="inline-flex items-center gap-x-1">
            <span className="inline-block h-4 w-4 bg-[#659a76]"></span>
            <p className="whitespace-nowrap">Daily likes</p>
          </div>
          <div className="inline-flex items-center gap-x-1">
            <span className="inline-block h-4 w-4 bg-[#317267]"></span>
            <p className="whitespace-nowrap">Daily followers</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-x-1 py-[2px] px-2 rounded-xl bg-grey bg-opacity-10 text-white cursor-pointer text-xs w-max">
          <InlineIcon icon="cib:tiktok" color="white" />
          TikTok data only
        </div>
      </div>

      <div>
        <Line data={data} options={options} height={400} />
      </div>
    </section>
  )
}

export default DailyLikesVersusFollowersChart
