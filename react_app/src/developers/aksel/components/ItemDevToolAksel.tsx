import type { DevTool } from "../interfaces/Project.interface"

interface Props {
    tool: DevTool
}

export const ItemDevToolAksel = ({ tool }: Props) => {
    return (
        <div className="flex flex-wrap gap-3 bg-blue-dark p-1.5 pl-3 pr-3 rounded-lg items-center border border-[#1e3a5f]">
            <img
                src={ tool.image }
                alt={tool.name}
                className="w-5 h-5" />
            <p className="text-cyan text-xs">
                { tool.name }
            </p>
        </div>
    )
}
