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
                desc : 'Soy un desarrollador junior con experiencia en diversas tecnologías, destacando mi habilidad en Android Studio con Kotlin para el desarrollo de aplicaciones móviles, donde he creado interfaces de usuario intuitivas e integrado características avanzadas. También tengo experiencia en Visual Studio con C#, desarrollando aplicaciones de escritorio y servicios eficientes. Mi competencia se extiende a la gestión de bases de datos, con conocimientos en PostgreSQL, MySQL y herramientas de administración. Me considero una persona altamente motivada y dispuesta a aprender, con un enfoque constante en mejorar mis habilidades y crecer en el campo del desarrollo.',
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
                    desc: 'Soy un programador con amplia experiencia en el desarrollo de aplicaciones móviles para iOS utilizando Swift, creando soluciones eficientes y bien diseñadas para la plataforma Apple. En el desarrollo web, manejo con soltura Angular para construir interfaces de usuario dinámicas y responsivas que se adaptan a diferentes dispositivos. Tengo un sólido conocimiento en la creación de APIs REST con NestJS en entornos Node.js, facilitando una comunicación segura y eficiente entre sistemas. Mi experiencia incluye la integración de servicios externos, la migración de tecnologías para asegurar transiciones suaves y sin interrupciones, y la optimización de sistemas para mejorar el rendimiento y la escalabilidad, adaptándome a las crecientes demandas del mercado.',
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
                desc: 'Desarrollador con más de 5 años de experiencia en desarrollo web y backend, y experto en Android Studio con Java y Kotlin. En el desarrollo móvil, he utilizado Android Studio para crear aplicaciones robustas, optimizando el rendimiento y la experiencia del usuario con Java y Kotlin. Tengo experiencia en el diseño de interfaces con XML, la integración de APIs, y la implementación de arquitecturas como MVVM. En el ámbito web, soy competente en tecnologías frontend como JavaScript, HTML, CSS y Angular, con un enfoque en la creación de interfaces responsivas. En el backend, tengo amplios conocimientos en Node.js, PHP y NestJS, con experiencia en la generación de archivos XLSX y CSV. Además, manejo servicios en la nube de AWS, incluyendo EC2, S3 y ELB, con experiencia en el despliegue de aplicaciones en subdominios de EC2 y la administración de contenedores S3. He utilizado PM2 para despliegues en AWS y he implementado validaciones de compras a través de APIs de Google en proyectos backend. Mi experiencia también incluye el uso de Bootstrap para diseño CSS y el despliegue de aplicaciones en entornos de producción de alta disponibilidad.',
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