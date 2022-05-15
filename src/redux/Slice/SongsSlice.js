import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/songs.json';

export const SongsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
  },
  reducers: {
    getListSong: (state) => {
      state.songs = data; // not need return it will auto update
    }
  }
});

// action because we use redux-toolkit and it define same name in reducer
export const { getListSong } = SongsSlice.actions;
// the selector to call using useSelector
export const songsSelector = state => state.songs;