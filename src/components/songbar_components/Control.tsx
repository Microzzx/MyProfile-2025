import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

type ControlProps = {
  isPlaying: boolean;
  currentSongs: any[];
  handlePlayPause: () => void;
  handleNextSong: () => void;
  handlePrevSong: () => void;
};

const Control: React.FC<ControlProps> = ({
  isPlaying,
  currentSongs,
  handlePlayPause,
  handleNextSong,
  handlePrevSong,
}) => {
  return (
    <>
      <div className="flex items-center justify-start gap-5">
        <div className="hidden lg:flex">
          {currentSongs?.length && (
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
          {currentSongs?.length && (
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
