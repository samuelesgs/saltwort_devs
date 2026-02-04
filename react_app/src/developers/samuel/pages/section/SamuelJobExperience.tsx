import { Building2 } from "lucide-react"
import { ItemJobExperience } from "../../components/ItemJobExperience"
import { JOB_EXPERIENCES } from "../../data/job-experiences.data"

export const SamuelJobExperience = () => {

  const jobs = JOB_EXPERIENCES;

  return (
    <div className="text-white mt-10">
      <h1 className="flex flex-row items-center gap-2 text-sm font-bold">
        <Building2
          className="w-5 h-5" />
        EXPERIENCIA LABORAL
      </h1>
      <div
        className="grid md:grid-cols-2 gap-4 mt-4">
        {
          jobs.map(job => (
            <ItemJobExperience
            job={job}/>
          ))
        }
      </div>
    </div>
  )
}
