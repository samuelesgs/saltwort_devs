import { CodeXml, Globe, Smartphone } from "lucide-react";
import type { SwitchProjectData, TypeProject } from "../interfaces/project.interface"

interface Props {
  projects: SwitchProjectData[];
  current: SwitchProjectData | null;

  onSelectProject: (project: SwitchProjectData) => void;
}

export const SwitchProjectsSamuel = ({ projects, current, onSelectProject }: Props) => {

  const getIconTypeProject = (type: TypeProject[]) => {
    if (type.length > 1) return <CodeXml className="w-4 h-4" />;
    if (type.includes('Mobile')) return <Smartphone className="w-4 h-4" />;
    if (type.includes('Web')) return <Globe className="w-4 h-4" />;
  }

  return (
    <div
      className="flex flex-nowrap overflow-x-auto no-scrollbar md:flex-row gap-3 mt-5">
      {
        projects.map(project => (
          <button
            key={project.id}
            onClick={() => onSelectProject(project)}
            style={{
              backgroundColor: current?.name === project.name ? 'var(--PurpleLight)' : ''
            }}
            className={`
              ${current?.name === project.name && 'text-white font-bold'}
              transition-all duration-300 ease-in-out
              whitespace-nowrap
              flex flex-row btn-switch
              items-center gap-2 border-btn
              p-2 md:px-5 md:py-3 rounded-xl text-sm
            `}>
            {
              getIconTypeProject(project.type)
            }
            <span
              className={`${current?.name === project.name ? 'text-white' : 'text-secondary '}`}>
              {project.name}
            </span>
          </button>
        ))
      }
    </div>
  )
}
