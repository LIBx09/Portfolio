import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ParticleBg from "../ParticleBg/ParticleBg";

const PortfolioDetails = () => {
  const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState(null);

  useEffect(() => {
    fetch("/project.json")
      .then((response) => response.json())
      .then((data) => {
        const project = data.find((project) => project.id === id);
        setProjectDetail(project);
      })
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  }, [id]);

  if (projectDetail === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <ParticleBg />
      <div className="flex active flex-wrap items-center gap-4 my-5 container mx-auto border-b-2 p-2">
        <Link to="/">
          <button className="text-white active px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200">
            Back
          </button>
        </Link>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
          Project: <span className="text-slate-300">{projectDetail.title}</span>
        </h2>
      </div>

      <div className="container mx-auto my-10 flex flex-col lg:flex-row gap-10 px-4 sm:px-8">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-[#51A2FF]">
            {projectDetail.name}
          </h1>
          <p className="mb-6 text-[#D1D5DC]">{projectDetail.description}</p>

          <h2 className="text-lg md:text-xl font-semibold mb-2 text-[#E5E7EB]">
            Core Technologies:
          </h2>
          <ul className="list-disc  flex flex-wrap gap-2">
            {projectDetail.core_technologies?.map((tech, index) => (
              <p
                key={index}
                className="text-gray-600 active border px-2 py-1 rounded-lg"
              >
                {tech}
              </p>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-4">
            <a href={projectDetail.github_url} target="_blank">
              <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                GitHub
              </button>
            </a>
            <a href={projectDetail.live_demo_url} target="_blank">
              <button className="bg-[#E6641A] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Live Demo
              </button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <img
            src={projectDetail.image}
            alt={projectDetail.title}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          <h2 className="text-lg  md:text-xl font-semibold mt-6 text-[#E5E7EB]">
            Key Features:
          </h2>
          <ul className="list-disc pl-5 text-[#D1D5DC]">
            {projectDetail.key_features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="container active mx-auto my-10 px-4 sm:px-8">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#E5E7EB] my-5">
          Overcoming Challenges and Striving for Excellence in My Project
        </h3>
        <p className="text-[#D1D5DC] active">{projectDetail.note}</p>
      </div>
    </>
  );
};

export default PortfolioDetails;
