import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, store } from "../../redux/store";

type PlayerState = {
  currentSongs: any[];
  currentIndex: number;
  isPlaying: boolean;
  activeSong: any;
};

const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isPlaying: false,
  activeSong: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (state, action: PayloadAction<{ tracks: any[] }>) => {
      if (action.payload) {
        const tracks = action.payload.tracks;

        if (tracks.length > 0) {
          state.activeSong = tracks[0];
          state.currentSongs = tracks;
          state.currentIndex = 0;
        } else {
          console.log("setActiveSong: error tracks length = 0");
        }
      } else {
        console.log("setActiveSong: error tracks not found");
      }
    },

    nextSong: (state, action: PayloadAction<number>) => {
      if (action.payload || action.payload === 0) {
        state.activeSong = state.currentSongs[action.payload];
        state.currentIndex = action.payload;
      } else {
        console.log("nextSong: error no action.payload");
      }
    },

    prevSong: (state, action: PayloadAction<number>) => {
      if (action.payload || action.payload === 0) {
        state.activeSong = state.currentSongs[action.payload];
        state.currentIndex = action.payload;
      } else {
        console.log("prevSong: error no action.payload");
      }
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause } =
  playerSlice.actions;
export const playerSelector = (store: RootState) => store.musicPlayerReducer;
export default playerSlice.reducer;
