import { ChevronDown, ChevronsLeftRight, Globe, Smartphone } from "lucide-react"
import { ItemDevToolAksel } from "./ItemDevToolAksel";
import type { Project } from "../interfaces/Project.interface";
import '../styles/aksel.style.css';

interface Props {
  project: Project
}

export const ItemProjectAksel = ({ project }: Props) => {
  const { title, type, devTools } = project;

  const bgColor = () => {
    switch (type) {
      case 'Web': return 'bg-purple-500/10';
      case 'iOS + Web': return 'bg-cyan-950';
      case 'iOS': return 'bg-cyan-950';
      default: return 'bg-cyan-950';
    }
  }

  return (
    <div className="grid grid-cols-8 w-full p-5 bg-box box-cyan rounded-lg">
      <div className="flex flex-row col-span-7 gap-3">
        <div className={`flex flex-row w-13 h-13 items-center justify-center rounded-lg ${bgColor()}`}>
          {
            type === 'iOS + Web' && (
              <ChevronsLeftRight
                size={38}
                className="text-cyan" />
            )
          }
          {
            type === 'Web' && (
              <Globe
                size={38}
                className="text-purple-400" />
            )
          }
          {
            type === 'iOS' && (
              <Smartphone
                size={38}
                className="text-cyan" />
            )
          }
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-xl md:text-2xl">
            <span className="break-word">
              {title}
            </span>
            <span className="text-xs ml-4 box-cyan px-3 py-1 rounded-lg text-cyan bg-type-project whitespace-nowrap">
              {type}
            </span>
          </h1>
          <div className="flex flex-wrap gap-1 mt-2">
            {
              devTools.map(devTool => (
                <ItemDevToolAksel
                  key={devTool.name}
                  tool={devTool} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="col-span-1 text-white flex justify-end items-center">
        <ChevronDown
          className="text-cyan w-6 h-6" />
      </div>
    </div>
  )
}
