import React, { Fragment } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

function Charts() {
  return (
    <Fragment>
      <h1>Apex Charts</h1>
      <LineChart />
      <PieChart />
      <BarChart />
    </Fragment>
  );
}

export default Charts;
