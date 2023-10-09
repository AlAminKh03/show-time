import { gql } from "./__generated__";

export const GET_EPISODES = gql(`
  query EpisodeQuery {
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`);
