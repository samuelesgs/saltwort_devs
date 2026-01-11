
export interface ProfileData {
    fullName: string;
    imgName: string;
    email: string;
    urlLinkedin: string;
    title: string;
    desc: string;
    tools: string[];
    companies: Company[]
    linkedin: string;
    gmail: string;
}

export interface Company {
    name: string;
    projects: Project[]
}

export interface Project {
    id: number;
    name: string;
    detail: string;
    relevantSkills: string[]; // Skills cumplidas de un proyecto
    tools: string[];
    screens: Screen[];
    icon: Screen;
    platforms: platforms[];
}

export interface Screen {
    name: string;
    detail: string;
    url: string;
    typeProject: typeProject[];
}

export interface platforms {
    typeProject: typeProject,
    achievements: Achievements[]
}

export interface Achievements {
    title: string;
    detail: string;
    icon: string;
    relevance: Relevance;
}

export enum Relevance {
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
    VERY_HIGH = 5
}

export enum typeProject {
    no_contains = 0,
    web = 1,
    movil = 2,
    desktop = 4
};
