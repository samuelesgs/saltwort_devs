import { ProfileData, Relevance, typeProject } from "./general.interface";

export class InformationAksel {
    private data?: ProfileData

    constructor() {
        this.loadInformation();
    }

    private loadInformation() {
        this.data = {
            fullName: 'Aksel Akemi Herrera Gonzalez',
            imgName: 'aksel.png',
            email: 'akselherrera18@gmail.com',
            urlLinkedin: '',
            title: 'iOS Developer / Full Stack Developer',
            desc: 'Devs-big-desc.properties.Aksel-desc',
            tools: this.getTools,
            companies: this.getCompanies,
            linkedin: "https://www.linkedin.com/in/aksel-akemi-herrera-gonzalez-08054a213/",
            gmail: "mailto:akselherrera18@gmail.com"
        };
    }

    public get getInformation() {
        return this.data!
    }

    private get getTools() {
        return [
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
        ];
    }

    // --- GET SCREENS ---
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
            { name: 'Perfil de usuario', detail: 'Tus datos de usuario, puedes actualizar tu nombre correo y contraseña', url: 'ap/ap9', typeProject: [typeProject.web] },
        ];
    }

    private get getScreenEncodemx() {
        return [
            { name: 'Pagina principal', detail: 'Pagina principal de encode web', url: 'encode/encode1', typeProject: [typeProject.web] },
            { name: 'Pagina de gastos diarios 2', detail: 'Informacion sobre la aplicación', url: 'encode/encode2', typeProject: [typeProject.web] },
            { name: 'Gastos diarios 3 principal', detail: 'Observar informacion relevante de la aplicación', url: 'encode/encode3', typeProject: [typeProject.web] },
            { name: 'Gastos diarios 4 principal', detail: 'Informacion relevante de la aplicacion', url: 'encode/encode4', typeProject: [typeProject.web] },
            { name: 'Gastos diarios IOS', detail: 'Informacion de la aplicacion', url: 'encode/encode5', typeProject: [typeProject.web] }
        ];
    }

    private get getScreenShoppingExpensesIOS() {
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

    private get getScreenConsoleEncodemx() {
        return [
            { name: 'Pantalla de las licencias', detail: 'Las licencias que tienen algunos usuarios de las aplicaciones.', url: 'consoleencode/c2', typeProject: [typeProject.web] },
            { name: 'Agregar licencia', detail: 'Puedes agregar una licencia y personalizarla.', url: 'consoleencode/c3', typeProject: [typeProject.web] },
            { name: 'Usuarios', detail: 'Puedes ver los usuarios a forma de tabla, donde lso pueds buscar o limpiar.', url: 'consoleencode/c4', typeProject: [typeProject.web] },
            { name: 'Consultar usuario', detail: 'Puedes ver los detalles del usuario', url: 'consoleencode/c5', typeProject: [typeProject.web] },
            { name: 'Edición de suscripción', detail: 'Puedes ver editar la suscripcion de un usuario, pudiendo estableer fecha inicial, fecha final y tipo de suscripcion', url: 'consoleencode/c6', typeProject: [typeProject.web] }
        ];
    }

    private get getScreenProductivity() {
        return [
            { name: 'Pantalla principal', detail: 'Puedes ver los meses con sus actividades por mes, empezando en el mes actual', url: 'pro/pro1', typeProject: [typeProject.web] },
            { name: 'Tareas por mes', detail: 'En la anterior pantalla se mostraban las actividades por dia, ahora se muestran las actividades por mes ', url: 'pro/pro2', typeProject: [typeProject.web] },
            { name: 'Tareas completadas', detail: 'Aqui ya has completado todas las tareas', url: 'pro/pro3', typeProject: [typeProject.web] },
            { name: 'Perfil de usuario', detail: 'los detalles del usuario', url: 'pro/pro4', typeProject: [typeProject.web] },
            { name: 'Categorias', detail: 'Categorias de todas tus actividades', url: 'pro/pro5', typeProject: [typeProject.web] },
            { name: 'Agregar estado', detail: 'Puedes agregar estados, por si los que estan ahi no describen tu actividad', url: 'pro/pro6', typeProject: [typeProject.web] },
            { name: 'Prioridades ', detail: 'Prioridades de las actividades', url: 'pro/pro7', typeProject: [typeProject.web] },
            { name: 'Reporte de tu mes', detail: 'Reporte e tu mes, donde puedes ver las actividades en las que has gastado tiempo', url: 'pro/pro8', typeProject: [typeProject.web] }
        ];
    }

    private get getScreenDailyExpenses4() {
        return [
            { name: 'Pantalla principal de gastos diarios 4', detail: 'Puedes ver tus datos, en forma de grafica, los ultimos 10 movimientos, el balance de la cuenta, las categorias donde has gastado, etc.', url: 'gd4web/gdweb1', typeProject: [typeProject.web] },
            { name: 'Movimientos', detail: 'En esta pantalla se muestran tus movimientos ordenados por dia en el mes seleccionado', url: 'gd4web/gdweb2', typeProject: [typeProject.web] },
            { name: 'Categorias', detail: 'Puedes ver las categorias que puedes usar', url: 'gd4web/gdweb3', typeProject: [typeProject.web] },
            { name: 'Cuentas ', detail: 'Aqui se muestra como un balance de las cuentas que posees', url: 'gd4web/gdweb4', typeProject: [typeProject.web] },
            { name: 'Agenda', detail: 'Visualizas un calendario con tu agenda del mes ', url: 'gd4web/gdweb5', typeProject: [typeProject.web] },
            { name: 'Reportes por fecha', detail: 'Reportes en forma de barras, que puedes organizar por mes ', url: 'gd4web/gdweb6', typeProject: [typeProject.web] },
            { name: 'Reportes por categoria', detail: 'Reportes en forma de pastel, donde puedes analizar de una manera mas facil tus categorias ', url: 'gd4web/gdweb7', typeProject: [typeProject.web] },
            { name: 'Categorias en tendencia', detail: 'Las categorias que mas has usado en el mes ', url: 'gd4web/gdweb8', typeProject: [typeProject.web] },
            { name: 'Presupuesto', detail: 'Presupuesto que tienes para las categorias', url: 'gd4web/gdweb9', typeProject: [typeProject.web] },
            { name: 'Deudas', detail: 'Personas que te deben, visualizas con una barra para que veas el procentaje de pagado', url: 'gd4web/gdweb10', typeProject: [typeProject.web] },
            { name: 'Metas', detail: 'Las matas que te propones de ahorrar ', url: 'gd4web/gdweb11', typeProject: [typeProject.web] },
            { name: 'Registros frecuentes', detail: 'Las categorias que mas frecuentas  ', url: 'gd4web/gdweb12', typeProject: [typeProject.web] },
            { name: 'Configuraciones', detail: 'Configuraciones y preferencias que puedes establecer para la aplicación', url: 'gd4web/gdweb13', typeProject: [typeProject.web] },
            { name: 'Perfil de usuario', detail: 'Correo, contraseña, opciones de configuracion ', url: 'gd4web/gdweb14', typeProject: [typeProject.web] },
            { name: 'Pantalla de inicio', detail: 'Resumen de gastos diarios y acceso rápido a opciones.', url: 'gd/gd1', typeProject: [typeProject.movil] },
            { name: 'Registro de gasto', detail: 'Formulario para ingresar nuevos gastos con categorías.', url: 'gd/gd2', typeProject: [typeProject.movil] },
            { name: 'Gráficas de análisis', detail: 'Visualización de estadísticas de gasto por categoría.', url: 'gd/gd3', typeProject: [typeProject.movil] },
            { name: 'Perfil de usuario', detail: 'Correo, contraseña, opciones de configuración.', url: 'gd/gd4', typeProject: [typeProject.movil] },
            { name: 'Selección de cuenta', detail: 'Cambio entre cuentas múltiples registradas por el usuario.', url: 'gd/gd5', typeProject: [typeProject.movil] },
            { name: 'Suscripciones', detail: 'Vista para activar o renovar suscripciones premium.', url: 'gd/gd6', typeProject: [typeProject.movil] },
            { name: 'Historial de transacciones', detail: 'Listado detallado de todos los movimientos registrados.', url: 'gd/gd7', typeProject: [typeProject.movil] },
            { name: 'Pantalla de sincronización', detail: 'Sincronización manual con la base de datos en la nube.', url: 'gd/gd8', typeProject: [typeProject.movil] }
        ];
    }

    // --- GET ACHIEVEMENTS ---
    private get getShoppingExpensesArchivementsWeb() {
        return [
            { title: 'project-relevance.shopping-expense-web.new-web-title', detail: 'project-relevance.shopping-expense-web.new-web', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.new-backend-title', detail: 'project-relevance.shopping-expense-web.new-backend', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.implementation-frameworks-title', detail: 'project-relevance.shopping-expense-web.implementation-frameworks', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.migration-request-title', detail: 'project-relevance.shopping-expense-web.migration-request', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.deploy-version-title', detail: 'project-relevance.shopping-expense-web.deploy-version', relevance: Relevance.HIGH, icon: '' }
        ];
    }

    private get getShoppingExpensesArchivementsMovil() {
        return [
            { title: 'project-relevance.shopping-expense-ios.migration-request-title', detail: 'project-relevance.shopping-expense-ios.migration-request', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-ios.backup-system-title', detail: 'project-relevance.shopping-expense-ios.backup-system', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-ios.support-app-title', detail: 'project-relevance.shopping-expense-ios.support-app', relevance: Relevance.MEDIUM, icon: '' },
            { title: 'project-relevance.shopping-expense-ios.better-time-title', detail: 'project-relevance.shopping-expense-ios.better-time', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-ios.dependetion-system-title', detail: 'project-relevance.shopping-expense-ios.dependetion-system', relevance: Relevance.MEDIUM, icon: '' },
            { title: 'project-relevance.shopping-expense-ios.sync-process-title', detail: 'project-relevance.shopping-expense-ios.sync-process', relevance: Relevance.HIGH, icon: '' }
        ];
    }

    private get getArchivimentsShoppingExpensesIOS() {
        return [
            { typeProject: typeProject.web, achievements: this.getShoppingExpensesArchivementsWeb },
            { typeProject: typeProject.movil, achievements: this.getShoppingExpensesArchivementsMovil }
        ];
    }

    private get getArchivementsConsoleEncodemx() {
        return [
            {
                typeProject: typeProject.web,
                achievements: [
                    { title: 'project-relevance.console-encodemx-web.admin-user-title', detail: 'project-relevance.console-encodemx-web.admin-user', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.console-encodemx-web.admin-database-title', detail: 'project-relevance.console-encodemx-web.admin-database', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.console-encodemx-web.new-backend-title', detail: 'project-relevance.console-encodemx-web.new-backend', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.console-encodemx-web.cron-job-title', detail: 'project-relevance.console-encodemx-web.cron-job', relevance: Relevance.HIGH, icon: '' }
                ]
            }
        ];
    }

    private get getPlatformEncodemx() {
        return [
            {
                typeProject: typeProject.web,
                achievements: [
                    { title: 'project-relevance.encodemx-web.interface-creation-title', detail: 'project-relevance.encodemx-web.interface-creation', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.encodemx-web.translate-web-title', detail: 'project-relevance.encodemx-web.translate-web', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.encodemx-web.responsive-desing-title', detail: 'project-relevance.encodemx-web.responsive-desing', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.encodemx-web.better-response-title', detail: 'project-relevance.encodemx-web.better-response', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.encodemx-web.skeletons-loaders-title', detail: 'project-relevance.encodemx-web.skeletons-loaders', relevance: Relevance.MEDIUM, icon: '' }
                ]
            }
        ];
    }

    private get getPlatformProductivity() {
        return [
            {
                typeProject: typeProject.web,
                achievements: [
                    { title: 'project-relevance.productivity-web.proyect-requirements-title', detail: 'project-relevance.productivity-web.proyect-requirements', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.productivity-web.database-title', detail: 'project-relevance.productivity-web.database', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.productivity-web.interfaz-desing-title', detail: 'project-relevance.productivity-web.interfaz-desing', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.productivity-web.backend-title', detail: 'project-relevance.productivity-web.backend', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.productivity-web.deploy-web-title', detail: 'project-relevance.productivity-web.deploy-web', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.productivity-web.request-backend-title', detail: 'project-relevance.productivity-web.request-backend', relevance: Relevance.VERY_HIGH, icon: '' }
                ]
            }
        ];
    }

    private get getPlatformDailyExpenses4() {
        return [
            {
                typeProject: typeProject.web,
                achievements: [
                    { title: 'project-relevance.daily-expenses-4-web.clean-code-title', detail: 'project-relevance.daily-expenses-4-web.clean-code', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-web.migration-request-title', detail: 'project-relevance.daily-expenses-4-web.migration-request', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-web.imlements-web-socket-title', detail: 'project-relevance.daily-expenses-4-web.imlements-web-socket', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-web.multi-currency-title', detail: 'project-relevance.daily-expenses-4-web.multi-currency', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-web.support-title', detail: 'project-relevance.daily-expenses-4-web.support', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-web.custom-components-title', detail: 'project-relevance.daily-expenses-4-web.custom-components', relevance: Relevance.HIGH, icon: '' }
                ]
            },
            {
                typeProject: typeProject.movil,
                achievements: [
                    { title: 'project-relevance.daily-expenses-4-ios.library-implementation-title', detail: 'project-relevance.daily-expenses-4-ios.library-implementation', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-ios.new-backend-title', detail: 'project-relevance.daily-expenses-4-ios.new-backend', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-ios.core-data-manager-title', detail: 'project-relevance.daily-expenses-4-ios.core-data-manager', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-ios.data-synchronization-title', detail: 'project-relevance.daily-expenses-4-ios.data-synchronization', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-ios.icon-update-title', detail: 'project-relevance.daily-expenses-4-ios.icon-update', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-ios.cocoapods-migration-title', detail: 'project-relevance.daily-expenses-4-ios.cocoapods-migration', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-ios.translations-title', detail: 'project-relevance.daily-expenses-4-ios.translations', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-ios.data-persistence-title', detail: 'project-relevance.daily-expenses-4-ios.data-persistence', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.daily-expenses-4-ios.coredata-context-title', detail: 'project-relevance.daily-expenses-4-ios.coredata-context', relevance: Relevance.HIGH, icon: '' }
                ]
            }
        ];
    }

    // --- GET COMPANIES ---
    private get getCompanies() {
        return [
            this.getCompaniesEncodemx,
        ];
    }

    private get getCompaniesSaltwort() {
        return {
            name: "Saltwort",
            projects: [
                {
                    id: 2,
                    platforms: [
                        { typeProject: typeProject.web, achievements: [] }
                    ],
                    name: 'Activity planner',
                    detail: '',
                    relevantSkills: [""],
                    tools: ["angular", "figma", "nestjs", "typescript"],
                    icon: {
                        name: 'name',
                        detail: 'Aqui vas a poder administrar tu tiempo y actividades de la mejor manera posible ',
                        url: 'AP-logo',
                        typeProject: [typeProject.web]
                    },
                    screens: this.getScreenSaltwort
                }
            ]
        };
    }

    private get getEncodemxWeb() {
        return {
            id: 1,
            platforms: this.getPlatformEncodemx,
            name: 'Encodemx Web',
            detail: 'specific-project.properties.project-detail-encode-aksel',
            relevantSkills: ["specific-project.properties.revelant-skills-encode-aksel"],
            tools: ["angular"],
            icon: {
                name: 'name',
                detail: 'Pagina principal de encode mx donde consultas informacion sobre las aplicaciones ',
                url: 'encodemx',
                typeProject: [typeProject.web]
            },
            screens: this.getScreenEncodemx
        };
    }

    private get getShoppingExpensesIOS() {
        return {
            id: 2,
            platforms: this.getArchivimentsShoppingExpensesIOS,
            name: 'Gastos de compra',
            detail: 'specific-project.properties.project-detail-shopping-expense-samuel',
            relevantSkills: ["specific-project.properties.revelant-skills-encode-aksel"],
            tools: ["swift", "angular", "nestjs", "nodejs", "typescript"],
            icon: {
                name: 'name',
                detail: 'Pagina principal de encode mx donde consultas informacion sobre las aplicaciones',
                url: 'gcicon',
                typeProject: [typeProject.web, typeProject.movil]
            },
            screens: this.getScreenShoppingExpensesIOS
        };
    }

    private get getConsoleEncodemx() {
        return {
            id: 3,
            platforms: this.getArchivementsConsoleEncodemx,
            name: 'Consola encodemx',
            detail: 'specific-project.properties.project-detail-encode-aksel',
            relevantSkills: ["specific-project.properties.revelant-skills-encode-aksel"],
            tools: [
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
            screens: this.getScreenConsoleEncodemx
        };
    }

    private get getProductivity() {
        return {
            id: 4,
            platforms: this.getPlatformProductivity,
            name: 'Productivity',
            detail: 'specific-project.properties.project-detail-encode-aksel',
            relevantSkills: ["specific-project.properties.revelant-skills-encode-aksel"],
            tools: ["angular", "nestjs", "nodejs", "typescript"],
            icon: {
                name: 'name',
                detail: 'Principal donde puedes ver los meses y sus actividades ',
                url: 'productivity',
                typeProject: [typeProject.web]
            },
            screens: this.getScreenProductivity
        };
    }

    private get getDailyExpenses4() {
        return {
            id: 5,
            platforms: this.getPlatformDailyExpenses4,
            name: 'Gastos diarios 4',
            detail: 'specific-project.properties.project-detail-encode-aksel',
            relevantSkills: ["specific-project.properties.revelant-skills-encode-aksel"],
            tools: ["angular", "nestjs", "nodejs", "typescript"],
            icon: {
                name: 'name',
                detail: 'Pagina que apoya a la aplicacion de gastos diarios 4 movil, siendo ua extension de la misma  ',
                url: 'daily_expenses_4',
                typeProject: [typeProject.web]
            },
            screens: this.getScreenDailyExpenses4
        }
    }

    private get getCompaniesEncodemx() {
        return {
            name: 'Encodemx',
            projects: [
                this.getEncodemxWeb,
                this.getShoppingExpensesIOS,
                this.getConsoleEncodemx,
                this.getProductivity,
                this.getDailyExpenses4
            ],
        };
    }
}
