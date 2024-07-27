export interface SaltwortApplication{
    title : string;
    img : string;
    properties : Property[];
    propertySelected?: Property | null;
}

export interface Property {
    name: string;
    detail: string;
    click: boolean;
}