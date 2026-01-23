
export interface Project {
    title: string;
    description: string;
    type: TypeProject;
    devTools: DevTool[]
}

export interface DevTool {
    name: string;
    image: string;
}

export type TypeProject = 'iOS' | 'Web' | 'iOS + Web';