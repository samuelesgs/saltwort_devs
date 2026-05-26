import '../styles/luis.style.css';

interface Props {
    title: string;
}

export const TitleSectionLuis = ({ title }: Props) => {
    return (
        <>
            <h1 className="text-white text-xl md:text-3xl font-bold">
                { title }
            </h1>
            <div className="bg-white flex-1 h-0.5 bg-separator"></div>
        </>
    )
}
