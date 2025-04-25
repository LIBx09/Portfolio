import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBg = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles Loaded:", container);
  }, []);

  return (
    <>
      {init && (
        <Particles
          className="fixed top-0 left-0 w-full h-full -z-10"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: { value: "#060606" },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#E6641A" },
              links: {
                color: "#F2843F",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: false,
                outModes: { default: "bounce" },
                random: false,
                speed: 6,
                straight: true,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 80,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticleBg;
