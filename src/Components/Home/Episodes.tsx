import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../Graphql/query";
import { Episode } from "../../Graphql/__generated__/graphql";
import SinglEpisode from "./Episode";
import React from "react";

export interface EpImageType {
  id: string;
  imgUrl: string;
}

const epImages = [
  { id: "1", imgUrl: "https://flxt.tmsimg.com/assets/p10399541_i_h10_aa.jpg" },
];
const Episodes = () => {
  const { data, error, loading } = useQuery(GET_EPISODES);

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
    <div>
      {results?.map((episode) => {
        return epImages?.map((epImage: EpImageType) => {
          if (episode?.id === epImage.id) {
            return (
              <SinglEpisode
                episode={episode as Episode}
                key={episode?.id}
                imgUrl={epImage.imgUrl}
              />
            );
          }
        });
      })}
    </div>
  );
};

export default Episodes;
