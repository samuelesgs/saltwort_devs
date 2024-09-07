import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Develpments, ProfileData, Project, typeProject } from '../../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container-application',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './container-application.component.html',
  styleUrl: './container-application.component.css'
})
export class ContainerApplicationComponent {
  public profile!: ProfileData;
  public selectProject!: Project | null;
  public selectedButton: string | null = null;

  name = "";
  company = "";
  project = "";

  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadingData();
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
    console.log()
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
  }

}
