import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Company, ProfileData, Project } from '../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../app.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageManager } from '../../../utils/localStorageManager';
import { Develoments } from '../../../utils/interface/develoments';

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
  private LocalStorageManger = new LocalStorageManager();

  constructor(private service: AppService, 
    private route: ActivatedRoute, 
    private router: Router,
    private translateService : TranslateService) {
      translateService.use(this.LocalStorageManger.getItem('lang'));
      this.service.getChangeLang().subscribe(result => {
        this.translateService.use(result);
      });
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
    
    this.profile = new Develoments().informationDev(this.currentName);
  }
}
