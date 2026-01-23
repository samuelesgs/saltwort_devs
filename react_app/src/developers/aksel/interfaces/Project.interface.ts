
export interface Project {
    title: string;
    description: string;
    type: TypeProject;
    devTools: DevTool[];
    contributions: ContributionProjects[];
}

export interface DevTool {
    name: string;
    image: string;
}

export interface ContributionProjects {
    details: string;
    rate: number;
    importValue: ImportValue;
}

export type TypeProject = 'iOS' | 'Web' | 'iOS + Web';
export type ImportValue = 'Alto' | 'Medio';