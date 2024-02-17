import BarChart from "../Barchart/BarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import LineChart from "../LineChart/LineChart";
import styles from "./Home.module.css";
import PropTypes from "prop-types";

const SaleItem = ({ name, timeAgo, amount }) => (
  <div className={styles.perSales}>
    <div className={styles.profile}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 36 36">
      <path fill="currentColor" d="M30.61 24.52a17.16 17.16 0 0 0-25.22 0a1.51 1.51 0 0 0-.39 1v6A1.5 1.5 0 0 0 6.5 33h23a1.5 1.5 0 0 0 1.5-1.5v-6a1.51 1.51 0 0 0-.39-.98" 
      className="clr-i-solid clr-i-solid-path-1"/>
    <circle cx="18" cy="10" r="7" fill="currentColor" className="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>
    </div>
    <span className="">
      <p>{name}</p>
      <p className={styles.subText}>{timeAgo}</p>
    </span>
    <span>+${amount}</span>
  </div>
);
SaleItem.propTypes = {
  name: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

const Home = () => {
  return (
    <div className={styles.dashboard}>
     
      <div className={styles.section1}>
        <div className={styles.header}>
          <div>
            <p className={styles.text}>Dashoard</p>
            <p className={styles.subText}>Payments Update</p>
          </div>

          <input className={styles.searchbar} placeholder="Search" />
        </div>

        <div className={styles.dataRecord}>
          <div className={styles.lineChartContainer1}>
            <span className={styles.point}>
              <p className={""}>Balance</p>

              <p>+17%</p>
            </span>
            <p className={styles.num}>$56,874</p>
            <LineChart />
          </div>
          <div className={styles.lineChartContainer2}>
            <span className={styles.point}>
              <p className={""}>Savings</p>

              <p>+17%</p>
            </span>
            <p className={styles.num}>$56,874</p>
            <LineChart />
          </div>
          <div className={styles.lineChartContainer3}>
            <span className={styles.point}>
              <p className={""}>Income</p>

              <p>+17%</p>
            </span>
            <p className={styles.num}>$24,874</p>
            <LineChart />
          </div>
          <div className={styles.lineChartContainer4}>
            <span className={styles.point}>
              <p className={""}>Expenses</p>

              <p>+17%</p>
            </span>
            <p className={styles.num}>$86,874</p>
            <LineChart />
          </div>
        </div>

        <BarChart />
      </div>

      {/* monthly profit */}
      <div className={styles.section2}>
        <DoughnutChart />
        <div className={styles.recentSales}>
          <div className={styles.subHeader}>
            <h1 className={styles.text}>Recent Sales</h1>
            <p className={styles.subText}>See All</p>
          </div>

          {/* sales */}
          <div className={styles.sales}>
            <SaleItem
              name="Steven Summer"
              timeAgo="02 Minutes Ago"
              amount="52.00"
            />
            <SaleItem
              name="Jordan Mark"
              timeAgo="08 Minutes Ago"
              amount="42.00"
            />
            <SaleItem
              name="Anna Armas"
              timeAgo="05 Minutes Ago"
              amount="272.00"
            />
            <SaleItem
              name="Angelina Boo"
              timeAgo="05 Minutes Ago"
              amount="372.00"
            />
            <SaleItem
              name="Angelina Boo"
              timeAgo="05 Minutes Ago"
              amount="372.00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
