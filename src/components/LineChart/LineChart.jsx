import {Chart as ChartJS,} from 'chart.js/auto';
import {  Line } from "react-chartjs-2";
import styles from "./LineChart.module.css"

import sourceData from "../../utils/sourceData.json"
ChartJS.register();

const LineChart = () => {
  return (
    <div className={styles.LineChart}>
         <Line
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: sourceData.map((data) => data.revenue),
                backgroundColor: "#c2c2c2",
                borderColor: "#fff",
              },
              {
                label: "Cost",
                data: sourceData.map((data) => data.cost),
                backgroundColor: "#f1eee4",
                 borderColor: "black",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
    </div>
  )
}

export default LineChart