import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Company, Develpments, ProfileData, Project } from '../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../app.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-developer',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule
  ],
  templateUrl: './profile-developer.component.html',
  styleUrl: './profile-developer.component.css'
})
export class ProfileDeveloperComponent implements OnInit {
  public profile!: ProfileData;
  public currentName: string = "";

  constructor(private service: AppService, private route: ActivatedRoute, private router: Router) {
    this.service.setRoute(false);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentName = params.get('name') ?? "";
      if(this.currentName) {
        this.getFullName();
      } else {
        window.location.href = '/Developers'
      }
    });
  }

  redirectToPage(selectProject : Project, company: Company) {
    this.router.navigate(['/Application', this.currentName, company.name, selectProject.name]);
    
  }

  private getFullName() {
    
    this.profile = new Develpments().informationDev(this.currentName);
  }
}
