
import type { ProjectLuis } from "../interfaces/Project.interface";

export const PROJECTS_DATA_LUIS: ProjectLuis[] = [
    //MARK: SHOPPING EXPENSES 
    {
        title: 'Venta plus',
        description: 'Venta Plus es una aplicación de punto de venta diseñada para facilitar la administración y operación de negocios, permitiendo registrar ventas de manera rápida y eficiente. El sistema ofrece herramientas para el control de métodos de pago, generación de reportes, creación de cotizaciones, facturación y remisiones para clientes, ayudando a mejorar la organización y productividad del negocio. \nAdemás, Venta Plus permite gestionar información comercial de manera centralizada, optimizando procesos administrativos y brindando mayor control sobre las operaciones diarias. La plataforma está enfocada en ofrecer una experiencia práctica, intuitiva y adaptable a las necesidades de distintos tipos de negocios, contribuyendo a una mejor gestión de ventas, clientes y flujo de trabajo',
        type: 'Móvil -  escritorio',
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
]