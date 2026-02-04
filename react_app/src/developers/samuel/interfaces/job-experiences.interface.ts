export interface JobExperience {
    id: number;
    nameJob: string;
    company: string;
    iconCompany: string;
    location: string;
    years: number;
    type: 'Freelance' | 'Tiempo completo';
    detail: string;
    pointsActivities: string[];
    iconsStack: string[];
}