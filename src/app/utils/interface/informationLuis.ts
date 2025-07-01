import { ProfileData, Relevance, typeProject } from "./general.interface";

export class InformationLuis{

    private data? : ProfileData

    constructor() {
        this.loadInformation();
    }

    private loadInformation() {
        this.data = 
        {
            fullName: 'Luis Paulo Calderon Nava',
            imgName: 'pavi.png',
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
        return [
            this.getCompaniesCS,
            this.getCompaniesSaltwort
        ];
    }

    private get getCompaniesCS() {
        return {
            name: 'CSINFORMATICA',
            projects: [
                this.getVentaPlus,
                this.getControlVehicular,
                this.getGenericCRM,
                this.getRuta,
                this.getCheckPrizes,
                this.getPrizeList
            ],
        };
    } 

    private get getVentaPlus(){
        return {
            id: 1,
            platforms: this.getArchivimentsVentaPlus,
            name: 'Venta plus',
            detail: 'specific-project.properties.project-detail-ventaplus-luis',
            relevantSkills: [
                "specific-project.properties.revelant-skills-1-ventaplus-luis",
                "specific-project.properties.revelant-skills-2-ventaplus-luis"
             ],
            tools: [
                    "android",
                    "kotlin",
                    "net",
                    "managment",
                    "c-sharp"
                    ],
            icon: {
                    name: 'name',
                    detail: 'detail',
                    url: 'venta+-icon',
                    typeProject: [typeProject.movil, typeProject.desktop]
                },
            screens: this.getScreensCsInformatica
        };
    }
    private get getControlVehicular(){
        return {
            id: 2,
                    platforms: this.getArchivimentsVehicularControl,
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
                        "managment",
                        "net"
                    ],
                    icon: {
                        name: 'ControlVehicular',
                        detail: 'detail',
                        url: 'cvm-icon',
                        typeProject: [typeProject.movil, typeProject.desktop]
                    },
                    screens: this.getScreenControlVehicular
        };
    }
    private get getGenericCRM(){
        return {
            id: 3,
            platforms: this.getPlatformGenericCRM,
            name: 'CRM Generico',
            detail: 'specific-project.properties.project-detail-crm-luis',
            relevantSkills: [
                "specific-project.properties.revelant-skills-1-crm-luis",
                "specific-project.properties.revelant-skills-2-crm-luis",
                "specific-project.properties.revelant-skills-3-crm-luis"
            ],
            tools: [
                "c-sharp",
                "managment",
                "net"
            ],
            icon: {
                name: 'name',
                detail: 'detail',
                url: 'crm-icon',
                typeProject: [typeProject.desktop]
            },
            screens : this.getScreenCRM
        };
    }
    private get getRuta(){
        return {
            id: 4,
                    platforms: this.getArchivimentsRuta,
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
                        "managment",
                        "net"
                    ],
                    icon: {
                        name: 'name',
                        detail: 'detail',
                        url: 'rutaicon',
                        typeProject: [typeProject.desktop, typeProject.movil]
                    },
                    screens: this.getScreenRutaPlus
        };
    }
    private get getCheckPrizes(){
        return {
            id: 5,
            platforms: this.getPlatformCheckPrizes,
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
        };
    }
    private get getPrizeList(){
        return {
            id: 6,
            platforms: this.getPlatformPrizeList,
            name: 'Lista de precios',
            detail: 'specific-project.properties.project-detail-price-list',
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
        };
    }
    private get getCompaniesSaltwort() {
        return  {
                name: "Saltwort",
                projects: [
                    {
                        id: 2,
                        platforms: [ {typeProject: typeProject.web, achievements: [] }
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
                }
            ]
        };
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
            "angular",
            "net"
        ];
    }

    get getInformation() {
        return this.data!
    }

    private get getPlatformPrizeList() {
        return [
            {
                typeProject: typeProject.movil,
                achievements: [
                    { title: 'project-relevance.price-list-movil.title-code-reestructure', detail: 'project-relevance.price-list-movil.detail-code-reestructure', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.price-list-movil.title-creation-preferences', detail: 'project-relevance.price-list-movil.detail-creation-preferences', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.price-list-movil.title-delete-trashcode', detail: 'project-relevance.price-list-movil.detail-delete-trashcode', relevance: Relevance.MEDIUM, icon: '' }
                ]
            }
        ];
    }
    private get getPlatformCheckPrizes() {
        return [
            {
                typeProject: typeProject.movil,
                achievements: [
                    { title: 'project-relevance.price-list-movil.title-code-reestructure', detail: 'project-relevance.price-list-movil.detail-code-reestructure', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.price-list-movil.title-creation-preferences', detail: 'project-relevance.price-list-movil.detail-creation-preferences', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.price-list-movil.title-delete-trashcode', detail: 'project-relevance.price-list-movil.detail-delete-trashcode', relevance: Relevance.MEDIUM, icon: '' }
                ]
            }
        ];
    }
    private get getArchivimentsVentaPlus() {
        return [
            { typeProject: typeProject.movil, achievements: this.getPlatformVentaPlusMovil },
            { typeProject: typeProject.desktop, achievements: this.getPlatformVentaPlusDesktop }
        ];
    }
    private get getPlatformVentaPlusMovil() {
       return [
        {
            title: 'project-relevance.venta-movil.title-code-reestructure',
            detail: 'project-relevance.venta-movil.detail-code-reestructure',
            relevance: Relevance.MEDIUM,
            icon: ''
        },
        {
            title: 'project-relevance.venta-movil.title-ui-design',
            detail: 'project-relevance.venta-movil.detail-ui-design',
            relevance: Relevance.HIGH,
            icon: ''
        },
        {
            title: 'project-relevance.venta-movil.title-architecture-setup',
            detail: 'project-relevance.venta-movil.detail-architecture-setup',
            relevance: Relevance.HIGH,
            icon: ''
        },
        {
            title: 'project-relevance.venta-movil.title-api-integration',
            detail: 'project-relevance.venta-movil.detail-api-integration',
            relevance: Relevance.HIGH,
            icon: ''
        },
        {
            title: 'project-relevance.venta-movil.title-dependency-injection',
            detail: 'project-relevance.venta-movil.detail-dependency-injection',
            relevance: Relevance.MEDIUM,
            icon: ''
        },
        {
            title: 'project-relevance.venta-movil.title-room-database',
            detail: 'project-relevance.venta-movil.detail-room-database',
            relevance: Relevance.MEDIUM,
            icon: ''
        },
        {
            title: 'project-relevance.venta-movil.title-printer-support',
            detail: 'project-relevance.venta-movil.detail-printer-support',
            relevance: Relevance.HIGH,
            icon: ''
        },
        {
            title: 'project-relevance.venta-movil.title-functional-development',
            detail: 'project-relevance.venta-movil.detail-functional-development',
            relevance: Relevance.VERY_HIGH,
            icon: ''
        }
    ];
    }
    private get getPlatformVentaPlusDesktop() {
        return [
                    { title: 'project-relevance.venta-desktop.title-ui-enhancements', detail: 'project-relevance.venta-desktop.detail-ui-enhancements', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.venta-desktop.title-sellers-report-view', detail: 'project-relevance.venta-desktop.detail-sellers-report-view', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.venta-desktop.title-sellers-report-implementation', detail: 'project-relevance.venta-desktop.detail-sellers-report-implementation', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.venta-desktop.title-excel-export', detail: 'project-relevance.venta-desktop.detail-excel-export', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.venta-desktop.title-ticket-updates', detail: 'project-relevance.venta-desktop.detail-ticket-updates', relevance: Relevance.HIGH, icon: '' }
        ];
    }

    private get getArchivimentsVehicularControl() {
        return [
            { typeProject: typeProject.movil, achievements: this.getPlatformVehicularControlMovil },
            { typeProject: typeProject.desktop, achievements: this.getPlatformVehicularControlDesktop }
        ];
    }
    private get getPlatformVehicularControlMovil() {
        return [
                    { title: 'project-relevance.cvm.title-architecture-setup', detail: 'project-relevance.cvm.detail-architecture-setup', relevance: Relevance.LOW, icon: '' },
                    { title: 'project-relevance.cvm.title-api-consumption', detail: 'project-relevance.cvm.detail-api-consumption', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.cvm.title-dependency-injection', detail: 'project-relevance.cvm.detail-dependency-injection', relevance: Relevance.VERY_LOW, icon: '' },
                    { title: 'project-relevance.cvm.title-route-management', detail: 'project-relevance.cvm.detail-route-management', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.cvm.title-report-sending', detail: 'project-relevance.cvm.detail-report-sending', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.cvm.title-fuel-consumption', detail: 'project-relevance.cvm.detail-fuel-consumption', relevance: Relevance.MEDIUM, icon: '' }
        ];
    }
    private get getPlatformVehicularControlDesktop() {
        return [
                    { title: 'project-relevance.cv-desktop.title-wpf-ui', detail: 'project-relevance.cv-desktop.detail-wpf-ui', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.cv-desktop.title-architecture-mvvm', detail: 'project-relevance.cv-desktop.detail-architecture-mvvm', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.cv-desktop.title-excel-export', detail: 'project-relevance.cv-desktop.detail-excel-export', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.cv-desktop.title-report-creation', detail: 'project-relevance.cv-desktop.detail-report-creation', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.cv-desktop.title-agent-management', detail: 'project-relevance.cv-desktop.detail-agent-management', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.cv-desktop.title-key-management', detail: 'project-relevance.cv-desktop.detail-key-management', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.cv-desktop.title-vehicle-management', detail: 'project-relevance.cv-desktop.detail-vehicle-management', relevance: Relevance.MEDIUM, icon: '' }
        ]
    }

    private get getPlatformGenericCRM() {
        return [
            {
                typeProject: typeProject.desktop,
                achievements: [
                    { title: 'project-relevance.crm.title-ui-update', detail: 'project-relevance.crm.detail-ui-update', relevance: Relevance.HIGH, icon: '' },
                { title: 'project-relevance.crm.title-reminders-module', detail: 'project-relevance.crm.detail-reminders-module', relevance: Relevance.MEDIUM, icon: '' },
                { title: 'project-relevance.crm.title-sql-queries', detail: 'project-relevance.crm.detail-sql-queries', relevance: Relevance.HIGH, icon: '' },
                { title: 'project-relevance.crm.title-design-refresh', detail: 'project-relevance.crm.detail-design-refresh', relevance: Relevance.MEDIUM, icon: '' }
                ]
            }
        ];
    }
    private get getArchivimentsRuta() {
        return [
            { typeProject: typeProject.movil, achievements: this.getPlatformRutaMovil },
            { typeProject: typeProject.desktop, achievements: this.getPlatformRutaDesktop }
        ];
    }
    private get getPlatformRutaMovil() {
        return [
          
                    { title: 'project-relevance.price-list-movil.title-code-reestructure', detail: 'project-relevance.price-list-movil.detail-code-reestructure', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.price-list-movil.title-creation-preferences', detail: 'project-relevance.price-list-movil.detail-creation-preferences', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.price-list-movil.title-delete-trashcode', detail: 'project-relevance.price-list-movil.detail-delete-trashcode', relevance: Relevance.MEDIUM, icon: '' }
                
            
        ];
    }
    private get getPlatformRutaDesktop() {
        return [
           
                    { title: 'project-relevance.price-list-movil.title-code-reestructure', detail: 'project-relevance.price-list-movil.detail-code-reestructure', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.price-list-movil.title-creation-preferences', detail: 'project-relevance.price-list-movil.detail-creation-preferences', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.price-list-movil.title-delete-trashcode', detail: 'project-relevance.price-list-movil.detail-delete-trashcode', relevance: Relevance.MEDIUM, icon: '' }
                
        ];
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