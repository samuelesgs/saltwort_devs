
import type { ProjectLuis } from "../interfaces/Project.interface";

export const PROJECTS_DATA_LUIS: ProjectLuis[] = [
    //MARK: VENTA PLUS 
    {
        title: 'Venta plus',
        description: 'Venta Plus es una aplicación de punto de venta diseñada para facilitar la administración y operación de negocios, permitiendo registrar ventas de manera rápida y eficiente. El sistema ofrece herramientas para el control de métodos de pago, generación de reportes, creación de cotizaciones, facturación y remisiones para clientes, ayudando a mejorar la organización y productividad del negocio. \nAdemás, Venta Plus permite gestionar información comercial de manera centralizada, optimizando procesos administrativos y brindando mayor control sobre las operaciones diarias. La plataforma está enfocada en ofrecer una experiencia práctica, intuitiva y adaptable a las necesidades de distintos tipos de negocios, contribuyendo a una mejor gestión de ventas, clientes y flujo de trabajo',
        type: 'Móvil + Escritorio',
        devTools: [
            { name: 'Kotlin', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
            { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
            { name: 'SQL management', image: './luis/icons/management-icon.png' },
            { name: '.NET', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
            { name: 'ASP', image: './luis/icons/asp-icon.png' },
        ],
        contributions: [
            {
                details: 'Diseño de las entidades y mapeo ',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Diseño de todas las vistas  ',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Integración de retrofit y consumo de API ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Programación De las funcionalidades de venta, cotización e historiales ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Impresión de ticket  mediante impresora Bluetooth (móvil) ',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Creación de reportes de vendedores ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Creación del módulo de devoluciones  ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Creación del módulo de sucursales ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Modificación de ticket de corte de caja, ticket de venta, de corte Z, apertura ',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Optimización de funciones y modulo ya existentes para que fueran mas eficaces ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Implementacion de programas de lealtad en el sistema ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Modulo de servicios y comisiones asi como la implementacion en el modulo de Venta ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Modulo de recargas en el sistema ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Creacion del catalogo de documentos ',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Obtención de cada uno de los catalogos por fecha de actualizacion por separado ',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Insertar o actualizar catalogos ',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Obtencion de saldo de clientes mediante signalR ',
                rate: 4,
                importValue: 'Medio'
            },
        ],
        images: {
            mobile: [
                './luis/projects/venta-plus/venta-plus-movil-1.png',
                './luis/projects/venta-plus/venta-plus-movil-2.png',
                './luis/projects/venta-plus/venta-plus-movil-3.png',
                './luis/projects/venta-plus/venta-plus-movil-1.png',
                './luis/projects/venta-plus/venta-plus-movil-2.png',
                './luis/projects/venta-plus/venta-plus-movil-3.png',
            ],
            web: [
                './luis/projects/venta-plus/venta-plus-1.png',
                './luis/projects/venta-plus/venta-plus-2.png',
                './luis/projects/venta-plus/venta-plus-3.png',
                './luis/projects/venta-plus/venta-plus-4.png',
                './luis/projects/venta-plus/venta-plus-5.png',
                './luis/projects/venta-plus/venta-plus-6.png',
                './luis/projects/venta-plus/venta-plus-7.png',
                './luis/projects/venta-plus/venta-plus-8.png',
                './luis/projects/venta-plus/venta-plus-9.png',
                './luis/projects/venta-plus/venta-plus-10.png',
                './luis/projects/venta-plus/venta-plus-11.png',
                './luis/projects/venta-plus/venta-plus-12.png',
                './luis/projects/venta-plus/venta-plus-13.png',
                './luis/projects/venta-plus/venta-plus-14.png',
                './luis/projects/venta-plus/venta-plus-15.png',
                './luis/projects/venta-plus/venta-plus-16.png'
            ]
        }
    },
     //MARK: CRM 
    {
        title: 'CRM GENERICO',
        description: 'El CRM Genérico es un sistema diseñado para optimizar la gestión comercial y administrativa de una empresa. Permite crear y administrar cotizaciones de manera rápida y profesional, llevar el seguimiento de clientes potenciales y oportunidades de venta, así como organizar tareas y actividades del equipo de trabajo. Además, cuenta con herramientas para agendar recordatorios, llamadas, mensajes y reuniones con clientes, ayudando a mantener una comunicación constante y un mejor control de seguimiento. El sistema también permite exportar cotizaciones y reportes en formatos PDF y Excel, facilitando el manejo y presentación de información.',
        type: 'Escritorio',
        devTools: [
            { name: '.NET', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
            { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
            { name: 'SQL management', image: './luis/icons/management-icon.png' },
        ],
        contributions: [
            {
                details: 'Sincronización local servicio stel order ',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Sincronización con la API stel order',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Implementación completa de Ordenes de servicio',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Implementación API stel Order',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Creación de interfaces, controladores, IoC, Autofac',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Creación de las vistas',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Creación de funcionalidades del sistema',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Módulo de servicio genérico ',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Correcciones de tamaños, colores, diseños de vistas',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Creación de PDF',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Exportar con Excel',
                rate: 3,
                importValue: 'Medio'
            }
        ],
        images: {
            web: [
                './luis/projects/crm/crm-img-1.png',
                './luis/projects/crm/crm-img-2.png',
                './luis/projects/crm/crm-img-3.png',
                './luis/projects/crm/crm-img-4.png',
                './luis/projects/crm/crm-img-5.png',
                './luis/projects/crm/crm-img-6.png',
                './luis/projects/crm/crm-img-7.png',
                './luis/projects/crm/crm-img-8.png',
                './luis/projects/crm/crm-img-9.png',
                './luis/projects/crm/crm-img-10.png',
                './luis/projects/crm/crm-img-11.png',
                './luis/projects/crm/crm-img-12.png',
                './luis/projects/crm/crm-img-13.png'
            ]
        }
    },
    //MARK: RUTA+
    {
        title: 'RUTA+',
        description: 'Ruta + es un sistema enfocado en la gestión y administración de pedidos para repartidores y ventas en ruta, diseñado para facilitar el trabajo de distribución y entrega de productos de manera rápida y organizada. La plataforma permite descargar y sincronizar los pedidos enviados desde el sistema principal, consultarlos en cualquier momento y dar seguimiento al proceso de entrega directamente desde la aplicación. Además, Ruta + ayuda a optimizar las operaciones de venta en campo, permitiendo a los repartidores gestionar clientes, registrar ventas, consultar información de pedidos, controlar entregas y mantener un mejor control de las rutas asignadas. El sistema está pensado para mejorar la productividad, reducir errores operativos y agilizar la comunicación entre oficina y repartidores, ofreciendo una solución práctica y eficiente para empresas que manejan ventas y distribución en ruta.',
        type: 'Móvil + Escritorio',
        devTools: [
            { name: 'Kotlin', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
        ],
        contributions: [
            {
                details: 'Optimización de procesos en funcionalidades',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Mejoras en pantallas',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Optimización de consultas',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Reorganización de encarpetado e implementación de inyección de dependencias con dagger hilt',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Configuración de PIN',
                rate: 4,
                importValue: 'Medio'
            },
        ],
        images: {
            mobile: [
                './luis/projects/ruta/ruta-movil-img-1.png',
                './luis/projects/ruta/ruta-movil-img-2.png',
                './luis/projects/ruta/ruta-movil-img-3.png',
                './luis/projects/ruta/ruta-movil-img-4.png',
                './luis/projects/ruta/ruta-movil-img-5.png',
                './luis/projects/ruta/ruta-movil-img-6.png',
                './luis/projects/ruta/ruta-movil-img-7.png',
                './luis/projects/ruta/ruta-movil-img-8.png',
                './luis/projects/ruta/ruta-movil-img-9.png',
                './luis/projects/ruta/ruta-movil-img-10.png',
                './luis/projects/ruta/ruta-movil-img-11.png',
                './luis/projects/ruta/ruta-movil-img-12.png',
            ],
            web: [
                './luis/projects/ruta/ruta-img-1.png',
                './luis/projects/ruta/ruta-img-2.png',
                './luis/projects/ruta/ruta-img-3.png',
                './luis/projects/ruta/ruta-img-4.png',
                './luis/projects/ruta/ruta-img-5.png',
                './luis/projects/ruta/ruta-img-6.png',
                './luis/projects/ruta/ruta-img-7.png',
                './luis/projects/ruta/ruta-img-8.png'
            ]
        }
    },
    //MARK: LISTA PRECIOS+
    {
        title: 'Verificador de precios',
        description: 'Aplicación diseñada para la verificación y consulta de precios dentro de una empresa, permitiendo acceder de manera rápida y eficiente a la información de los productos disponibles. El sistema facilita la validación de precios, ayudando a mantener un mejor control y precisión en la información mostrada al cliente. Además, la aplicación cuenta con funciones de escaneo de productos mediante código de barras, agilizando la búsqueda y consulta de artículos en tiempo real. Está enfocada en optimizar procesos de atención y revisión de precios, reduciendo tiempos de búsqueda y mejorando la eficiencia operativa dentro del negocio.',
        type: 'Móvil',
        devTools: [
            { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
            { name: 'SQL management', image: './luis/icons/management-icon.png' },
            { name: '.NET', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
            { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' }
        ],
        contributions: [
            {
                details: 'Implementación función de envío de correos mediante SMTP e IMAP',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Utileria para sincronizar existencias mediante servicio de windows',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Proceso de descarga de pedidos mediante pedidos y mejoras',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Seleccionar concepto al enviar a comercial el pedido',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de bitácora de errores a la API',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Mejorar sincronización forzada y manual',
                rate: 5,
                importValue: 'Alto'
            },
            {
                details: 'Mejoras de funcionalidades de impuestos de precios con IVA y sin IVA incluido',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Limpieza de código y optimización de funciones',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Exportación de pedidos a Excel',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Establecer producto en precio libre',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Refactorización de sincronizaciones',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Envío de bitácoras de errores a API',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Guardar pedidos sin internet',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Vista de visualización de errores de bitácora',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Optimización de consultas en la aplicacion',
                rate: 4,
                importValue: 'Medio'
            },
            {
                details: 'Sincronización de documentos y series mediante endpoint',
                rate: 3,
                importValue: 'Medio'
            },
            {
                details: 'Optimización de funcionalidades en general',
                rate: 4,
                importValue: 'Medio'
            },
        ],
        images: {
            mobile: [
                './luis/projects/lista-precios/lista-precios-img-1.png',
                './luis/projects/lista-precios/lista-precios-img-2.png',
                './luis/projects/lista-precios/lista-precios-img-3.png',
                './luis/projects/lista-precios/lista-precios-img-4.png',
                './luis/projects/lista-precios/lista-precios-img-5.png'
            ]
        }
    },
        //MARK: CONTROL VEHICULAR
    {
        title: 'Control vehicular',
        description: 'Sistema diseñado para la gestión y control de rutas vehiculares dentro de una empresa, permitiendo administrar de manera eficiente la información relacionada con el uso de los vehículos. La plataforma almacena datos como el conductor asignado, fechas de solicitud y uso del vehículo, kilometraje recorrido, consumo de gasolina y detalles generales de cada ruta realizada. Además, el sistema permite generar reportes detallados de rutas, incluyendo la posibilidad de subir imágenes para una mejor visualización y seguimiento de recorridos. También cuenta con módulos para la gestión de vehículos, llaves y agentes, así como la asignación y control de llaves, facilitando una administración más organizada y segura. La plataforma incluye herramientas para consultar reportes de consumo de combustible, historial de uso de llaves y una bitácora completa de movimientos y utilización de vehículos, ayudando a optimizar recursos, mejorar el control operativo y mantener un seguimiento detallado de las actividades de transporte dentro de la empresa.',
        type: 'Escritorio',
        devTools: [
            { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
            { name: 'SQL management', image: './luis/icons/management-icon.png' },
            { name: 'WPF', image: './luis/icons/wpf.png', },
        ],
        contributions: [
            {
                details: 'Vistas completas en WPF',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Exportación de excel de los reportes',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Catálogos de llaves',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Catálogos de agentes',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Catálogos de vehículos',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de controladores',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Implementación de inyección de dependencias',
                rate: 5,
                importValue: 'Muy Alto'
            },
            {
                details: 'Repositorios para el consumo de la aplicación',
                rate: 4,
                importValue: 'Alto'
            },
            {
                details: 'Creación de tablas del sistema',
                rate: 5,
                importValue: 'Muy Alto'
            }
        ],
        images: {
            web: [
                './luis/projects/control-vehicular/control-vehicular-img-1.png',
                './luis/projects/control-vehicular/control-vehicular-img-2.png',
                './luis/projects/control-vehicular/control-vehicular-img-3.png',
                './luis/projects/control-vehicular/control-vehicular-img-4.png',
                './luis/projects/control-vehicular/control-vehicular-img-5.png',
                './luis/projects/control-vehicular/control-vehicular-img-6.png',
                './luis/projects/control-vehicular/control-vehicular-img-7.png',
                './luis/projects/control-vehicular/control-vehicular-img-8.png',
                './luis/projects/control-vehicular/control-vehicular-img-9.png',
                './luis/projects/control-vehicular/control-vehicular-img-10.png',
                './luis/projects/control-vehicular/control-vehicular-img-11.png',
                './luis/projects/control-vehicular/control-vehicular-img-12.png',
                './luis/projects/control-vehicular/control-vehicular-img-13.png',
                './luis/projects/control-vehicular/control-vehicular-img-14.png',
                './luis/projects/control-vehicular/control-vehicular-img-15.png'
            ]
        }
    },
]