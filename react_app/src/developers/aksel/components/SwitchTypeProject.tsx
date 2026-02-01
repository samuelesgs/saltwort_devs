import { Monitor, Smartphone } from "lucide-react"
import { useState } from "react";

interface Props {
    types: string[];
    currentType: string;
    onSelectTypeProject: (value: string) => void;
}

export const SwitchTypeProject = ({ types, currentType, onSelectTypeProject }: Props) => {

    //const [selectType, setSelectType] = useState<string>(types[0]);

    console.log({types});
    

    return (
        <div className="flex flex-row bg-blue-dark py-1 px-1.5 rounded-lg border-gray">
            {
                types.map(type => (
                    <button
                        key={type}
                        onClick={ () => onSelectTypeProject(type) }
                        className={`
                            flex flex-row gap-1
                            items-center px-6 py-1
                            rounded-lg
                            transition-colors duration-300 ease-in-out
                            ${type == currentType ? 'bg-blue-gradient text-white scale-105' : 'secondary-text hover:bg-white/5 scale-100'}`
                        }>
                        {
                            type === 'Web' ? (
                                <Monitor
                                    className={`
                                        transition-colors duration-300
                                        ${type === currentType ? 'text-white' : 'secondary-text'}`
                                    }
                                    size={16} />
                            ) : (
                                <Smartphone
                                    className={`
                                        transition-colors duration-300
                                        ${type === currentType ? 'text-white' : 'secondary-text'}`
                                    }
                                    size={16} />
                            )
                        }
                        <span>
                            {type}
                        </span>
                    </button>
                ))
            }
        </div>
    )
}
