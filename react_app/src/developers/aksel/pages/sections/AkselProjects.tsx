import { useState } from "react"
import { ItemProjectAksel } from "../../components/ItemProjectAksel"
import { TitleSectionAksel } from "../../components/TitleSectionAksel"
import type { Project } from "../../interfaces/Project.interface"
import { PROJECTS_DATA } from "../../data/projects.data"



export const AkselProjects = () => {

  const projects = PROJECTS_DATA;
  const [selectProject, setSelectProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project | null) => {    
    setSelectProject(project);
  }

  return (
    <div>
      <div className="mt-15 flex items-center gap-3">
        <TitleSectionAksel
          title="Proyectos Destacados" />
      </div>
      <div className="mt-2 flex flex-wrap gap-3">

        {
          projects.map(rowItem => (
            <ItemProjectAksel
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
