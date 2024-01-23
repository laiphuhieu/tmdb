import React from "react";

import styles from "./DetailMoviesBody.module.scss";
import { ReactComponent as ZoomBtn } from "@/assets/images/zoom.svg";
import { ReactComponent as Thumbnail } from "@/assets/images/thumbnail.svg";
import { ReactComponent as PlayBtn } from "@/assets/images/playbtn.svg";
import { ReactComponent as Arrow } from "@/assets/images/arrow-right.svg";
import { ReactComponent as Calendar } from "@/assets/images/calendar.svg";
import { ReactComponent as Heart } from "@/assets/images/heart.svg";
import { ReactComponent as Bookmark } from "@/assets/images/bookmark.svg";
import { ReactComponent as Star } from "@/assets/images/star.svg";
import { ReactComponent as Fb } from "@/assets/images/fb.svg";
import { ReactComponent as X } from "@/assets/images/x.svg";
import { ReactComponent as Instagram } from "@/assets/images/instagram.svg";
import { ReactComponent as Homepage } from "@/assets/images/homepage.svg";
import { ReactComponent as Keyboard } from "@/assets/images/keyboard.svg";
import { ReactComponent as Warning } from "@/assets/images/warning.svg";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { TrendingResult } from "@/types/trending";
import { CastResult } from "@/types/cast";
import { CrewResult } from "@/types/cast";
import { KeywordResult } from "@/types/keywords";
import { Genre } from "@/types/trending";
import { RecommendationResult } from "@/types/recommendations";
// import { CrewPeopleResult } from "@/types/people";
import ShortcutBar from "../ShortcutBar/ShortcutBar";
import Tooltip from "@/components/Tooltip/Tooltip";
import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";

interface MovieDetail {
  movieData: TrendingResult | undefined;
  castData: CastResult[] | undefined;
  crewData: CrewResult[] | undefined;
  genre: Genre[] | undefined;
  keywords: KeywordResult[] | undefined;
  // people: CrewPeopleResult[] | undefined;
  jobByCrewData: CrewResult[] | undefined;
  recommendations: RecommendationResult[] | undefined;
}

const helmetContext = {};

const DetailMoviesBody = ({
  movieData,
  castData,
  genre,
  crewData,
  keywords,
  jobByCrewData,
  recommendations,
}: MovieDetail) => {
  return (
    <div className="mt-[64px]">
      {movieData &&
        castData &&
        crewData &&
        genre &&
        keywords &&
        jobByCrewData &&
        recommendations && (
          <>
            <HelmetProvider context={helmetContext}>
              <Helmet>
                <title>{movieData.title}</title>
                <meta name="description" content={movieData.overview} />
                <meta
                  name="keywords"
                  content="Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"
                />
              </Helmet>
            </HelmetProvider>
            <main className="flex w-full mt-[64px] justify-center flex-wrap content-center bg-[#fff]">
              <section className="flex justify-center flex-wrap box-border w-full items-start content-start bg-cover bg-no-repeat bg-center">
                <ShortcutBar />
                {/* header */}
                <div
                  className="w-full bg-no-repeat bg-cover bg-left-top border-b-[1px] border-black border-solid"
                  style={{
                    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movieData.backdrop_path})`,
                  }}
                >
                  <div className={`${styles["custom-bg"]}`}>
                    <div className="py-[40px] px-[30px] max-w-[1400px] w-full box-border z-0">
                      <section className="flex flex-nowrap">
                        <div className="min-w-[300px] w-[300px] h-[450px] overflow-hidden rounded-[8px]">
                          <div className={`${styles["poster"]}`}>
                            <div className="w-full h-full min-w-full">
                              {movieData.poster_path ? (
                                <>
                                  <Image
                                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieData.poster_path}`}
                                    alt={`${movieData.title}`}
                                    className="block w-full min-w-full h-full min-h-full border-0 out"
                                  />
                                </>
                              ) : (
                                <>
                                  <Image
                                    className="bg-[#dbdbdb] h-full"
                                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                                  />
                                </>
                              )}
                            </div>
                            <div className={`${styles["zoom"]}`}>
                              <a
                                href="#"
                                className="w-full h-full inline-flex items-center justify-center text-[18.2px] text-white"
                              >
                                <ZoomBtn className={`${styles["zoom-btn"]}`} />
                                Expand
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* detail */}
                        <div className="flex text-white">
                          <section className="pl-[40px] flex flex-wrap items-start content-center box-border">
                            {/* detail-title */}
                            <div className="w-full mb-[24px] flex flex-wrap">
                              <h2 className="w-full m-0 p-0 text-[30.8px] mb-[4px]">
                                <a href="#" className="hover:text-[#ffffffb3]">
                                  {movieData.title}
                                </a>
                                <span className="opacity-80 font-normal">
                                  {" "}
                                  {movieData.release_date ? (
                                    <>({movieData.release_date.slice(0, 4)})</>
                                  ) : (
                                    ""
                                  )}
                                </span>
                              </h2>
                              <div className="flex">
                                {/* certification */}
                                <span className="inline-flex whitespace-nowrap items-center px-[4px] leading-none rounded-[2px] mr-[7px] border-solid border-[1px] border-[#ffffff99] text-[#ffffff99] text-[14px]">
                                  PG
                                </span>
                                {/* release */}
                                <span className="pl-0 relative top-0 left-0 max-w-[90px] text-[14px] leading-tight">
                                  {movieData.release_date} (US)
                                </span>
                                {/* genres */}
                                <span className="pf-[20px] relative top-0 left-0 text-[14px] max-w-[414px] leading-tight">
                                  {genre &&
                                    genre.map((res) => {
                                      return (
                                        <a
                                          key={res.id}
                                          href="#"
                                          className="hover:text-[#ffffffb3]"
                                        >
                                          {res.name},&nbsp;
                                        </a>
                                      );
                                    })}
                                </span>
                                {/* runtime */}
                                <span className="pl-[20px] relative top-0 left-0 text-[14px] leading-tight max-w-[58px]">
                                  1h 42m
                                </span>
                              </div>
                            </div>

                            {/* actions */}
                            <ul className="flex h-[68px] w-full mb-[20px] items-center justify-start">
                              {/* chart */}
                              <li className="inline-flex items-center justify-center box-border h-[68px] mr-[20px]">
                                <div className="w-[68px] h-[68px] inline-block scale-100 transition-transform duration-200 hover:scale-[1.1] cursor-pointer">
                                  <CircularProgressbarWithChildren
                                    value={
                                      Math.round(movieData.vote_average) * 10
                                    }
                                    className="bg-[#032541] rounded-[50%] text-white font-bold"
                                  >
                                    <span className="">
                                      <span className="text-white text-[25px] font-extrabold">
                                        {Math.round(movieData.vote_average) *
                                          10}
                                      </span>
                                      <span className="relative top-[-6px]">
                                        <sup className="text-[9px] text-white ">
                                          %
                                        </sup>
                                      </span>
                                    </span>
                                  </CircularProgressbarWithChildren>
                                </div>
                                <div className="font-bold ml-[6px] whitespace-pre-line leading-tight text-[14px]">
                                  User
                                  <br />
                                  Score
                                </div>
                              </li>
                              {/* tooltips */}

                              <Tooltip
                                title="Add to list"
                                position="bottom"
                                theme="dark"
                              >
                                <li className="px-[0px] py-[3px] mr-[20px]">
                                  <a
                                    href="#"
                                    className="box-border bg-[#032541] rounded-[50%] w-[46px] h-[46px] inline-flex items-center justify-center"
                                  >
                                    <Thumbnail className="w-[14px] h-[14px]" />
                                  </a>
                                </li>
                              </Tooltip>
                              <Tooltip
                                title="Add to list"
                                position="bottom"
                                theme="dark"
                              >
                                <li className="px-[0px] py-[3px] mr-[20px]">
                                  <a
                                    href="#"
                                    className="box-border bg-[#032541] rounded-[50%] w-[46px] h-[46px] inline-flex items-center justify-center"
                                  >
                                    <Thumbnail className="w-[14px] h-[14px]" />
                                  </a>
                                </li>
                              </Tooltip>
                              <Tooltip
                                title="Add to list"
                                position="bottom"
                                theme="dark"
                              >
                                <li className="px-[0px] py-[3px] mr-[20px]">
                                  <a
                                    href="#"
                                    className="box-border bg-[#032541] rounded-[50%] w-[46px] h-[46px] inline-flex items-center justify-center"
                                  >
                                    <Thumbnail className="w-[14px] h-[14px]" />
                                  </a>
                                </li>
                              </Tooltip>
                              <Tooltip
                                title="Add to list"
                                position="bottom"
                                theme="dark"
                              >
                                <li className="px-[0px] py-[3px] mr-[20px]">
                                  <a
                                    href="#"
                                    className="box-border bg-[#032541] rounded-[50%] w-[46px] h-[46px] inline-flex items-center justify-center"
                                  >
                                    <Thumbnail className="w-[14px] h-[14px]" />
                                  </a>
                                </li>
                              </Tooltip>

                              {/* video */}
                              <li className="mr-0">
                                <a
                                  href="#"
                                  className="inline-flex items-center min-w-[95px] h-auto transition ease-linear duration-100 hover:opacity-60"
                                >
                                  <PlayBtn className="mr-[5px] w-[19.6px] h-[19.6px]" />
                                  <span className="text-[14px]">
                                    Play Trailer
                                  </span>
                                </a>
                              </li>
                            </ul>

                            {/* info */}
                            <div className="w-full">
                              {/* tagline */}
                              <h3 className="opacity-70 italic text-[15.4px] mb-0 font-normal">
                                {movieData.tagline}
                              </h3>
                              {/* overview */}
                              <h3 className="mt-[10px] mb-[8px] w-full text-[18.2px]">
                                Overview
                              </h3>
                              {/* film description */}
                              <div>
                                <p className="text-white leading-light">
                                  {movieData.overview}
                                </p>
                              </div>
                              {/* people */}
                              <ol className="mt-[20px] flex justify-start flex-wrap relative top-0 left-0">
                                {/* profile */}

                                {jobByCrewData &&
                                  jobByCrewData.map((res: CrewResult) => {
                                    return (
                                      <li
                                        key={res.id}
                                        className="h-auto - mb-0 w-[33%] basis-[33%] text-left pr-[20px] box-border min-w-[14px] "
                                      >
                                        <p className="text-white pt-[20px]">
                                          <Link
                                            to={`/person/${res.id}`}
                                            className="hover:text-[#ffffffb3]"
                                          >
                                            {res.name}
                                          </Link>
                                        </p>
                                        <p className="text-[12.6px] text-white">
                                          {res.job}
                                        </p>
                                      </li>
                                    );
                                  })}
                              </ol>
                            </div>
                          </section>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                {/* media */}
                <div className="bg-white w-full flex justify-center flex-wrap items-start content-start">
                  <div className="w-full flex items-start">
                    <div className="max-w-[1400px] px-[40px] py-[30px] w-full flex items-start">
                      {/* column left */}
                      <div>
                        <div className="bg-white w-[calc(100vw-80px-268px)] max-w-[calc(1400px-80px-268px)] flex flex-initial flex-wrap pr-[30px]">
                          {/* section1 */}
                          <section className="w-full block pb-[30px]">
                            <h3 className="text-[19.6px] mb-[20px] font-semibold">
                              Top Billed Cast
                            </h3>
                            {/* actors */}
                            <div className="relative top-0 left-0">
                              <ol className="overflow-x-scroll overflow-y-hidden ml-[-10px] mt-[-10px] pb-[10px] flex relative top-0 left-0">
                                {castData &&
                                  castData.map((res: CastResult) => {
                                    return (
                                      <li
                                        key={res.id}
                                        className="my-[10px] mr-[4px] ml-[10px] pb-[10px] overflow-hidden border-[1px] border-solid border-[#e3e3e3] min-w-[140px] w-[140px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                                      >
                                        <Link
                                          to={`/person/${res.id}`}
                                          className="mix-w-[138px] w-[138px] h-[175px] block bg-[#dbdbdb]"
                                        >
                                          {res.profile_path ? (
                                            <>
                                              <Image
                                                src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${res.profile_path}`}
                                                alt={res.name}
                                              />
                                            </>
                                          ) : res.gender === 2 ||
                                            res.gender === 0 ? (
                                            <>
                                              <Image src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg" />
                                            </>
                                          ) : (
                                            <>
                                              <Image src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg" />
                                            </>
                                          )}
                                        </Link>

                                        <p className="pt-[10px] px-[10px] text-[16px] overflow-hidden text-ellipsis">
                                          <a
                                            href="#"
                                            className="text-black font-bold hover:text-[rgba(0,0,0,0.5)]"
                                          >
                                            {res.name}
                                          </a>
                                        </p>

                                        <p className="px-[10px] font-thin text-[14.4px] overflow-hidden text-ellipsis">
                                          {res.character}
                                        </p>
                                      </li>
                                    );
                                  })}
                                <li className="ml-[10px] bg-transparent	flex items-center min-w-[140px] w-[140px]">
                                  <p className="px-[10px] flex items-center ">
                                    <a
                                      href=""
                                      className="flex items-center font-bold text-black hover:text-[#00000080]"
                                    >
                                      View More
                                      <span>
                                        <Arrow className="text-black w-[15.4px] h-[15.4px] ml-[4px]" />
                                      </span>
                                    </a>
                                  </p>
                                </li>
                              </ol>
                              {/* button */}
                              <p className="mt-[20px] text-[14px]">
                                <Link
                                  to={``}
                                  className="font-semibold text-[15.4px] text-black hover:text-[#00000080]"
                                >
                                  Full Cast & Crew
                                </Link>
                              </p>
                            </div>
                          </section>

                          {/* section2 */}
                          <section className="w-full block py-[30px] border-t border-solid border-[#d7d7d7]">
                            <section>
                              {/* menu */}
                              <div className="w-full flex items-baseline">
                                <h3 className="inline-block mr-[50px] text-[19.6px] font-semibold mb-[20px]">
                                  Social
                                </h3>
                                <ul className="w-full">
                                  <li className="inline-block mr-[24px] pb-[5px] text-[15.4px] ">
                                    <a
                                      href="#"
                                      className="text-black font-semibold"
                                    >
                                      Reviews
                                      <span className="inline-flex items-center opacity-60 font-semibold ml-[2px]">
                                        0
                                      </span>
                                    </a>
                                  </li>
                                  <li className="inline-block pb-[5px] text-[15.4px] border-b-[4px] border-solid border-black">
                                    <a
                                      href="#"
                                      className="text-black font-semibold"
                                    >
                                      Discussions
                                      <span className="inline-flex items-center opacity-60 font-semibold ml-[2px]">
                                        5
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              {/* content */}
                              <div className="flex w-full rounded-[8px]">
                                <div className="w-full">
                                  <div>
                                    <table className="w-full ">
                                      <thead className="hidden">
                                        <tr className="w-full bg-white rounded-[8px] flex items-center justify-between px-[20px] py-[12px] text-black border-[1px] border-solid border-[#e3e3e3] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                                          <th>Subject</th>
                                          <th>Status</th>
                                          <th>Replies</th>
                                          <th>Last Reply</th>
                                        </tr>
                                      </thead>
                                      <tbody className="w-full">
                                        <tr className="w-full bg-white rounded-[8px] flex items-center justify-between px-[20px] py-[12px] text-black border-[1px] border-solid border-[#e3e3e3] shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                                          <td className="w-[60%] text-[14px] ">
                                            <div className="w-full flex items-center justify-start flex-nowrap relative top-0 left-0">
                                              <div className="flex w-full">
                                                {/* avatar */}
                                                <div className="flex">
                                                  <span className="w-[32px] h-[32px] inline-block mr-[10px] ">
                                                    <a
                                                      href="#"
                                                      className="inline-block w-[32px] h-[32px] "
                                                    >
                                                      <span className="flex items-center justify-center text-center uppercase text-white text-[12.6px] font-semibold w-full h-full bg-[#ea148c] relative top-0 left-0 leading-[48px] rounded-[50%]">
                                                        W
                                                      </span>
                                                    </a>
                                                  </span>
                                                </div>
                                                <div className="flex items-center min-h-[32px]">
                                                  <a
                                                    href="#"
                                                    className="text-[14px] hover:text-[#00000080]"
                                                  >
                                                    Pixar&rsquo;s comeback?
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </td>

                                          <td className="text-[12.6px] ">
                                            <p className="pr-[40px] text-[12.6px] text-right">
                                              Open
                                            </p>
                                          </td>
                                          <td className="text-[12.6px]">
                                            <p className="text-[12.6px] text-right">
                                              1
                                            </p>
                                          </td>
                                          <td className="text-[12.6px] w-[230px] pl-[20px] whitespace-nowrap">
                                            <p className="overflow-hidden text-ellipsis text-[12.6px] text-right">
                                              Aug 21, 2023 at 12:21 AM
                                              <br />
                                              by
                                              <span>
                                                <a
                                                  href="#"
                                                  className="text-black"
                                                >
                                                  {" "}
                                                  DRDMovieMusings
                                                </a>
                                              </span>
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <p className="mt-[20px] text-[14px] ">
                                      <a
                                        href=""
                                        className="text-black text-[15.4px] font-bold hover:text-[#00000080]"
                                      >
                                        Go to Discussions
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </section>

                          {/* section3 */}
                          <section className="w-full block py-[30px] border-t border-solid border-[#d7d7d7]">
                            {/* menu */}
                            <div className="w-full flex items-baseline">
                              <h3 className="inline-block mr-[50px] text-[19.6px] font-semibold mb-[20px]">
                                Media
                              </h3>
                              <ul className="w-full">
                                <li className="inline-block mr-[24px] pb-[5px] text-[15.4px] border-b-[4px] border-solid border-black">
                                  <a
                                    href="#"
                                    className="text-black font-semibold"
                                  >
                                    Most Popular
                                  </a>
                                </li>

                                <li className="inline-block mr-[24px] pb-[5px] text-[15.4px] ">
                                  <a
                                    href="#"
                                    className="text-black font-semibold"
                                  >
                                    Videos
                                    <span className="inline-flex items-center opacity-60 font-semibold ml-[2px]">
                                      2
                                    </span>
                                  </a>
                                </li>

                                <li className="inline-block mr-[24px] pb-[5px] text-[15.4px] ">
                                  <a
                                    href="#"
                                    className="text-black font-semibold"
                                  >
                                    Backdrops
                                    <span className="inline-flex items-center opacity-60 font-semibold ml-[2px]">
                                      47
                                    </span>
                                  </a>
                                </li>

                                <li className="inline-block mr-[24px] pb-[5px] text-[15.4px] ">
                                  <a
                                    href="#"
                                    className="text-black font-semibold"
                                  >
                                    Poster
                                    <span className="inline-flex items-center opacity-60 font-semibold ml-[2px]">
                                      256
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* content */}
                            <div className="relative top-0 left-0">
                              <div className="flex w-full rounded-[8px] h-[300px] overflow-x-scroll overflow-y-hidden whitespace-nowrap pb-[10px] relative top-0 left-0">
                                {/* video */}
                                <div className="w-[533px] h-[300px] flex rounded-[8px] items-start">
                                  <div className="bg-trailerImg bg-cover bg-no-repeat bg-center w-[533px] h-[300px] overflow-hidden">
                                    <a
                                      href="#"
                                      className="h-full w-full flex items-center justify-center"
                                    >
                                      <div className="w-[67px] h-[67px] flex items-center justify-center rounded-[50%] bg-[#000000b3]">
                                        <span className="w-[50%] h-[50%] ">
                                          <PlayBtn className="transition-opacity ease-linear duration-200 hover:opacity-60" />
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                {/* backdrop */}
                                <div className="w-[533px] h-[300px] ">
                                  <img
                                    src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/it7yPSgca2VEJyXAqgjfaccgvJm.jpg"
                                    alt="Xứ Sở Các Nguyên Tố"
                                    className="w-[533px] h-[300px] min-w-[533px] min-h-[300px]"
                                  />
                                </div>
                                {/* poster */}
                                <div className="w-[200px] h-[300px] ">
                                  <img
                                    src="https://www.themoviedb.org/t/p/w220_and_h330_face/7GaeF6xeUbfXFZCtOCWs503CJUl.jpg"
                                    alt="Xứ Sở Các Nguyên Tố"
                                    className="w-[200px] h-[300px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </section>

                          {/* section4 */}
                          <section className="w-full py-[30px] border-t-[1px] border-solid border-[#d7d7d7]">
                            <div>
                              <h3 className="inline-block mr-[50px] text-[19.6px] font-semibold mb-[20px]">
                                Recommendations
                              </h3>
                              <div className="relative top-0 left-0">
                                <div className="overflow-y-hidden overflow-x-scroll whitespace-nowrap pb-[10px]">
                                  {recommendations &&
                                  recommendations.length > 0 ? (
                                    recommendations.map(
                                      (res: RecommendationResult) => {
                                        return (
                                          <div
                                            key={res.id}
                                            className="inline-block w-[250px] mr-[15px]"
                                          >
                                            <div className="w-[250px] h-[141px] overflow-hidden">
                                              <Link
                                                to={`/movie/${res.id}`}
                                                className={`${styles["card"]}`}
                                              >
                                                {res.backdrop_path ? (
                                                  <img
                                                    src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${res.backdrop_path}`}
                                                    alt={res.title}
                                                    className="top-0 left-0 w-[250px] h-[141px] rounded-[8px] relative"
                                                  />
                                                ) : (
                                                  <>
                                                    <img
                                                      src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                                                      alt={res.title}
                                                      className="h-[141px] w-[250px] bg-[#dbdbdb]"
                                                    />
                                                  </>
                                                )}
                                                <div
                                                  className={`${styles["card-detail"]}`}
                                                >
                                                  <span className="inline-flex text-[13px] items-center">
                                                    <Calendar className="mr-[4px] w-[14px] h-[14px]" />
                                                    {res.release_date}
                                                  </span>
                                                  <span className="inline-flex items-center">
                                                    <Heart className="mr-[4px] w-[16px] h-[16px] pl-[4px]" />
                                                    <Bookmark className="mr-[4px] w-[16px] h-[16px] pl-[4px]" />
                                                    <Star className="mr-[4px] w-[16px] h-[16px] pl-[4px]" />
                                                  </span>
                                                </div>
                                              </Link>
                                            </div>

                                            <div className="flex justify-between mt-[4px] text-black">
                                              <a
                                                href="#"
                                                className="text-[13px] pr-[20px] "
                                              >
                                                <h5>{res.title}</h5>
                                              </a>
                                              <span className="inline-flex items-center text-[14px]">
                                                {Math.round(res.vote_average) *
                                                  10}{" "}
                                                %
                                              </span>
                                            </div>
                                          </div>
                                        );
                                      }
                                    )
                                  ) : (
                                    <h1 className="text-[14px]">
                                      We don&apos;t have enough data to suggest
                                      any movies based on . You can help by
                                      rating movies you&apos;ve seen.
                                    </h1>
                                  )}
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>

                      {/* right column */}

                      <div className="min-w-[260px] w-[260px] flex flex-wrap">
                        <section className="pt-[4px] flex flex-wrap w-full max-w-[300px]">
                          {/* column1 */}
                          <div className="w-full">
                            <div className="w-full">
                              <section className="mb-[30px] w-full ">
                                {/* social links */}
                                <div className="flex">
                                  <Tooltip
                                    title="Visit Facebook"
                                    position="top"
                                    theme="dark"
                                  >
                                    <div className="mb-[30px] h-[30px]">
                                      <a href="#">
                                        <Fb className="w-[26.6px] h-[26.6px]" />
                                      </a>
                                    </div>
                                  </Tooltip>

                                  <Tooltip
                                    title="Visit Twitter"
                                    position="top"
                                    theme="dark"
                                  >
                                    <div className="mb-[30px] h-[30px] ml-[10px]">
                                      <a href="#">
                                        <X className="w-[26.6px] h-[26.6px]" />
                                      </a>
                                    </div>
                                  </Tooltip>

                                  <Tooltip
                                    title="Visit Instagram"
                                    position="top"
                                    theme="dark"
                                  >
                                    <div className="mb-[30px] h-[30px] ml-[10px]">
                                      <a href="#">
                                        <Instagram className="w-[26.6px] h-[26.6px]" />
                                      </a>
                                    </div>
                                  </Tooltip>

                                  <Tooltip
                                    title="Visit Homepage"
                                    position="top"
                                    theme="dark"
                                  >
                                    <div className="mb-[30px] h-[30px] ml-[10px] pl-[8px] border-l-[1px] border-[#d7d7d7]">
                                      <a href="#">
                                        <Homepage className="w-[26.6px] h-[26.6px]" />
                                      </a>
                                    </div>
                                  </Tooltip>
                                </div>

                                <p className="mb-[20px] text-[14px] text-black flex flex-col leading-tight">
                                  <span className="font-bold">
                                    Original Title
                                  </span>
                                  {movieData.original_title}
                                </p>

                                <p className="mb-[20px] text-[14px] text-black flex flex-col leading-tight">
                                  <span className="font-bold">Status</span>
                                  {movieData.status}
                                </p>

                                <p className="mb-[20px] text-[14px] text-black flex flex-col leading-tight">
                                  <span className="font-bold">
                                    Original Language
                                  </span>
                                  {movieData.original_language}
                                </p>

                                <p className="mb-[20px] text-[14px] text-black flex flex-col leading-tight">
                                  <span className="font-bold">Budget</span>
                                  {movieData.budget ? (
                                    <NumericFormat
                                      value={movieData.budget.toFixed(2)}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"$"}
                                    />
                                  ) : (
                                    <>-</>
                                  )}
                                </p>

                                <p className="mb-[20px] text-[14px] text-black flex flex-col leading-tight">
                                  <span className="font-bold">Revenue</span>
                                  {movieData.revenue ? (
                                    <NumericFormat
                                      value={movieData.revenue.toFixed(2)}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"$"}
                                    />
                                  ) : (
                                    <>-</>
                                  )}
                                </p>
                              </section>

                              <section className="w-full border-b-[1px] border-solid border-[#d7d7d7] mb-[30px]">
                                <h4 className="text-[15.4px] mb-[10px] font-semibold">
                                  Keywords
                                </h4>
                                <ul className="pb-[30px] w-full flex flex-wrap justify-start">
                                  {keywords && keywords.length > 0 ? (
                                    keywords.map((res: KeywordResult) => {
                                      return (
                                        <li
                                          key={res.id}
                                          className="mr-[5px] mb-[10px] leading-6 text-[12.6px] "
                                        >
                                          <a
                                            href="#"
                                            className="bg-[#0000001a] border-[1px] border-solid border-[#d7d7d7] text-black px-[10px] py-[4px] rounded-[4px]"
                                          >
                                            {res.name}
                                          </a>
                                        </li>
                                      );
                                    })
                                  ) : (
                                    <>
                                      <h1 className="text-[14px]">
                                        No keywords have been added.
                                      </h1>
                                    </>
                                  )}
                                </ul>
                              </section>
                            </div>
                          </div>

                          {/* column2 */}
                          <div className="w-full">
                            <section className="w-full mb-[60px] ">
                              <h4 className="text-[15.4px] inline-flex font-semibold">
                                Content Score
                              </h4>
                              <div className="bg-[#0000001a] rounded-[8px] ">
                                <div className="w-full h-[38px] bg-[#00000033] rounded-t-[8px]">
                                  <div className="w-full border-[#202020] bg-[#202020] text-white flex items-center h-full overflow-visible px-[12px] rounded-t-[8px]">
                                    <p className="text-white font-bold">100</p>
                                  </div>
                                  <p className="flex flex-wrap pt-[2px] pb-[4px] px-[12px] text-[12.6px] text-black bg-[#00000033] rounded-b-[8px]">
                                    Yes! Looking good!
                                  </p>
                                </div>
                              </div>
                            </section>
                            <section className="mb-[30px] w-full">
                              <h4 className="text-[15.4px] font-semibold mb-[10px] ">
                                Top Contributors
                              </h4>
                              <div className="flex w-full flex-wrap">
                                <div className="w-full h-[45px] mb-[20px] flex items-center">
                                  <div className="W-[45px] h-[45px]">
                                    <a href="#" className="w-[45px] h-[45px]">
                                      <img
                                        src="https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
                                        alt="raze464"
                                      />
                                    </a>
                                  </div>

                                  <div className="pl-[10px] ">
                                    <p className="text-black">
                                      <span className="font-semibold">320</span>
                                      <br />
                                      <a href="#">raze464</a>
                                    </p>
                                  </div>
                                </div>

                                <div className="w-full h-[45px] mb-[20px] flex items-center">
                                  <div className="W-[45px] h-[45px]">
                                    <a href="#" className="w-[45px] h-[45px]">
                                      <img
                                        src="https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
                                        alt="raze464"
                                      />
                                    </a>
                                  </div>

                                  <div className="pl-[10px] ">
                                    <p className="text-black">
                                      <span className="font-semibold">320</span>
                                      <br />
                                      <a href="#">raze464</a>
                                    </p>
                                  </div>
                                </div>

                                <div className="w-full h-[45px] mb-[20px] flex items-center">
                                  <div className="W-[45px] h-[45px]">
                                    <a href="#" className="w-[45px] h-[45px]">
                                      <img
                                        src="https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
                                        alt="raze464"
                                      />
                                    </a>
                                  </div>

                                  <div className="pl-[10px] ">
                                    <p className="text-black">
                                      <span className="font-semibold">320</span>
                                      <br />
                                      <a href="#">raze464</a>
                                    </p>
                                  </div>
                                </div>

                                <div className="w-full h-[45px] mb-[20px] flex items-center">
                                  <div className="W-[45px] h-[45px]">
                                    <a href="#" className="w-[45px] h-[45px]">
                                      <img
                                        src="https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
                                        alt="raze464"
                                      />
                                    </a>
                                  </div>

                                  <div className="pl-[10px] ">
                                    <p className="text-black">
                                      <span className="font-semibold">320</span>
                                      <br />
                                      <a href="#">raze464</a>
                                    </p>
                                  </div>
                                </div>

                                <p className="w-full">
                                  <a
                                    href="#"
                                    className="hover:text-[#00000080] text-[14px] text-black"
                                  >
                                    View Edit History
                                  </a>
                                </p>
                              </div>
                            </section>
                          </div>

                          {/* column3 */}
                          <div className="w-full mt-[30px]">
                            <Button className="border-[#202020] bg-[#202020] text-white rounded-[20px] px-[20px] py-[6px] text-[12.6px] hover:bg-black hover:border-black">
                              <a href="#" className="uppercase font-semibold">
                                edit page
                              </a>
                            </Button>
                          </div>

                          {/* column4 */}
                          <div className="w-full mt-[30px]">
                            <a
                              href="#"
                              className="inline-flex items-center opacity-50 text-black text-[14px] hover:text-[#00000080]"
                            >
                              <Keyboard className="w-[19.6px] h-[19.6px] mr-[4px]" />
                              Keyboard Shortcuts
                            </a>
                          </div>

                          {/* column5 */}
                          <div className="w-full mt-[20px]">
                            <a
                              href="#"
                              className="inline-flex items-center opacity-50 text-black text-[14px] hover:text-[#00000080]"
                            >
                              <Warning className="w-[19.6px] h-[19.6px] mr-[4px]" />
                              Report an Issue
                            </a>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </>
        )}
    </div>
  );
};

export default DetailMoviesBody;
