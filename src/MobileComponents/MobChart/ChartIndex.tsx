import React from 'react'
import { MobBaseContainer } from './Skins'

export default function ChartIndex() {
  const chartData = [
    {
        "id" : "qwert",
        "chart" : "hi this is yogi"
    },
    {
        "id" : "qwert",
        "chart" : "I want to go to home"
    },
    {
        "id" : "agent",
        "chart" : "hi, how can i help you"
    },
  ]
  return (
    <MobBaseContainer>
        {chartData.map((item) => 
        <div>
            {item.chart}
        </div>
    )}
      
    </MobBaseContainer>
  )
}
