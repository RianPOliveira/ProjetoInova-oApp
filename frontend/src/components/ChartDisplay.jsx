import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend
);

function ChartDisplay({ data }) {
  const chartConfig = {
    labels: data.labels,
    datasets: [
      {
        label: 'Resultados',
        data: data.values,
        borderColor: 'rgb(75, 192, 192)',
        fill: false
      }
    ]
  };

  return (
    <div style={{ maxWidth: '600px', marginTop: '20px' }}>
      <Line data={chartConfig} />
    </div>
  );
}

export default ChartDisplay;
