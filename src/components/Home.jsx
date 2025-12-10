import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import { locations } from "@constants/index.js";

gsap.registerPlugin(Draggable);

const projects = locations.work?.children ?? [];

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = containerRef.current.querySelectorAll(".home-icon");

    icons.forEach((icon) => {
      Draggable.create(icon, {
        bounds: window,       // keep inside screen
        inertia: true,
      });
    });
  }, []);

  const openUrl = (project) => {
    const urlFile = project.children?.find((f) => f.fileType === "url");
    if (urlFile?.href) {
      window.open(urlFile.href, "_blank");
    }
  };

  return (
    <section id="home" ref={containerRef}>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={`home-icon absolute select-none cursor-pointer group ${project.position}`}
            onClick={() => openUrl(project)}
          >
            <img src={project.icon} alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
