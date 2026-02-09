import { FolderKanban } from "lucide-react"
import { PROJECTS_SAMUEL, TITLE_PROJECTS } from "../../data/projects.data"
import { SwitchProjectsSamuel } from "../../components/SwitchProjectsSamuel";
import { useEffect, useState } from "react";
import type { Project, SwitchProjectData } from "../../interfaces/project.interface";
import { ItemProjectSamuel } from "../../components/ItemProjectSamuel";
import { SectionTitleSamuel } from "../../components/SectionTitleSamuel";

export const SamuelProjects = () => {

  const projects = PROJECTS_SAMUEL;
  const switchProjects = TITLE_PROJECTS;

  const [currentSwitchProject, setCurrentSwitchProject] = useState<SwitchProjectData | null>(null);
  const [currentProject, setCurrentProject] = useState<Project>();

  useEffect(() => {
    setCurrentSwitchProject(switchProjects[0]);
    setCurrentProject(projects[0]);
    return;
  }, [])

  return (
    <div className="mt-10 text-white">
      {/* MARK: TITLE */}
      <div>
        <SectionTitleSamuel
          title="PROJECTOS"
          icon={<FolderKanban className="w-5 h-5" />}
        />
      </div>

      <SwitchProjectsSamuel
        projects={TITLE_PROJECTS}
        current={currentSwitchProject}
        onSelectProject={(selectedProject) => {
          const project = projects.find(row => row.name === selectedProject.name);
          setCurrentProject(project);
          setCurrentSwitchProject(selectedProject);
        }} />

      {
        currentProject && (
          <ItemProjectSamuel
            project={currentProject}
            key={currentProject.name}/>
        )
      }
    </div>
  )
}
