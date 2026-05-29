import { useState } from "react"
import { ItemProjectLuis } from "../../components/ItemProjectLuis"
import { TitleSectionLuis } from "../../components/TitleSectionLuis"
import type { ProjectLuis } from "../../interfaces/Project.interface"
import { PROJECTS_DATA_LUIS } from "../../data/projects.luis.data"



export const LuisProjects = () => {

  const projects = PROJECTS_DATA_LUIS;
  const [selectProject, setSelectProject] = useState<ProjectLuis | null>(null);

  const handleSelectProject = (project: ProjectLuis | null) => {    
    setSelectProject(project);
  }

  return (
    <div>
      <div className="mt-15 flex items-center gap-3">
        <TitleSectionLuis
          title="Proyectos Destacados" />
      </div>
      <div className="mt-2 flex flex-wrap gap-3">

        {
          projects.map(rowItem => (
            <ItemProjectLuis
              key={rowItem.title}
              project={rowItem}
              expanded={selectProject === rowItem}
              onSelectProject={handleSelectProject}/>
          ))
        }

      </div>
    </div>
  )
}
