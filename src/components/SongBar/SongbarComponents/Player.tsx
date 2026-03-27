"use client";
import React, { useRef, useEffect } from "react";
import { usePlayerStore } from "@/feature/player/store";

type PlayerProps = {
  onEnded: () => void;
};

const Player: React.FC<PlayerProps> = ({ onEnded }) => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const {
    songList,
    activeSong,
    isPlaying,
    volume,
    isSeeking,
    setCurrentTime,
    setDuration,
  } = usePlayerStore();

  const handleTimeUpdate = (): void => {
    if (!ref.current || isSeeking) return;
    setCurrentTime(ref.current.currentTime);
  };

  const handleLoadMetaData = (): void => {
    if (!ref.current) return;
    setDuration(ref.current.duration);
    ref.current.volume = volume;
  };

  useEffect(() => {
    if (!ref.current || !songList) return;
    if (isPlaying) {
      ref.current.play().catch(() => {});
    } else {
      ref.current.pause();
    }
  }, [isPlaying, activeSong, songList]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = volume;
  }, [volume]);

  if (!songList) return null;
  return (
    <audio
      crossOrigin="anonymous"
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={handleLoadMetaData}
      src={songList[activeSong].url}
      ref={ref}
      loop={false}
      onEnded={onEnded}
    />
  );
};

export default Player;
