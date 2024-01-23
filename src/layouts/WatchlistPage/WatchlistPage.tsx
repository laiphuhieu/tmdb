import React, { useCallback, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import LoadingBar from "react-top-loading-bar";

import { TrendingResult } from "@/types/trending";
import { useAppDispatch, useAppSelector } from "@/custom-hooks/useApp";
import {
  setWatchList,
  removeFromWatchList,
} from "@/redux/slice.ts/watchListSlice";
import ConfirmModal from "@/components/ModalConfirm/ModalConfirm";
import { setProgress } from "@/redux/slice.ts/progressSlice";

const WatchListPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const watchList = useAppSelector((state) => state.watchList.watchList);
  const progress = useAppSelector((state) => state.progress.progress);

  useEffect(() => {
    const storedWatchList = localStorage.getItem("watchList");
    if (storedWatchList) {
      const parseWatchList = JSON.parse(storedWatchList);
      dispatch(setWatchList(parseWatchList));
    }
  }, [dispatch]);

  const handleRemoveFromWatchList = useCallback((movieId: number) => {
    setIsModalOpen(true);
    setSelectedMovieId(movieId);
  }, []);

  const handleConfirmRemove = useCallback(() => {
    if (selectedMovieId !== null) {
      dispatch(removeFromWatchList(selectedMovieId));
      const updatedWatchList = watchList.filter(
        (item) => item.id !== selectedMovieId
      );
      localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
      dispatch(setProgress(100));
      toast.success("Remove Succeed");
      setSelectedMovieId(null);
      setIsModalOpen(false);
    }
  }, [dispatch, watchList, selectedMovieId]);

  const handleCancelRemove = useCallback(() => {
    setSelectedMovieId(null);
    setIsModalOpen(false);
  }, []);

  return (
    <div className="mt-[64px]">
      <div className="py-[30px] px-[40px] h-[calc(100vh-64px-327px)]">
        <h2 className="text-[24px] mb-[20px]">My WatchList</h2>
        {watchList.length ? (
          watchList &&
          watchList?.map((data: TrendingResult, idx: number) => (
            <div key={idx} className="w-full mb-[20px]">
              <div className="flex w-full rounded-[8px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] border-[1px] border-solid border-gray bg-white">
                <div className="w-[calc(200px/1.5)] min-w-[calc(200px/1.5] ">
                  <div className="w-full h-full">
                    <a href={`movie/${data.id}`}>
                      <img
                        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
                        alt={data.title}
                        className="h-full"
                      />
                    </a>
                  </div>
                </div>
                <div className="w-full py-[10px] px-[15px] flex flex-wrap items-center content-center">
                  <div className="w-full">
                    <div>
                      <Link
                        to={`movie/${data.id}`}
                        className="text-[19.2px] hover:text-[#01b4e4]"
                      >
                        {data.title}
                      </Link>
                    </div>
                    <div className="mt-[20px] w-full">
                      <div>
                        <TextTruncate
                          line={3}
                          truncateText="..."
                          text={data.overview}
                          className="text-[16px] text-[#00000080]"
                        />
                      </div>
                    </div>
                    <div className="mt-[20px] w-full">
                      <button
                        onClick={() => handleRemoveFromWatchList(data.id)}
                        className="hover:opacity-40 hover:transition-colors hover:duration-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <LoadingBar
                color="#01b4e4"
                progress={progress}
                onLoaderFinished={() => dispatch(setProgress(0))}
              />
            </div>
          ))
        ) : (
          <>
            <div className="h-[calc(100vh-64px-327px)]">
              <div className="text-[16px]">
                You haven&apos;t added any movies to your watchlist.
                <div>
                  <Link to="/" className="text-[#01b4e4]">
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        <ConfirmModal
          isOpen={isModalOpen}
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
};

export default WatchListPage;
