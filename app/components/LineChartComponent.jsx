import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts'

export default function LineChartComponent({ data }) {
  return (
    <ResponsiveContainer width={'100%'} height={300}>
      <LineChart data={data} margin={{ top: 20 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='percentile'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        >
          <LabelList position='top' offset={10} />
        </Line>
        <Line type='monotone' dataKey='uv' stroke='#82ca9d'>
          <LabelList position='top' offset={10} />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  )
}
