import type { Project, SwitchProjectData } from "../interfaces/project.interface";



export const PROJECTS_SAMUEL: Project[] = [
    {
        name: "Gastos Diarios 4",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        type: "Mobile",
        development_time: 0
    },
    {
        name: "Zeus",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        type: "Web",
        development_time: 0
    },
    {
        name: "Blueboard",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        type: "Mobile",
        development_time: 0
    },
    {
        name: "SISAP",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        type: "Mobile",
        development_time: 0
    },
    {
        name: "Encodemx Web",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        type: "Web",
        development_time: 0
    },
    {
        name: "Console Encodemx",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        type: "Web",
        development_time: 0
    },
];

export const TITLE_PROJECTS: SwitchProjectData[] = PROJECTS_SAMUEL.map(row => ({
    name: row.name,
    type: row.type
}));