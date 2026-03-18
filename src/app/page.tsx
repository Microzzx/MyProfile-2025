"use client";
import SectionBox from "@/components/SectionBox";
import "../styles/typingText.css";
import Img1 from "../../public/images/landscape2.gif";
import { useSelector } from "react-redux";
import { counterSelector } from "@/redux/slices/counterSlice";
import { useState } from "react";

export default function HomePage() {
  const num1 = useSelector(counterSelector);
  const [input1, setInput1] = useState<string>("");
  return (
    <div className="flex flex-col mx-[5%] justify-start m-10">
      <SectionBox>
        <div className="flex flex-row my-[150px]">
          <div className="flex flex-col">
            <h1 className="text-[#f6c344] text-3xl font-bold mb-10 truncate">
              Welcome to My Profile :D
            </h1>
            <p className="text-gray-300 text-xl typing">
              I'm a web developer seeking opportunities to enhance my front-end
              skills.
            </p>

            <input value={input1} onChange={(e) => setInput1(e.target.value)} />
            <button onClick={() => console.log(input1)}>Send</button>
          </div>
        </div>
      </SectionBox>
      <section id="Profile"></section>

      <section id="Aboutme">
        <div className="flex flex-row my-[150px]">
          <h1 className="text-[#f6c344] text-4xl font-bold truncate">
            My name is Janekit Prakittawornkul.
          </h1>
        </div>
      </section>

      <section id="Skills">
        <div className="flex flex-row my-[150px]">
          <h1 className="text-[#f6c344] text-xl font-bold truncate">Skills</h1>
          <img src={Img1.src} alt="test_img" />
        </div>
      </section>

      <section id="Project">
        <div className="flex flex-row my-[150px]">
          <h1 className="text-[#f6c344] text-xl font-bold truncate">Project</h1>
          <img src={Img1.src} alt="test_img" />
        </div>
      </section>

      <section id="Contact">
        <div className="flex flex-row my-[150px]">
          <h1 className="text-[#f6c344] text-xl font-bold truncate">Contact</h1>
          <img src={Img1.src} alt="test_img" />
        </div>
      </section>
    </div>
  );
}
