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
                    name : "apps-features.properties.name-1-activityp",
                    detail : "apps-features.properties.detail-1-activityp",
                    click : false
                },
                {
                    name : "apps-features.properties.name-2-activityp",
                    detail : "apps-features.properties.detail-2-activityp",
                    click : false
                },
                {
                    name : "apps-features.properties.name-3-activityp",
                    detail : "apps-features.properties.detail-3-activityp",
                    click : false
                }
            ],
            propertySelected : null,
            routeToNavigate :  "/ActivityPlanner",
            isExpanded : false
        },
        {
            title : "Cooking Home",
            img : "android",
            properties : [
                {
                    name : "apps-features.properties.name-1-cooking",
                    detail : "apps-features.properties.detail-1-cooking",
                    click : false
                },
                {
                    name : "apps-features.properties.name-2-cooking",
                    detail : "apps-features.properties.detail-2-cooking",
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
 