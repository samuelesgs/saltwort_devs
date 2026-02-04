
interface Props {
    name: string;
    icon: string;
    category?: string;
    isSmall?: boolean;
}

export const ItemSkillToolSamuel = ({ name, icon, category, isSmall }: Props) => {
    return (
        <button
            key={Math.random()}
            className={`
                flex flex-row items-center
                gap-2 bg-purple
                ${isSmall ? 'px-2 py-1' : 'px-4 py-2'}
                rounded-2xl border-btn
            `}>
            <img
                src={icon}
                alt={name}
                className={`${isSmall ? 'w-5 h-5' : 'w-8 h-8'}`} />
            <span
                className={`${isSmall && 'text-xs'} font-light text-secondary`}>
                {name}
            </span>
        </button>
    )
}
