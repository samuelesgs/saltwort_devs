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
    platforms : platforms[];
}

export interface Screen {
    name: string;
    detail: string;
    url: string;
    typeProject: typeProject[];
}

export interface platforms {
    typeProject  : typeProject,
    achievements : Achievements[]
}

export  interface Achievements {
    title : string;
    detail: string;
    icon : string;
    relevance : Relevance;
}

export enum  Relevance {
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
    VERY_HIGH = 5
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
                    "managment",
                    "angular"
                ],
              
                companies : [
                    {
                        name : 'CS informatica',
                        projects : [
                            {
                                id: 1,
                                platforms : [
                                    {
                                        typeProject : typeProject.android,
                                        achievements : []
                                    }
                                ],
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
                                        url: 'vm/screen1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-2',
                                        detail: 'detalle de la pantalla 2',
                                        url: 'vm/screen2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-3',
                                        detail: 'detalle de la pantalla 3',
                                        url: 'vm/screen3',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-4',
                                        detail: 'detalle de la pantalla 4',
                                        url: 'vm/screen1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-5',
                                        detail: 'detalle de la pantalla 5',
                                        url: 'vm/screen2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-6',
                                        detail: 'detalle de la pantalla 6',
                                        url: 'vm/screen3',
                                        typeProject: [typeProject.android]
                                        
                                    },
                                    {
                                        name: 'screen-7',
                                        detail: 'detalle de la pantalla 7',
                                        url: 'vm/screen1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-8',
                                        detail: 'detalle de la pantalla 8',
                                        url: 'vm/screen2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-9',
                                        detail: 'detalle de la pantalla 7',
                                        url: 'vm/screen1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-10',
                                        detail: 'detalle de la pantalla 8',
                                        url: 'vm/screen2',
                                        typeProject: [typeProject.android]
                                    }
                                ]
                            }, 
                            {
                                id: 2,
                                platforms : [
                                    {
                                        typeProject : typeProject.android,
                                        achievements : []
                                    },
                                    {
                                        typeProject : typeProject.desktop,
                                        achievements : []
                                    }
                                ],
                                name : 'Control Vehicular',
                                detail : 'specific-project.properties.project-detail-cvm-luis',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-cvm-1-luis",
                                    "specific-project.properties.revelant-skills-cvm-2-luis",
                                    "specific-project.properties.revelant-skills-cvm-3-luis"
                                ],
                                tools : [
                                    "android",
                                    "kotlin",
                                    "c-sharp",
                                    "managment"
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
                                        url: 'cv/url',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'Empresas',
                                        detail: 'Listado de empresas de las cuales puedes escoger',
                                        url: 'cv/cv1',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Principal',
                                        detail: 'Pantalla principal',
                                        url: 'cv/cv2',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'LLaves',
                                        detail: 'Catalogo de llaves, se pueden ver las llaves, actualizar y crear una nueva',
                                        url: 'cv/cv3',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Agregar llave',
                                        detail: 'Agregar llave, se puede agregar una llave y sirve para actualizar una llave ',
                                        url: 'cv/cv4',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Vehiculos',
                                        detail: 'Catalogo de vehiculos, se pueden ver los vehiculos, exportar a excel y agregar un nuevo ',
                                        url: 'cv/cv5',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Agregar vehiculo',
                                        detail: 'En esta pantalla puedes agregar un vehiculo con todas sus caracteristicas',
                                        url: 'cv/cv6',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Actualización de vehiculo',
                                        detail: 'Aqui se puede ver como se actualiza un vehiculo',
                                        url: 'cv/cv7',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Agentes',
                                        detail: 'En el catalogo de agentes puedes ver los agentes que tienes, buscarlos, agregar un nuevo, consultar uno y actualizarlo si asi se lo desea',
                                        url: 'cv/cv8',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Actualización agentes',
                                        detail: 'Aqui se esta consultando un agente',
                                        url: 'cv/cv9',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Inserción agente',
                                        detail: 'Aqui se esta insertando un agente',
                                        url: 'cv/cv10',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Asignar llave',
                                        detail: 'Se le puede asignar una llave a un agente',
                                        url: 'cv/cv11',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Recibir llave',
                                        detail: 'Recepcion de llave, se le recibe una llave ',
                                        url: 'cv/cv12',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Historial llaves',
                                        detail: 'Historial de llaves, se muestra en una tabla que se puede exportar a excel los datos de todas las llaves',
                                        url: 'cv/cv13',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Reporte rutas',
                                        detail: 'Reporte que muestra un listadp de todos las rutas, sus detalles, pueden ser consultadas para ver lo detalles mas especificos',
                                        url: 'cv/cv14',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Reporte consumo de gasolina',
                                        detail: 'Reporte que muestra el consumo de gasolina de los vehiculos, con sus fechas, y su calculos del kilometraje y los litros de gasolina. Este reporte se puede exportar a excel.',
                                        url: 'cv/cv15',
                                        typeProject: [typeProject.desktop]
                                    },
                                ]
                            },
                            {
                                id: 3,
                                platforms : [
                                    {
                                        typeProject : typeProject.desktop,
                                        achievements : []
                                    }
                                ],
                                name : 'CRM Generico',
                                detail : 'specific-project.properties.project-detail-crm-luis',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-1-crm-luis",
                                    "specific-project.properties.revelant-skills-2-crm-luis",
                                    "specific-project.properties.revelant-skills-3-crm-luis"
                                ],
                                tools : [
                                    "c-sharp",
                                    "managment"
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
                                        url: 'crm/crm1',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm2',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm3',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm4',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm5',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm6',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm7',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm8',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm9',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm10',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm11',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm12',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm13',
                                        typeProject: [typeProject.desktop]
                                    },
                                ]
                            },
                            {
                                id: 4,
                                platforms : [
                                    {
                                        typeProject : typeProject.desktop,
                                        achievements : []
                                    },
                                    {
                                        typeProject : typeProject.android,
                                        achievements : []
                                    }
                                ],
                                name : 'Ruta +',
                                detail : 'Aplicación que sirve para el envio de pedidos a clientes, consta de dos aplicaciones, una movil y una de esscritorio, la de movil solo envia pedidos, mientras que la de escritorio se encarga de administrar los pedidos, pudiendo enviarlos a comercial y egenrando los documentos necesarios para factura',
                                relevantSkills : [
                                    "Sincronización API",
                                    "Conexión impresora",
                                    "specific-project.properties.revelant-skills-3-crm-luis"
                                ],
                                tools : [
                                    "c-sharp",
                                    "android",
                                    "java",
                                    "managment"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'detail',
                                    url: 'rutaicon',
                                    typeProject: [typeProject.desktop, typeProject.android]
                                },
                                screens: [
                                    {
                                        name: 'Empresas',
                                        detail: 'como primera instancia te aparecera un listado de empresas de las cuale puedas escoger una.',
                                        url: 'ruta+/rd1',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Pantalla principal',
                                        detail: 'Una vez escogida una empresa te aparecera directamente la pestaña de pedidos.',
                                        url: 'ruta+/rd2',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Configuraciones',
                                        detail: 'Datos de tu servidor',
                                        url: 'ruta+/rd4',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Permisos',
                                        detail: 'Establecer preferencias para tus precios y productos, ademas de la manera de vender. Todo esto se manda a una api y se guarda en el servidor',
                                        url: 'ruta+/rd5',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Configuraciones de caja',
                                        detail: 'Configuraciones de tu terminal',
                                        url: 'ruta+/rd6',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Sincronizar',
                                        detail: 'Sincroniza tus catalogos',
                                        url: 'ruta+/rd7',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Nuevo pedido',
                                        detail: 'En esta pantalla vas a apoder hacer nuevo pedido',
                                        url: 'ruta+/rd8',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: 'Remisión',
                                        detail: 'Generar envio a comercial',
                                        url: 'ruta+/rd9',
                                        typeProject: [typeProject.desktop]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm3',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm4',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm5',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm6',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm7',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm8',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm9',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm10',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm11',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'ruta+/rm12',
                                        typeProject: [typeProject.android]
                                    },
                                    
                                ]
                            },
                            {
                                id: 5,
                                platforms : [
                                    {
                                        typeProject : typeProject.android,
                                        achievements : []
                                    }
                                ],
                                name : 'Verificador de precios movil',
                                detail : 'Ves los productos de la empresa, y puedes configurar los precios que ves en pantalla, siendo un total de 10 precios diferentes ',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-1-crm-luis",
                                    "specific-project.properties.revelant-skills-2-crm-luis",
                                    "specific-project.properties.revelant-skills-3-crm-luis"
                                ],
                                tools : [
                                    "android",
                                    "kotlin",
                                    "managment"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'detail',
                                    url: 'vpicon',
                                    typeProject: [ typeProject.android]
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'crm/crm1',
                                        typeProject: [typeProject.desktop]
                                    },
                                    
                                ]
                            },
                            {
                                id: 6,
                                platforms : [
                                    {
                                        typeProject : typeProject.android,
                                        achievements : []
                                    }
                                ],
                                name : 'Lista de precios',
                                detail : '',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-1-crm-luis",
                                    "specific-project.properties.revelant-skills-2-crm-luis",
                                    "specific-project.properties.revelant-skills-3-crm-luis"
                                ],
                                tools : [
                                    "android",
                                    "java",
                                    "managment"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'detail',
                                    url: 'lpicon',
                                    typeProject: [typeProject.desktop, typeProject.android]
                                },
                                screens: [
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'listaprecios/lp1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'listaprecios/lp2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'listaprecios/lp3',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'listaprecios/lp4',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'listaprecios/lp5',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'listaprecios/lp6',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'listaprecios/lp7',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: '',
                                        detail: '',
                                        url: 'listaprecios/lp8',
                                        typeProject: [typeProject.android]
                                    },
                                    
                                ]
                            }

                        ]
                    },
                    {
                            name: "Saltwort",
                            projects : [
                                {
                                    id: 2,
                                    platforms : [
                                        {
                                            typeProject : typeProject.web,
                                            achievements : []
                                        }
                                    ],
                                    name : 'Saltwort',
                                    detail : '',
                                    relevantSkills : [
                                        ""
                                    ],
                                    tools : [
                                        "angular",
                                        "figma",
                                        "typescript",
                                        "html",
                                        "css-3"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'Pagina de la empresa de Saltwort donde vas a poder conocer todos sus proyectos y a sus  integrantes ',
                                        url: 'AP-logo',
                                        typeProject: [typeProject.web]
                                    },
                                    screens: [
                                        {
                                            name: 'Pagina principal',
                                            detail: 'En esta pantañña tu puedes registrarte en caso de tu tener una cuenta ya, crear una o ingresar con Google',
                                            url: 'ap/ap1',
                                            typeProject: [typeProject.web]
                                        }
                                    ]
                                },
                            ],                   
                        }
                ],
                linkedin : "https://www.linkedin.com/in/luis-paulo-calderón-nava-2003bb257/",
                gmail  :"mailto:pavicalderon49@gmail.com",
            }
            case 'aksel':
                return {
                    fullName:  'Aksel Akemi Herrera Gonzalez',
                    imgName: 'aksel.png',
                    email: 'akselherrera18@gmail.com',
                    urlLinkedin: '',
                    title: 'Jr. Developer',
                    desc: 'Devs-big-desc.properties.Aksel-desc',
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
                                        {
                                            typeProject : typeProject.web,
                                            achievements : [

                                            ]
                                        }
                                    ],
                                    name : 'Encodemx Web',
                                    detail : 'specific-project.properties.project-detail-encode-aksel',
                                    relevantSkills : [
                                        "specific-project.properties.revelant-skills-encode-aksel",
                                    ],
                                    tools : [
                                        "angular",
                                        "nestjs",
                                        "nodejs",
                                        "typescript"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'Pagina principal de encode mx donde consultas informacion sobre las aplicaciones ',
                                        url: 'encode-logo',
                                        typeProject: [typeProject.web]
                                    },
                                    screens: [
                                        {
                                            name: 'Pagina principal',
                                            detail: 'Pagina principal de encode web',
                                            url: 'encode/encode1',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Pagina de gastos diarios 2',
                                            detail: 'Informacion sobre la aplicación',
                                            url: 'encode/encode2',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Gastos diarios 3 principal',
                                            detail: 'Observar informacion relevante de la aplicación',
                                            url: 'encode/encode3',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Gastos diarios 4 principal',
                                            detail: 'Informacion relevante de la aplicacion',
                                            url: 'encode/encode4',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Gastos diarios IOS',
                                            detail: 'Informacion de la aplicacion',
                                            url: 'encode/encode5',
                                            typeProject: [typeProject.web]
                                        }
                                    ]
                                },
                                {
                                    id: 2,
                                    platforms : [
                                        {
                                            typeProject : typeProject.web,
                                            achievements : []
                                        },
                                        {
                                            typeProject : typeProject.ios,
                                            achievements : []
                                        }
                                    ],
                                    name : 'Gastos de compra',
                                    detail : 'specific-project.properties.project-detail-encode-aksel',
                                    relevantSkills : [
                                        "specific-project.properties.revelant-skills-encode-aksel",
                                    ],
                                    tools : [
                                        "swift",
                                        "angular",
                                        "nestjs",
                                        "nodejs",
                                        "typescript"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'Pagina principal de encode mx donde consultas informacion sobre las aplicaciones',
                                        url: 'gcicon',
                                        typeProject: [typeProject.web, typeProject.ios]
                                    },
                                    screens: [
                                        {
                                            name: 'screen-1',
                                            detail: '',
                                            url: 'gcios/gcios1',
                                            typeProject: [typeProject.ios]
                                        },
                                        {
                                            name: 'screen-1',
                                            detail: '',
                                            url: 'gcios/gcios2',
                                            typeProject: [typeProject.ios]
                                        },
                                        {
                                            name: 'screen-1',
                                            detail: '',
                                            url: 'gcios/gcios3',
                                            typeProject: [typeProject.ios]
                                        },
                                        {
                                            name: 'screen-1',
                                            detail: '',
                                            url: 'gcios/gcios4',
                                            typeProject: [typeProject.ios]
                                        },  {
                                            name: 'screen-1',
                                            detail: '',
                                            url: 'gcios/gcios5',
                                            typeProject: [typeProject.ios]
                                        },
                                        {
                                            name: 'screen-1',
                                            detail: 'Pagina principal de gastos de compra',
                                            url: 'gcios/gcios6',
                                            typeProject: [typeProject.ios]
                                        },
                                        {
                                            name: 'screen-1',
                                            detail: 'Pagina principal de gastos de compra',
                                            url: 'gcios/gcios7',
                                            typeProject: [typeProject.ios]
                                        },
                                        {
                                            name: 'screen-1',
                                            detail: 'Pagina principal de gastos de compra',
                                            url: 'gcios/gcios8',
                                            typeProject: [typeProject.ios]
                                        },
                                        {
                                            name: 'Pantalla de login',
                                            detail: 'Puedes ingresar tu correo y contraseña, escoger idioma o entrar con Google',
                                            url: 'gcweb/gcweb1',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Pantalla principal',
                                            detail: 'En la pantalla principal puedes visualizar con categorias su detalle y su cantidad. Puedes cambiar entre secciones.',
                                            url: 'gcweb/gcweb2',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Reportes',
                                            detail: 'En forma de grafica de pastel puedes ver tus conceptos y la cantidad de esos conceptos',
                                            url: 'gcweb/gcweb3',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Proyectos',
                                            detail: 'Lista de tus proyectos, en forma de lista, tienes un botón para agregar un proyecto en caso de ser necesario',
                                            url: 'gcweb/gcweb4',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Categorias',
                                            detail: 'Listado de categorias, se dividen en 2, categorias de ingresos y gastados, em ambas puedes agregar categorias',
                                            url: 'gcweb/gcweb5',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Opciones',
                                            detail: 'En esta pantalla puedes elegir entre varias tipos de monedas y establecer las preferencias a tu gusto.',
                                            url: 'gcweb/gcweb6',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Añadir ingreso',
                                            detail: 'Puedes añadir un ingreso, estableciendo la cantidad, escogiendo la categoria y una breve descripción',
                                            url: 'gcweb/gcweb7',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Añadir proyecto',
                                            detail: 'En este modal puedes establecer el nombre de tu proyecto',
                                            url: 'gcweb/gcweb8',
                                            typeProject: [typeProject.web]
                                        },
                                    ]
                                },
                                {
                                    id: 3,
                                    platforms : [
                                        {
                                            typeProject : typeProject.web,
                                            achievements : []
                                        }
                                    ],
                                    name : 'Consola encodemx',
                                    detail : 'specific-project.properties.project-detail-encode-aksel',
                                    relevantSkills : [
                                        "specific-project.properties.revelant-skills-encode-aksel",
                                    ],
                                    tools : [
                                        "angular",
                                        "nestjs",
                                        "nodejs",
                                        "typescript"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'Pagina principal de encode mx donde consultas informacion sobre las aplicaciones.',
                                        url: 'encodemx',
                                        typeProject: [typeProject.web]
                                    },
                                    screens: [
                                    
                                        {
                                            name: 'Pantalla de las licencias',
                                            detail: 'Las licencias que tienen algunos usuarios de las aplicaciones.',
                                            url: 'consoleencode/c2',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Agregar licencia',
                                            detail: 'Puedes agregar una licencia y personalizarla.',
                                            url: 'consoleencode/c3',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Usuarios',
                                            detail: 'Puedes ver los usuarios a forma de tabla, donde lso pueds buscar o limpiar.',
                                            url: 'consoleencode/c4',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Consultar usuario',
                                            detail: 'Puedes ver los detalles del usuario',
                                            url: 'consoleencode/c5',
                                            typeProject: [typeProject.web]
                                        },
                                        
                                        {
                                            name: 'Edición de suscripción',
                                            detail: 'Puedes ver editar la suscripcion de un usuario, pudiendo estableer fecha inicial, fecha final y tipo de suscripcion',
                                            url: 'consoleencode/c6',
                                            typeProject: [typeProject.web]
                                        },
                                    ]
                                },
                                {
                                    id: 4,
                                    platforms : [
                                        {
                                            typeProject : typeProject.web,
                                            achievements : []
                                        }
                                    ],
                                    name : 'Productivity',
                                    detail : 'specific-project.properties.project-detail-encode-aksel',
                                    relevantSkills : [
                                        "specific-project.properties.revelant-skills-encode-aksel",
                                    ],
                                    tools : [
                                        "angular",
                                        "nestjs",
                                        "nodejs",
                                        "typescript"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'Principal donde puedes ver los meses y sus actividades ',
                                        url: 'productivity',
                                        typeProject: [typeProject.web]
                                    },
                                    screens: [
                                        {
                                            name: 'Pantalla principal',
                                            detail: 'Puedes ver los meses con sus actividades por mes, empezando en el mes actual',
                                            url: 'pro/pro1',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Tareas por mes',
                                            detail: 'En la anterior pantalla se mostraban las actividades por dia, ahora se muestran las actividades por mes ',
                                            url: 'pro/pro2',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Tareas completadas',
                                            detail: 'Aqui ya has completado todas las tareas',
                                            url: 'pro/pro3',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Perfil de usuario',
                                            detail: 'los detalles del usuario',
                                            url: 'pro/pro4',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Categorias',
                                            detail: 'Categorias de todas tus actividades',
                                            url: 'pro/pro5',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Agregar estado',
                                            detail: 'Puedes agregar estados, por si los que estan ahi no describen tu actividad',
                                            url: 'pro/pro6',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Prioridades ',
                                            detail: 'Prioridades de las actividades',
                                            url: 'pro/pro7',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Reporte de tu mes',
                                            detail: 'Reporte e tu mes, donde puedes ver las actividades en las que has gastado tiempo',
                                            url: 'pro/pro8',
                                            typeProject: [typeProject.web]
                                        },
                                    ]
                                },
                                {
                                    id: 5,
                                    platforms : [
                                        {
                                            typeProject : typeProject.web,
                                            achievements : []
                                        }
                                    ],
                                    name : 'Gastos diarios 4 web',
                                    detail : 'specific-project.properties.project-detail-encode-aksel',
                                    relevantSkills : [
                                        "specific-project.properties.revelant-skills-encode-aksel",
                                    ],
                                    tools : [
                                        "angular",
                                        "nestjs",
                                        "nodejs",
                                        "typescript"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'Pagina que apoya a la aplicacion de gastos diarios 4 movil, siendo ua extension de la misma  ',
                                        url: 'daily_expenses_4',
                                        typeProject: [typeProject.web]
                                    },
                                    screens: [
                                        {
                                            name: 'Pantalla principal de gastos diarios 4',
                                            detail: 'Puedes ver tus datos, en forma de grafica, los ultimos 10 movimientos, el balance de la cuenta, las categorias donde has gastado, etc.',
                                            url: 'gd4web/gdweb1',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Movimientos',
                                            detail: 'En esta pantalla se muestran tus movimientos ordenados por dia en el mes seleccionado',
                                            url: 'gd4web/gdweb2',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Categorias',
                                            detail: 'Puedes ver las categorias que puedes usar',
                                            url: 'gd4web/gdweb3',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Cuentas ',
                                            detail: 'Aqui se muestra como un balance de las cuentas que posees',
                                            url: 'gd4web/gdweb4',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Agenda',
                                            detail: 'Visualizas un calendario con tu agenda del mes ',
                                            url: 'gd4web/gdweb5',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Reportes por fecha',
                                            detail: 'Reportes en forma de barras, que puedes organizar por mes ',
                                            url: 'gd4web/gdweb6',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Reportes por categoria',
                                            detail: 'Reportes en forma de pastel, donde puedes analizar de una manera mas facil tus categorias ',
                                            url: 'gd4web/gdweb7',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Categorias en tendencia',
                                            detail: 'Las categorias que mas has usado en el mes ',
                                            url: 'gd4web/gdweb8',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Presupuesto',
                                            detail: 'Presupuesto que tienes para las categorias',
                                            url: 'gd4web/gdweb9',
                                            typeProject: [typeProject.web]
                                        },
                                        
                                        {
                                            name: 'Deudas',
                                            detail: 'Personas que te deben, visualizas con una barra para que veas el procentaje de pagado',
                                            url: 'gd4web/gdweb10',
                                            typeProject: [typeProject.web]
                                        },
                                        
                                        {
                                            name: 'Metas',
                                            detail: 'Las matas que te propones de ahorrar ',
                                            url: 'gd4web/gdweb11',
                                            typeProject: [typeProject.web]
                                        },
                                        
                                        {
                                            name: 'Registros frecuentes',
                                            detail: 'Las categorias que mas frecuentas  ',
                                            url: 'gd4web/gdweb12',
                                            typeProject: [typeProject.web]
                                        },
                                        
                                        {
                                            name: 'Configuraciones',
                                            detail: 'Configuraciones y preferencias que puedes establecer para la aplicación',
                                            url: 'gd4web/gdweb13',
                                            typeProject: [typeProject.web]
                                        },
                                        
                                        {
                                            name: 'Perfil de usuario',
                                            detail: 'Correo, contraseña, opciones de configuracion ',
                                            url: 'gd4web/gdweb14',
                                            typeProject: [typeProject.web]
                                        },
                                        
                                    ]
                                }
                            ],
                                     
                        },
                        {
                            name: "Saltwort",
                            projects : [
                                {
                                    id: 2,
                                    platforms : [
                                        {
                                            typeProject : typeProject.web,
                                            achievements : []
                                        }
                                    ],
                                    name : 'Activity planner',
                                    detail : '',
                                    relevantSkills : [
                                        ""
                                    ],
                                    tools : [
                                        "angular",
                                        "figma",
                                        "nestjs",
                                        "typescript"
                                    ],
                                    icon: {
                                        name: 'name',
                                        detail: 'Aqui vas a poder administrar tu tiempo y actividades de la mejor manera posible ',
                                        url: 'AP-logo',
                                        typeProject: [typeProject.web]
                                    },
                                    screens: [
                                        {
                                            name: 'Pagina principal',
                                            detail: 'En esta pantalla tu puedes registrarte en caso de tu tener una cuenta ya, crear una o ingresar con Google',
                                            url: 'ap/ap1',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Pagina de inicio',
                                            detail: 'Podras observar varias secciones, los tabaleros que tienes, sus estados y abajo un top de categorias, para que puedas ver las categorias que mas has usado',
                                            url: 'ap/ap2',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Tableros',
                                            detail: 'Aqui puedes agregar un  tablero junto con su detalle ',
                                            url: 'ap/ap3',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Tablero guardado',
                                            detail: 'Aqui ya puedes apreciar como se guardó el tablero',
                                            url: 'ap/ap4',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Categorias',
                                            detail: 'En esta pantalla puedes agregar tus categorias',
                                            url: 'ap/ap5',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Como agregar categorias',
                                            detail: 'Basta con darle al boton de mas para poder agregar una categoria, posteriormente solo debes pulsar la confirmación',
                                            url: 'ap/ap6',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Estados',
                                            detail: 'Puedes visualizar un listado de tus estados, asi como un ejemplo de como se ven.',
                                            url: 'ap/ap7',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Como agregar estados',
                                            detail: 'Es tan simple como pulsar el boton de agregar, colocarle un nombre a tu estado asi como sus colores, y luego confirmar',
                                            url: 'ap/ap8',
                                            typeProject: [typeProject.web]
                                        },
                                        {
                                            name: 'Perfil de usuario',
                                            detail: 'Tus datos de usuario, puedes actualizar tu nombre correo y contraseña',
                                            url: 'ap/ap9',
                                            typeProject: [typeProject.web]
                                        },

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
                                    {
                                        typeProject : typeProject.android,
                                        achievements : []
                                    },
                                    {
                                        typeProject : typeProject.web,
                                        achievements : []
                                    }
                                ],
                                detail : 'specific-project.properties.project-detail-shopping-expense-samuel',
                                relevantSkills : [
                                    "specific-project.properties.revelant-skills-shopping-expenses-samuel",
                                ],
                                tools : [
                                    "android",
                                    "angular",
                                    "nestjs"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: ' ',
                                    url: 'gcicon',
                                    typeProject: [typeProject.android]
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'Pantalla principal',
                                        url: 'gc/gc1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc3',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc4',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc5',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc6',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc8',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc9',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc10',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gc/gc11',
                                        typeProject: [typeProject.android]
                                    }

                                ]
                            },
                            {
                                id: 2,
                                name : 'Gastos diarios 4',
                                platforms : [
                                    {
                                        typeProject : typeProject.android,
                                        achievements : []
                                    },
                                    {
                                        typeProject : typeProject.web,
                                        achievements : []
                                    }
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
                                    url: 'daily_expenses_4',
                                    typeProject: [typeProject.android]
                                },
                                screens: [
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd/gd1',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd/gd2',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd/gd3',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd/gd4',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd/gd5',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd/gd6',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd/gd7',
                                        typeProject: [typeProject.android]
                                    },
                                    {
                                        name: 'screen-1',
                                        detail: 'detail',
                                        url: 'gd/gd8',
                                        typeProject: [typeProject.android]
                                    },

                                ]
                            }
                        ]
                    },
                    {
                        name: "Saltwort",
                        projects : [
                            {
                                id: 2,
                                platforms : [
                                    {
                                        typeProject : typeProject.web,
                                        achievements : []
                                    }
                                ],
                                name : 'Activity planner',
                                detail : '',
                                relevantSkills : [
                                    ""
                                ],
                                tools : [
                                    "angular",
                                    "figma",
                                    "nestjs",
                                    "typescript"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'Aqui vas a poder administrar tu tiempo y actividades de la mejor manera posible ',
                                    url: 'AP-logo',
                                    typeProject: [typeProject.web]
                                },
                                screens: [
                                    {
                                        name: 'Pagina principal',
                                        detail: 'En esta pantalla tu puedes registrarte en caso de tu tener una cuenta ya, crear una o ingresar con Google',
                                        url: 'ap/ap1',
                                        typeProject: [typeProject.web]
                                    },
                                    {
                                        name: 'Pagina de inicio',
                                        detail: 'Podras observar varias secciones, los tabaleros que tienes, sus estados y abajo un top de categorias, para que puedas ver las categorias que mas has usado',
                                        url: 'ap/ap2',
                                        typeProject: [typeProject.web]
                                    },
                                    {
                                        name: 'Tableros',
                                        detail: 'Aqui puedes agregar un  tablero junto con su detalle ',
                                        url: 'ap/ap3',
                                        typeProject: [typeProject.web]
                                    },
                                    {
                                        name: 'Tablero guardado',
                                        detail: 'Aqui ya puedes apreciar como se guardó el tablero',
                                        url: 'ap/ap4',
                                        typeProject: [typeProject.web]
                                    },
                                    {
                                        name: 'Categorias',
                                        detail: 'En esta pantalla puedes agregar tus categorias',
                                        url: 'ap/ap5',
                                        typeProject: [typeProject.web]
                                    },
                                    {
                                        name: 'Como agregar categorias',
                                        detail: 'Basta con darle al boton de mas para poder agregar una categoria, posteriormente solo debes pulsar la confirmación',
                                        url: 'ap/ap6',
                                        typeProject: [typeProject.web]
                                    },
                                    {
                                        name: 'Estados',
                                        detail: 'Puedes visualizar un listado de tus estados, asi como un ejemplo de como se ven.',
                                        url: 'ap/ap7',
                                        typeProject: [typeProject.web]
                                    },
                                    {
                                        name: 'Como agregar estados',
                                        detail: 'Es tan simple como pulsar el boton de agregar, colocarle un nombre a tu estado asi como sus colores, y luego confirmar',
                                        url: 'ap/ap8',
                                        typeProject: [typeProject.web]
                                    },
                                    {
                                        name: 'Perfil de usuario',
                                        detail: 'Tus datos de usuario, puedes actualizar tu nombre correo y contraseña',
                                        url: 'ap/ap9',
                                        typeProject: [typeProject.web]
                                    },
                                ]
                            },
                        ],                   
                    },
                    {
                        name: "Neoris/Telcel",
                        projects : [
                            {
                                id: 3,
                                platforms : [
                                    {
                                        typeProject : typeProject.web,
                                        achievements : []
                                    },
                                    {
                                        typeProject : typeProject.android,
                                        achievements : []
                                    }                                    
                                ],
                                name : '',
                                detail : '',
                                relevantSkills : [
                                    ""
                                ],
                                tools : [
                                    "angular",
                                    "figma",
                                    "nestjs",
                                    "typescript"
                                ],
                                icon: {
                                    name: 'name',
                                    detail: 'Aqui vas a poder administrar tu tiempo y actividades de la mejor manera posible ',
                                    url: 'AP-logo',
                                    typeProject: [typeProject.web]
                                },
                                screens: [
                                    {
                                        name: 'Pagina principal',
                                        detail: 'En esta pantañña tu puedes registrarte en caso de tu tener una cuenta ya, crear una o ingresar con Google',
                                        url: 'ap/ap1',
                                        typeProject: [typeProject.web]
                                    }
                                ]
                            },
                        ],                   
                    }
                ],
                linkedin : "https://www.linkedin.com/in/edgar-samuel-guerrero-5a9471214/",
                gmail  :"mailto:samuelesgs04@gmail.com",
            }
            
        }
    }

}