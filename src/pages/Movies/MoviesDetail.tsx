import React, { useState, useCallback, useEffect, useMemo } from "react";

import { useParams } from "react-router-dom";
import { groupBy } from "lodash";

import Layout from "@/layouts/components/Layout";
import DetailMoviesBody from "@/layouts/DetailMoviesBody/DetailMoviesBody";
import movieDetailService from "@/services/movieDetailService";
import keywordService from "@/services/keywordService";
import { API_TOKEN } from "@/config/app.config";
import { TrendingResult } from "@/types/trending";
import { Credit } from "@/types/cast";
import { Keyword } from "@/types/keywords";
import { JOBS } from "@/utils/constants";
import { Recommendation } from "@/types/recommendations";
import recommendationsService from "@/services/recommendationsService";

const MoviesDetail = () => {
  const { movieId } = useParams();

  const [moviesDetail, setMoviesDetail] = useState<TrendingResult | undefined>(
    undefined
  );
  const [credits, setCredits] = useState<Credit | undefined>(undefined);
  const [keywords, setKeywords] = useState<Keyword | undefined>(undefined);
  const [recommendations, setRecommendations] = useState<
    Recommendation | undefined
  >(undefined);

  const getMovieDetail = useCallback(async () => {
    if (movieId !== undefined) {
      try {
        const MovieDetailData = await movieDetailService.getMoviesDetailById(
          API_TOKEN,
          movieId
        );
        const MovieDetailDataResult = MovieDetailData;
        setMoviesDetail(MovieDetailDataResult);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  const getCredits = useCallback(async () => {
    if (movieId !== undefined) {
      try {
        const CreditsData = await movieDetailService.getCreditsById(
          API_TOKEN,
          movieId
        );
        setCredits(CreditsData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  const getKeyword = useCallback(async () => {
    if (movieId !== undefined) {
      try {
        const keywordsData = await keywordService.getKeywords(
          API_TOKEN,
          movieId
        );
        setKeywords(keywordsData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  const getRecommendations = useCallback(async () => {
    if (movieId !== undefined) {
      try {
        const recommendationsData =
          await recommendationsService.getRecommendation(API_TOKEN, movieId);
        setRecommendations(recommendationsData);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  const allCast = useMemo(() => {
    if (credits) return credits.cast;

    return undefined;
  }, [credits]);

  const allCrew = useMemo(() => {
    if (credits) return credits?.crew;

    return undefined;
  }, [credits]);

  const jobByCrewData = useMemo(() => {
    if (credits) {
      const jobsByCrew = credits?.crew?.filter(
        (person) =>
          person.job === JOBS.DIRECTOR ||
          person.job === JOBS.WRITER ||
          person.job === JOBS.SCREENPLAY ||
          person.job === JOBS.STORY ||
          person.job === JOBS.CHARACTERS
      );

      const filteredByJobGroup = groupBy(jobsByCrew, ({ name }) => name);
      console.log(filteredByJobGroup);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const combinedJobs: any[] | undefined = [];
      Object.values(filteredByJobGroup).forEach((group) => {
        const combinedPerson = {
          id: group[0].id,
          name: group[0].name,
          job: group.map((person) => person.job).join(", "),
        };
        combinedJobs.push(combinedPerson);
      });

      console.log(combinedJobs);
      return combinedJobs;
    }

    return undefined;
  }, [credits]);

  const genre = useMemo(() => {
    if (moviesDetail) return moviesDetail.genres;

    return undefined;
  }, [moviesDetail]);

  const keyword = useMemo(() => {
    if (keywords) return keywords.keywords;

    return undefined;
  }, [keywords]);

  const recommendation = useMemo(() => {
    if (recommendations) return recommendations.results;
  }, [recommendations]);

  useEffect(() => {
    getMovieDetail();
    getCredits();
    getKeyword();
    getRecommendations();
  }, [getMovieDetail, getCredits, getKeyword, getRecommendations]);

  return (
    <Layout>
      <DetailMoviesBody
        movieData={moviesDetail}
        castData={allCast}
        crewData={allCrew}
        genre={genre}
        keywords={keyword}
        jobByCrewData={jobByCrewData}
        recommendations={recommendation}
      />
    </Layout>
  );
};

export default MoviesDetail;
