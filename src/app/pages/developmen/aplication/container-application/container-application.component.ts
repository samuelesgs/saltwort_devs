import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Develpments, ProfileData, Project, typeProject } from '../../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../../app.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-container-application',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule
  ],
  templateUrl: './container-application.component.html',
  styleUrls:['./container-application.component.css']
})
export class ContainerApplicationComponent implements OnInit {

  public profile!: ProfileData;
  public selectProject: Project | null = null;
  public selectedButton: string | null = null;
  public numberButtonSelected : number = 0;

  name = "";
  company = "";
  project = "";

  constructor( private route : ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    const title = document.getElementById('name-developer')!
    setTimeout(() => {
      
      title.scrollIntoView({behavior: 'smooth', block: 'center'})
    }, 100);
    this.loadingData();
    this.appService.profile$.subscribe(profile => {
      this.profile = profile!;
    });

    this.appService.project$.subscribe(project => {
      this.selectProject = project;
      this.selectedPlatform();
    });
  }

  loadingData() {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.company = this.route.snapshot.paramMap.get('company')!;
    this.project = this.route.snapshot.paramMap.get('project')!;
    
    this.getFullName();
  }
  
  private getFullName() {
    this.profile = new Develpments().informationDev(this.name);
    const selectCompany = this.profile.companies.find(row => row.name == this.company);
    const selectedProject = selectCompany?.projects.find(row => row.name == this.project);

    console.log(this.profile, selectCompany, selectedProject)

    if(selectedProject){
      this.selectProject = selectedProject;
    }
  }

  isMovil(): boolean {
    return this.selectProject!.platforms.some(row => row.typeProject == typeProject.movil);
  }

  isWeb(): boolean {
    return  this.selectProject!.platforms.some(row => row.typeProject == typeProject.web);
  }

  isDesktop(): boolean {
    return  this.selectProject!.platforms.some(row => row.typeProject == typeProject.desktop);
  }

  selectedPlatform(key? : string): void {
    let platform = '';
    if (this.selectProject) {
      if (!key) {
        if (this.isMovil()) {
          platform = 'movil';
          this.numberButtonSelected = 0;
        } else if (this.isWeb()) {
          platform = 'web';
          this.numberButtonSelected = 1;
        } else if (this.isDesktop()) {
          platform = 'desktop';
          this.numberButtonSelected = 2;
        }
      } else {
        platform = key
      }
      this.selectedButton = platform;
      this.appService.setButton(platform);
    }
  }

  getTypeProject() {    
    switch (this.selectedButton) {
      case 'movil' :
        return typeProject.movil;
      case 'web' : 
        return typeProject.web;
      default :
        return typeProject.desktop;
    }
  }

  getAchievemnts() {
    const platform = this.selectProject!.platforms.find(row => row.typeProject == this.getTypeProject());
    if (platform) {
      console.log(platform.achievements);
      return platform.achievements;
    }
    return [];
  }
  


  getNumberArrayRelevance(relevance : number) {
    const array = [];
    for (let index = 0; index < relevance; index++) {
      array.push(index);
    }
    return array
  }

  strRelevance( relevance : number) {
    switch (relevance) {
      case 1:
        return 'Muy baja '
      case 2: 
        return 'Baja'
      case 3: 
        return 'Media'
      case 4: 
        return 'Alta'
      case 5: 
        return 'Muy Alta'
      default:
       return 'Muy baja'
    }
  }

}
