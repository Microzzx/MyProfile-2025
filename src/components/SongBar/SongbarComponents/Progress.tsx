"use client";
import React, { ChangeEvent } from "react";
import { usePlayerStore } from "@/feature/player/store";
import styles from "@/styles/songBar.module.css";

const Progress = () => {
  const { currentTime, duration, isSeeking, setCurrentTime, setSeeking } =
    usePlayerStore();
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCurrentTime(Number(event.target.value));
  };
  const handleMouseDown = (): void => {
    setSeeking(true);
  };
  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>): void => {
    const audio = document.querySelector("audio") as HTMLAudioElement | null;
    if (audio) {
      audio.currentTime = Number(event.currentTarget.value);
    }
    setSeeking(false);
  };
  const formatTime = (time: number): string => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };
  return (
    <div className="flex items-center">
      <input
        type="range"
        value={currentTime}
        min={0}
        max={duration || 0}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onChange={handleChange}
        className="w-64 h-1.5 ml-2 accent-white"
      />
      <span className="text-xs text-gray-400 w-10">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
    </div>
  );
};

export default Progress;
