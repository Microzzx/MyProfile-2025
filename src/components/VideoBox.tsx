type Props = {};

const VideoBox = (props: Props) => {
  return (
    <div className="flex flex-col absolute z-[-1] top-0 w-full">
      <video className="w-full" autoPlay loop muted playsInline>
        <source src="/videos/Sequence.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-screen bg-[#81ac74]" />
    </div>
  );
};

export default VideoBox;
