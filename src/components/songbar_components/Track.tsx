import React from "react";

type TrackProps = {
  activeSong: any;
  isPlaying: boolean;
};

const Track: React.FC<TrackProps> = ({ activeSong, isPlaying }) => {
  return (
    <>
      <div
        className={`${
          isPlaying ? "animate-[spin_3s_linear_infinite] h-16 w-16" : ""
        } block h-16 w-16`}
      >
        <img src={activeSong.images} alt="cover art" className="rounded-full" />
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center w-44">
        <p className="songbar-text w-[100%] truncate text-center text-white font-bold text-xs mb-2">
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
                )
              )}
            </div>
          ) : (
            "Paused"
          )}
        </p>
        <p className="songbar-text w-[100%] truncate text-center text-gray-300">
          {activeSong.title}
        </p>
      </div>
    </>
  );
};

export default Track;
