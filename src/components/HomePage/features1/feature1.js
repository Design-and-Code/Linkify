import React from "react";
import styles from "./features1.module.css";
import img from "./assets/feature_laptop.png";
import cx from "classnames";

const DetailedFeature = () => {
  return (
    <section className={styles.detailedFeatureSection}>
      <div className={cx(styles.row, styles.dashboard)}>
        <div className={styles.imgDash}>
          <img src={img} alt="" />
        </div>
        <div>
          <h3>Easy to use Dashboard</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia duis enim velit mollit. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            duis enim velit mollit.
          </p>
        </div>
      </div>
      <div className={cx(styles.row, styles.customizable)}>
        <div className={styles.imgCust}>
          <img src={img} alt="" />
        </div>
        <div>
          <h3>Highly Customizable</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia duis enim velit mollit. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            duis enim velit mollit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeature;
