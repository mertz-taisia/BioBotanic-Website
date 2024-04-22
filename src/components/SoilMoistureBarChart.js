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

const SoilMoistureBarChart = ({ data, irrigation }) => {
    const color = irrigation ? "#4ACBFE" : "#FFE57F" ;
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
        max: 100
      }
    },
    plugins: {
      legend: {
        display: false 
      }
    }
  };

  const chartData = {
    labels: data.map(entry => entry.timestamp),
    datasets: [
      {
        data: data.map(entry => entry.soil_moisture),
        backgroundColor: color,
      }
    ]
  };

  return (
    <div class=" w-full" style={{ width: '70%', height: '90%' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SoilMoistureBarChart;
