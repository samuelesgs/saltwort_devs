import { ItemSkillToolSamuel } from "../../components/ItemSkillToolSamuel";
import { SKILLS_DATA } from "../../data/skills.data"

export const SamuelSkills = () => {

  const skills = SKILLS_DATA;

  return (
    <div
      className="flex flex-wrap flex-row w-full gap-3 text-white box-skills mt-5 p-5 rounded-xl border-btn">
      {
        skills.map(skill => (
          <ItemSkillToolSamuel 
            name={skill.name}
            icon={skill.url}
            key={skill.id}/>
          ))
        }
    </div>
  )
}
