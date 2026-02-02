import type { Project } from "../interfaces/Project.interface";

export const PROJECTS_DATA: Project[] = [
    //MARK: SHOPPING EXPENSES 
    {
        title: 'Gastos de compra',
        description: 'Gastos de Compras es una aplicación diseñada para registrar, organizar y controlar los gastos de distintos proyectos. Permite administrar ingresos, visualizar resúmenes por categoría, proteger la información con contraseña y generar respaldos.',
        type: 'iOS + Web',
        devTools: [
            { name: 'Swift', image: './icons/swift.png' },
            { name: 'Node.js', image: './icons/node.png' },
            { name: 'Angular', image: './icons/angular.png' },
            { name: 'NestJS', image: './icons/nestjs.png' },
        ],
        contributions: [
            {
                details: 'Migración de servicios hacia un nuevo backend, optimizando el manejo de datos y mejorando el rendimiento de la aplicación.',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Mantenimiento correctivo de la aplicación para resolver errores de datos reportados por usuarios, incrementando la estabilidad y confiabilidad del sistema.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Migración de dependencias de CocoaPods a Swift Package Manager, modernizando la gestión de librerías y facilitando el mantenimiento del proyecto.',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Implementación de un sistema de respaldos en formato JSON, permitiendo el almacenamiento local de la información para reforzar la seguridad de los datos.',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Optimización de procesos y tareas complejas, mejorando la eficiencia del sistema y reduciendo los tiempos de respuesta para los usuarios.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de procesos de sincronización entre datos locales y el servidor, asegurando el respaldo en la nube y permitiendo el uso de la aplicación sin conexión.',
                rate: 5,
                importValue: 'Alto'
            },
        ],
        images: {
            mobile: [
                './aksel/shopping-expenses/mobile/shopping-expenses-img-1.webp',
                './aksel/shopping-expenses/mobile/shopping-expenses-img-2.webp',
                './aksel/shopping-expenses/mobile/shopping-expenses-img-3.webp',
                './aksel/shopping-expenses/mobile/shopping-expenses-img-4.webp',
                './aksel/shopping-expenses/mobile/shopping-expenses-img-5.webp',
            ],
            web: [
                './aksel/shopping-expenses/web/shopping-expenses-img-1.png',
                './aksel/shopping-expenses/web/shopping-expenses-img-2.png',
                './aksel/shopping-expenses/web/shopping-expenses-img-3.png',
                './aksel/shopping-expenses/web/shopping-expenses-img-4.png',
                './aksel/shopping-expenses/web/shopping-expenses-img-5.png',
                './aksel/shopping-expenses/web/shopping-expenses-img-6.png',
                './aksel/shopping-expenses/web/shopping-expenses-img-7.png',
                './aksel/shopping-expenses/web/shopping-expenses-img-8.png',
            ]
        }
    },
    //MARK: MY TOURNAMENTS
    {
        title: 'Mis Torneos',
        description: 'Sistema para la gestión de torneos deportivos que permite administrar competencias y compartir resultados y estadísticas con los usuarios.',
        type: 'iOS',
        devTools: [
            { name: 'Swift', image: './icons/swift.png' },
            { name: 'php', image: './icons/php.png' },
        ],
        contributions: [
            {
                details: 'Integración de peticiones con el servidor para mantener la información sincronizada en la nube y facilitar su visualización entre usuarios.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Gestión de dependencias mediante CocoaPods para la integración y administración de librerías de terceros.',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Desarrollo de interfaces utilizando UIKit, asegurando una experiencia de usuario clara y funcional.',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de persistencia de datos con Core Data, garantizando el acceso continuo a la información.',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de gestión de roles (usuarios y administradores) para reforzar la seguridad y el control de acceso a los datos.',
                rate: 5,
                importValue: 'Alto'
            },
        ],
        images: {
            mobile: [
                './aksel/my-tournaments/my-tournaments-1.png',
                './aksel/my-tournaments/my-tournaments-2.png',
                './aksel/my-tournaments/my-tournaments-3.png',
                './aksel/my-tournaments/my-tournaments-4.png',
                './aksel/my-tournaments/my-tournaments-5.png',
                './aksel/my-tournaments/my-tournaments-6.png',
            ]
        }
    },
    //MARK: ENCODEMX WEB
    {
        title: 'Encodemx Web',
        description: 'Desarrollo de un sitio web corporativo orientado a centralizar manuales de usuario, documentación clave, políticas de privacidad e información relevante de la empresa.',
        type: 'Web',
        devTools: [
            { name: 'Angular', image: './icons/angular.png' }
        ],
        contributions: [
            {
                details: 'Implementación de diseño responsivo, garantizando una correcta visualización y accesibilidad en todo tipo de dispositivos.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Diseño de interfaces y arquitectura de navegación, optimizando la organización y consulta de la información del sitio.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de soporte multilenguaje (español, portugués e inglés) para ampliar el alcance y mejorar la experiencia de los usuarios.',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Optimización de tiempos de carga mediante la conversión de imágenes a formatos adecuados para la web.',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Despliegue del sitio en AWS, asegurando la disponibilidad y confiabilidad de la plataforma.',
                rate: 4,
                importValue: 'Alto'
            },
        ],
        images: {
            web: [
                './aksel/encodemx-web/encode1.png',
                './aksel/encodemx-web/encode2.png',
                './aksel/encodemx-web/encode3.png',
                './aksel/encodemx-web/encode4.png',
                './aksel/encodemx-web/encode5.png',
            ]
        }
    },
    //MARK: CONSOLO ENCODEMX
    {
        title: 'Consola Encodemx',
        description: 'Sistema de administración de cuentas e información de usuarios, diseñado para brindar soporte eficiente y mantener un control adecuado ante incidencias o uso indebido de la plataforma.',
        type: 'Web',
        devTools: [
            { name: 'Angular', image: './icons/angular.png' },
            { name: 'Node.js', image: './icons/node.png' },
            { name: 'NestJS', image: './icons/nestjs.png' },
            { name: 'TypeScript', image: './icons/typescript.png' },
        ],
        contributions: [
            {
                details: 'Desarrollo de un nuevo backend con Node.js y NestJS, modernizando la arquitectura y mejorando la mantenibilidad del sistema.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de tareas programadas para la validación de compras, facilitando la gestión de reembolsos y la actualización de información conforme a las tiendas de aplicaciones.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Generación de reportes con visualizaciones gráficas sobre las compras realizadas, apoyando la toma de decisiones administrativas.',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Gestión de despliegues continuos en AWS, asegurando la disponibilidad del sistema y la entrega constante de nuevas versiones.',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Migración de peticiones hacia el nuevo servicio, fortaleciendo la escalabilidad y el rendimiento de la plataforma.',
                rate: 3,
                importValue: 'Medio'
            },
        ],
        images: {
            web: [
                './aksel/console-encodemx/console-encode-img-1.png',
                './aksel/console-encodemx/console-encode-img-2.png',
                './aksel/console-encodemx/console-encode-img-3.png',
                './aksel/console-encodemx/console-encode-img-4.png',
                './aksel/console-encodemx/console-encode-img-5.png',
            ]
        }
    },
    //MARK: PRODUCTIVITY
    {
        title: 'Productivity',
        description: 'Sistema de registro de actividades laborales orientado a medir la productividad diaria mediante la categorización de tareas y el seguimiento del tiempo, con generación de reportes gráficos y respaldos en formato CSV.',
        type: 'Web',
        devTools: [
            { name: 'Angular', image: './icons/angular.png' },
            { name: 'Node.js', image: './icons/node.png' },
            { name: 'NestJS', image: './icons/nestjs.png' },
            { name: 'TypeScript', image: './icons/typescript.png' },
            { name: 'Figma', image: './icons/figma.webp' },
        ],
        contributions: [
            {
                details: 'Análisis de requerimientos y diseño de la base de datos, asegurando una estructura alineada con las necesidades funcionales del sistema.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Análisis de requerimientos y diseño de la base de datos, asegurando una estructura alineada con las necesidades funcionales del sistema.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Análisis de requerimientos y diseño de la base de datos, asegurando una estructura alineada con las necesidades funcionales del sistema.',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Diseño de la interfaz del sitio, enfocado en la usabilidad y el cumplimiento de los objetivos operativos de la plataforma.',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de un sistema de importación y exportación en formato CSV, facilitando la gestión de grandes volúmenes de datos.',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Implementación de un sistema de ordenamiento de actividades mediante drag and drop, permitiendo a los usuarios personalizar la organización de sus tareas.',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Generación de reportes con visualizaciones gráficas, mejorando la interpretación y el análisis de la información.',
                rate: 4,
                importValue: 'Alto'
            },
        ],
        images: {
            web: [
                './aksel/productivity/productivity-img-1.png',
                './aksel/productivity/productivity-img-2.png',
                './aksel/productivity/productivity-img-3.png',
                './aksel/productivity/productivity-img-4.png',
                './aksel/productivity/productivity-img-5.png',
                './aksel/productivity/productivity-img-6.png',
                './aksel/productivity/productivity-img-7.png',
                './aksel/productivity/productivity-img-8.png',
            ]
        }
    },
    {
        title: 'Gastos Diarios 4',
        description: '',
        type: 'iOS + Web',
        devTools: [
            { name: 'Swift', image: './icons/swift.png' },
            { name: 'Angular', image: './icons/angular.png' },
            { name: 'NestJS', image: './icons/nestjs.png' },
            { name: 'PHP', image: './icons/php.png' },
            { name: 'Angular', image: './icons/angular.png' },
        ],
        contributions: [],
        images: {}
    }
]