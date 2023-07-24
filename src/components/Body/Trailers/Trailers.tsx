import React, { useState } from "react";

import styles from "./Trailers.module.scss";
import TrailersFilterOnTv from "./TrailersFilter/TrailersFilterOnTv";
import TrailersFilterInTheaters from "./TrailersFilter/TrailersFilterInTheaters";

import { Switch } from "antd";

const Trailers = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <section className={`${styles["inner-content"]} ${styles["trailer-bg"]}`}>
      <div className={`${styles["column-container"]}`}>
        <div className={`${styles["column"]}`}>
          <div className={`${styles["column-header"]}`}>
            <h2>Latest Trailers</h2>
            <Switch
              checkedChildren="On TV"
              unCheckedChildren="In Theaters"
              defaultChecked
              onClick={toggler}
              style={{ border: "border: 1px solid #000" }}
            />
          </div>
          {toggle ? <TrailersFilterInTheaters /> : <TrailersFilterOnTv />}
        </div>
      </div>
    </section>
  );
};

export default Trailers;
