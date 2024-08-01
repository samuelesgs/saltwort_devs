export interface SaltwortApplication{
routeToNavigate: any;
    title : string;
    img : string;
    properties : Property[];
    propertySelected?: Property | null;
    isExpanded : boolean;
}

export interface Property {
    name: string;
    detail: string;
    click: boolean;
}