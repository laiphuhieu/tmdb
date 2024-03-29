import React from "react";

import styles from "./New.module.scss";

import Button from "@/components/Button/Button";

const New = () => {
  return (
    <section className={`${styles["inner-content"]} ${styles["new-index"]}`}>
      <div className={`${styles["media"]}`}>
        <div className={`${styles["column-container"]}`}>
          <div className={`${styles["content-container"]}`}>
            <div className={`${styles["title"]}`}>
              <h2>Welcome.</h2>
              <h3>
                Millions of movies, TV shows and people to discover. Explore
                now.
              </h3>
            </div>
            <div className={`${styles["search"]}`}>
              <form
                action="/search"
                method="get"
                acceptCharset="utf-8"
                className={`${styles["search-form"]}`}
              >
                <label>
                  <input
                    type="text"
                    placeholder="Search for a movie, tv show, person......"
                    className={`${styles["search-area"]}`}
                  />
                </label>

                <Button
                  className={`${styles["search-btn"]}`}
                  type="submit"
                  height="46px"
                  border="0"
                  color="white"
                  radius="30px"
                >
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
