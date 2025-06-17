"use client";
import Img1 from "../assets/images/landscape2.gif";
import { useSelector, useDispatch } from "react-redux";
import { counterSelector } from "../features/counter/counterSlice";
import { useState } from "react";

export default function Home() {
  const num1 = useSelector(counterSelector);
  const [input1, setInput1] = useState("");
  return (
    <div className="flex flex-col  mx-[5%]">
      <div className="flex flex-col justify-start">
        <section id="Profile">
          <div className="section-div">
            <div className="flex flex-col">
              <h1 className="text-[#f6c344] text-3xl font-bold mb-10">
                Welcome to My Profile :D
              </h1>
              <p className="text-gray-300 text-xl typing">
                I'm a web developer seeking opportunities to enhance my
                front-end skills.
              </p>

              <input
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              <button onClick={() => console.log(input1)}>Send</button>
            </div>
          </div>
        </section>

        <section id="Aboutme">
          <div className="section-div">
            <h1 className="text-[#f6c344] text-4xl font-bold">
              My name is Janekit Prakittawornkul.
            </h1>
          </div>
        </section>

        <section id="Skills">
          <div className="section-div">
            <h1 className="text-[#f6c344] text-xl font-bold">Skills</h1>
            <img src={Img1.src} alt="test_img" />
          </div>
        </section>

        <section id="Project">
          <div className="section-div">
            <h1 className="text-[#f6c344] text-xl font-bold">Project</h1>
            <img src={Img1.src} alt="test_img" />
          </div>
        </section>

        <section id="Contact">
          <div className="section-div">
            <h1 className="text-[#f6c344] text-xl font-bold">Contact</h1>
            <img src={Img1.src} alt="test_img" />
          </div>
        </section>
      </div>
    </div>
  );
}
