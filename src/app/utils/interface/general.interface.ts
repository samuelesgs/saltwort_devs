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
                desc : ' Desarrollador 2 años de experiencia'+ 
                    'area con mas experiencia es Android, de la misma forma mi experiencia en aplicaciones de escritorio es abundante.',
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
                                detail : 'Punto de venta',
                                relevantSkills : [
                                    "Actualizacion de versiones",
                                    "Cambio de la version 24 a la version 33"
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
                                        detail: 'detail',
                                        url: 'url'
                                    }
                                ]
                            }, 
                            {
                                id: 2,
                                platforms : [typeProject.android],
                                name : 'Control Vehicular Movil',
                                detail : 'Proyecto interno',
                                relevantSkills : [
                                    "Inyección de dependencias",
                                    "Retrofit",
                                    "Arquitectura MVVM"
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
                                detail : 'CRM para clientes ',
                                relevantSkills : [
                                    "Consultas base de datos",
                                    "Creacion PDF y exportacion Excel",
                                    "Arquitectura MVC"
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
                    desc: 'Un desarrollador júnior en JavaScript es un profesional que está comenzando su carrera en el desarrollo web. Tiene un conocimiento básico de JavaScript y está familiarizado con las bibliotecas y frameworks más populares como React, Angular o Vue.js.',
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
                                    detail : 'Capturador de ingreso en proyecto',
                                    relevantSkills : [
                                        "Cambio de cocoa pods",
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
                desc: 'Un desarrollador sénior en JavaScript es un profesional experimentado que se especializa en el desarrollo de aplicaciones web interactivas y dinámicas. Tiene un profundo conocimiento de las bibliotecas y frameworks modernos, como React, Angular o Vue.js, y una sólida comprensión del desarrollo del lado del servidor con Node.js',
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
                                detail : 'Capturador de ingreso en proyecto',
                                relevantSkills : [
                                    "Creacion de proyecto",
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
                                detail : 'Capturador de ingreso en proyecto',
                                relevantSkills : [
                                    "Creacion de proyecto",
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