import { CircleCheck, CodeXml, Globe, Smartphone } from "lucide-react";
import type { Project, TypeProject } from "../interfaces/project.interface"
import { ItemSkillToolSamuel } from "./ItemSkillToolSamuel";
import { CarrouselSamuel } from "./CarrouselProjectSamuel";
import { SwitchTypeProject } from "./SwitchTypeProject";
import { useState } from "react";

interface Props {
    project: Project;
}

export const ItemProjectSamuel = ({ project }: Props) => {

    const types = project.types;
    const [currentType, setCurrentType] = useState(types[0]);

    const getIconTypeProject = () => {
        if (types.length > 1) return <CodeXml className="w-4 h-4" />;
        if (types.includes('Mobile')) return <Smartphone className="w-4 h-4" />;
        if (types.includes('Web')) return <Globe className="w-4 h-4" />;
    }

    return (
        <div
            className="box-content rounded-xl border-btn mt-5 p-5 animate-slide-in-up">
            <div
                className="flex flex-row items-center gap-2">
                <button
                    className="flex flex-row items-center gap-1 purple-light-color text-xs box-purple py-1 px-2 rounded-xl box-salient">
                    {
                        getIconTypeProject()
                    }
                    {project.types.join(' - ')}
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
                    project.tools.map((tool, index) => (
                        <ItemSkillToolSamuel
                            name={tool.name}
                            icon={tool.icon}
                            isSmall={true}
                            animate={false}
                            key={Math.random()}
                            index={index}
                        />
                    ))
                }
            </div>
            <div
                className="flex flex-col justify-center gap-5 mt-5 overflow-visible">
                {types.length > 1 && (
                    <div className="flex justify-center">
                        <div
                            className="max-w-fit">
                            <SwitchTypeProject
                                types={project.types}
                                currentType={currentType}
                                onSelectTypeProject={(type) => setCurrentType(type as TypeProject)} />
                        </div>
                    </div>
                )}
                <CarrouselSamuel
                    images={project.images}
                    type={currentType} />
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
