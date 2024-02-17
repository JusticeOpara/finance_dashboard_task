import BarChart from "../Barchart/BarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import LineChart from "../LineChart/LineChart";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.dashboard}>
      {/* the dashoard section */}
      <div className={styles.section1}>
        <div className={styles.header}>
          <div>
            <p className={styles.text}>Dashoard</p>
            <p className={styles.subText}>Payments Update</p>
          </div>

          <input className={styles.searchbar} placeholder="Search" />
        </div>

        <div className={styles.dataRecord}>
          <div className={styles.record}>
            <span className={styles.point}>
              <p className={styles.subText}>Balance</p>

              <p>+17%</p>
            </span>
            <p className={styles.num}>$56,874</p>
            <LineChart />
          </div>
          <div className={styles.record}>
            <span className={styles.point}>
              <p className={styles.subText}>Balance</p>

              <p>+17%</p>
            </span>
            <p className={styles.num}>$56,874</p>
            <LineChart />
          </div>
          <div className={styles.record}>
            <span className={styles.point}>
              <p className={styles.subText}>Balance</p>

              <p>+17%</p>
            </span>
            <p className={styles.num}>$56,874</p>
            <LineChart />
          </div>
        </div>

        <BarChart />
      </div>

      {/* monthly profit */}
      <div className={styles.sec}>
        <DoughnutChart />
      </div>
    </div>
  );
};

export default Home;
