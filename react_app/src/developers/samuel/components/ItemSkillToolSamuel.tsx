
interface Props {
    name: string;
    icon: string;
    category?: string;
    isSmall?: boolean;
    animate: boolean;
}

export const ItemSkillToolSamuel = ({ name, icon, category, isSmall, animate }: Props) => {
    return (
        <button
            key={Math.random()}
            className={`
                flex flex-row items-center
                gap-2 bg-purple
                ${isSmall ? 'px-2 py-1' : 'px-4 py-2'}
                rounded-2xl border-btn hover:scale-105
                transition-all duration-400 cursor-pointer
                ${animate && `
                    hover:shadow-lg item-skill
                    rotate-img
                `}
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
