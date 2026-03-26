"use client";
import React from "react";
import { usePlayerStore } from "@/feature/player/store";

const Track = () => {
  const { songList, activeSong, isPlaying } = usePlayerStore();
  if (!songList) return null;
  return (
    <>
      <div
        className={`${
          isPlaying ? "animate-[spin_3s_linear_infinite] h-16 w-16" : ""
        } block h-16 w-16`}
      >
        <img
          src={songList[activeSong].image}
          alt="cover art"
          className="rounded-full"
        />
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center w-44">
        <div className="songbar-text w-[100%] truncate text-center text-white font-bold text-xs mb-2">
          {isPlaying ? (
            <div className="wave">
              {"Now playing...".split("").map((char: string, i: number) =>
                char === " " ? (
                  <span style={{ "--i": i }} key={i}>
                    &nbsp;
                  </span>
                ) : (
                  <span style={{ "--i": i }} key={i}>
                    {char}
                  </span>
                ),
              )}
            </div>
          ) : (
            <div>Paused</div>
          )}
        </div>
        <div className="songbar-text w-[100%] truncate text-center text-gray-300">
          <p>{songList[activeSong].title}</p>
        </div>
      </div>
    </>
  );
};

export default Track;
