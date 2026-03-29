import { useEffect } from "react"
import { TitleHeader } from "../components/TitleHeader"
import { AkselJobExperience } from "./sections/AkselJobExperience"
import { AkselProjects } from "./sections/AkselProjects"
import { AkselSkills } from "./sections/AkselSkills"
import { AkselWorkTogether } from "./sections/AkselWorkTogether"

export const AkselPage = () => {

  useEffect(() => {
    document.title = 'Portafolio | Aksel Herrera'
    return
  }, [])
  

  return (
    <div className="relative flex-1 p-10 overflow-y-auto mb-60 md:mb-0">
      <TitleHeader />
      <AkselSkills />
      <AkselJobExperience />
      <AkselProjects />
      <AkselWorkTogether />
    </div>
  )
}
