import WatchList from "./WatchList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { epImages } from "../../utils/ImagesArray";
import { EpImageType } from "../Home/Episodes";
import { Episode } from "../../Graphql/__generated__/graphql";
import { GET_EPISODES } from "../../Graphql/query";
import { useQuery } from "@apollo/client";

const WatchLists = () => {
  const { data, error, loading } = useQuery(GET_EPISODES);
  const { watchLists } = useSelector((state: RootState) => state.toggole);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  if (data?.episodes?.results?.length === 0) {
    return <p>No data found</p>;
  }
  const { results } = data?.episodes as { results: Episode[] };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-28">
      {watchLists?.map((watchlistItem: any) => {
        if (watchlistItem.isWatchlisted) {
          return epImages?.map((epImage: EpImageType) => {
            if (watchlistItem?.id === epImage.id) {
              return results?.map((episode) => {
                if (episode?.id === epImage.id) {
                  return (
                    <WatchList
                      key={episode?.id}
                      watchlist={watchlistItem}
                      imgUrl={epImage.imgUrl}
                      episode={episode as Episode}
                    />
                  );
                }
              });
            }
          });
        }
      })}
    </div>
  );
};

export default WatchLists;
