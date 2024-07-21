export interface ProfileData {
    fullName: string;
    imgName: string;
    email: string;
    urlLinkedin: string;
    title: string;
    desc: string;
    tools: string[];
    companies : Company[]
}

export interface Company {
    name : string;
    projects : Project[]
}

export interface Project {
    name : string;
    detail : string;
    relevantSkills : string[]; // Skills cumplidas de un proyecto
    tools : string [];
}

export class Develpments {

    constructor() {
    }

    informationDev(name : string) : ProfileData{
        switch (name.toLocaleLowerCase()) {
            case 'luis':
            return {
                fullName:  'Luis Paulo Calderon Nava',
                imgName: 'profile-pavi.png',
                email: 'paulocalderon14@gmail.com',
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
                    "c#",
                    "managment"
                ],
                companies : [
                    {
                        name : 'CS informatica',
                        projects : [
                            {
                                name : 'Venta plus',
                                detail : 'Punto de venta',
                                relevantSkills : [
                                    "Actualizacion de versiones",
                                    "Cambio de la version 24 a la version 33"
                                ],
                                tools : [
                                    "android"
                                ]
                            }
                        ]
                    }
                ]
            }
            case 'aksel':
                return {
                    fullName:  'Aksel Akemi Herrera Gonzalez',
                    imgName: 'profile-pavi.png',
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
                                    name : 'Gastos de compra',
                                    detail : 'Capturador de ingreso en proyecto',
                                    relevantSkills : [
                                        "Cambio de cocoa pods",
                                    ],
                                    tools : [
                                        "swift"
                                    ]
                                }
                            ]
                        }
                    ]
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
                                name : 'Gastos de compra',
                                detail : 'Capturador de ingreso en proyecto',
                                relevantSkills : [
                                    "Creacion de proyecto",
                                ],
                                tools : [
                                    "android",
                                    "angular"
                                ]
                            },
                            {
                                name : 'Gastos de diarios',
                                detail : 'Capturador de ingreso en proyecto',
                                relevantSkills : [
                                    "Creacion de proyecto",
                                ],
                                tools : [
                                    "android",
                                    "angular"
                                ]
                            }
                        ]
                    }
                ]
            }
            
        }
    }

}