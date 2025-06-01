import { ProfileData, Relevance, typeProject } from "./general.interface";

export class InformationSamuel {

    private data? : ProfileData;
    
    constructor() {
        this.loadInformation();
    }

    private loadInformation() {
        this.data = {
            fullName: 'Edgar Samuel Guerrero Sandoval',
            imgName: 'profile-samuel.png',
            email: 'samuelesgs04@gmail.com',
            urlLinkedin: '',
            title: 'Sr. Developer',
            desc: 'Devs-big-desc.properties.Samuel-desc',
            tools: this.getTools,
            companies: this.getCompanies,
            linkedin: "https://www.linkedin.com/in/edgar-samuel-guerrero-5a9471214/",
            gmail: "mailto:samuelesgs04@gmail.com",
        }
    }

    public get getInformation() {
        return this.data!;
    }

    private get getCompanies() {
        return [
            this.getCompaniesEncodemx,
            this.getCompaniesSaltwort,
            this.getCompaniesNeoris
        ];
    }

    private get getTools() {
        return [
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
        ];
    }

    // --- GET SCREENS ---
    private get getScreenShoppingExpenses() {
        return [
            { name: 'screen-1', detail: 'Pantalla principal', url: 'gc/gc1', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc2', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc3', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc4', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc5', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc6', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc8', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc9', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc10', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gc/gc11', typeProject: [typeProject.movil] },
            { name: 'Pantalla de login', detail: 'Puedes ingresar tu correo y contraseña, escoger idioma o entrar con Google', url: 'gcweb/gcweb1', typeProject: [typeProject.web] },
            { name: 'Pantalla principal', detail: 'En la pantalla principal puedes visualizar con categorias su detalle y su cantidad. Puedes cambiar entre secciones.', url: 'gcweb/gcweb2', typeProject: [typeProject.web] },
            { name: 'Reportes', detail: 'En forma de grafica de pastel puedes ver tus conceptos y la cantidad de esos conceptos', url: 'gcweb/gcweb3', typeProject: [typeProject.web] },
            { name: 'Proyectos', detail: 'Lista de tus proyectos, en forma de lista, tienes un botón para agregar un proyecto en caso de ser necesario', url: 'gcweb/gcweb4', typeProject: [typeProject.web] },
            { name: 'Categorias', detail: 'Listado de categorias, se dividen en 2, categorias de ingresos y gastados, em ambas puedes agregar categorias', url: 'gcweb/gcweb5', typeProject: [typeProject.web] },
            { name: 'Opciones', detail: 'En esta pantalla puedes elegir entre varias tipos de monedas y establecer las preferencias a tu gusto.', url: 'gcweb/gcweb6', typeProject: [typeProject.web] },
            { name: 'Añadir ingreso', detail: 'Puedes añadir un ingreso, estableciendo la cantidad, escogiendo la categoria y una breve descripción', url: 'gcweb/gcweb7', typeProject: [typeProject.web] },
            { name: 'Añadir proyecto', detail: 'En este modal puedes establecer el nombre de tu proyecto', url: 'gcweb/gcweb8', typeProject: [typeProject.web] }
        ];
    }

    private get getScreenDailyExpenses() {
        return [
            { name: 'screen-1', detail: 'detail', url: 'gd/gd1', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gd/gd2', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gd/gd3', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gd/gd4', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gd/gd5', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gd/gd6', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gd/gd7', typeProject: [typeProject.movil] },
            { name: 'screen-1', detail: 'detail', url: 'gd/gd8', typeProject: [typeProject.movil] }
        ];
    }

    private get getScreenSaltwort() {
        return [
            { name: 'Pagina principal', detail: 'En esta pantalla tu puedes registrarte en caso de tu tener una cuenta ya, crear una o ingresar con Google', url: 'ap/ap1', typeProject: [typeProject.web] },
            { name: 'Pagina de inicio', detail: 'Podras observar varias secciones, los tabaleros que tienes, sus estados y abajo un top de categorias, para que puedas ver las categorias que mas has usado', url: 'ap/ap2', typeProject: [typeProject.web] },
            { name: 'Tableros', detail: 'Aqui puedes agregar un  tablero junto con su detalle ', url: 'ap/ap3', typeProject: [typeProject.web] },
            { name: 'Tablero guardado', detail: 'Aqui ya puedes apreciar como se guardó el tablero', url: 'ap/ap4', typeProject: [typeProject.web] },
            { name: 'Categorias', detail: 'En esta pantalla puedes agregar tus categorias', url: 'ap/ap5', typeProject: [typeProject.web] },
            { name: 'Como agregar categorias', detail: 'Basta con darle al boton de mas para poder agregar una categoria, posteriormente solo debes pulsar la confirmación', url: 'ap/ap6', typeProject: [typeProject.web] },
            { name: 'Estados', detail: 'Puedes visualizar un listado de tus estados, asi como un ejemplo de como se ven.', url: 'ap/ap7', typeProject: [typeProject.web] },
            { name: 'Como agregar estados', detail: 'Es tan simple como pulsar el boton de agregar, colocarle un nombre a tu estado asi como sus colores, y luego confirmar', url: 'ap/ap8', typeProject: [typeProject.web] },
            { name: 'Perfil de usuario', detail: 'Tus datos de usuario, puedes actualizar tu nombre correo y contraseña', url: 'ap/ap9', typeProject: [typeProject.web] }
        ];
    }

    private get getScreenNeoris() {
        return [
            { name: 'Pagina principal', detail: 'En esta pantañña tu puedes registrarte en caso de tu tener una cuenta ya, crear una o ingresar con Google', url: 'ap/ap1', typeProject: [typeProject.web] }
        ];
    }

    // --- GET ACHIEVEMENTS ---
    private get getAchievementsShoppingExpensesMovil() {
        return [
            {
                title: 'Cambio de manejador de base de datos',
                detail: 'Se realizo el cambio de modelo de base de datos de cursor a room database',
                relevance: Relevance['VERY_HIGH'],
                icon: ''
            },
            {
                title: 'Cambios importantes en diseño de toda la aplicación',
                detail: 'Se realizaron novedosos cambios en el diseño de la aplicacion conforme colorimetria presentada por el equipo de diseño',
                relevance: Relevance['MEDIUM'],
                icon: ''
            }
        ];
    }

    // --- GET COMPANIES ---
    private get getCompaniesEncodemx() {
        return {
            name: 'Encodemx',
            projects: [
                {
                    id: 1,
                    name: 'Gastos de compra',
                    platforms: [
                        {
                            typeProject: typeProject.movil,
                            achievements: this.getAchievementsShoppingExpensesMovil
                        },
                        {
                            typeProject: typeProject.web,
                            achievements: []
                        }
                    ],
                    detail: 'specific-project.properties.project-detail-shopping-expense-samuel',
                    relevantSkills: [
                        "specific-project.properties.revelant-skills-shopping-expenses-samuel",
                    ],
                    tools: [
                        "android",
                        "angular",
                        "nestjs"
                    ],
                    icon: {
                        name: 'name',
                        detail: ' ',
                        url: 'gcicon',
                        typeProject: [typeProject.movil]
                    },
                    screens: [
                        ...this.getScreenShoppingExpenses
                    ]
                },
                {
                    id: 2,
                    name: 'Gastos diarios 4',
                    platforms: [
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        },
                        {
                            typeProject: typeProject.web,
                            achievements: []
                        }
                    ],
                    detail: 'specific-project.properties.project-detail-daily-expenses-samuel',
                    relevantSkills: [
                        "specific-project.properties.revelant-skills-daily-expenses-aksel",
                    ],
                    tools: [
                        "android",
                        "angular"
                    ],
                    icon: {
                        name: 'name',
                        detail: 'detail',
                        url: 'daily_expenses_4',
                        typeProject: [typeProject.movil]
                    },
                    screens: [
                        ...this.getScreenDailyExpenses
                    ]
                }
            ]
        };
    }

    private get getCompaniesSaltwort() {
        return {
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
                    name: 'Activity planner',
                    detail: '',
                    relevantSkills: [
                        ""
                    ],
                    tools: [
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
                        ...this.getScreenSaltwort
                    ]
                }
            ]
        };
    }

    private get getCompaniesNeoris() {
        return {
            name: "Neoris/Telcel",
            projects: [
                {
                    id: 3,
                    platforms: [
                        {
                            typeProject: typeProject.web,
                            achievements: []
                        },
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        }
                    ],
                    name: '',
                    detail: '',
                    relevantSkills: [
                        ""
                    ],
                    tools: [
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
                        ...this.getScreenNeoris
                    ]
                }
            ]
        };
    }
}