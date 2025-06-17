import Video_1 from "../assets/videos/Sequence.mp4";

type Props = {};

const VideoBox = (props: Props) => {
  return (
    <div className="flex flex-col absolute z-[-1] top-0 w-full">
      <video className="w-full" autoPlay loop>
        <source src={Video_1} type="video/mp4" />
      </video>
      <div className="w-full h-screen bg-[#81ac74]" />
    </div>
  );
};

export default VideoBox;
