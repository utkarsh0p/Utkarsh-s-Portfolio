import WindowWrapper from '@hoc/WindowWrapper.jsx'
import { WindowControlls } from '@components'
import { locations } from '@constants'
import { Star } from 'lucide-react'

const projects = locations.work?.children ?? []

const ProjectCard = ({ project }) => {
  const openUrl = () => {
    const urlFile = project.children?.find((f) => f.fileType === 'url')
    if (urlFile?.href) window.open(urlFile.href, '_blank')
  }

  return (
    <li
      onClick={openUrl}
      className={`cursor-pointer select-none flex flex-col items-center gap-3 hover:scale-105 transition-all group relative ${
        project.featured
          ? 'p-5 rounded-2xl border border-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
          : ''
      }`}
    >
      {project.featured && (
        <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
          <Star size={10} fill="white" />
          Featured
        </span>
      )}
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
  )
}

const Projects = () => {
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

      <div className="p-10 max-sm:p-6 bg-white space-y-12 min-h-[60vh] max-sm:min-h-full">
        <h3 className="text-xl font-semibold text-gray-700 ml-5">My Work</h3>
        <ul className="flex items-center justify-center gap-12 flex-wrap">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default WindowWrapper(Projects, 'project')
