import React, { ChangeEvent } from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

type VolumeProps = {
  volume: number;
  min: string;
  max: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setVolume: (volume: number) => void;
};

const Volume: React.FC<VolumeProps> = ({
  volume,
  min,
  max,
  onChange,
  setVolume,
}) => {
  return (
    <div className="flex items-center">
      {volume <= 1 && volume > 0.5 && (
        <BsFillVolumeUpFill
          size={20}
          color="#fff"
          onClick={() => setVolume(0)}
        />
      )}
      {volume <= 0.5 && volume > 0 && (
        <BsVolumeDownFill size={20} color="#fff" onClick={() => setVolume(0)} />
      )}
      {volume === 0 && (
        <BsFillVolumeMuteFill
          size={20}
          color="#fff"
          onClick={() => setVolume(0.2)}
        />
      )}
      <input
        type="range"
        step="any"
        value={volume}
        min={min}
        max={max}
        onChange={onChange}
        className="xl:w-20 lg:w-20 h-1.5 ml-2 accent-white "
      />
    </div>
  );
};

export default Volume;
