import { WatchListType } from "../../redux/app/features/interfaces";
import Episode from "../Home/Episode";
import { Episode as EpisodeType } from "../../Graphql/__generated__/graphql";

type Props = {
  watchlist: WatchListType;
  imgUrl: string;
  episode: EpisodeType;
};

const WatchingList = ({ watchlist, imgUrl, episode }: Props) => {
  console.log(watchlist);
  return (
    <div>
      <Episode
        episode={episode as EpisodeType}
        key={episode?.id}
        imgUrl={imgUrl}
      />
    </div>
  );
};

export default WatchingList;
