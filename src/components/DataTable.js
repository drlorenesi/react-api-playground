import React from 'react';
import DataTable from 'react-data-table-component';
import data from '../services/sampleMovieData';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Director',
    selector: 'director',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
];

function BasicFixedHeader() {
  return (
    <DataTable
      title='Movie List'
      columns={columns}
      data={data}
      fixedHeader
      fixedHeaderScrollHeight='300px'
      pagination
      dense
    />
  );
}

export default BasicFixedHeader;
