import type { JobExperience } from '../interfaces/job-experiences.interface';

export const JOB_EXPERIENCES: JobExperience[] = [
    {
        nameJob: 'Android Developer / Angular Developer / Java Support',
        company: 'EPAM Neoris - Célula Telcel',
        location: 'México',
        type: 'Tiempo completo',
        detail: 'Desarrollo de aplicativos Android corporativos dentro del ecosistema Telcel.',
        pointsActivities: [
            'Implementación de nuevas funciones, mantenimiento, consumo de APIs internas y optimización de flujos.',
            'Desarrollo en Angular para la plataforma Zeus (Modulos, componentes, servicios, UX responsivo).',
            'Soporte y ajustes en backend Java para procesos internos.',
            'Trabajo con arquitecturas empresariales, seguridad, logs APIs REST y estándares Telcel.',
        ],
        iconsStack: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
        ],
        id: Math.random(),
        iconCompany: 'icons/epamneoris_logo.jpeg',
        years: 2
    },
    {
        nameJob: 'Full Stack Developer / Android / Backend / Web',
        company: 'Encodemx',
        location: 'México',
        type: 'Tiempo completo',
        detail: 'Participación en múltiples aplicaciones móviles, plataformas web y sistemas backend desde arquitectura, implementación, pruebas y despliegue.',
        pointsActivities: [
            'Desarrollo Backend en PHP y modelado en MySQL',
            'Publicaciones de aplicaciones móviles en Google Play.',
            'Desarrollo de backend en Node.js (NestJS).',
            'Desarrollo de aplicaciones web con Angular.',
        ],
        iconsStack: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        ],
        id: Math.random(),
        iconCompany: 'icons/encodemx_logo.png',
        years: 5
    }
]