import React, { Fragment } from 'react';
import ReLine from './ReLine';
import RePie from './RePie';
import ReBar from './ReBar';

function Charts() {
  return (
    <Fragment>
      <h1>Recharts</h1>
      <ReLine />
      <RePie />
      <ReBar />
    </Fragment>
  );
}

export default Charts;
