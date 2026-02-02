import { SKILLS_DATA } from "../../data/skills.data"

export const SkillsSamuel = () => {

  const skills = SKILLS_DATA;

  return (
    <div
      className="flex flex-wrap w-full gap-3 text-white box-skills mt-5 p-5 rounded-xl">
      {
        skills.map(skill => (
          <button
            className="flex flex-row items-center gap-2 bg-purple px-4 py-2 rounded-2xl border-gray">
            <img
              src={skill.url}
              alt={skill.name}
              className="w-8 h-8"/>
            <span
              className="text-sm font-light text-secondary">
              {skill.name}
            </span>
          </button>
        ))
      }
    </div>
  )
}
