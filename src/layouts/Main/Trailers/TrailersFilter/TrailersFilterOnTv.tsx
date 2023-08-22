import React, { useCallback, useEffect, useState } from "react";

import styles from "./TrailersFilter.module.scss";
import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";
import trailerService from "@/services/trailerService";
import { API_TOKEN } from "@/config/app.config";
import { TrailerResult } from "@/types/trailer";
import { ReactComponent as PlayBtn } from "../../../../assets/images/playbtn.svg";

import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Tippy from "@tippyjs/react";
import Modal from "@/components/Modal/Modal";

const TrailersFilterOnTv = () => {
  const [trailersOnTv, setTrailersOnTv] = useState<TrailerResult[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [trailerByID, setTrailerById] = useState<any>(null);
  const [, setCurrentTrailerId] = useState(undefined);
  const [isShowing, setIsShowing] = useState(false);

  const getTrailerData = useCallback(async () => {
    try {
      const trailerData = await trailerService.getTrailer(API_TOKEN);
      setTrailersOnTv(trailerData.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getTrailerDataById = useCallback(async (resultId: number) => {
    try {
      const trailerDataById = await trailerService.getTrailerById(
        API_TOKEN,
        resultId
      );
      const trailerByIdResults = trailerDataById.videos.results.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (vid: any) => vid.name === "Official Trailer"
      );
      setTrailerById(trailerByIdResults);
      setCurrentTrailerId(trailerByIdResults?.key);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTrailerData();
  }, [getTrailerData]);

  const handlePlayTrailer = useCallback(
    (resultId: number) => {
      setIsShowing(!isShowing);
      getTrailerDataById(resultId);
    },
    [getTrailerDataById, isShowing]
  );

  const handleClose = useCallback(() => {
    setIsShowing(false);
  }, []);

  return (
    <div className={`${styles["scroll-wrap"]}`}>
      <div className={`${styles["scroll-loaded"]} ${styles["scrollbar"]}`}>
        {trailersOnTv.map((result: TrailerResult, id: number) => {
          return (
            <div key={id} className={`${styles["card-style-2"]}`}>
              <div className={`${styles["card-img"]}`}>
                <div className={`${styles["wrapper"]}`}>
                  <img
                    loading="lazy"
                    src={`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${result.poster_path}`}
                    alt={result.original_title}
                    className="w-[100%] h-[100%] inline-block "
                  />

                  <button
                    className={`${styles["button-default"]}`}
                    onClick={() => handlePlayTrailer(result.id)}
                  >
                    <PlayBtn />
                  </button>
                  
                </div>

                <Tippy
                  content={<DropdownMore />}
                  placement="bottom"
                  animation="fade"
                  theme="light"
                  arrow={false}
                  trigger="click"
                  appendTo="parent"
                  interactive={true}
                >
                  <div className={`${styles["options"]}`}>
                    <div>
                      <button
                        aria-haspopup="true"
                        className={`${styles["more-btn"]}`}
                      ></button>
                    </div>
                  </div>
                </Tippy>
              </div>

              <div className={`${styles["card-content"]}`}>
                <h2 className="text-center text-[19.2px]">
                  <Link
                    to={`/tv/${result.id}`}
                    title={result.original_title}
                    className={`${styles["content-title"]}`}
                  >
                    {result.original_title}
                  </Link>
                </h2>
                <h3 className="text-center text-[16px]">
                  {result.original_title}
                </h3>
              </div>
            </div>
          );
        })}
        <Modal isShowing={isShowing} hide={handleClose}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerByID?.key}`}
            width="1200px"
            height="600px"
            playing={true}
            controls={true}
          />
        </Modal>
      </div>
    </div>
  );
};

export default TrailersFilterOnTv;
