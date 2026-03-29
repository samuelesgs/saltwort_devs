
export interface Project {
    name: string;
    detail: string;
    tools: StackSkill[];
    development_time: number;
    images: string[];
    types: TypeProject[];
    contributions: Contribution[]
}

export interface Contribution {
    title: string;
    detail: string;
    priority: TypePriority;
}

export interface StackSkill {
    name: string;
    icon: string;
}

export interface SwitchProjectData {
    id: number;
    name: string;
    type: TypeProject[];
}

export type TypePriority = 'Muy Alta' | 'Alta' | 'Media';
export type TypeProject = 'Mobile' | 'Web';