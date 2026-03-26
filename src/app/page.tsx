"use client";
import SectionBox from "@/components/SectionBox";
import "../styles/typingText.css";
import Img1 from "../../public/images/landscape2.gif";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function HomePage() {
  const [input1, setInput1] = useState<string>("");
  return (
    <div className="flex flex-col gap-7">
      <SectionBox id="Profile">
        <h1 className="text-[#f6c344] text-3xl font-bold mb-10 truncate">
          Profile Section
        </h1>
        <p className="text-gray-300 text-xl typing">
          I'm a web developer seeking opportunities to enhance my front-end
          skills.
        </p>

        <input value={input1} onChange={(e) => setInput1(e.target.value)} />
        <button onClick={() => console.log(input1)}>Send</button>
      </SectionBox>
      <SectionBox id="Aboutme">
        <h1 className="text-[#f6c344] text-3xl font-bold mb-10 truncate">
          About me Section
        </h1>
      </SectionBox>
      <SectionBox id="Skills">
        <h1 className="text-[#f6c344] text-3xl font-bold mb-10 truncate">
          Skills Section
        </h1>
        <img src={Img1.src} alt="test_img" />
      </SectionBox>

      <SectionBox id="Project">
        <h1 className="text-[#f6c344] text-3xl font-bold mb-10 truncate">
          Projects Section
        </h1>
        <img src={Img1.src} alt="test_img" />
      </SectionBox>

      <SectionBox id="Contact">
        <h1 className="text-[#f6c344] text-3xl font-bold mb-10 truncate">
          Contact Section
        </h1>
        <img src={Img1.src} alt="test_img" />
      </SectionBox>
    </div>
  );
}
