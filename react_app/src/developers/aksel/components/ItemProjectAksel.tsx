import { ChevronDown, ChevronsLeftRight, Globe, Smartphone } from "lucide-react"
import { ItemDevToolAksel } from "./ItemDevToolAksel";
import type { Project } from "../interfaces/Project.interface";
import '../styles/aksel.style.css';
import { SwitchTypeProject } from "./SwitchTypeProject";
import { ContributionProjectAksel } from "./ContributionProjectAksel";
import { CarrouselMobileAksel } from "./CarrouselMobileAksel";
import { useState } from "react";
import { CarrouselWebAksel } from "./CarrouselWebAksel";

interface Props {
  project: Project;
  expanded: boolean;

  //METHODS
  onSelectProject: (project: Project | null) => void;
}

const getDataByProject = (typeProject: string) => {
  switch (typeProject) {
    case 'Web':
      return {
        color: 'bg-purple-500/10',
        platforms: ['Web']
      }
    case 'iOS + Web':
      return {
        color: 'bg-cyan-950',
        platforms: ['Móvil', 'Web']
      }
    case 'iOS':
      return {
        color: 'bg-cyan-950',
        platforms: ['Móvil']
      }
    default:
      return {
        color: 'bg-purple-500/10',
        platforms: ['Web']
      }
  }
}

export const ItemProjectAksel = ({ project, expanded, onSelectProject }: Props) => {

  const { title, description, type, devTools, contributions } = project;
  const { platforms, color: bgColor } = getDataByProject(project.type);
  const [typeProject, setTypeProject] = useState(platforms[0]);
  const [isChaging, setIsChanging] = useState(false);

  return (
    <div className="grid grid-cols-8 w-full p-5 bg-box box-cyan rounded-lg">
      <div className="flex flex-row col-span-7 gap-3">
        <div className={`flex flex-row w-13 h-13 items-center justify-center rounded-lg ${bgColor}`}>
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
                  key={Math.random() * 100}
                  tool={devTool} />
              ))
            }
          </div>
        </div>
      </div>
      <div
        className="group col-span-1 text-white flex justify-end items-center"
        onClick={() =>
          onSelectProject(expanded ? null : project)
        }>
        <ChevronDown
          className={`
            text-cyan w-6 h-6
            transition-transform
            duration-300
            ease-in-out
            origin-center
            transform-gpu
            cursor-pointer
            ${expanded ? 'rotate-180' : 'rotate-0'}`
          } />
      </div>

      <div className={`
            col-span-8
            grid
            transition-all
            duration-500
            ease-in-out
            ${expanded
          ? "grid-rows-[1fr] opacity-100 mt-2"
          : "grid-rows-[0fr] opacity-0"
        }
          `}
      >

        <div className="overflow-hidden">
          <p className="secondary-text">
            {description}
          </p>
          <div className="flex justify-center mt-2">
            <SwitchTypeProject
              types={platforms}
              currentType={typeProject}
              onSelectTypeProject={(type) => {
                if (type === typeProject) return;

                setIsChanging(true);
                setTimeout(() => {
                  setTypeProject(type);
                  setIsChanging(false);
                }, 200);
              }} />
          </div>
          <div
            className={`
                  transition-all duration-200 ease-out
                  ${isChaging
                ? `opacity-0 translate-x-2`
                : "opacity-100 translate-x-0"}
                `}>
            {
              typeProject === 'Móvil' ? (
                <CarrouselMobileAksel
                  images={project.images?.mobile || []}
                />
              ) : (
                <CarrouselWebAksel
                  images={project.images.web || []}
                />
              )
            }
          </div>

          <ContributionProjectAksel
            contributions={contributions} />
        </div>
      </div>
    </div>
  )
}
