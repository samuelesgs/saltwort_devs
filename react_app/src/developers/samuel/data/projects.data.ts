import type { Project, SwitchProjectData } from "../interfaces/project.interface";



export const PROJECTS_SAMUEL: Project[] = [
    {
        name: "Gastos Diarios 4",
        detail: "Aplicación móvil y web para registro sistemático de gastos e ingresos. Permite sincronizar registros, generar reportes mensuales/diarios, comparar ingresos vs gastos y gestionar múltiples cuentas.",
        tools: [
            {
                name: "Android",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            },
            {
                name: "Kotlin",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
            },
            {
                name: "Android",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            },
            {
                name: "Kotlin",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
            },

        ],
        images: [
            './aksel/daily-expenses-4/mobile/daily-expenses-img-1.png',
            './aksel/daily-expenses-4/mobile/daily-expenses-img-2.png',
            './aksel/daily-expenses-4/mobile/daily-expenses-img-3.png',
            './aksel/daily-expenses-4/mobile/daily-expenses-img-4.png',
            './aksel/daily-expenses-4/mobile/daily-expenses-img-5.png',
            './aksel/daily-expenses-4/mobile/daily-expenses-img-6.png',
            './aksel/daily-expenses-4/mobile/daily-expenses-img-7.png',
            './aksel/daily-expenses-4/mobile/daily-expenses-img-8.png',
        ],
        contributions: [
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Muy Alta"
            },
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Muy Alta"
            },
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Alta"
            },
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Muy Alta"
            },
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Muy Alta"
            },
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Muy Alta"
            },
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Muy Alta"
            },
        ],
        types: ["Mobile", "Web"],
        development_time: 2
    },
    {
        name: "Zeus",
        detail: "",
        tools: [],
        images: [
            './aksel/daily-expenses-4/web/daily-expenses-web-img-1.png',
            './aksel/daily-expenses-4/web/daily-expenses-web-img-2.png',
            './aksel/daily-expenses-4/web/daily-expenses-web-img-3.png',
            './aksel/daily-expenses-4/web/daily-expenses-web-img-4.png',
            './aksel/daily-expenses-4/web/daily-expenses-web-img-5.png',
            './aksel/daily-expenses-4/web/daily-expenses-web-img-6.png',
            './aksel/daily-expenses-4/web/daily-expenses-web-img-7.png',
            './aksel/daily-expenses-4/web/daily-expenses-web-img-8.png',
        ],
        contributions: [],
        types: ["Web"],
        development_time: 0
    },
    {
        name: "Blueboard",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        types: ["Mobile"],
        development_time: 0
    },
    {
        name: "SISAP",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        types: ["Mobile"],
        development_time: 0
    },
    {
        name: "Encodemx Web",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        types: ["Mobile"],
        development_time: 0
    },
    {
        name: "Console Encodemx",
        detail: "",
        tools: [],
        images: [],
        contributions: [],
        types: ["Mobile"],
        development_time: 0
    },
];

export const TITLE_PROJECTS: SwitchProjectData[] = PROJECTS_SAMUEL.map(row => ({
    id: Math.random(),
    name: row.name,
    type: row.types,
}));