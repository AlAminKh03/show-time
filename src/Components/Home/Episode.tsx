import { Episode } from "../../Graphql/__generated__/graphql";
import { EpImageType } from "./Episodes";

const SinglEpisode = ({
  episode,
  imgUrl,
}: {
  episode: Episode;
  imgUrl: string;
}) => {
  console.log(episode);
  return (
    <div>
      <p>{episode.name}</p>
      <img
        src={imgUrl}
        alt={`episodes ${episode.id}`}
        className="w-32 h-40 object-contain"
      />
    </div>
  );
};

export default SinglEpisode;
