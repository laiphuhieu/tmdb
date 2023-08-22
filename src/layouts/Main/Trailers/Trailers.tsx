import React, { useCallback, useState } from "react";

import styles from "./Trailers.module.scss";
import TrailersFilterOnTv from "./TrailersFilter/TrailersFilterOnTv";
import TrailersFilterInTheaters from "./TrailersFilter/TrailersFilterInTheaters";

import { Switch } from "antd";

const Trailers = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = useCallback(() => {
    toggle ? setToggle(false) : setToggle(true)
  },[toggle])

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
              className="border-solid border-white border-[1px]"
            />
          </div>
          {toggle ? <TrailersFilterInTheaters /> : <TrailersFilterOnTv />}
        </div>
      </div>
    </section>
  );
};

export default Trailers;
