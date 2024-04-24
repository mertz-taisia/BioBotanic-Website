import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registering necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, irrigation }) => {
  const color = irrigation ? "#4ACBFE" : "#FFE57F";
  const maxValue = irrigation ? 450 : 255;
  const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          x: {
              display: false
          },
          y: {
              display: false, 
              beginAtZero: true,
              max: maxValue
          }
      },
      plugins: {
          legend: {
              display: false 
          }
      }
  };

  const chartData = irrigation ? 
  {
    labels: data.map(entry => entry.moisture_timestamp),
    datasets: [
      {
        data: data.map(entry => entry.moisture_sensor_value),
        backgroundColor: color,
      }
    ]
  } : 
  {
    labels: data.map(entry => entry.lighting_timestamp),
    datasets: [
      {
        data: data.map(entry => entry.light_sensor_value),  
        backgroundColor: color,
      }
    ]
  };

  return (
      <div class="w-full ml-2" style={{ width: '70%', height: '90%' }}>
          <Bar data={chartData} options={options} />
      </div>
  );
};

export default BarChart;
