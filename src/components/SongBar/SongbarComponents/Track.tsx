"use client";
import React from "react";
import { usePlayerStore } from "@/feature/player/store";
import styles from "@/styles/songBar.module.css";
import WaveText from "@/components/WaveText/WaveText";
import Progress from "./Progress";
const Track = () => {
  const { songList, activeSong, isPlaying } = usePlayerStore();
  if (!songList || !songList[activeSong]) return null;
  const currentTrack = songList[activeSong];
  return (
    <>
      <div
        className={`h-16 w-16 rounded-full overflow-hidden flex items-center justify-center animate-[spin_6s_linear_infinite] 
          ${!isPlaying ? "[animation-play-state:paused]" : ""}`}
      >
        <img
          src={currentTrack.image}
          alt={currentTrack.title}
          className="rounded-full"
        />
      </div>

      <div className="hidden lg:flex flex-col gap-3 justify-center items-center w-44">
        <div
          className={`truncate text-center text-white font-bold text-xs" ${styles["songbar-text"]}`}
        >
          {isPlaying ? (
            <WaveText text={`Now playing - ${currentTrack.title}`} />
          ) : (
            <span>Paused</span>
          )}
        </div>
        <Progress />
      </div>
    </>
  );
};

export default Track;
