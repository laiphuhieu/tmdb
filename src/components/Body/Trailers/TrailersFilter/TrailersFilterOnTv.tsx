import React, { useCallback, useEffect, useState } from "react";

import styles from "./TrailersFilter.module.scss";
import DropdownMore from "@/components/Dropdown/DropdownMore/DropdownMore";
import trailerService from "@/services/trailerService";
import { API_TOKEN } from "@/config/app.config";
import { TrailerResult } from "@/types/trailer";
import { ReactComponent as PlayBtn } from "../../../../assets/images/playbtn.svg";

import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import ReactPlayer from "react-player";
import Popup from "reactjs-popup";

const TrailersFilterOnTv = () => {
  const [trailersOnTv, setTrailersOnTv] = useState<TrailerResult[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [trailerByID, setTrailerById] = useState<any>(null);
  const [, setCurrentTrailerId] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(!isOpen);
      getTrailerDataById(resultId);
    },
    [getTrailerDataById, isOpen]
  );
  console.log(trailerByID?.key);

  // const handlePlay = useCallback(() => {
  //   setIsOpen(!isOpen);
  // }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
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
                    className={`${styles["play-btn"]}`}
                    // onClick={() => handlePlayTrailer(result.id)}
                    onClick={() => handlePlayTrailer(result.id)}
                  >
                    <PlayBtn />
                  </button>

                  {/* <Popup
                    modal
                    trigger={
                      <button
                        className={`${styles["play-btn"]}`}
                        // onClick={() => handlePlayTrailer(result.id)}
                        onClick={() => handlePlayTrailer}
                      >
                        play
                      </button>
                    }
                  >
                    {trailerByID && trailerByID.length > 0 ? (
                      <>
                        {trailerByID.map(
                          (trailer: TrailerResult, index: number) => {
                            return (
                              <div
                                key={index}
                                className={`${styles["player-wrapper"]}`}
                              >
                                <div className={`${styles["player-content"]}`}>
                                  <span>{trailer.id}</span>
                                  <button onClick={close}>X</button>
                                </div>

                                <ReactPlayer
                                  url="https://www.youtube.com/watch?v=L_z9YHX5ous"
                                  width="640px"
                                  height="360px"
                                  playing={true}
                                  controls={false}
                                />
                              </div>
                            );
                          }
                        )}
                        )
                      </>
                    ) : (
                      "no data"
                    )}
                  </Popup> */}

                  {isOpen && (
                    <Popup
                      trigger={
                        <button className={`${styles["play-btn"]}`}></button>
                      }
                      closeOnDocumentClick={false}
                    >
                      <div className="flex justify-between p-[16px] bg-black">
                        <div className="text-white text-[20px]">
                          <span>Official Trailer</span>
                        </div>
                        <button
                          className="text-white text-[16px] font-normal leading-none p-[6px]"
                          onClick={() => {
                            handleClose();
                          }}
                        >
                          X
                        </button>
                      </div>
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=L_z9YHX5ous"
                        width="1115px"
                        height="712px"
                        playing={false}
                        controls={true}
                      />
                    </Popup>
                  )}
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
      </div>
    </div>
  );
};

export default TrailersFilterOnTv;
