import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Downloads } from './registry'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

export default function PackageChart({ downloads }: { downloads: Downloads }) {
  return (
    <Line
      options={{ responsive: true }}
      data={{
        labels: Object.keys(downloads),
        datasets: [{ data: Object.values(downloads) }]
      }}
    />
  )
}
