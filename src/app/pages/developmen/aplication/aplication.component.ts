import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Develpments, ProfileData } from '../../../utils/interface/general.interface';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css'
})
export class AplicationComponent {

  name = "";
  company = "";
  project = "";
  public profile!: ProfileData;

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
    const selectProject = selectCompany?.projects.find(row => row.name == this.project);
    console.log(this.profile);
    console.log(selectCompany);
    console.log(selectProject);
    
  }
}
