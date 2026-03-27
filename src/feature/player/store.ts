import { create } from "zustand";

export interface Track {
  index: number;
  title: string;
  image: string;
  url: string;
}

interface PlayerState {
  songList: Track[] | null;
  activeSong: number;
  isPlaying: boolean;
  toggle: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  isSeeking: boolean;

  setSong: (song: Track[]) => void;
  setActive: (a: number) => void;
  setPlaying: (p: boolean) => void;
  setToggle: (t: boolean) => void;
  setVolume: (v: number) => void;
  setCurrentTime: (t: number) => void;
  setDuration: (d: number) => void;
  setSeeking: (s: boolean) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  songList: null,
  activeSong: 0,
  isPlaying: false,
  toggle: true,
  volume: 0.2,
  currentTime: 0,
  duration: 0,
  isSeeking: false,

  setSong: (song) => set({ songList: song }),
  setActive: (a) => set({ activeSong: a }),
  setPlaying: (p) => set({ isPlaying: p }),
  setToggle: (t) => set({ toggle: t }),
  setVolume: (v) => set({ volume: v }),
  setCurrentTime: (t) => set({ currentTime: t }),
  setDuration: (d) => set({ duration: d }),
  setSeeking: (s) => set({ isSeeking: s }),
}));
