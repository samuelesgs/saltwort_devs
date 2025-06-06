import { ProfileData, Relevance, typeProject } from "./general.interface";

export class InformationSamuel {

    private data?: ProfileData;

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
            this.getCompaniesNeoris,
            this.getCompaniesEncodemx,
            this.getCompaniesSaltwort
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


    private get getScreenBlueBoard() {
        return [
            { name: 'Pagina principal', detail: '', url: 'blue-board/login', typeProject: [typeProject.movil] },
            { name: 'Pagina principal', detail: '', url: 'blue-board/navbar', typeProject: [typeProject.movil] },
            { name: 'Pagina principal', detail: '', url: 'blue-board/news', typeProject: [typeProject.movil] },
            { name: 'Pagina principal', detail: '', url: 'blue-board/noticies', typeProject: [typeProject.movil] },
            { name: 'Pagina principal', detail: '', url: 'blue-board/profile', typeProject: [typeProject.movil] }
        ];
    }

    private get getScreenZeus() {
        return [
            { name: 'Admin users', detail: 'Pantalla de administración de usuarios.', url: 'zeus/movil/admin-users', typeProject: [typeProject.web] },
            { name: 'Create ticket', detail: 'Pantalla para la creación de tickets.', url: 'zeus/movil/create-ticket', typeProject: [typeProject.web] },
            { name: 'Detail SWAT', detail: 'Vista detallada del módulo SWAT.', url: 'zeus/movil/detail-swat', typeProject: [typeProject.web] },
            { name: 'Detail', detail: 'Vista con detalle general del ticket.', url: 'zeus/movil/detail', typeProject: [typeProject.web] },
            { name: 'Login', detail: 'Pantalla de inicio de sesión con opción de Google o registro.', url: 'zeus/movil/login', typeProject: [typeProject.web] },
            { name: 'My tickets', detail: 'Pantalla para ver los tickets creados por el usuario.', url: 'zeus/movil/my-tickets', typeProject: [typeProject.web] },
            { name: 'Navbar', detail: 'Pantalla con la barra de navegación principal.', url: 'zeus/movil/navbar', typeProject: [typeProject.web] },
            { name: 'Pool Zeus Module', detail: 'Pantalla principal del módulo Pool de Zeus.', url: 'zeus/movil/pool-zeus-module', typeProject: [typeProject.web] },
            { name: 'Search', detail: 'Pantalla con funcionalidades de búsqueda.', url: 'zeus/movil/search', typeProject: [typeProject.web] },
            { name: 'Swat Module', detail: 'Pantalla principal del módulo SWAT.', url: 'zeus/movil/swat-module', typeProject: [typeProject.web] }
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
                this.getShoppingExpenses,
                this.getDailyExpenses4,
                this.getEncodemxWeb,
                this.getConsoleEncodemx
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

    private get getScreenEncodemx() {
        return [
            { name: 'Pagina principal', detail: 'Pagina principal de encode web', url: 'encode/encode1', typeProject: [typeProject.web] },
            { name: 'Pagina de gastos diarios 2', detail: 'Informacion sobre la aplicación', url: 'encode/encode2', typeProject: [typeProject.web] },
            { name: 'Gastos diarios 3 principal', detail: 'Observar informacion relevante de la aplicación', url: 'encode/encode3', typeProject: [typeProject.web] },
            { name: 'Gastos diarios 4 principal', detail: 'Informacion relevante de la aplicacion', url: 'encode/encode4', typeProject: [typeProject.web] },
            { name: 'Gastos diarios IOS', detail: 'Informacion de la aplicacion', url: 'encode/encode5', typeProject: [typeProject.web] }
        ];
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

    private get getScreenConsoleEncodemx() {
        return [
            { name: 'Pantalla de las licencias', detail: 'Las licencias que tienen algunos usuarios de las aplicaciones.', url: 'consoleencode/c2', typeProject: [typeProject.web] },
            { name: 'Agregar licencia', detail: 'Puedes agregar una licencia y personalizarla.', url: 'consoleencode/c3', typeProject: [typeProject.web] },
            { name: 'Usuarios', detail: 'Puedes ver los usuarios a forma de tabla, donde lso pueds buscar o limpiar.', url: 'consoleencode/c4', typeProject: [typeProject.web] },
            { name: 'Consultar usuario', detail: 'Puedes ver los detalles del usuario', url: 'consoleencode/c5', typeProject: [typeProject.web] },
            { name: 'Edición de suscripción', detail: 'Puedes ver editar la suscripcion de un usuario, pudiendo estableer fecha inicial, fecha final y tipo de suscripcion', url: 'consoleencode/c6', typeProject: [typeProject.web] }
        ];
    }

    private get getArchivementsConsoleEncodemx() {
        return [
            {
                typeProject: typeProject.web,
                achievements: [
                    { title: 'project-relevance.samuel-console-encodemx-web.title-crud-usuarios', detail: 'project-relevance.samuel-console-encodemx-web.detail-crud-usuarios', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-console-encodemx-web.title-migracion-respaldos', detail: 'project-relevance.samuel-console-encodemx-web.detail-migracion-respaldos', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.samuel-console-encodemx-web.title-manejo-compras-v3', detail: 'project-relevance.samuel-console-encodemx-web.detail-manejo-compras-v3', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.samuel-console-encodemx-web.title-migracion-datos-qa', detail: 'project-relevance.samuel-console-encodemx-web.detail-migracion-datos-qa', relevance: Relevance.MEDIUM, icon: '' },
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


    private get getDailyExpenses4() {
        return {
            id: 5,
            platforms: this.getPlatformDailyExpenses4,
            name: 'Gastos diarios 4',
            detail: 'specific-project.properties.project-detail-encode-aksel',
            relevantSkills: ["specific-project.properties.revelant-skills-encode-aksel"],
            tools: ["angular", "nestjs", "android", "php"],
            icon: {
                name: 'name',
                detail: 'Pagina que apoya a la aplicacion de gastos diarios 4 movil, siendo ua extension de la misma  ',
                url: 'daily_expenses_4',
                typeProject: [typeProject.web]
            },
            screens: this.getScreenDailyExpenses4
        }
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

    private get getPlatformDailyExpenses4() {
        return [
            {
                typeProject: typeProject.web,
                achievements:
                    [
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-backend', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-backend', relevance: Relevance.VERY_HIGH, icon: '' },
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-database', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-database', relevance: Relevance.HIGH, icon: '' },
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-purchased-php', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-purchased-php', relevance: Relevance.HIGH, icon: '' },
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-purchased-nestjs', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-purchased-nestjs', relevance: Relevance.HIGH, icon: '' },
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-sync', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-sync', relevance: Relevance.HIGH, icon: '' },
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-responsive', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-responsive', relevance: Relevance.HIGH, icon: '' },
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-frequent-operations', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-frequent-operations', relevance: Relevance.MEDIUM, icon: '' },
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-bugs', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-bugs', relevance: Relevance.MEDIUM, icon: '' },
                        { title: 'project-relevance.samuel-daily-expenses-4-web.title-improvements', detail: 'project-relevance.samuel-daily-expenses-4-web.detail-improvements', relevance: Relevance.MEDIUM, icon: '' }
                    ]
            },
            {
                typeProject: typeProject.movil,
                achievements: [
                    { title: 'project-relevance.samuel-daily-expenses-4-android.title-sync', detail: 'project-relevance.samuel-daily-expenses-4-android.detail-sync', relevance: Relevance.VERY_HIGH, icon: '' },
                    { title: 'project-relevance.samuel-daily-expenses-4-android.title-desing', detail: 'project-relevance.samuel-daily-expenses-4-android.detail-desing', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-daily-expenses-4-android.title-room', detail: 'project-relevance.samuel-daily-expenses-4-android.detail-room', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-daily-expenses-4-android.title-subscription', detail: 'project-relevance.samuel-daily-expenses-4-android.detail-subscription', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-daily-expenses-4-android.title-managment-reports', detail: 'project-relevance.samuel-daily-expenses-4-android.detail-managment-reports', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.samuel-daily-expenses-4-android.title-mangment-multi-account', detail: 'project-relevance.samuel-daily-expenses-4-android.detail-mangment-multi-account', relevance: Relevance.MEDIUM, icon: '' },
                    { title: 'project-relevance.samuel-daily-expenses-4-android.title-mangment-photo', detail: 'project-relevance.samuel-daily-expenses-4-android.detail-mangment-photo', relevance: Relevance.MEDIUM, icon: '' }
                ]
            }
        ];
    }

    private get getShoppingExpenses() {
        return {
            id: 1,
            name: 'Gastos de compra',
            platforms: this.getArchivimentsShoppingExpenses,
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
                typeProject: [typeProject.movil, typeProject.web]
            },
            screens: [
                ...this.getScreenShoppingExpenses
            ]
        }
    }

    private get getArchivimentsShoppingExpenses() {
        return [
            { typeProject: typeProject.web, achievements: this.getShoppingExpensesArchivementsWeb },
            { typeProject: typeProject.movil, achievements: this.getShoppingExpensesArchivementsMovil }
        ];
    }

    // --- GET ACHIEVEMENTS ---
    private get getShoppingExpensesArchivementsWeb() {
        return [
            { title: 'project-relevance.shopping-expense-web.new-web-title', detail: 'project-relevance.shopping-expense-web.new-web', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.title-create-model-sync', detail: 'project-relevance.shopping-expense-web.detail-create-model-sync', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.new-backend-title', detail: 'project-relevance.shopping-expense-web.new-backend', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.implementation-frameworks-title', detail: 'project-relevance.shopping-expense-web.implementation-frameworks', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.migration-request-title', detail: 'project-relevance.shopping-expense-web.migration-request', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expense-web.deploy-version-title', detail: 'project-relevance.shopping-expense-web.deploy-version', relevance: Relevance.VERY_HIGH, icon: '' }
        ];
    }


    private get getShoppingExpensesArchivementsMovil() {
        return [
            { title: 'project-relevance.shopping-expenses-android.title-subscription', detail: 'project-relevance.shopping-expenses-android.detail-subscription', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-connect-backend', detail: 'project-relevance.shopping-expenses-android.description-connect-backend', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-migration-backend', detail: 'project-relevance.shopping-expenses-android.description-migration-backend', relevance: Relevance.VERY_HIGH, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-profile-user', detail: 'project-relevance.shopping-expenses-android.detail-profile-user', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-mangment-group', detail: 'project-relevance.shopping-expenses-android.detail-mangment-group', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-change-model-room', detail: 'project-relevance.shopping-expenses-android.detail-change-model-room', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-managment-information', detail: 'project-relevance.shopping-expenses-android.detail-managment-information', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-local-sync', detail: 'project-relevance.shopping-expenses-android.detail-local-sync', relevance: Relevance.HIGH, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-change-model-backups', detail: 'project-relevance.shopping-expenses-android.detail-change-model-backups', relevance: Relevance.MEDIUM, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-backup-system', detail: 'project-relevance.shopping-expenses-android.detail-backend-system', relevance: Relevance.MEDIUM, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-update-gradle', detail: 'project-relevance.shopping-expenses-android.detail-update-gradle', relevance: Relevance.MEDIUM, icon: '' },
            { title: 'project-relevance.shopping-expenses-android.title-library-graph', detail: 'project-relevance.shopping-expenses-android.detail-library-graph', relevance: Relevance.MEDIUM, icon: '' }
        ];
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
            name: "Neoris->Telcel",
            projects: [
                this.getZeus,
                this.getBlueboard,
                this.getSisap,
            ]
        };
    }

    private get getZeus() {
        return {
            id: 1,
            platforms: this.getArchivimentsZeus,
            name: 'Zeus',
            detail: 'specific-project.properties.project-detail-zeus',
            relevantSkills: [ ],
            tools: [
                "angular",
                "figma",
            ],
            icon: {
                name: 'name',
                detail: 'Aqui vas a poder administrar tu tiempo y actividades de la mejor manera posible ',
                url: 'zeus',
                typeProject: [typeProject.web]
            },
            screens: [
                ...this.getScreenZeus
            ]
        }
    }

    private get getArchivimentsZeus() {
        return [
            {
                typeProject: typeProject.web, achievements: [
                    { title: 'project-relevance.samuel-zeus.title-modulo-swat', detail: 'project-relevance.samuel-zeus.detail-modulo-swat', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-zeus.title-correccion-bugs', detail: 'project-relevance.samuel-zeus.detail-correccion-bugs', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-zeus.title-busqueda-bes', detail: 'project-relevance.samuel-zeus.detail-busqueda-bes', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-zeus.title-diseno-responsivo', detail: 'project-relevance.samuel-zeus.detail-diseno-responsivo', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-zeus.title-crud-servicios', detail: 'project-relevance.samuel-zeus.detail-crud-servicios', relevance: Relevance.HIGH, icon: '' },
                    { title: 'project-relevance.samuel-zeus.title-mejoras-usuarios', detail: 'project-relevance.samuel-zeus.detail-mejoras-usuarios', relevance: Relevance.HIGH, icon: '' }
                ]
            }
        ]
    }


    private get getBlueboard() {
                return {
                    id: 3,
                    platforms: [
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        },
                    ],
                    name: 'Blueboard',
                    detail: 'specific-project.properties.project-detail-blue-board',
                    relevantSkills: [
                        ""
                    ],
                    tools: [
                        "android",
                    ],
                    icon: {
                        name: 'name',
                        detail: 'PENDIENTE',
                        url: 'blue-board',
                        typeProject: [typeProject.movil]
                    },
                    screens: [
                        ...this.getScreenBlueBoard
                    ]
                }
            }


    private get getSisap() {
                return {
                    id: 3,
                    platforms: [
                        {
                            typeProject: typeProject.movil,
                            achievements: []
                        },
                    ],
                    name: 'SISAP',
                    detail: 'specific-project.properties.project-detail-sisap',
                    relevantSkills: [
                        ""
                    ],
                    tools: [
                        "android",
                    ],
                    icon: {
                        name: 'name',
                        detail: 'PENDIENTE',
                        url: 'sisap',
                        typeProject: [typeProject.movil]
                    },
                    screens: [
                        ...this.getScreenNeoris
                    ]
                }
            }


    /*private get getGamstore() {
        return {
            id: 3,
            platforms: [
                {
                    typeProject: typeProject.web,
                    achievements: []
                },
            ],
            name: 'Gamstore',
            detail: 'specific-project.properties.project-detail-gamstore',
            relevantSkills: [
                ""
            ],
            tools: [
                "android",
            ],
            icon: {
                name: 'name',
                detail: 'PENDIENTE',
                url: 'AP-logo',
                typeProject: [typeProject.web]
            },
            screens: [
                ...this.getScreenNeoris
            ]
        }
    }*/
}