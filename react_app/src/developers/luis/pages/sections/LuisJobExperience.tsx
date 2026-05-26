import { TitleSectionLuis } from "../../components/TitleSectionLuis"
import '../../styles/luis.style.css';

interface JobExperienceInterface {
    company: string;
    position: string;
    dates: string;
}

const jobExperience: JobExperienceInterface[] = [
    {
        company: 'Encodemx',
        position: 'iOS Developer / Full Stack Developer',
        dates: '2024 - 2025'
    },
    {
        company: 'EPAM Neoris',
        position: 'iOS Developer',
        dates: '2026 - Actualidad'
    },
]

export const LuisJobExperience = () => {
    return (
        <div className="mt-15">
            <div className="mt-15 flex items-center gap-3">
                <TitleSectionLuis
                    title="Experiencia" />
            </div>
            {
                jobExperience.map(item => (
                    <div
                        key={Math.random()}
                        className="flex flex-wrap justify-start gap-3 text-white">
                        <div className="grid grid-cols-2 border-cyan-hover box-cyan bg-box rounded-lg w-full p-5 mt-2">
                            <div className="col-span-1">
                                <h1 className="text-xl md:text-2xl">
                                    { item.company }
                                </h1>
                                <p className="secondary-text">
                                    { item.position }
                                </p>
                            </div>
                            <div className="flex col-span-1 justify-end items-center">
                                <p className="text-cyan bg-box p-3 rounded-full bg-box-blue">
                                    { item.dates }
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
