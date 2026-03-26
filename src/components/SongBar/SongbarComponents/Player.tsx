"use client";
import React, { useRef, useEffect } from "react";
import { usePlayerStore } from "@/feature/player/store";
type PlayerProps = {
  onEnded: () => void;
};

const Player: React.FC<PlayerProps> = ({ onEnded }) => {
  const ref = useRef<HTMLAudioElement | null>(null);
  const { songList, activeSong, isPlaying, volume } = usePlayerStore();
  if (ref.current && songList) {
    if (isPlaying) {
      ref.current.play();
      // if (playPromise !== undefined) {
      //   playPromise
      //     .then(() => {
      //       // Playback started successfully
      //     })
      //     .catch((error) => {
      //       // Auto-play was prevented
      //       console.error("Autoplay prevented:", error);
      //     });
      // }
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  if (!songList) return null;
  console.log(activeSong);
  return (
    <audio
      crossOrigin="anonymous"
      onLoadedMetadata={() => {
        if (ref.current) {
          ref.current.volume = volume;
        }
      }}
      src={songList[activeSong].url}
      ref={ref}
      loop={false}
      onEnded={onEnded}
    />
  );
};

export default Player;
