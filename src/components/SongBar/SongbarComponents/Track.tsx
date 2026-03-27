"use client";
import React from "react";
import { usePlayerStore } from "@/feature/player/store";
import WaveText from "@/components/WaveText";

const Track = () => {
  const { songList, activeSong, isPlaying } = usePlayerStore();
  if (!songList || !songList[activeSong]) return null;
  const currentTrack = songList[activeSong];
  return (
    <>
      <div
        className={`h-16 w-16 rounded-full overflow-hidden flex items-center justify-center animate-[spin_6s_linear_infinite] ${!isPlaying ? "[animation-play-state:paused]" : ""}`}
      >
        <img
          src={currentTrack.image}
          alt={currentTrack.title}
          className="rounded-full"
        />
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center w-44">
        <div className="songbar-text w-[100%] truncate text-center text-white font-bold text-xs mb-2">
          {isPlaying ? <WaveText text="Now playing..." /> : <span>Paused</span>}
        </div>
        <div className="songbar-text w-[100%] truncate text-center text-gray-300">
          <p>{currentTrack.title}</p>
        </div>
      </div>
    </>
  );
};

export default Track;
