import { TitleHeader } from "../components/TitleHeader"
import { AkselSkills } from "./sections/AkselSkills"

export const AkselPage = () => {
  return (
    <div className="relative basis-auto p-10">
      <TitleHeader />
      <AkselSkills />
    </div>
  )
}
