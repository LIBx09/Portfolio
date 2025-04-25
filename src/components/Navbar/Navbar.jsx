import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value to control when the section is considered "active"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="navbar backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                onClick={() => handleScroll("home")}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("portfolio")}
                className={activeSection === "portfolio" ? "active" : ""}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScroll("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-[#DDDFE3] text-2xl font-bold">
          Ibrahim Fuad
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-neutral-400">
          <li>
            <a
              onClick={() => handleScroll("home")}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("portfolio")}
              className={activeSection === "portfolio" ? "active" : ""}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => handleScroll("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://drive.google.com/file/d/1ODH5o_eOA0KDa1ooGnIWBcTQNShjhFHZ/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="active hover:bg-gradient-to-r from-[#3b82f6] via-[#9333ea] to-[#3b82f6] hover:text-white!"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
