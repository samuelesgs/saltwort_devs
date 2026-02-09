import { ArrowRight, Building2, Handshake, MoveRight, Sparkle, Sparkles } from "lucide-react"
import { ItemJobExperienceSamuel } from "../../components/ItemJobExperienceSamuel"
import { JOB_EXPERIENCES } from "../../data/job-experiences.data"
import { SectionTitleSamuel } from "../../components/SectionTitleSamuel";

export const SamuelJobExperience = () => {

  const jobs = JOB_EXPERIENCES;

  return (
    <div className="text-white mt-10">
      <SectionTitleSamuel
        title="EXPERIENCIA LABORAL"
        icon={<Building2 className="w-5 h-5" />} />
      <div
        className="grid md:grid-cols-2 gap-4 mt-4">
        {
          jobs.map(job => (
            <ItemJobExperienceSamuel
              key={Math.random()}
              job={job} />
          ))
        }
        {/* NEW JOBS */}
        <div
          className="flex flex-col gap-2 justify-center items-center rounded-xl border-purple-point-line p-5">
          <div
            className="flex flex-row gap-2">
            <Sparkles
              className="w-6 h-6 purple-light-color" />
            <Handshake
              className="w-7 h-7 purple-light-color font-bold" />
            <Sparkles
              className="w-6 h-6 purple-light-color" />
          </div>
          <h1
            className="text-white font-bold text-lg">
            ¿Tu empresa aquí?
          </h1>
          <p
            className="text-secondary text-sm w-80 text-center">
            Siempre abierto a nuevas oportunidades y colaboraciones interesantes
          </p>
          <a href="#section-collaborate">
            <button
              className="flex flex-row items-center gap-2 purple-light-color box-salient px-4 py-2 rounded-full">
              Hablemos
              <ArrowRight
                className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
