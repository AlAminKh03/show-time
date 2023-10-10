import { createSlice } from "@reduxjs/toolkit";

interface InitialToggoleStateTypes {
  isWatching: boolean;
  isWatched: boolean;
  isWatchlisted: boolean;
}

const initialToggoleState: InitialToggoleStateTypes = {
  isWatching: false,
  isWatched: false,
  isWatchlisted: false,
};

const toggoleSlice = createSlice({
  name: "toggole",
  initialState: initialToggoleState,
  reducers: {
    setWatching(state, action) {
      state.isWatching = action.payload;
    },
    setWatched(state, action) {
      state.isWatched = action.payload;
    },
    setWatchlisted(state, action) {
      state.isWatchlisted = action.payload;
    },
  },
});

export const { setWatched, setWatching, setWatchlisted } = toggoleSlice.actions;
export default toggoleSlice.reducer;
