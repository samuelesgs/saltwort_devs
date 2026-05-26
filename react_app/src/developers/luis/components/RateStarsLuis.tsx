import { Star } from 'lucide-react'

interface Props {
    rateValue: number;
}

export const RateStarsLuis = ({ rateValue }: Props) => {

    const stars: number[] = [1, 2, 3, 4, 5];

    return (
        <div className="flex flex-row gap-1 items-center">
            {
                stars.map(value => (
                    <Star
                        key={value + 'Star'}
                        className={`text-cyan ${value <= rateValue && 'fill-cyan'}`}
                        size={18} />
                ))
            }
        </div>
    )
}
