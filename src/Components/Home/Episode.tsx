import { Episode } from "../../Graphql/__generated__/graphql";
import {
  BsFillBookmarkFill,
  BsBookmarkCheckFill,
  BsCheckAll,
} from "react-icons/bs";
import { CgLivePhoto } from "react-icons/cg";
import { TbLivePhotoOff } from "react-icons/tb";
import { MdOutlineRemoveDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setWatchlisted } from "../../redux/app/features/toggoleStatus";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/app/store";

const SingleEpisode = ({
  episode,
  imgUrl,
}: {
  episode: Episode;
  imgUrl: string;
}) => {
  const dispatch = useDispatch();
  const [isWatchListed, setIsWatchListed] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const { watchLists } = useSelector((state: RootState) => state.toggole);

  useEffect(() => {
    const isWatchlisted = watchLists?.some(
      (watchlistItem) =>
        watchlistItem.id === episode.id && watchlistItem.isWatchlisted
    );
    const isWatchinglisted = watchLists?.some(
      (watchlistItem) =>
        watchlistItem.id === episode.id && watchlistItem.isWatchinglisted
    );
    const isWatchedlisted = watchLists?.some(
      (watchlistItem) =>
        watchlistItem.id === episode.id && watchlistItem.isWatchedlisted
    );

    if (isWatchlisted !== isWatchListed) {
      setIsWatchListed(isWatchlisted);
    }
    if (isWatchinglisted !== isWatching) {
      setIsWatching(isWatchinglisted);
    }
    if (isWatchedlisted !== isWatched) {
      setIsWatched(isWatchedlisted);
    }
  }, [episode.id, isWatchListed, isWatching, isWatched]);

  const handleIsWatchedButton = () => {
    setIsWatchListed(!isWatchListed);
    dispatch(
      setWatchlisted({
        id: episode.id,
        isWatchlisted: !isWatchListed,
        isWatchinglisted: false,
        isWatchedlisted: false,
      })
    );
  };

  const handleWatchingButton = () => {
    setIsWatching(!isWatching);
    dispatch(
      setWatchlisted({
        id: episode.id,
        isWatchlisted: false,
        isWatchinglisted: !isWatching,
        isWatchedlisted: false,
      })
    );
  };
  const handleWatchedButton = () => {
    setIsWatched(!isWatched);
    dispatch(
      setWatchlisted({
        id: episode.id,
        isWatchedlisted: !isWatched,
        isWatchinglisted: false,
        isWatchlisted: false,
      })
    );
  };

  return (
    <div className="shadow-lg bg-gray-50">
      <div className="relative">
        <img
          src={imgUrl}
          alt={`episodes ${episode.id}`}
          className="w-full h-[220px] object-cover"
        />
        {isWatchListed && (
          <span className="bg-black text-sm  text-yellow-500 absolute p-1 rotate-45 -right-6 top-2">
            WatchListed
          </span>
        )}
        {isWatched && (
          <span className="text-xs bg-green-100 p-1 text-black  absolute  right-2 rounded-sm top-2 ">
            Watched
          </span>
        )}
        <div
          className="absolute top-0 -left-[6px]  p-[1px]  shadow-xl cursor-pointer "
          onClick={handleIsWatchedButton}
        >
          {isWatchListed ? (
            <>
              <BsBookmarkCheckFill className=" w-12 h-12 text-yellow-500 z-10 absolute -top-1" />

              <BsFillBookmarkFill className=" w-12 h-12  absolute top-[1px] left-1 text-black z-0" />
            </>
          ) : (
            <>
              <BsFillBookmarkFill className=" w-12 h-12 text-blue-600 z-10 absolute -top-1" />
              <BsFillBookmarkFill className=" w-12 h-12  absolute top-[1px] left-1 text-black z-0" />
              <span className="text-3xl absolute -top-[2px] left-[16px] text-white z-20">
                +
              </span>
            </>
          )}
        </div>
      </div>
      <div className="flex pt-2 p-4 justify-between">
        <span
          className="text-xs cursor-pointer relative"
          onClick={handleWatchedButton}
        >
          {isWatched ? (
            <>
              <BsCheckAll className="text-green-500 w-8 h-8" />
              <span className="text-xs text-green-400">Watched</span>
            </>
          ) : (
            <>
              <MdOutlineRemoveDone className=" w-8 h-8" />
              <span className="text-xs text-gray-400 text-left">
                not watched yet!!
              </span>
            </>
          )}
        </span>
        <span
          className="w-8 h-8 cursor-pointer relative "
          onClick={handleWatchingButton}
        >
          {isWatching ? (
            <>
              <CgLivePhoto className="w-8 h-8 text-red-500 animate-spin-slow " />
              <span className="text-xs bg-white p-1 text-red-600 text-left absolute -top-[220px] -left-8 inline-flex items-center gap-1 rounded-sm">
                Watching
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </span>
            </>
          ) : (
            <>
              <TbLivePhotoOff className="w-8 h-8 text-gray-700" />
              <span className="text-xs text-gray-400 text-left"></span>
            </>
          )}
        </span>
      </div>
      <div className="px-4 pb-4 text-left">
        <p className="bg-green-200 p-1 inline-flex text-xs ">
          {Number(episode?.id!) <= 9
            ? `s01e0${episode.id}`
            : `s01e${episode.id}`}
        </p>
        <p className=" pt-2 ">{episode.name}</p>
        <p className="text-gray-400 text-xs">{episode.air_date}</p>
      </div>
    </div>
  );
};

export default SingleEpisode;
