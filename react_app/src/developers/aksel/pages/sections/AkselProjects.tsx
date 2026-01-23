import { useState } from "react"
import { ItemProjectAksel } from "../../components/ItemProjectAksel"
import { TitleSectionAksel } from "../../components/TitleSectionAksel"
import type { Project } from "../../interfaces/Project.interface"

const projects: Project[] = [
  {
    title: 'Gastos de compra',
    description: 'Sistema de gestión de gastos e ingresos para proyectos con sincronización offline y respaldos automáticos en formato JSON.',
    type: 'iOS + Web',
    devTools: [
      { name: 'Swift', image: './icons/swift.png' },
      { name: 'Node.js', image: './icons/node.png' },
      { name: 'Angular', image: './icons/angular.png' },
      { name: 'NestJS', image: './icons/nestjs.png' },
    ],
    contributions: [
      {
        details: 'Migración de requests en la versión móvil iOS',
        rate: 4,
        importValue: 'Alto'
      },
      {
        details: 'Migración de requests en la versión móvil iOS',
        rate: 5,
        importValue: 'Alto'
      },
      {
        details: 'Migración de requests en la versión móvil iOS',
        rate: 3,
        importValue: 'Alto'
      },
    ]
  },
  {
    title: 'Mis Torneos',
    description: '',
    type: 'iOS',
    devTools: [
      { name: 'Swift', image: './icons/swift.png' },
      { name: 'php', image: './icons/php.png' },
    ],
    contributions: [],
  },  
  {
    title: 'Encodemx Web',
    description: '',
    type: 'Web',
    devTools: [
      { name: 'Angular', image: './icons/angular.png' }
    ],
    contributions: []
  },
  {
    title: 'Consola Encodemx',
    description: '',
    type: 'Web',
    devTools: [
      { name: 'Angular', image: './icons/angular.png' },
      { name: 'Node.js', image: './icons/node.png' },
      { name: 'NestJS', image: './icons/nestjs.png' },
      { name: 'TypeScript', image: './icons/typescript.png' },
    ],
    contributions: []
  },
  {
    title: 'Productivity',
    description: '',
    type: 'Web',
    devTools: [
      { name: 'Angular', image: './icons/angular.png' },
      { name: 'Node.js', image: './icons/node.png' },
      { name: 'NestJS', image: './icons/nestjs.png' },
      { name: 'TypeScript', image: './icons/typescript.png' },
      { name: 'Figma', image: './icons/figma.webp' },
    ],
    contributions: []
  },
  {
    title: 'Gastos Diarios 4',
    description: '',
    type: 'iOS + Web',
    devTools: [
      { name: 'Swift', image: './icons/swift.png' },
      { name: 'Angular', image: './icons/angular.png' },
      { name: 'NestJS', image: './icons/nestjs.png' },
      { name: 'PHP', image: './icons/php.png' },
      { name: 'Angular', image: './icons/angular.png' },
    ],
    contributions: []
  }
]

export const AkselProjects = () => {

  const [selectProject, setSelectProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project | null) => {    
    setSelectProject(project);
  }

  return (
    <div>
      <div className="mt-15 flex items-center gap-3">
        <TitleSectionAksel
          title="Proyectos Destacados" />
      </div>
      <div className="mt-2 flex flex-wrap gap-3">

        {
          projects.map(rowItem => (
            <ItemProjectAksel
              key={rowItem.title}
              project={rowItem}
              expanded={selectProject === rowItem}
              onSelectProject={handleSelectProject}/>
          ))
        }

      </div>
    </div>
  )
}
