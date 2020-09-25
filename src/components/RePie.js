import React, { Fragment } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';
import { pieData } from '../assets/data.js';

const COLORS = ['#a554c9', '#0e62ab', '#0378d3', '#189ce2'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function RePie() {
  return (
    <Fragment>
      <h3>Pie Chart</h3>
      <ResponsiveContainer width='50%' height={300}>
        <PieChart>
          <Pie
            data={pieData}
            labelLine={false}
            label={renderCustomizedLabel}
            fill='#8884d8'
            dataKey='value'
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) =>
              new Intl.NumberFormat([], {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(value)
            }
          />
        </PieChart>
      </ResponsiveContainer>
    </Fragment>
  );
}

export default RePie;
