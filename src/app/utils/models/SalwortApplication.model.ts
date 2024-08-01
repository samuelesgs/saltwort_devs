import { SaltwortApplication } from "../interface/applications.interface";

export class ModelSaltwortApplication {

  private apps : SaltwortApplication[] = [];  
  constructor() {
    this.apps = this.initialApplication(); 
  }

  getApplications() {
    return [...this.apps];
  }

  private initialApplication() : SaltwortApplication [] {
    return [
        {
            title : "Activity Planner",
            img : "angular",
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
            ],
            propertySelected : null,
            routeToNavigate :  "ActivityPlanner",
            isExpanded : false
        },
        {
            title : "Cooking Home",
            img : "android",
            properties : [
                {
                    name : "Muchos tipos de comida ",
                    detail : "En esta aplicacion vas a poder descubrir una cantidad inimaginable de recetas que te encantaran",
                    click : false
                },
                {
                    name : "Socializa mediante recetas",
                    detail : "Vas a poder dejar retroalimentacion a las recetas, de esa manera haciendole saber a todos la calidad de la receta",
                    click : false
                }
            ],
            propertySelected: null,
            routeToNavigate: "",
            isExpanded : false
        },
    ];
  }
}
 