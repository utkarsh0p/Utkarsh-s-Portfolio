import WindowWrapper from '@hoc/WindowWrapper.jsx'
import { WindowControlls } from '@components'
import { locations } from '@constants'
import { Folder, MoveRight } from 'lucide-react'

const projects = locations.work?.children ?? []

const Projects = () => {
  const openUrl = (project) => {
    const urlFile = project.children?.find((f) => f.fileType === 'url')
    if (urlFile?.href) window.open(urlFile.href, '_blank')
  }

  return (
    <>
      <div
        id="window-header"
        className="!bg-white !border-b !border-gray-200 !shadow-sm flex justify-between items-center"
      >
        <WindowControlls target="project" />

        <h2 className="flex-1 text-center font-semibold text-gray-600 tracking-wide">
          Projects
        </h2>

        <div className="w-6"></div>
      </div>

      <div className="p-10 bg-white space-y-12 min-h-[60vh]">
        <h3 className="text-xl font-semibold text-gray-700 ml-5">My Work</h3>

        <ul className="flex items-center justify-center gap-12 flex-wrap">
          {projects.map((project) => (
            <li
              key={project.id}
              onClick={() => openUrl(project)}
              className="cursor-pointer select-none flex flex-col items-center gap-3 hover:scale-105 transition-all group"
            >
              <div>
                <img
                  src={project.icon}
                  alt={project.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-sm text-gray-700 font-medium text-center max-w-32">
                {project.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WindowWrapper(Projects, 'project')
