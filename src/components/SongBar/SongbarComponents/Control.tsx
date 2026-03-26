"use client";
import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { usePlayerStore } from "@/feature/player/store";

type ControlProps = {
  handlePlayPause: () => void;
  handleNextSong: () => void;
  handlePrevSong: () => void;
};

const Control: React.FC<ControlProps> = ({
  handlePlayPause,
  handleNextSong,
  handlePrevSong,
}) => {
  const { songList, isPlaying } = usePlayerStore();
  return (
    <>
      <div className="flex items-center justify-start gap-5">
        <div className="hidden lg:flex">
          {songList?.length && (
            <MdSkipPrevious
              color="#FFF"
              className="cursor-pointer songbar-icon-1"
              onClick={handlePrevSong}
            />
          )}
        </div>
        {isPlaying ? (
          <BsFillPauseFill
            color="#FFF"
            onClick={handlePlayPause}
            className="cursor-pointer songbar-icon-2"
          />
        ) : (
          <BsFillPlayFill
            color="#FFF"
            onClick={handlePlayPause}
            className="cursor-pointer songbar-icon-2"
          />
        )}
        <div className="hidden lg:flex">
          {songList?.length && (
            <MdSkipNext
              color="#FFF"
              className="cursor-pointer songbar-icon-1"
              onClick={handleNextSong}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Control;
