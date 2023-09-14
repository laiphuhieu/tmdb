import React, { useState, useCallback, useEffect } from "react";

import { useParams } from "react-router-dom";

import Layout from "@/layouts/components/Layout";
import DetailMoviesBody from "@/layouts/DetailMoviesBody/DetailMoviesBody";
import { TrendingResult } from "@/types/trending";
import trendingService from "@/services/trendingService";
import { API_TOKEN } from "@/config/app.config";

const MoviesDetail = () => {
  const { movieId } = useParams();
  const [moviesDetail, setMoviesDetail] = useState<TrendingResult | undefined>(
    undefined
  );

  const getMovieDetail = useCallback(async () => {
    if (movieId !== undefined) {
      try {
        const MovieDetailData = await trendingService.getMoviesDetailById(
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

  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);

  return (
    <Layout>
      <DetailMoviesBody movieData={moviesDetail} />
    </Layout>
  );
};

export default MoviesDetail;
