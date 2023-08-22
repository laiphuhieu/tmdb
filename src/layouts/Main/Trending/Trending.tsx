import React, { useState } from "react";

import styles from "./Trending.module.scss";
import TrendingDay from "./TrendingFilter/TrendingDay";
import TrendingWeek from "./TrendingFilter/TrendingWeek";

import { Switch } from "antd";

const Trending = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <section className={`${styles["inner-content"]} ${styles["trending"]} `}>
      <div className={`${styles["column-container"]}`}>
        <div className={`${styles["column"]}`}>
          <div className={`${styles["column-header"]}`}>
            <h2>Trending</h2>
            <Switch
              checkedChildren="Today"
              unCheckedChildren="This week"
              defaultChecked
              onClick={toggler}
              className="border-solid border-white border-[1px]"
            />
          </div>
          {toggle ? <TrendingWeek /> : <TrendingDay />}
        </div>
      </div>
    </section>
  );
};

export default Trending;
