import { Star } from "lucide-react"
import type { ContributionProjects } from "../interfaces/Project.interface"
import { RateStarsLuis } from "./RateStarsLuis";

interface Props {
    contributions: ContributionProjects[];
}

export const ContributionProjectLuis = ({ contributions }: Props) => {

    return (
        <div className="my-3 text-white">
            <div className="flex flex-row items-center gap-2">
                <Star
                    className="text-cyan"
                    size={18} />
                <h2 className="font-bold">Contribuciones</h2>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                {
                    contributions.map(item => (
                        <div
                            className="flex flex-col justify-center md:flex-row items-center gap-2 bg-blue-dark border-gray px-4 py-2 rounded-lg"
                            key={Math.random()}>
                            <p className="w-full text-center md:text-left">
                                { item.details }
                            </p>
                            <RateStarsLuis
                                rateValue={item.rate}/>
                            <div className="flex items-center">
                                <p className="text-xs text-cyan bg-box-blue px-3 py-2 rounded-2xl whitespace-nowrap shrink-0">
                                    { item.importValue }
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
