import { useState, useEffect } from "react";
import Track from "./songbar_components/Track";
import Control from "./songbar_components/Control";
import Volume from "./songbar_components/Volume";
import Player from "./songbar_components/Player";
import data from "../assets/data/myChart.json";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSong,
  playPause,
  playerSelector,
  nextSong,
  prevSong,
} from "../redux/slices/playerSlice";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const SongBar: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveSong(data));
  }, []);

  const { activeSong, isPlaying, currentSongs, currentIndex } =
    useSelector(playerSelector);

  const [toggle, setToggle] = useState(true);
  const [volume, setVolume] = useState(0); //0.2

  //auto play when song changed
  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(false));
    const index: number = (currentIndex + 1) % currentSongs.length;
    dispatch(nextSong(index));
  };

  const handlePrevSong = () => {
    dispatch(playPause(false));
    let index: number;
    if (currentIndex === 0) {
      index = currentSongs.length - 1;
    } else {
      index = currentIndex - 1;
    }
    dispatch(prevSong(index));
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Player
        activeSong={activeSong}
        isPlaying={isPlaying}
        volume={volume}
        onEnded={handleNextSong}
      />
      <div
        className={`hidden lg:flex ${
          toggle ? "right-0 " : "right-[-480px]"
        } items-center w-[500px] h-[100px] bg-black/30 rounded-l-lg smooth-transition bottom-10 fixed`}
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
          <Track activeSong={activeSong} isPlaying={isPlaying} />
          <div className="flex flex-col gap-3">
            <Control
              isPlaying={isPlaying}
              currentSongs={currentSongs}
              handlePlayPause={handlePlayPause}
              handleNextSong={handleNextSong}
              handlePrevSong={handlePrevSong}
            />
            <Volume
              volume={volume}
              min="0"
              max="1"
              onChange={(event) => setVolume(parseFloat(event.target.value))}
              setVolume={setVolume}
            />
          </div>
        </div>
      </div>

      {/* small device */}
      <div className="flex lg:hidden items-center bottom-5 right-5 fixed">
        <Track activeSong={activeSong} isPlaying={isPlaying} />
        <div className="flex absolute items-center justify-center h-16 w-16">
          <Control
            isPlaying={isPlaying}
            currentSongs={currentSongs}
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
