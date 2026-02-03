import { FolderKanban } from "lucide-react"
import { PROJECTS_SAMUEL, TITLE_PROJECTS } from "../../data/projects.data"
import { SwitchProjectsSamuel } from "../../components/SwitchProjectsSamuel";
import { useEffect, useState } from "react";
import type { SwitchProjectData } from "../../interfaces/project.interface";

export const SamuelProjects = () => {

  const projects = PROJECTS_SAMUEL;
  const switchProjects = TITLE_PROJECTS;

  const [currentSwitchProject, setCurrentSwitchProject] = useState<SwitchProjectData | null>(null);

  useEffect(() => {
    setCurrentSwitchProject(switchProjects[0]);
    return;
  }, [])

   return (
    <div className="mt-10 text-white">
      {/* MARK: TITLE */}
      <div>
        <h1 className="flex flex-row items-center gap-2 text-sm font-bold">
          <FolderKanban
            className="w-5 h-5" />
          PROJECTOS
        </h1>
      </div>

      <SwitchProjectsSamuel
        projects={TITLE_PROJECTS}
        current={currentSwitchProject}
        onSelectProject={setCurrentSwitchProject}/>
    </div>
  )
}
