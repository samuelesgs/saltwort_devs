export interface ProfileData {
    fullName: string;
    imgName: string;
    email: string;
    urlLinkedin: string;
    title: string;
    desc: string;
    tools: string[];
    companies : Company[]
    linkedin : string;
    gmail : string;
}

export interface Company {
    name : string;
    projects : Project[]
}

export interface Project {
    id: number;
    name : string;
    detail : string;
    relevantSkills : string[]; // Skills cumplidas de un proyecto
    tools : string [];
    screens: Screen[];
    icon: Screen;
    platforms : typeProject[];
}

export interface Screen {
    name: string;
    detail: string;
    url: string;
}

export enum typeProject {
    no_contains = 0,
    web = 1,
    android = 2,
    ios = 3,
    desktop = 4
};

export class Develpments {

    constructor() { }

    informationDev(name : string) : ProfileData{
        switch (name.toLocaleLowerCase()) {
            case 'luis':
            return {
                fullName:  'Luis Paulo Calderon Nava',
                imgName: 'profile-luis.png',
                email: 'pavicalderon49@gmail.com',
                urlLinkedin: '',
                title: 'Jr. Developer',
                desc : 'Devs-big-desc.properties.Luis-desc',
                tools : [
                    "android",
                    "java",
                    "kotlin",
                    "php",
                    "figma",
                    "mariadb",
                    "c-sharp",
                    "managment"
                ],
              
                companies : [
                    {
                        name : 'CS informatica',
                        projects : [
                            {
                                id: 1,
                                platforms : [typeProject.android, typeProject.desktop],
                                name : 'Venta plus Movil',
                                detail : 'specific-project.properties.project-detail-ventaplus-luis',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-1-ventaplus-luis",
                                    "specific-project.properties.revelant-skills-2-ventaplus-luis"
                                ],
                                tools : [
                                    "android",
                                    "kotlin"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'detail',
                                    url: 'VentaPlusMovil'
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detalle de la pantalla 1',
                                        url: 'screen1'
                                    },
                                    {
                                        name: 'screen-2',
                                        detail: 'detalle de la pantalla 2',
                                        url: 'screen2'
                                    },
                                    {
                                        name: 'screen-3',
                                        detail: 'detalle de la pantalla 3',
                                        url: 'screen3'
                                    },
                                    {
                                        name: 'screen-4',
                                        detail: 'detalle de la pantalla 4',
                                        url: 'screen1'
                                    },
                                    {
                                        name: 'screen-5',
                                        detail: 'detalle de la pantalla 5',
                                        url: 'screen2'
                                    },
                                    {
                                        name: 'screen-6',
                                        detail: 'detalle de la pantalla 6',
                                        url: 'screen3'
                                    },
                                    {
                                        name: 'screen-7',
                                        detail: 'detalle de la pantalla 7',
                                        url: 'screen1'
                                    },
                                    {
                                        name: 'screen-8',
                                        detail: 'detalle de la pantalla 8',
                                        url: 'screen2'
                                    },
                                    {
                                        name: 'screen-9',
                                        detail: 'detalle de la pantalla 7',
                                        url: 'screen1'
                                    },
                                    {
                                        name: 'screen-10',
                                        detail: 'detalle de la pantalla 8',
                                        url: 'screen2'
                                    }
                                ]
                            }, 
                            {
                                id: 2,
                                platforms : [typeProject.android],
                                name : 'Control Vehicular Movil',
                                detail : 'specific-project.properties.project-detail-cvm-luis',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-1-cvm-luis",
                                    "specific-project.properties.revelant-skills-2-cvm-luis",
                                    "specific-project.properties.revelant-skills-3-cvm-luis"
                                ],
                                tools : [
                                    "android",
                                    "kotlin"
                                ],
                                icon: {
                                    name: 'VentaPlusMovil',
                                    detail: 'detail',
                                    url: 'url'
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'url'
                                    }
                                ]
                            },
                            {
                                id: 3,
                                platforms : [typeProject.desktop],
                                name : 'CRM Generico',
                                detail : 'specific-project.properties.project-detail-crm-luis ',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-1-crm-luis",
                                    "specific-project.properties.revelant-skills-2-crm-luis",
                                    "specific-project.properties.revelant-skills-3-crm-luis"
                                ],
                                tools : [
                                    "c-sharp"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'detail',
                                    url: 'url'
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'url'
                                    }
                                ]
                            }

                        ]
                    }
                ],
                linkedin : "https://www.linkedin.com/in/luis-paulo-calderón-nava-2003bb257/",
                gmail  :"mailto:pavicalderon49@gmail.com",
            }
            case 'aksel':
                return {
                    fullName:  'Aksel Akemi Herrera Gonzalez',
                    imgName: 'peso-pluma.jpg',
                    email: 'akselherrera18@gmail.com',
                    urlLinkedin: '',
                    title: 'Jr. Developer',
                    desc: 'Devs-big-desc.properties.Aksel-desc.',
                    tools : [
                        "swift",
                        "angular",
                        "html",
                        "css-3",
                        "typescript",
                        "php",
                        "nestjs",
                        "nodejs",
                        "figma",
                        "mariadb",
                    ],
                    
                    companies : [
                        {
                            name : 'Encodemx',
                            projects : [
                                {
                                    id: 1,
                                    platforms : [
                                        typeProject.ios,
                                        typeProject.web
                                    ],
                                    name : 'Gastos de compra',
                                    detail : 'specific-project.properties.project-detail-encode-aksel',
                                    relevantSkills : [
                                        "specific-project.properties.revelant-skills-encode-aksel",
                                    ],
                                    tools : [
                                        "swift"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'detail',
                                        url: 'url'
                                    },
                                    screens: [
                                        {
                                            name: 'screen-1',
                                            detail: 'detail',
                                            url: 'url'
                                        }
                                    ]
                                },
                            ],                            
                        }
                    ],
                    linkedin : "https://www.linkedin.com/in/aksel-akemi-herrera-gonzalez-08054a213/",
                    gmail  :"mailto:akselherrera18@gmail.com",
            };
            default:
            return {
                fullName:  'Edgar Samuel Guerrero Sandoval',
                imgName: 'profile-samuel.png',
                email: 'samuelesgs04@gmail.com',
                urlLinkedin: '',
                title: 'Sr. Developer',
                desc: 'Devs-big-desc.properties.Samuel-desc',
                tools: [
                    "android",
                    "java",
                    "kotlin",
                    "angular",
                    "html",
                    "css-3",
                    "typescript",
                    "php",
                    "nestjs",
                    "nodejs",
                    "figma",
                    "mariadb",
                ],
                companies : [
                    {
                        name : 'Encodemx',
                        projects : [
                            {
                                id: 1,
                                name : 'Gastos de compra',
                                platforms : [
                                    typeProject.android,
                                    typeProject.web
                                ],
                                detail : 'specific-project.properties.project-detail-shopping-expense-samuel',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-shopping-expense-aksel",
                                ],
                                tools : [
                                    "android",
                                    "angular",
                                    "nestjs",
                                    "nestjs",
                                    "nestjs",
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'detail',
                                    url: 'url'
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'url'
                                    }
                                ]
                            },
                            {
                                id: 2,
                                name : 'Gastos de diarios',
                                platforms : [
                                    typeProject.android,
                                    typeProject.web
                                ],
                                detail : 'specific-project.properties.project-detail-daily-expenses-samuel',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-daily-expenses-aksel",
                                ],
                                tools : [
                                    "android",
                                    "angular"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'detail',
                                    url: 'url'
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'url'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                linkedin : "https://www.linkedin.com/in/edgar-samuel-guerrero-5a9471214/",
                gmail  :"mailto:samuelesgs04@gmail.com",
            }
            
        }
    }

}