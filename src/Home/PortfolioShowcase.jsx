import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const PortfolioShowcase = () => {
  const [projects, setProjects] = useState([]);
  console.log("project", projects);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/project.json")
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setProjects(data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.error("Error fetching the JSON data:", error);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-6">
      {/** Section Header */}
      <div className="text-center" data-aos="fade-down">
        <h2 className="text-4xl font-bold mb-3 text-blue-400">
          Portfolio Showcase
        </h2>
        <p className="text-gray-300 max-w-xl">
          Explore my projects, achievements, and technical expertise. Each
          project is a testament to my dedication to innovation and
          problem-solving in web development.
        </p>
      </div>
      {/** Project Card */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mt-10 flex flex-wrap justify-center gap-8"
          >
            <div
              className="card glass  bg-opacity-10 backdrop-blur-md shadow-lg"
              data-aos="fade-up"
            >
              <figure className="p-4">
                <img
                  src={project.image}
                  alt="Project Preview"
                  className="rounded-lg h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-300">{project.name}</h2>
                <p className="text-gray-300">
                  {project.description.split(". ")[0]}...
                </p>
                <div className="card-actions justify-between mt-4">
                  {/** Detail Button */}
                  <Link to={`/details/${project.id}`}>
                    <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg transition hover:bg-blue-600">
                      Detail <MdArrowRight className="ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioShowcase;
