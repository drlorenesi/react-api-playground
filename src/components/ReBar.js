import React, { Fragment } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { barData } from '../assets/data.js';

function ReBar() {
  return (
    <Fragment>
      <h3>Bar Chart</h3>
      <ResponsiveContainer width='50%' height={300}>
        <BarChart
          // width={500}
          // height={300}
          data={barData}
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
          <Bar dataKey='2019' fill='#0e62ab' />
          <Bar dataKey='2020' fill='#a554c9' />
        </BarChart>
      </ResponsiveContainer>
    </Fragment>
  );
}

export default ReBar;
