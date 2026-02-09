import { CircleCheck, Globe, Smartphone } from "lucide-react";
import type { Project } from "../interfaces/project.interface"
import { ItemSkillToolSamuel } from "./ItemSkillToolSamuel";
import { CarrouselSamuel } from "./CarrouselProjectSamuel";

interface Props {
    project: Project;
}

export const ItemProjectSamuel = ({ project }: Props) => {
    return (
        <div
            className="box-content rounded-xl border-btn mt-5 p-5">
            <div
                className="flex flex-row items-center gap-2">
                <button
                    className="flex flex-row items-center gap-1 purple-light-color text-xs box-purple py-1 px-2 rounded-xl box-salient">
                    {
                        project.type === 'Mobile' ? (
                            <Smartphone
                                className="w-4 h-4" />
                        ) : (
                            <Globe
                                className="w-4 h-4" />
                        )
                    }
                    {project.type}
                </button>
                <p className="text-xs text-secondary mt-2">
                    {project.development_time} año{project.development_time > 1 && 's'} de desarrollo
                </p>
            </div>
            <div
                className="mt-3">
                <h1
                    className="text-white text-2xl">
                    {project.name}
                </h1>
                <p
                    className="text-secondary text-sm md:max-w-200">
                    {project.detail}
                </p>
            </div>
            <div
                className="flex flex-row flex-wrap mt-5 gap-2">
                {
                    project.tools.map(tool => (
                        <ItemSkillToolSamuel
                            name={tool.name}
                            icon={tool.icon}
                            isSmall={true}
                            animate={false}
                            key={Math.random()}/>
                    ))
                }
            </div>
            <div
                className="flex justify-center mt-5 overflow-visible">
                <CarrouselSamuel
                    images={project.images}
                    type={project.type}/>
            </div>
            <div
                className="mt-5">
                <h1 className="flex flex-row items-center gap-2 text-sm font-bold">
                    <CircleCheck
                        className="w-5 h-5 purple-light-color" />
                    Logros y Contribuciones
                </h1>
                <div
                    className="grid gap-4 md:grid-cols-2 mt-5">
                    {
                        project.contributions.map(item => (
                            <div
                                className="
                                    flex flex-row gap-3 border-btn
                                    btn-switch w-full p-4 rounded-xl
                                    transition-all duration-300 hover:scale-102
                                    item-contribution
                                "
                                key={Math.random()}>
                                <CircleCheck
                                    className="w-7 h-7 purple-light-color" />
                                <div>

                                    <div className="flex flex-row gap-2">
                                        <div
                                            className="">
                                            {item.title}
                                        </div>
                                        <button
                                            className={`
                                                text-xs
                                                box-salient
                                                purple-light-color  px-2 py-0.5 rounded-xl
                                            `}>
                                            {item.priority}
                                        </button>
                                    </div>
                                    <p
                                        className="text-secondary text-xs tm-2">
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
