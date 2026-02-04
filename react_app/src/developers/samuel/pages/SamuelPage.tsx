import { TitleHeaderSamuel } from "../components/TitleHeaderSamuel"
import { SamuelAboutMe } from "./section/SamuelAboutMe"
import { SamuelJobExperience } from "./section/SamuelJobExperience"
import { SamuelProjects } from "./section/SamuelProjects"
import { SamuelSkills } from "./section/SamuelSkills"

export const SamuelPage = () => {
  return (
    <div>
      <TitleHeaderSamuel />
      <SamuelSkills />
      <SamuelAboutMe />
      <SamuelProjects />
      <SamuelJobExperience />
    </div>
  )
}
