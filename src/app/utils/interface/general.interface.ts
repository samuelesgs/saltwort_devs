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
    typeProject: typeProject[];
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
                                platforms : [typeProject.android],
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
                                    url: 'venta+-icon',
                                    typeProject: [typeProject.android, typeProject.desktop]
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detalle de la pantalla 1',
                                        url: 'screen1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-2',
                                        detail: 'detalle de la pantalla 2',
                                        url: 'screen2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-3',
                                        detail: 'detalle de la pantalla 3',
                                        url: 'screen3',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-4',
                                        detail: 'detalle de la pantalla 4',
                                        url: 'screen1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-5',
                                        detail: 'detalle de la pantalla 5',
                                        url: 'screen2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-6',
                                        detail: 'detalle de la pantalla 6',
                                        url: 'screen3',
                                        typeProject: [typeProject.android]
                                        
                                    },
                                    {
                                        name: 'screen-7',
                                        detail: 'detalle de la pantalla 7',
                                        url: 'screen1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-8',
                                        detail: 'detalle de la pantalla 8',
                                        url: 'screen2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-9',
                                        detail: 'detalle de la pantalla 7',
                                        url: 'screen1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-10',
                                        detail: 'detalle de la pantalla 8',
                                        url: 'screen2',
                                        typeProject: [typeProject.android]
                                    }
                                ]
                            }, 
                            {
                                id: 2,
                                platforms : [typeProject.android, typeProject.desktop],
                                name : 'Control Vehicular',
                                detail : 'specific-project.properties.project-detail-cvm-luis',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-cvm-1-luis",
                                    "specific-project.properties.revelant-skills-cvm-2-luis",
                                    "specific-project.properties.revelant-skills-cvm-3-luis"
                                ],
                                tools : [
                                    "android",
                                    "kotlin"
                                ],
                                icon: {
                                    name: 'ControlVehicular',
                                    detail: 'detail',
                                    url: 'cvm-icon',
                                    typeProject: [typeProject.android]
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'url',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-2',
                                        detail: 'Escoger empresa',
                                        url: 'cv1',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-3',
                                        detail: 'Pantalla principal',
                                        url: 'cv2',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Catalogo de llaves, se pueden ver las llaves, actualizar y crear una nueva',
                                        url: 'cv3',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Agregar llave, se puede agregar una llave y sirve para actualizar una llave ',
                                        url: 'cv4',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Catalogo de vehiculos, se pueden ver los vehiculos, exportar a excel y agregar un nuevo ',
                                        url: 'cv5',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Agregar un vehiculo',
                                        url: 'cv6',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Aqui se puede ver como se actualiza un vehiculo',
                                        url: 'cv7',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'En el catalogo de agentes puedes ver los agentes que tienes, buscarlos, agregar un nuevo, consultar uno y actualizarlo si asi se lo desea',
                                        url: 'cv8',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Aqui se esta consultando un agente',
                                        url: 'cv9',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Aqui se esta insertando un agente',
                                        url: 'cv10',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Se le puede asignar una llave a un agente',
                                        url: 'cv11',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Recepcion de llave, se le recibe una llave ',
                                        url: 'cv12',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Historial de llaves, se muestra en una tabla que s e puede exportar a excel los datos',
                                        url: 'cv13',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Reporte que muestra un listadp de todos las rutas, sus detalles, pueden ser consultadas para ver lo detalles mas especificos',
                                        url: 'cv14',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'Reporte que muestra el consumo de gasolina de los vehiculos.',
                                        url: 'cv15',
                                        typeProject: [typeProject.desktop]
                                    },
                                ]
                            },
                            {
                                id: 3,
                                platforms : [typeProject.desktop],
                                name : 'CRM Generico',
                                detail : 'specific-project.properties.project-detail-crm-luis',
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
                                    url: 'crm-icon',
                                    typeProject: [typeProject.desktop]
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm1',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm2',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm3',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm4',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm5',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm6',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm7',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm8',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm9',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm10',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm11',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm12',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm13',
                                        typeProject: [typeProject.desktop]
                                    },
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
                                        typeProject.web
                                    ],
                                    name : 'Encodemx Web',
                                    detail : 'specific-project.properties.project-detail-encode-aksel',
                                    relevantSkills : [
                                        "specific-project.properties.revelant-skills-encode-aksel",
                                    ],
                                    tools : [
                                        "swift"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'Pagina principal de encode mx donde consultas informacion sobre las aplicaciones ',
                                        url: 'encode-logo',
                                        typeProject: [typeProject.web]
                                    },
                                    screens: [
                                        {
                                            name: 'screen-1',
                                            detail: 'Pagina principal de encode web',
                                            url: 'encode1',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'screen-2',
                                            detail: 'Gastos diarios 2 principal',
                                            url: 'encode2',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'screen-3',
                                            detail: 'Gastos diarios 3 principal',
                                            url: 'encode3',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'screen-4',
                                            detail: 'Gastos diarios 4 principal',
                                            url: 'encode4',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'screen-5',
                                            detail: 'Gastos diarios IOS',
                                            url: 'encode5',
                                            typeProject: [typeProject.web]
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
                                    typeProject.android
                                ],
                                detail : 'specific-project.properties.project-detail-shopping-expense-samuel',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-shopping-expense-aksel",
                                ],
                                tools : [
                                    "android",
                                    "angular",
                                    "nestjs"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'detail',
                                    url: 'url',
                                    typeProject: [typeProject.android]
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'Pantalla principal',
                                        url: 'gc1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc3',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc4',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc5',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc6',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc8',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc9',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc10',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc11',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc12',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc13',
                                        typeProject: [typeProject.android]
                                    },

                                ]
                            },
                            {
                                id: 2,
                                name : 'Gastos de diarios',
                                platforms : [
                                    typeProject.android
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
                                    url: 'url',
                                    typeProject: [typeProject.android]
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd3',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd4',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd5',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd6',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd7',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd8',
                                        typeProject: [typeProject.android]
                                    },

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