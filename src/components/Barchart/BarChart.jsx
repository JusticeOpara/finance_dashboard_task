
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
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Expenses',
                
                data: [50, 222, 194, 179, 241, 178, 224],
                borderColor: '#f1eee4',
                backgroundColor: '#2c2c2c',
                borderRadius:8,
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
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
    
  }, [])

  return (
    
      <div className={styles.BarChart}
    //   className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'
      >
        <Bar data={chartData} options={chartOptions} />
      </div>
    
  );
};

export default BarChart;