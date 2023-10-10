import { Episode } from "../../Graphql/__generated__/graphql";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineRemoveDone } from "react-icons/md";

const SinglEpisode = ({
  episode,
  imgUrl,
}: {
  episode: Episode;
  imgUrl: string;
}) => {
  console.log(episode);
  return (
    <div className="shadow-lg bg-gray-50">
      <div className="relative">
        <img
          src={imgUrl}
          alt={`episodes ${episode.id}`}
          className="w-full h-[220px] object-cover"
        />
        <BsFillBookmarkFill className=" absolute top-0 -left-[6px] w-10 h-10  p-[1px]  shadow-xl " />
        <span className="text-2xl absolute top-0 left-[5px] text-white">+</span>
      </div>
      <div className="flex items-start justify-between pt-2">
        <span className="text-xs">
          {" "}
          <MdOutlineRemoveDone className="w-6 h-6 " />
        </span>
        <span className="w-10 h-10">
          <IoEyeSharp className="w-6 h-6 " />
        </span>
      </div>
      <div className="p-2 text-left">
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

export default SinglEpisode;
