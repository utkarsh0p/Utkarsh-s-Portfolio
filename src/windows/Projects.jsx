import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { WindowControlls } from "@components";
import { locations } from "@constants";
import { Folder, MoveRight } from "lucide-react";

const projects = locations.work?.children ?? [];

const Projects = () => {
  const openUrl = (project) => {
    const urlFile = project.children?.find((f) => f.fileType === "url");
    if (urlFile?.href) window.open(urlFile.href, "_blank");
  };

  return (
    <>
      {/* HEADER (Safari-style + centered title) */}
      <div
        id="window-header"
        className="!bg-white !border-b !border-gray-200 !shadow-sm flex justify-between items-center"
      >
        <WindowControlls target="project" />

        {/* CENTER TITLE */}
        <h2 className="flex-1 text-center font-semibold text-gray-600 tracking-wide">
          Projects
        </h2>

        {/* Right placeholder to balance layout */}
        <div className="w-6"></div>
      </div>

      {/* BODY (clean, white, Safari-like) */}
      <div className="p-10 bg-white space-y-12 min-h-[60vh]">

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-700 text-center">
          My Work
        </h3>

        {/* Project Icons */}
        <ul className="flex items-center justify-center gap-12 flex-wrap">
          {projects.map((project) => (
            <li
              key={project.id}
              onClick={() => openUrl(project)}
              className="cursor-pointer select-none flex flex-col items-center gap-3 hover:scale-105 transition-all group"
            >
              {/* Folder Icon Stylized */}
              <div className="p-4 bg-gray-100 rounded-xl shadow-md group-hover:bg-gray-200 transition">
                <img
                  src={project.icon}
                  alt={project.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Name */}
              <p className="text-sm text-gray-700 font-medium text-center max-w-32">
                {project.name}
              </p>

            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default WindowWrapper(Projects, "project");
