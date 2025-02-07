import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ParticleBg from "../ParticleBg/ParticleBg";

const PortfolioDetails = () => {
  const { id } = useParams();
  const [projectDetail, setProjectDetail] = useState(null);

  // Fetch project details based on ID
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
      <div className="flex items-center gap-4 my-5 border-b-2 p-2 active">
        <Link to="/">
          <button className="active text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200">
            Back
          </button>
        </Link>
        <h2 className="text-2xl  font-semibold active">
          Project : {projectDetail.title}
        </h2>
      </div>

      <div className="container mx-auto my-10 flex gap-10 flex-wrap ">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-[#51A2FF]!">
            {projectDetail.name}
          </h1>
          <p className="mb-6 text-[#D1D5DC]">{projectDetail.description}</p>

          <h2 className="text-xl font-semibold mb-2 text-[#E5E7EB]">
            Core Technologies:
          </h2>
          <ul className="list-disc mb-6 flex flex-wrap gap-2">
            {projectDetail.core_technologies?.map((tech, index) => (
              <p key={index} className="text-gray-600 border active">
                {tech}
              </p>
            ))}
          </ul>

          <a href={projectDetail.github_url} target="_blank">
            <button className="active text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 mr-5">
              GitHub Repo
            </button>
          </a>
          <a href={projectDetail.live_demo_url} target="_blank">
            <button className="bg-[#E6641A] text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200">
              Live Demo
            </button>
          </a>
        </div>

        <div className="flex-1">
          <img
            src={projectDetail.image}
            alt={projectDetail.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h2 className="text-xl font-semibold mt-6 text-[#E5E7EB]">
            Key Features:
          </h2>
          <ul className="list-disc pl-5">
            {projectDetail.key_features?.map((feature, index) => (
              <li key={index} className="text-[#D1D5DC]">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
