import { SaltwortApplication } from "../interface/applications.interface";

export class ModelSaltwortApplication {

  private apps : SaltwortApplication[] = [];  
  constructor() {
    this.apps = this.initialApplication(); 
  }

  getApplications() {
    return [...this.apps];
  }

  private initialApplication() {
    return [
        {
            title : "Activity Planner",
            img : "android",
            properties : [
                {
                    name : "Administra tu tiempo",
                    detail : "Podras adminstrar mejor tu tiempo, no se te olvidar cosas",
                    click : false
                },
                {
                    name : "Planifica tus actividades",
                    detail : "El planificar tus actividades aprovecha tu tiempo al maximo",
                    click : false
                },
                {
                    name : "Aprovecha tu tiempo",
                    detail : "Aprovechar tu tiempo te servira para poder tener bien medido tus tiempos",
                    click : false
                }
            ]
        },
        {
            title : "Activity Planner",
            img : "android",
            properties : [
                {
                    name : "Administra tu tiempo",
                    detail : "Podras adminstrar mejor tu tiempo, no se te olvidar cosas",
                    click : false
                },
                {
                    name : "Planifica tus actividades",
                    detail : "El planificar tus actividades aprovecha tu tiempo al maximo",
                    click : false
                }
            ]
        },
    ];
  }
}
 