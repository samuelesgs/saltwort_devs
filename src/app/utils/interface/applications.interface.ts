export interface SaltwortApplication{
    title : string;
    img : string;
    properties : Property[];
    propertySelected?: Property | null;
    routeToNavigate : string;
}

export interface Property {
    name: string;
    detail: string;
    click: boolean;
}