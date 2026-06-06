import { useEffect } from "react"
import { TitleHeader } from "../components/TitleHeader"
import { LuisJobExperience } from "./sections/LuisJobExperience"
import { LuisProjects } from "./sections/LuisProjects"
import { LuisSkills } from "./sections/LuisSkills"
import { LuisWorkTogether } from "./sections/LuisWorkTogether"

export const LuisPage = () => {

  useEffect(() => {
    document.title = 'Portafolio | Luis Paulo'
    return
  }, [])
  

  return (
    <div className="relative flex-1 p-10 overflow-y-auto mb-60 md:mb-0">
      <TitleHeader />
      <LuisSkills />
      <LuisJobExperience />
      <LuisProjects />
      <LuisWorkTogether />
    </div>
  )
}
