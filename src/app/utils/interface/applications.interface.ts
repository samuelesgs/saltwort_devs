export interface SaltwortApplication{
    title : string;
    properties : Property[];
}

export interface Property {
    name: string;
    detail: string;
    click: boolean;
}