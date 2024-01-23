import React from "react";

// import ProgressBar from "@ramonak/react-progress-bar";

import styles from "./Leaderboard.module.scss";

const Leaderboard = () => {
  return (
    <section className={`${styles["inner-content"]} `}>
      <div className={`${styles["content-wrapper"]}`}>
        <div className={`${styles["column-wrapper"]}`}>
          <div className={`${styles["column-header"]}`}>
            <h2 className="mr-[20px] text-[24px] font-semibold leading-none">
              Leaderboard
            </h2>
            <div>
              <p>
                <span className={`${styles["dot"]} ${styles["all"]}`}></span>
                All Time Edits
              </p>
              <p>
                <span
                  className={`${styles["dot"]} ${styles["this-week"]}`}
                ></span>
                Edits This Week
              </p>
            </div>
          </div>

          <div className={`${styles["column-content"]}`}>
            <ol className={`${styles["leaderboard"]}`}>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">27167</h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px]">8064</h4>
                  </div>
                </div>
              </li>
              <li>
                <span className={`${styles["avatar"]}`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w64_and_h64_face/w5rE3HyVof0aHr1lfSHi5MrajPd.jpg"
                    alt=""
                  />
                </span>
                <div className={`${styles["data"]}`}>
                  <h3 className="text-[19.2px] leading-4">alyv</h3>
                  <div className={`${styles["meter"]} ${styles["all"]}`}>
                    <div className={`${styles["gauge"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px] text-black">
                      27167
                    </h4>
                  </div>
                  <div className={`${styles["meter"]} ${styles["this week"]}`}>
                    <div className={`${styles["gauge2"]}`}></div>
                    <h4 className="ml-[10px] text-[14.4px] text-black">8064</h4>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
