import type { Project, SwitchProjectData } from "../interfaces/project.interface";



export const PROJECTS_SAMUEL: Project[] = [
    //MARK: DAILY EXPENSE 4
    {
        name: "Gastos Diarios 4",
        detail: "Aplicación de gestión financiera personal que permite organizar ingresos y gastos, visualizar reportes detallados y personalizar la experiencia según las necesidades del usuario. Cuenta con sincronización en la nube, acceso multiplataforma y herramientas para el control de presupuestos, deudas y metas financieras.",
        tools: [
            {
                name: "Android",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            },
            {
                name: "Kotlin",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
            },
            {
                name: "PHP",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
            },
            {
                name: "NestJS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
            },
            {
                name: "Angular",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
            },
            {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            },

        ],
        images: {
            web: [
                './aksel/daily-expenses-4/web/daily-expenses-web-img-1.png',
                './aksel/daily-expenses-4/web/daily-expenses-web-img-2.png',
                './aksel/daily-expenses-4/web/daily-expenses-web-img-3.png',
                './aksel/daily-expenses-4/web/daily-expenses-web-img-4.png',
                './aksel/daily-expenses-4/web/daily-expenses-web-img-5.png',
                './aksel/daily-expenses-4/web/daily-expenses-web-img-6.png',
                './aksel/daily-expenses-4/web/daily-expenses-web-img-7.png',
                './aksel/daily-expenses-4/web/daily-expenses-web-img-8.png',
            ],
            movil: [
                './aksel/daily-expenses-4/mobile/daily-expenses-img-1.png',
                './aksel/daily-expenses-4/mobile/daily-expenses-img-2.png',
                './aksel/daily-expenses-4/mobile/daily-expenses-img-3.png',
                './aksel/daily-expenses-4/mobile/daily-expenses-img-4.png',
                './aksel/daily-expenses-4/mobile/daily-expenses-img-5.png',
                './aksel/daily-expenses-4/mobile/daily-expenses-img-6.png',
                './aksel/daily-expenses-4/mobile/daily-expenses-img-7.png',
                './aksel/daily-expenses-4/mobile/daily-expenses-img-8.png',
            ]
        },
        contributions: [
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Muy Alta"
            },
            {
                title: "Modelo con Room Database",
                detail: "Se creó el modelo y esquema de base de datos utilizando Room para la persistencia local.",
                priority: "Alta"
            },
            {
                title: "Manejo de reportes",
                detail: "Se desarrollaron clases para la gestión de diferentes tipos de reportes en la aplicación, considerando las diversas pantallas y su funcionalidad particular.",
                priority: "Media"
            },
            {
                title: "Modelo de sincronización v1, v2 y v3",
                detail: "Diseño y desarrollo del modelo de sincronización para las versiones del backend, comenzando desde cero hasta una versión escalable.",
                priority: "Muy Alta"
            },
            {
                title: "Manejo de imágenes",
                detail: "Se añadió lógica para la carga y sincronización de imágenes proporcionadas por los usuarios, tanto de forma individual como sincronizada.",
                priority: "Media"
            },
            {
                title: "Diseño en XML para vistas de Android",
                detail: "Se crearon los diseños y colecciones necesarias para el funcionamiento de la aplicación.",
                priority: "Alta"
            },
            {
                title: "Implementación de suscripciones",
                detail: "Se integró Google Play Billing para habilitar la compra de suscripciones mensuales y anuales por parte de los usuarios.",
                priority: "Alta"
            },
            {
                title: "Gestión de múltiples cuentas",
                detail: "Se implementó la funcionalidad para manejar múltiples cuentas dentro de la aplicación, permitiendo su administración y comparación.",
                priority: "Media"
            },
        ],
        types: ["Mobile", "Web"],
        development_time: 2
    },
    //MARK: ZEUS
    {
        name: "Zeus",
        detail: "Implementación eficiente del seguimiento y resolución de tickets de soporte, integrando automatización para la actualización y control automático del estado de los folios, optimizando tiempos de respuesta y mejorando la trazabilidad de las incidencias.",
        tools: [
            {
                name: 'Figma',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
            },
            {
                name: 'Android',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg'
            },
        ],
        images: {
            web: [],
            movil: [
                './samuel/zeus/zeus-img-1.png',
                './samuel/zeus/zeus-img-2.png',
                './samuel/zeus/zeus-img-3.png',
                './samuel/zeus/zeus-img-4.png',
                './samuel/zeus/zeus-img-5.png',
                './samuel/zeus/zeus-img-6.png',
                './samuel/zeus/zeus-img-7.png',
                './samuel/zeus/zeus-img-8.png',
                './samuel/zeus/zeus-img-9.png',
                './samuel/zeus/zeus-img-10.png',
            ],
        },
        contributions: [
            {
                title: "Integración del módulo SWAT para atención al cliente en Mesa de Ayuda",
                detail: "Se incorporó el módulo SWAT a la aplicación para gestionar solicitudes de atención al cliente desde la Mesa de Ayuda.",
                priority: "Muy Alta"
            },
            {
                title: "Corrección de errores visuales y funcionales",
                detail: "Se solucionaron problemas de diseño e inconsistencias funcionales para mejorar la experiencia del usuario.",
                priority: "Alta"
            },
            {
                title: "Diseño responsivo funcional",
                detail: "Se adaptó la interfaz para garantizar una experiencia óptima en distintos dispositivos y tamaños de pantalla.",
                priority: "Media"
            },
            {
                title: "Implementación de CRUD para servicios",
                detail: "Se desarrolló un módulo CRUD para gestionar los servicios disponibles dentro del aplicativo.",
                priority: "Alta"
            },
            {
                title: "Búsqueda de tickets en plataforma BES",
                detail: "Se implementó una funcionalidad que permite consultar tickets fuera del entorno de Zeus mediante integración con la plataforma BES.",
                priority: "Alta"
            },
            {
                title: "Mejoras en la gestión de usuarios",
                detail: "Se optimizó el proceso de creación, edición y mantenimiento de usuarios para facilitar su administración.",
                priority: "Media"
            }
        ],
        types: ["Mobile"],
        development_time: 1
    },
    //MAKR: BLUEBOARD
    {
        name: "Blueboard",
        detail: "Telcel busca poder agilizar la gestión de noticias (promociones), por ello se creó la aplicación “BLUE BOARD”, esta aplicación se encarga de visualizar noticias. Estas noticias llegan en tiempo real por medio de una aplicación móvil, a todos los clientes (administradores regionales, distribuidores, gerentes y vendedores) no importando en cuál de las 8 regiones se encuentren, estarán informados de las diferentes noticias y promociones que Telcel lance a nivel nacional.",
        tools: [
            {
                name: 'Android',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg'
            }
        ],
        images: {
            web: [],
            movil: [
                './samuel/blueboard/blueboard-img-1.png',
                './samuel/blueboard/blueboard-img-3.png',
                './samuel/blueboard/blueboard-img-4.png',
                './samuel/blueboard/blueboard-img-5.png',
                './samuel/blueboard/blueboard-img-6.png',
            ],
        },
        contributions: [
            {
                title: "Corrección de vulnerabilidades checkmarks",
                detail: "Se corrigieron vulnerabilidades críticas y advertencias señaladas por el análisis estático de Checkmarks para reforzar la seguridad del sistema.",
                priority: "Muy Alta"
            },
            {
                title: "Preferences filtros",
                detail: "Se implementaron filtros personalizados utilizando el sistema de preferencias del usuario.",
                priority: "Alta"
            },
            {
                title: "Cambio de versión de Java y actualización de Gradle",
                detail: "Se actualizó la versión de Java y se migró a una versión más reciente de Gradle para mantener la compatibilidad y seguridad del proyecto.",
                priority: "Alta"
            },
            {
                title: "Reproducción de videos",
                detail: "Se integró una librería para permitir la reproducción de contenido multimedia dentro de la aplicación.",
                priority: "Media"
            },
        ],
        types: ["Mobile"],
        development_time: 1
    },
    //MARK: SISAP
    {
        name: "SISAP",
        detail: "Applicación para brindar movilidad a los usuarios internos de Telcel en el seguimiento de folios SISAP los proyectos en donde se este involucrado.",
        tools: [
            {
                name: 'Android',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg'
            }
        ],
        images: {
            web: [],
            movil: [
                './samuel/sisap/sisap-img-1.png',
                './samuel/sisap/sisap-img-2.png',
                './samuel/sisap/sisap-img-3.png',
                './samuel/sisap/sisap-img-4.png',
                './samuel/sisap/sisap-img-5.png',
                './samuel/sisap/sisap-img-6.png',
                './samuel/sisap/sisap-img-7.png',
            ],
        },
        contributions: [
            {
                title: "Corrección de vulnerabilidades checkmarks",
                detail: "Se corrigieron vulnerabilidades detectadas por Checkmarks, reforzando la seguridad y la integridad del sistema.",
                priority: "Muy Alta"
            },
            {
                title: "Cambio de versión de Java y actualización de Gradle",
                detail: "Se actualizó la versión de Java y se migró a una versión más reciente de Gradle para asegurar compatibilidad, estabilidad y mejor rendimiento.",
                priority: "Alta"
            },
            {
                title: "Correcciones o mejoras visuales",
                detail: "Se realizaron ajustes para optimizar la apariencia y usabilidad del sistema, mejorando la experiencia del usuario.",
                priority: "Media"
            },
            {
                title: "Incorporación de nuevos servicios en backend",
                detail: "Se añadieron nuevos servicios para manejo de estado de folio, cancelación, detener folio, relocate, rechazar y resumen de folio.",
                priority: "Alta"
            },
            {
                title: "Preferences filtros",
                detail: "Se implementaron y optimizaron filtros personalizados en la sección de Preferencias para facilitar la búsqueda y selección de opciones.",
                priority: "Media"
            }
        ],
        types: ["Mobile"],
        development_time: 1
    },
    //MARK: ENCODEMX WEB
    {
        name: "Encodemx Web",
        detail: "Aplicación web estática desarrollada en Angular que centraliza los manuales de usuario de las aplicaciones internas de la empresa, junto con los términos y condiciones y las políticas de privacidad. Su objetivo es facilitar el acceso a la documentación oficial de forma clara y organizada.",
        tools: [
            {
                name: "Angular",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
            }
        ],
        images: {
            web: [
                './aksel/encodemx-web/encode1.png',
                './aksel/encodemx-web/encode2.png',
                './aksel/encodemx-web/encode3.png',
                './aksel/encodemx-web/encode4.png',
                './aksel/encodemx-web/encode5.png',
            ],
            movil: [],
        },
        contributions: [
            {
                title: "Creación de la interfaz",
                detail: "Se diseñó y construyó completamente la interfaz del sitio, asegurando una estructura clara, estética coherente y navegación intuitiva.",
                priority: "Muy Alta"
            },
            {
                title: "Diseño responsivo",
                detail: "Se adaptó la interfaz para ofrecer una experiencia óptima en dispositivos móviles, garantizando la funcionalidad y legibilidad en pantallas pequeñas.",
                priority: "Alta"
            },
            {
                title: "Agregar skeletons de carga",
                detail: "Se integraron skeletons como indicadores visuales durante la carga de contenido, mejorando la percepción de velocidad del sitio.",
                priority: "Media"
            },
            {
                title: "Manejo de traducciones",
                detail: "Se implementó un sistema de internacionalización que permite visualizar el contenido en tres idiomas distintos, ampliando el alcance del portal a usuarios con diferentes lenguas.",
                priority: "Alta"
            },
            {
                title: "Mejorar tiempos de carga",
                detail: "Se optimizó el rendimiento del sitio mediante la conversión de imágenes pesadas a formato .webp, reduciendo significativamente los tiempos de carga",
                priority: "Alta"
            },
        ],
        types: ["Web"],
        development_time: 1
    },
    //MARK: CONSOLE ENCODEMX
    {
        name: "Console Encodemx",
        detail: "Aplicación web estática desarrollada en Angular que centraliza los manuales de usuario de las aplicaciones internas de la empresa, junto con los términos y condiciones y las políticas de privacidad. Su objetivo es facilitar el acceso a la documentación oficial de forma clara y organizada.",
        tools: [
            {
                name: "Angular",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
            },
            {
                name: "NestJS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
            },
        ],
        images: {
            web: [
                './aksel/console-encodemx/console-encode-img-1.png',
                './aksel/console-encodemx/console-encode-img-2.png',
                './aksel/console-encodemx/console-encode-img-3.png',
                './aksel/console-encodemx/console-encode-img-4.png',
                './aksel/console-encodemx/console-encode-img-5.png',
            ],
            movil: [],
        },
        contributions: [
            {
                title: "Implementación de CRUD para usuarios",
                detail: "Se desarrolló la funcionalidad CRUD para la gestión de usuarios, incluyendo la administración y actualización de la información de compras.",
                priority: "Alta"
            },
            {
                title: "Manejo y visualización de compras versión 3",
                detail: "Se gestionaron las compras y se habilitó la visualización de información de compras en la versión 3.",
                priority: "Media"
            },
            {
                title: "Incorporación de migración de respaldos",
                detail: "Se implementó la migración de respaldos para asegurar la integridad y disponibilidad de la información.",
                priority: "Media"
            },
            {
                title: "Migración de datos a base de datos QA",
                detail: "Se migraron los datos de la versión productiva a la base de datos QA para gastos diarios 4",
                priority: "Media"
            },
        ],
        types: ["Web"],
        development_time: 1
    },
];

export const TITLE_PROJECTS: SwitchProjectData[] = PROJECTS_SAMUEL.map(row => ({
    id: Math.random(),
    name: row.name,
    type: row.types,
}));