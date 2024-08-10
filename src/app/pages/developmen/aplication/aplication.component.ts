import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref, RouterModule } from '@angular/router';
import { Develpments, ProfileData, Project, typeProject } from '../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css'
})
export class AplicationComponent {

  name = "";
  company = "";
  project = "";
  public profile!: ProfileData;
  public selectProject!: Project | null;
  constructor( private route : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.company = this.route.snapshot.paramMap.get('company')!;
    this.project = this.route.snapshot.paramMap.get('project')!;
    this.getFullName();    
  }
  
  private getFullName() {
    this.profile = new Develpments().informationDev(this.name);
    const selectCompany = this.profile.companies.find(row => row.name == this.company);
    const selectedProject = selectCompany?.projects.find(row => row.name == this.project);
    if(selectedProject){
      this.selectProject = selectedProject;
    }
    console.log(this.profile);
    console.log(selectCompany);
    console.log(this.selectProject);
  }


  isMovil(): boolean {
    if(this.selectProject?.platforms.includes(typeProject['android']) || this.selectProject?.platforms.includes(typeProject['ios'])){
      return true
    } else {
      return false
    }
  }

  isWeb(): boolean {
    if(this.selectProject?.platforms.includes(typeProject['web'])){
      return true
    } else {
      return false
    }
  }

  isDesktop(): boolean {
    if(this.selectProject?.platforms.includes(typeProject['desktop'])){
      return true
    } else {
      return false
    }
  }


}
