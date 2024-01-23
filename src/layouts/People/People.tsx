import React from "react";

import { CastPeopleResult } from "@/types/people";
import { CastCredit } from "@/types/people";
import { CrewCredit } from "@/types/people";

import ShortcutBar from "../ShortcutBar/ShortcutBar";
import Image from "@/components/Image/Image";
import Button from "@/components/Button/Button";
import { ReactComponent as Keyboard } from "@/assets/images/keyboard.svg";
import { ReactComponent as Warning } from "@/assets/images/warning.svg";
import { ReactComponent as Circle } from "@/assets/images/circle.svg";

// import Tooltip from "@/components/Tooltip/Tooltip";

import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TextTruncate from "react-text-truncate";

const helmetContext = {};

interface peopleProps {
  peopleData: CastPeopleResult | undefined;
  castCredit: CastCredit[] | undefined;
  crewCredit: CrewCredit[] | undefined;
  yearByCast: CastCredit[] | undefined;
}

const PeoplePage = ({
  peopleData,
  castCredit,
  crewCredit,
  yearByCast,
}: peopleProps) => {
  return (
    <div className="mt-[64px]">
      {peopleData && castCredit && crewCredit && yearByCast && (
        <>
          <HelmetProvider content={helmetContext}>
            <Helmet>
              {" "}
              <title>{peopleData.name}</title>
              <meta name="description" content={peopleData.biography} />
              <meta
                name="keywords"
                content="Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"
              />
            </Helmet>
          </HelmetProvider>
          <main className="w-full flex justify-center mt-[64px] content-start flex-wrap bg-white">
            <section className="w-full flex justify-center flex-wrap items-start content-start">
              {/* shortcutBar */}
              <ShortcutBar />
              {/* detail */}
              <div className="w-full bg-white flex justify-center">
                <div className="w-full flex items-start">
                  <div className="max-w-[1400px] px-[40px] py-[30px] w-full flex items-start">
                    {/* col-left */}
                    <div className="min-w-[300px] w-[300px] justify-end">
                      <section className="flex flex-nowrap ">
                        <div className="block min-w-[300px] w-[300px] h-[450px] relative top-0 left-0">
                          <div className="rounded-[8px] overflow-hidden w-full h-full min-h-full bg-[#dbdbdb] flex justify-center">
                            {peopleData.profile_path ? (
                              <>
                                <Image
                                  src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${peopleData.profile_path}`}
                                  alt={peopleData.name}
                                />
                              </>
                            ) : peopleData.gender === 2 ||
                              peopleData.gender === 0 ? (
                              <>
                                <Image
                                  src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                                  className="w-[50%]"
                                />
                              </>
                            ) : (
                              <>
                                <Image
                                  src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg"
                                  className="w-[50%]"
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </section>

                      <div className="w-full mt-[30px]">
                        <section>
                          <h3 className="text-[18.2px] mb-[8px]">
                            Personal Info
                          </h3>
                          <section>
                            <div className="mb-[20px] text-[14px] text-black flex flex-col">
                              <span className="font-bold">Known For</span>
                              {peopleData &&
                              peopleData.known_for_department.length > 0 ? (
                                peopleData.known_for_department
                              ) : (
                                <>-</>
                              )}
                            </div>
                            <div className="mb-[20px] text-[14px] text-black flex flex-col">
                              <span className="font-bold">Known Credits</span>
                              {peopleData && peopleData.name.length > 0 ? (
                                peopleData.name
                              ) : (
                                <>-</>
                              )}
                            </div>
                            <div className="mb-[20px] text-[14px] text-black flex flex-col">
                              <span className="font-bold">Gender</span>
                              {peopleData && peopleData.gender === 2 ? (
                                "Male"
                              ) : peopleData.gender === 1 ? (
                                "Female"
                              ) : (
                                <>-</>
                              )}
                            </div>
                            <div className="mb-[20px] text-[14px] text-black flex flex-col">
                              <span className="font-bold">Birthday</span>
                              {peopleData && peopleData.birthday ? (
                                peopleData.birthday
                              ) : (
                                <>-</>
                              )}
                            </div>
                            <div className="mb-[20px] text-[14px] text-black flex flex-col">
                              <span className="font-bold">Place of Birth</span>
                              {peopleData && peopleData.place_of_birth ? (
                                peopleData.place_of_birth
                              ) : (
                                <>-</>
                              )}
                            </div>
                            <div className="mb-[20px] text-[14px] text-black flex flex-col">
                              <span className="font-bold">Also Known As</span>
                              {peopleData && peopleData.also_known_as.length ? (
                                peopleData.also_known_as?.map((res, idx) => {
                                  return <ul key={idx}>{res}</ul>;
                                })
                              ) : (
                                <>-</>
                              )}
                            </div>
                          </section>
                        </section>
                        <section className="w-full mb-[60px] ">
                          <h4 className="text-[15.4px] inline-flex font-semibold">
                            Content Score
                          </h4>
                          <div className="bg-[#0000001a] rounded-[8px] ">
                            <div className="w-full h-[38px] bg-[#00000033] rounded-t-[8px]">
                              <div className="w-full border-[#202020] bg-[#e3e3e3] text-white flex items-center h-full overflow-visible px-[12px] rounded-t-[8px]">
                                <p className="text-black font-bold">88</p>
                              </div>
                              <p className="flex flex-wrap pt-[2px] pb-[4px] px-[12px] text-[12.6px] text-black bg-[#00000033] rounded-b-[8px]">
                                Almost there...
                              </p>
                            </div>
                          </div>
                        </section>
                        <div className="w-full mt-[30px]">
                          <Button className="border-[#01b4e4] bg-[#01b4e4] text-white rounded-[20px] px-[20px] py-[6px] text-[12.6px] hover:bg-black hover:border-black">
                            <a href="#" className="uppercase font-semibold">
                              edit page
                            </a>
                          </Button>
                        </div>

                        <div className="w-full mt-[30px]">
                          <a
                            href="#"
                            className="inline-flex items-center opacity-50 text-black text-[14px] hover:text-[#00000080]"
                          >
                            <Keyboard className="w-[19.6px] h-[19.6px] mr-[4px]" />
                            Keyboard Shortcuts
                          </a>
                        </div>

                        <div className="w-full mt-[20px]">
                          <a
                            href="#"
                            className="inline-flex items-center opacity-50 text-black text-[14px] hover:text-[#00000080]"
                          >
                            <Warning className="w-[19.6px] h-[19.6px] mr-[4px]" />
                            Report an Issue
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* col-right */}
                    <div>
                      <div className="max-w-[920px] w-[calc(100vw-80px-300px)] pl-[30px] flex bg-white flex-wrap">
                        <section className="w-full">
                          <div className="w-full">
                            <h2 className="w-full text-[30px]">
                              <Link to={`/person/${peopleData.id}`}>
                                {peopleData.name}
                              </Link>
                            </h2>
                          </div>
                        </section>
                        <section className="w-full mt-[30px]">
                          <h3 className="text-[18.2px] mb-[8px]">Biography</h3>
                          {peopleData && peopleData.biography.length ? (
                            <TextTruncate
                              line={3}
                              truncateText="…"
                              text={peopleData.biography}
                            />
                          ) : (
                            <>
                              <div>
                                <p>{`We don't have a biography for ${peopleData.name}.`}</p>
                              </div>
                            </>
                          )}
                        </section>
                        <section className="w-full mt-[30px]">
                          <div className="w-full">
                            <h3 className="text-[18.2px] mb-[8px]">
                              Known For
                            </h3>
                            <div className="relative top-0 left-0">
                              <ul className="min-h-[221px] flex overflow-y-hidden overflow-x-scroll flex-nowrap justify-start w-auto pb-[10px]">
                                {peopleData.known_for_department ===
                                "Acting" ? (
                                  castCredit
                                    .sort((a, b) =>
                                      a.title > b.title ? 1 : -1
                                    )
                                    .map((res: CastCredit, idx) => {
                                      return res.backdrop_path &&
                                        res.vote_average > 7 ? (
                                        <li
                                          key={idx}
                                          className="w-[130px] max-w-[195px] [&:not(:first-child)]:ml-[12px]"
                                        >
                                          <div className="w-[130px] h-[195px]">
                                            <a href={`/movie/${res.id}`}>
                                              {res.poster_path ? (
                                                <>
                                                  <Image
                                                    alt={res.title}
                                                    src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${res.poster_path}`}
                                                  />
                                                </>
                                              ) : (
                                                ""
                                              )}
                                            </a>
                                          </div>
                                          <p>
                                            <a
                                              href={`/movie/${res.id}`}
                                              className="pt-[4px] w-full h-full text-[12.6px] text-center inline-block hover:text-[#01b4e4]"
                                            >
                                              {res.title || res.name}
                                            </a>
                                          </p>
                                        </li>
                                      ) : (
                                        <></>
                                      );
                                    })
                                ) : peopleData.known_for_department ===
                                    "Directing" ||
                                  peopleData.known_for_department ===
                                    "Writing" ||
                                  peopleData.known_for_department ===
                                    "Production" ? (
                                  crewCredit.map((res: CrewCredit, idx) => {
                                    return (res.backdrop_path &&
                                      res.job === "Director") ||
                                      (res.job === "Writer" &&
                                        res.department === "Directing") ||
                                      res.department === "Writing" ? (
                                      <li
                                        key={idx}
                                        className="w-[130px] max-w-[195px] [&:not(:first-child)]:ml-[12px]"
                                      >
                                        <div className="w-[130px] h-[195px]">
                                          <a href={`/movie/${res.id}`}>
                                            <img
                                              src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${res.poster_path}`}
                                              alt={res.poster_path}
                                            />
                                          </a>
                                        </div>
                                        <p>
                                          <a
                                            href={`/movie/${res.id}`}
                                            className="pt-[4px] w-full h-full text-[12.6px] text-center inline-block hover:text-[#01b4e4]"
                                          >
                                            {res.title || res.name}
                                          </a>
                                        </p>
                                      </li>
                                    ) : (
                                      <></>
                                    );
                                  })
                                ) : (
                                  <></>
                                )}
                              </ul>
                            </div>
                          </div>
                        </section>
                        <section className="w-full mt-[20px] relative top-0 left-0">
                          {/* list */}
                          <div className="w-full">
                            {peopleData.known_for_department === "Acting" ? (
                              <>
                                <h3 className="text-[18.2px] inline-flex items-center justify-between">
                                  Acting
                                </h3>
                                <table className="mt-[10px] w-full  shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-[1px] border-solid border-[#e3e3e3] border-spacing-0 border-collapse">
                                  <tbody className="bg-white 0 border-[1px] border-solid border-[#e3e3e3] border-b-0">
                                    {castCredit &&
                                      castCredit.map((res, idx) => {
                                        return (
                                          <tr key={idx}>
                                            <td>
                                              <table className="w-full  py-[10px] ">
                                                <tbody className="bg-white ">
                                                  <tr className="border-b-[1px] border-solid border-[#e3e3e3] ">
                                                    <td className="w-[64px] align-text-top py-[8px] px-[16px]">
                                                      {res.first_air_date ||
                                                      res.release_date ? (
                                                        res.first_air_date?.slice(
                                                          0,
                                                          4
                                                        ) ||
                                                        res.release_date?.slice(
                                                          0,
                                                          4
                                                        )
                                                      ) : (
                                                        <>-</>
                                                      )}
                                                    </td>
                                                    <td className="w-[24px] align-text-top text-[#ccc]">
                                                      <span className="w-[14px] h-[14px]">
                                                        <Circle className="w-[14px] h-[14px]" />
                                                      </span>
                                                    </td>
                                                    <td className="py-[8px] px-[16px] align-text-top">
                                                      <Link
                                                        to={`/movie/${res.id}`}
                                                        className="text-black first-letter: hover:text-[#01b4e4]"
                                                      >
                                                        {res.name || res.title}
                                                      </Link>
                                                      <span className="block pl-[14px]">
                                                        {res.episode_count ? (
                                                          <>
                                                            <Link
                                                              to={`/tv/${res.id}`}
                                                            >
                                                              (
                                                              {
                                                                res.episode_count
                                                              }{" "}
                                                              episodes)&nbsp;
                                                            </Link>
                                                          </>
                                                        ) : (
                                                          <></>
                                                        )}
                                                        {res.character &&
                                                        res.character.length ? (
                                                          <>
                                                            as{" "}
                                                            <span className="text-[14px]">
                                                              {res.character}
                                                            </span>
                                                          </>
                                                        ) : (
                                                          <></>
                                                        )}
                                                      </span>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        );
                                      })}
                                  </tbody>
                                </table>
                              </>
                            ) : (
                              <></>
                            )}

                            {peopleData.known_for_department === "Writing" ? (
                              <>
                                <h3></h3>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </section>
                      </div>
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

export default PeoplePage;
