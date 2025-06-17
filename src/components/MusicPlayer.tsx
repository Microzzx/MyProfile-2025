import React from "react";

interface Song {
  title: string;
  subtitle: string;
  images: string;
}

interface Props {
  activeSong: Song;
  song: Song;
}

const MusicPlayer: React.FC<Props> = (props) => {
  const { activeSong, song } = props;
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-20 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex
        ${
          activeSong?.title === song.title &&
          activeSong?.subtitle === song.subtitle
            ? "flex bg-black bg-opacity-70"
            : "hidden"
        }`}
        >
          {/* <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlay={handlePlay}
            handlePause={handlePause}
          /> */}
        </div>

        <img className="h-56" alt="song_img" src={song?.images} />
      </div>
    </div>
  );
};

export default MusicPlayer;
