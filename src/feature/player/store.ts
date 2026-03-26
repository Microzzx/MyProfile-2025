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

  setSong: (song: Track[]) => void;
  setActive: (a: number) => void;
  setPlaying: (p: boolean) => void;
  setToggle: (t: boolean) => void;
  setVolume: (v: number) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  songList: null,
  activeSong: 0,
  isPlaying: false,
  toggle: true,
  volume: 0.2,

  setSong: (song) => set({ songList: song }),
  setActive: (a) => set({ activeSong: a }),
  setPlaying: (p) => set({ isPlaying: p }),
  setToggle: (t) => set({ toggle: t }),
  setVolume: (v) => set({ volume: v }),
}));
