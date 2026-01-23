import '../../styles/aksel.style.css';
import { TitleSectionAksel } from "../../components/TitleSectionAksel"

export const AkselJobExperience = () => {
    return (
        <div className="mt-15">
            <div className="mt-15 flex items-center gap-3">
                <TitleSectionAksel
                    title="Experiencia" />
            </div>
            <div className="flex flex-wrap justify-start gap-3 text-white">
                <div className="grid grid-cols-2 border-cyan-hover box-cyan bg-box rounded-lg w-full p-5 mt-2">
                    <div className="col-span-1">
                        <h1 className="text-xl md:text-2xl">Encodemx</h1>
                        <p className="secondary-text">iOS Developer / Full Stack Developer</p>
                    </div>
                    <div className="flex col-span-1 justify-end items-center">
                        <p className="text-cyan bg-box p-3 rounded-full bg-box-blue">
                            2023 - 2025
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
