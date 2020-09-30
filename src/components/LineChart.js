import React from 'react';
import Chart from 'react-apexcharts';

function LineChart() {
  const series = [
    {
      name: 'Desktops',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: 'Laptops',
      data: [13, 40, 30, 71, 80, 70, 80, 100, 150],
    },
  ];

  const options = {
    title: {
      text: 'Product Trends by Month',
      align: 'center',
    },
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
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

  return (
    <div>
      <Chart
        series={series}
        options={options}
        type='line'
        height={350}
        width={'50%'}
      />
    </div>
  );
}

export default LineChart;
