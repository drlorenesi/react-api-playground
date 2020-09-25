import React, { Fragment } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { lineData } from '../assets/data.js';

function ReLine() {
  return (
    <Fragment>
      <h3>Line Chart</h3>
      <ResponsiveContainer width='50%' height={300}>
        <LineChart
          data={lineData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat([], {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(value)
            }
          />
          <Legend />
          <Line type='monotone' dataKey='ventas2019' stroke='#0e62ab' />
          <Line type='monotone' dataKey='ventas2020' stroke='#a554c9' />
        </LineChart>
      </ResponsiveContainer>
    </Fragment>
  );
}

export default ReLine;
