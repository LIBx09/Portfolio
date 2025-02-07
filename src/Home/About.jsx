import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import work_animation from "../../public/workflow.json";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 rounded-tl-2xl rounded-br-2xl">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
          About Me
        </h2>
        <p className="text-gray-400 max-w-md mx-auto" data-aos="fade-down">
          Turning concepts into interactive and scalable web applications.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-10 w-full max-w-4xl">
        {/** About Info */}
        <div
          className="p-6 rounded-lg shadow-lg bg-gray-800 transition hover:scale-105 w-full md:w-1/2 border"
          data-aos="fade-right"
          style={{
            borderImage:
              "linear-gradient(to right, #3b82f6, #9333ea, #3b82f6) 1",
            borderImageSlice: 1,
          }}
        >
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-blue-400">Hello,</span> <br /> I&apos;m
            Ibrahim Hasan Fuad
          </h2>
          <p className="text-gray-300">
            A passionate MERN stack developer with a love for solving complex
            challenges and crafting seamless digital experiences. Dedicated to
            delivering high-quality, scalable solutions, I thrive on continuous
            learning and innovation.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">My Programming Journey</h3>
            <p className="text-gray-300">
              My programming journey started in college, where I first got
              introduced to coding. I began with JavaScript, and over time, I
              delved into the MERN stack, which became my forte. I love working
              with technologies like React, Node.js, and MongoDB to create
              dynamic, efficient, and scalable web applications.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">What I Enjoy</h3>
            <p className="text-gray-300">
              I enjoy building full-stack applications where I can handle both
              the frontend and backend, creating seamless user experiences and
              robust server-side logic. I take pride in solving real-world
              problems and creating solutions that benefit users and businesses.
            </p>
          </div>
        </div>

        {/** Lottie Animation */}
        <div
          data-aos="fade-left"
          className="w-full md:w-1/2 -mt-10 md:-mt-24 lg:-mt-24"
        >
          <Lottie animationData={work_animation} className="max-h-60 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;
