
import  { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './Bar.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      
     labels: ["January", "February", "March", "April", "May", "June","July"],

        datasets: [
            {
                label: 'Expenses',
                data: [300, 400, 420, 480, 430, 460,400,],
                // data: [50, 222, 194, 179, 241, 178, 224],
                borderColor: '#f1eee4',
                backgroundColor: '#2c2c2c',
                borderRadius:10,
              }, 
             
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Mothly Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
    
  }, [])

  return (
    
      <div className={styles.BarChart}
      >
        <Bar data={chartData} options={chartOptions} />
      </div>
    
  );
};

export default BarChart;