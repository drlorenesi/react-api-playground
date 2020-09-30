import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function BarChart() {
  const mySeries = [
    {
      name: 'Net Profit',
      data: [10, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];

  const myOptions = {
    title: {
      text: 'Ventas de Don Alex',
      align: 'center',
    },
    chart: {
      type: 'bar',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      // for bar separation
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: 'Q (miles)',
      },
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return new Intl.NumberFormat([], {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(val);
        },
      },
    },
  };

  const [options] = useState(myOptions);
  const [series] = useState(mySeries);

  return (
    <div>
      <Chart
        series={series}
        options={options}
        type='bar'
        height={350}
        width={'50%'}
      />
    </div>
  );
}

export default BarChart;
