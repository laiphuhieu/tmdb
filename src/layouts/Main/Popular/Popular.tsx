/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from "react";

import styles from "./Popular.module.scss";
import PopularInTheater from "./PopularFilter/PopularInTheater";
import PopularOnTv from "./PopularFilter/PopularOnTv";

import { Switch } from "antd";

const Trending = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = useCallback(() => {
    toggle ? setToggle(false) : setToggle(true)
  },[toggle])

  return (
    <section className={`${styles["inner-content"]} ${styles["popular"]} `}>
      <div className={`${styles["column-container"]}`}>
        <div className={`${styles["column"]}`}>
          <div className={`${styles["column-header"]}`}>
            <h2>What's Popular</h2>
            <Switch
              checkedChildren="Today"
              unCheckedChildren="This week"
              defaultChecked
              onClick={toggler}
              className="border-solid border-white border-[1px]"
            />
          </div>
          {toggle ? <PopularInTheater /> : <PopularOnTv />}
        </div>
      </div>
    </section>
  );
};

export default Trending;
