import { ProfileData, typeProject } from "./general.interface";

export class InformationLuis{

    private data? : ProfileData

    constructor() {
        this.loadInformation();
    }

    private loadInformation() {
        this.data = 
        {
            fullName: 'Luis Paulo Calderon Nava',
            imgName: 'profile-luis.png',
            email: 'pavicalderon49@gmail.com',
            urlLinkedin: '',
            title: 'Jr. Developer',
            desc: 'Devs-big-desc.properties.Luis-desc',
            tools: this.getTools,
            companies: this.getCompanies,
            linkedin: "https://www.linkedin.com/in/luis-paulo-calderón-nava-2003bb257/",
            gmail: "mailto:pavicalderon49@gmail.com",
        }
    }

    private get getCompanies() {
        return  [
            this.getCsInformatica,
            {
                name: "Saltwort",
                projects: [
                    {
                        id: 2,
                        platforms: [
                            {
                                typeProject: typeProject.web,
                                achievements: []
                            }
                        ],
                        name: 'Saltwort',
                        detail: '',
                        relevantSkills: [
                            ""
                        ],
                        tools: [
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
        ];
    }

    private get getTools() {
        return [
            "android",
            "java",
            "kotlin",
            "php",
            "figma",
            "mariadb",
            "c-sharp",
            "managment",
            "angular"
        ];
    }

    get getInformation() {
        return this.data!
    }

    private get getCsInformatica() {
        return {
            name: 'CS informatica',
            projects: [
                {
                    id: 1,
                    platforms: [
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        }
                    ],
                    name: 'Venta plus Movil',
                    detail: 'specific-project.properties.project-detail-ventaplus-luis',
                    relevantSkills: [
                        "specific-project.properties.revelant-skills-1-ventaplus-luis",
                        "specific-project.properties.revelant-skills-2-ventaplus-luis"
                    ],
                    tools: [
                        "android",
                        "kotlin"
                    ],
                    icon: {
                        name: 'name',
                        detail: 'detail',
                        url: 'venta+-icon',
                        typeProject: [typeProject.movil, typeProject.desktop]
                    },
                    screens: this.getScreensCsInformatica
                },
                {
                    id: 2,
                    platforms: [
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        },
                        {
                            typeProject: typeProject.desktop,
                            achievements: []
                        }
                    ],
                    name: 'Control Vehicular',
                    detail: 'specific-project.properties.project-detail-cvm-luis',
                    relevantSkills: [
                        "specific-project.properties.revelant-skills-cvm-1-luis",
                        "specific-project.properties.revelant-skills-cvm-2-luis",
                        "specific-project.properties.revelant-skills-cvm-3-luis"
                    ],
                    tools: [
                        "android",
                        "kotlin",
                        "c-sharp",
                        "managment"
                    ],
                    icon: {
                        name: 'ControlVehicular',
                        detail: 'detail',
                        url: 'cvm-icon',
                        typeProject: [typeProject.movil]
                    },
                    screens: this.getScreenControlVehicular
                },
                {
                    id: 3,
                    platforms: [
                        {
                            typeProject: typeProject.desktop,
                            achievements: []
                        }
                    ],
                    name: 'CRM Generico',
                    detail: 'specific-project.properties.project-detail-crm-luis',
                    relevantSkills: [
                        "specific-project.properties.revelant-skills-1-crm-luis",
                        "specific-project.properties.revelant-skills-2-crm-luis",
                        "specific-project.properties.revelant-skills-3-crm-luis"
                    ],
                    tools: [
                        "c-sharp",
                        "managment"
                    ],
                    icon: {
                        name: 'name',
                        detail: 'detail',
                        url: 'crm-icon',
                        typeProject: [typeProject.desktop]
                    },
                    screens : this.getScreenCRM
                },
                {
                    id: 4,
                    platforms: [
                        {
                            typeProject: typeProject.desktop,
                            achievements: []
                        },
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        }
                    ],
                    name: 'Ruta +',
                    detail: 'Aplicación que sirve para el envio de pedidos a clientes, consta de dos aplicaciones, una movil y una de esscritorio, la de movil solo envia pedidos, mientras que la de escritorio se encarga de administrar los pedidos, pudiendo enviarlos a comercial y egenrando los documentos necesarios para factura',
                    relevantSkills: [
                        "Sincronización API",
                        "Conexión impresora",
                        "specific-project.properties.revelant-skills-3-crm-luis"
                    ],
                    tools: [
                        "c-sharp",
                        "android",
                        "java",
                        "managment"
                    ],
                    icon: {
                        name: 'name',
                        detail: 'detail',
                        url: 'rutaicon',
                        typeProject: [typeProject.desktop, typeProject.movil]
                    },
                    screens: this.getScreenRutaPlus
                },
                {
                    id: 5,
                    platforms: [
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        }
                    ],
                    name: 'Verificador de precios movil',
                    detail: 'Ves los productos de la empresa, y puedes configurar los precios que ves en pantalla, siendo un total de 10 precios diferentes ',
                    relevantSkills: [
                        "specific-project.properties.revelant-skills-1-crm-luis",
                        "specific-project.properties.revelant-skills-2-crm-luis",
                        "specific-project.properties.revelant-skills-3-crm-luis"
                    ],
                    tools: [
                        "android",
                        "kotlin",
                        "managment"
                    ],
                    icon: {
                        name: 'name',
                        detail: 'detail',
                        url: 'vpicon',
                        typeProject: [typeProject.movil]
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
                    platforms: [
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        }
                    ],
                    name: 'Lista de precios',
                    detail: '',
                    relevantSkills: [
                        "specific-project.properties.revelant-skills-1-crm-luis",
                        "specific-project.properties.revelant-skills-2-crm-luis",
                        "specific-project.properties.revelant-skills-3-crm-luis"
                    ],
                    tools: [
                        "android",
                        "java",
                        "managment"
                    ],
                    icon: {
                        name: 'name',
                        detail: 'detail',
                        url: 'lpicon',
                        typeProject: [typeProject.desktop, typeProject.movil]
                    },
                    screens: this.getListPrecios
                }
            ]
        };
    }

    private get getScreensCsInformatica() {
        return  [
            {
                name: 'screen-1',
                detail: 'detalle de la pantalla 1',
                url: 'vm/screen1',
                typeProject: [typeProject.movil]
            },
            {
                name: 'screen-2',
                detail: 'detalle de la pantalla 2',
                url: 'vm/screen2',
                typeProject: [typeProject.movil]
            },
            {
                name: 'screen-3',
                detail: 'detalle de la pantalla 3',
                url: 'vm/screen3',
                typeProject: [typeProject.movil]
            },
            {
                name: 'screen-4',
                detail: 'detalle de la pantalla 4',
                url: 'vm/screen1',
                typeProject: [typeProject.movil]
            },
            {
                name: 'screen-5',
                detail: 'detalle de la pantalla 5',
                url: 'vm/screen2',
                typeProject: [typeProject.movil]
            },
            {
                name: 'screen-6',
                detail: 'detalle de la pantalla 6',
                url: 'vm/screen3',
                typeProject: [typeProject.movil]

            },
            {
                name: 'screen-7',
                detail: 'detalle de la pantalla 7',
                url: 'vm/screen1',
                typeProject: [typeProject.movil]
            },
            {
                name: 'screen-8',
                detail: 'detalle de la pantalla 8',
                url: 'vm/screen2',
                typeProject: [typeProject.movil]
            },
            {
                name: 'screen-9',
                detail: 'detalle de la pantalla 7',
                url: 'vm/screen1',
                typeProject: [typeProject.movil]
            },
            {
                name: 'screen-10',
                detail: 'detalle de la pantalla 8',
                url: 'vm/screen2',
                typeProject: [typeProject.movil]
            }
        ];
    }

    private get getScreenControlVehicular() {
        return  [
            {
                name: 'screen-1',
                detail: 'detail',
                url: 'cv/url',
                typeProject: [typeProject.movil]
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
        ];
    }

    private get getScreenCRM() {
        return  [
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
        ];
    }

    private get getScreenRutaPlus() {
         return [
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
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm2',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm3',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm4',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm5',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm6',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm7',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm8',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm9',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm10',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm11',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'ruta+/rm12',
                typeProject: [typeProject.movil]
            },
        ];
    }

    private get getListPrecios() {
         return [
            {
                name: '',
                detail: '',
                url: 'listaprecios/lp1',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'listaprecios/lp2',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'listaprecios/lp3',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'listaprecios/lp4',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'listaprecios/lp5',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'listaprecios/lp6',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'listaprecios/lp7',
                typeProject: [typeProject.movil]
            },
            {
                name: '',
                detail: '',
                url: 'listaprecios/lp8',
                typeProject: [typeProject.movil]
            },
        ];
    }
}