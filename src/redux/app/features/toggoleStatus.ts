import { createSlice } from "@reduxjs/toolkit";
import { WatchListType } from "./interfaces";

interface InitialToggoleStateTypes {
  watchLists: WatchListType[];
}
// fetching data from localhost for watchlist
const existingWatchList = localStorage.getItem("watchlist");
const parsedExistingWatchlist = JSON.parse(existingWatchList!) || [];

// initialState for toggole and save
const initialToggoleState: InitialToggoleStateTypes = {
  watchLists: parsedExistingWatchlist,
};

const toggoleSlice = createSlice({
  name: "toggole",
  initialState: initialToggoleState,
  reducers: {
    setWatchlisted(state, action) {
      const { id, isWatchlisted, isWatchinglisted, isWatchedlisted } =
        action.payload;
      const existingWatchList = localStorage.getItem("watchlist");
      const parsedExistingWatchlist = JSON.parse(existingWatchList!) || [];
      const updatedWatchList = parsedExistingWatchlist.map(
        (watchlistItem: WatchListType) => {
          if (watchlistItem.id === id) {
            return {
              ...watchlistItem,
              isWatchlisted: isWatchlisted,
              isWatchinglisted: isWatchinglisted,
              isWatchedlisted: isWatchedlisted,
            };
          }
          return watchlistItem;
        }
      );

      if (
        !parsedExistingWatchlist.some(
          (watchlistItem: WatchListType) => watchlistItem.id === id
        )
      ) {
        updatedWatchList.push({
          id: id,
          isWatchlisted: isWatchlisted,
          isWatchinglisted: isWatchinglisted,
          isWatchedlisted: isWatchedlisted,
        });
      }

      state.watchLists = updatedWatchList;

      localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
    },
  },
});

export const { setWatchlisted } = toggoleSlice.actions;
export default toggoleSlice.reducer;
