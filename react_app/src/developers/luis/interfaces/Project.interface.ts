
export interface ProjectLuis {
    title: string;
    description: string;
    type: TypeProject;
    devTools: DevTool[];
    contributions: ContributionProjects[];
    images: ImagesProject;
}

export interface ImagesProject {
    mobile?: string[];
    web?: string[];
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

export type TypeProject = 'Móvil' | 'Móvil + Escritorio' | 'Escritorio' ;
export type ImportValue = 'Alto' | 'Medio' | 'Muy Alto';