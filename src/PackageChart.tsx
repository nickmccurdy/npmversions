import {
  CategoryScale,
  Chart,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { Downloads } from "./registry"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

export default function PackageChart({ downloads }: { downloads: Downloads }) {
  return (
    <Line
      options={{
        interaction: {
          intersect: false,
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
      data={{
        datasets: [
          {
            data: Object.entries(downloads).map(([x, y]) => ({ x, y })),
            tension: 0.4,
          },
        ],
      }}
    />
  )
}
