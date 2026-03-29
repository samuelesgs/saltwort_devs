import { Clock5, MapPin } from "lucide-react"
import type { JobExperience } from "../interfaces/job-experiences.interface"

interface Props {
    job: JobExperience;
}

export const ItemJobExperienceSamuel = ({ job }: Props) => {
    return (
        <div
            className="grid md:grid-cols-9 grid-cols-3 box-content border-btn p-5 rounded-xl">
            <div
                className="flex justify-center col-span-1 mt-0 m-2">
                <div
                    className="bg-purple p-2 border-btn rounded-lg max-h-fit">
                    <img
                        src={job.iconCompany}/>
                </div>
            </div>
            <div
                className="col-span-2 md:col-span-6">
                <div
                    className="flex flex-col gap-1">
                    <h1
                        className="text-white font-bold">
                        {job.nameJob}
                    </h1>
                    <p
                        className="purple-light-color text-sm">
                        {job.company}
                    </p>
                    <div>
                        <p
                            className="flex flex-row items-center gap-2 text-xs text-secondary">
                            <MapPin
                                className="w-4 h-4" />
                            {job.location} - {job.type}
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="flex justify-end md:col-span-2 col-span-8 md:mt-0 mt-2">
                <div>
                    <p className="flex flex-row gap-2 text-end text-xs purple-light-color bg-purple px-2 py-1 rounded-xl">
                        <Clock5
                            className="w-4 h-4" />
                        <span
                            className="text-start text-nowrap">
                            {job.years} año{job.years > 1 && 's'} colaborando
                        </span>
                    </p>
                </div>
            </div>
            <div
                className="col-span-8 md:col-span-9 ">
                <p
                    className="text-secondary text-sm mt-4">
                    {job.detail}
                </p>
                <div
                    className="flex flex-col gap-2 mt-4">
                    {
                        job.pointsActivities.map((point, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-start">
                                <div
                                    key={index}
                                    className="flex flex-row text-white text-sm">
                                    <div className="bg-purple-light md:h-2 md:w-2 rounded-full mr-2 mt-1.5" />
                                    {point}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="col-span-9 my-4 mx-0 h-px  bg-purple"/>
            <div
                className="flex items-center">
                <p
                    className="text-secondary text-sm mr-1">
                    stack:
                </p>
                <div
                    className="flex flex-row gap-1">
                    {
                        job.iconsStack.map((img, index) => ((
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className="w-8 h-8" />
                        )))
                    }
                </div>
            </div>
        </div >
    )
}
