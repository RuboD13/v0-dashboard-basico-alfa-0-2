// [v0] Sparkline chart component for showing 7-day trend

interface SparklineProps {
  data: number[]
}

export function Sparkline({ data }: SparklineProps) {
  const max = Math.max(...data, 1)
  const min = Math.min(...data)
  const range = max - min || 1

  const total = data.reduce((sum, val) => sum + val, 0)
  const average = (total / data.length).toFixed(1)
  const trend =
    data[data.length - 1] > data[0] ? "ascendente" : data[data.length - 1] < data[0] ? "descendente" : "estable"

  return (
    <svg
      width="60"
      height="20"
      className="inline-block"
      role="img"
      aria-label={`Gráfico de tendencia de 7 días. Promedio: ${average}. Tendencia: ${trend}`}
    >
      <title>Gráfico de tendencia de los últimos 7 días</title>
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        points={data
          .map((value, index) => {
            const x = (index / (data.length - 1)) * 60
            const y = 20 - ((value - min) / range) * 20
            return `${x},${y}`
          })
          .join(" ")}
      />
    </svg>
  )
}
