import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import styles from "./Doughnut.module.css";

ChartJS.register();

const DoughnutChart = () => {
  return (
    <div className={styles.doughnutContainer}>
      <p className={styles.text}>Monthly Profits</p>
      <p className={styles.subText}>Total profit Growth of 26%</p>

      <div>
        <Doughnut
          data={{
            labels: ["Stocks", "Bonds", "Real Estate", "Cryptocurrency", "Cash", "Shares"],
            datasets: [
              {
                label: "Expenses",

                data: [40,30, 25, 20, 10,5],

                backgroundColor: ["#f6d78b", "#c6dobc", "#a8aeff"],
                borderColor: ["#f6d78b", "#c6dobc", "#a8aeff"],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Sources",
              },
            },
          }}
        />
        <div>
          <span>
            <p className={styles.subText}>Stocks</p>
            <progress value={75} max={100} />
          </span>

          <span>
            <p className={styles.subText}>Bonds</p>
            <progress value={35} max={100} />
          </span>

          <span>
            <p className={styles.subText}>Real Estate</p>
            <progress value={65} max={100} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
