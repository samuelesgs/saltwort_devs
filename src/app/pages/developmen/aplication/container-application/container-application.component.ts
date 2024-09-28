import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Develpments, ProfileData, Project, typeProject } from '../../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-container-application',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './container-application.component.html',
  styleUrls:['./container-application.component.css']
})
export class ContainerApplicationComponent {

  public profile!: ProfileData;
  public selectProject: Project | null = null;
  public selectedButton: string | null = null;

  name = "";
  company = "";
  project = "";

  constructor( private route : ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.loadingData();
    this.appService.button$.subscribe(button => {
      this.selectedButton = button; 
    });

    this.appService.profile$.subscribe(profile => {
      this.profile = profile!;
    });

    this.appService.project$.subscribe(project => {
      this.selectProject = project;
      this.selectDefaultButton();
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
    return this.selectProject!.platforms.includes(typeProject['android']) || this.selectProject!.platforms.includes(typeProject['ios']);
  }

  isWeb(): boolean {
    return this.selectProject!.platforms.includes(typeProject['web']);
  }

  isDesktop(): boolean {
    return this.selectProject!.platforms.includes(typeProject['desktop']);
  }

  selectButton(button: string): void {
    this.selectedButton = button;
    this.appService.setButton(button);
  }
  selectDefaultButton(): void {
    if (this.selectProject) {
      if (this.isMovil()) {
        this.selectButton('movil');
      } else if (this.isWeb()) {
        this.selectButton('web');
      } else if (this.isDesktop()) {
        this.selectButton('desktop');
      }
    }
  }

}
