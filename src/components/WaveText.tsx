type WaveTextProps = {
  text: string;
};

const WaveText = ({ text }: WaveTextProps) => (
  <div className="wave">
    {text.split("").map((char, i) => (
      <span key={i} style={{ "--i": i } as React.CSSProperties}>
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </div>
);
export default WaveText;
