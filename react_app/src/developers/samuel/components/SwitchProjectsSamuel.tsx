import { Currency, Globe, Smartphone } from "lucide-react";
import type { SwitchProjectData } from "../interfaces/project.interface"

interface Props {
  projects: SwitchProjectData[];
  current: SwitchProjectData | null;

  onSelectProject: (project: SwitchProjectData) => void;
}

export const SwitchProjectsSamuel = ({ projects, current, onSelectProject }: Props) => {
  return (
    <div
      className="flex flex-row gap-3 mt-5">
      {
        projects.map(project => (
          <button
            key={Math.random()}
            onClick={ () => onSelectProject(project) }
            className={`
              transition-colors duration-300 ease-in-out
              flex flex-row btn-switch
              items-center gap-2 border-btn
              px-5 py-3 rounded-xl text-sm
              ${current?.name === project.name && 'bg-purple-light text-white font-bold'}
            `}>
            {
              project.type === 'Mobile'
                ? (
                  <Smartphone
                    size={18} />
                )
                : (
                  <Globe
                    size={18} />
                )
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
