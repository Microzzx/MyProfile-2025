"use client";
import "../SongBar/SongBar.css";
import "../../styles/waveText.css";
import { useState, useEffect } from "react";
import { usePlayerStore } from "@/feature/player/store";
import Track from "./SongbarComponents/Track";
import Control from "./SongbarComponents/Control";
import Volume from "./SongbarComponents/Volume";
import Player from "./SongbarComponents/Player";
import Progress from "./SongbarComponents/Progress";
import data from "../../../public/data/myChart.json";

import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

type Props = React.HTMLAttributes<HTMLElement>;

const SongBar = ({ className, ...rest }: Props) => {
  const {
    songList,
    activeSong,
    isPlaying,
    toggle,
    setSong,
    setActive,
    setPlaying,
    setToggle,
  } = usePlayerStore();

  useEffect(() => {
    setSong(data.tracks);
  }, []);

  //auto play when song changed
  useEffect(() => {
    if (songList) setPlaying(true);
  }, [activeSong]);

  const handlePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    if (!songList) {
      return;
    }
    setPlaying(false);
    const index: number = (activeSong + 1) % songList.length;
    setActive(index);
  };

  const handlePrevSong = () => {
    if (!songList) return;
    setPlaying(false);
    let index: number;
    if (activeSong === 0) {
      index = songList.length - 1;
    } else {
      index = activeSong - 1;
    }
    setActive(index);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Player onEnded={handleNextSong} />
      <div
        className={`hidden lg:flex ${className} ${
          toggle ? "right-0 " : "right-[-480px]"
        } items-center w-[500px] h-[100px] bg-black/30 rounded-l-lg transition-all duration-400 ease-in-out bottom-10 fixed`}
        {...rest}
      >
        <div className="flex items-center justify-center">
          {toggle ? (
            <MdOutlineArrowForwardIos
              className="cursor-pointer songbar-icon-1"
              onClick={handleToggle}
            />
          ) : (
            <MdOutlineArrowBackIos
              className="cursor-pointer songbar-icon-1"
              onClick={handleToggle}
            />
          )}
        </div>

        <div className="flex items-center justify-center ms-5 gap-10">
          <Track />
          <div className="flex flex-col gap-3">
            <Control
              handlePlayPause={handlePlayPause}
              handleNextSong={handleNextSong}
              handlePrevSong={handlePrevSong}
            />
            <Volume />
          </div>
          <Progress />
        </div>
      </div>

      {/* small device */}
      <div className="flex lg:hidden items-center bottom-5 right-5 fixed">
        <Track />
        <div className="flex absolute items-center justify-center h-16 w-16">
          <Control
            handlePlayPause={handlePlayPause}
            handleNextSong={handleNextSong}
            handlePrevSong={handlePrevSong}
          />
        </div>
      </div>
    </>
  );
};

export default SongBar;
