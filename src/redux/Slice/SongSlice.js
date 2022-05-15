import { createSlice } from "@reduxjs/toolkit";
import data from '../../data/songs.json';

export const SongSlice = createSlice({
  name: "song",
  initialState: {
    song: {
      name: "",
      author: "",
      url: "",
      id: null,
      links: {
        images: [
          {
            url: ""
          },
          {
            url: ""
          }
        ]
      }
    },
  },
  reducers: {
    getSongById: (state, action) => {
      // not need return it will auto update
      state.song = data.find(song => song.id === action.payload);
    },
    getSongByIndex: (state, action) => {
      state.song = data[action.payload];
    }
  }
});

// action because we use redux-toolkit and it define same name in reducer
export const { getSongById, getSongByIndex } = SongSlice.actions;
export const songSelector = state => state.song;