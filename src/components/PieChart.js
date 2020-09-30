import React from 'react';
import Chart from 'react-apexcharts';

function PieChart() {
  const series = [44, 55, 13, 43, 22];

  const options = {
    title: {
      text: 'Product Trends by Month',
      align: 'center',
    },
    chart: {
      type: 'pie',
      zoom: {
        enabled: false,
      },
      dataLabels: {
        enabled: false,
      },
    },

    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    tooltip: {
      y: {
        formatter: function (val) {
          return (
            'Q ' +
            new Intl.NumberFormat([], {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(val)
          );
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type='pie'
        height={350}
        width={'50%'}
      />
    </div>
  );
}

export default PieChart;
