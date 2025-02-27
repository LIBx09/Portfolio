import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/Profile.jpg";
import vite from "../assets/vite.svg";
import react from "../assets/react.svg";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 min-h-screen  text-white">
      {/** Left Section - Text Content */}
      <div className="z-10 text-center md:text-left" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-gray-200">Frontend Developer</h2>

        <p className="text-2xl text-blue-400 font-semibold mt-2">
          <Typewriter
            words={["Web Developer", "Content Writer", "UI/UX Designer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        <p className="mt-4 text-gray-300">
          Code. Create. Innovate – Bringing Ideas to Life Through Web
          Development.
        </p>

        {/** Skill Badges */}
        <div className="flex flex-wrap gap-3 mt-5">
          {[
            "React",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full border border-blue-500 text-blue-300 text-sm hover:bg-blue-500 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1ODH5o_eOA0KDa1ooGnIWBcTQNShjhFHZ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 mt-5 bg-[#e25f18] py-2 rounded-full border border-blue-500 text-White text-sm hover:bg-blue-500 hover:text-white transition">
              Resume
            </button>
          </a>
        </div>
        <div className="flex gap-4 mt-10">
          <a
            href="https://www.facebook.com/profile.php?id=100005664797373"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              <FaFacebook className="mr-2" />
              Facebook
            </button>
          </a>

          <a
            href="https://github.com/LIBx09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200">
              <FaGithub className="mr-2" />
              GitHub
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/fuad-hasan-a5b67634b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-200">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </button>
          </a>
        </div>
      </div>

      <div className="relative mt-10 md:mt-0" data-aos="fade-left">
        <div className="flex justify-end">
          <img src={react} alt=" " />
        </div>
        <div className="p-[4px] rounded-full bg-gradient-to-r from-[#3b82f6] via-[#9333ea] to-[#3b82f6]">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-[300px] h-[300px]  bg-gray-800 p-1"
          />
        </div>
        <div className="flex justify-between">
          <img src={vite} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
