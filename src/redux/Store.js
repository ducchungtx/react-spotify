import { configureStore } from "@reduxjs/toolkit";
import { SongSlice } from "./Slice/SongSlice";
import { SongsSlice } from "./Slice/SongsSlice";

export const Store = configureStore({
  reducer: {
    songs: SongsSlice.reducer,
    song: SongSlice.reducer
  }
});