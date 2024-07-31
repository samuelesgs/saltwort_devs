import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Develpments, ProfileData } from '../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-profile-developer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-developer.component.html',
  styleUrl: './profile-developer.component.css'
})
export class ProfileDeveloperComponent implements OnInit {
  public profile!: ProfileData;
  public currentName: string = "";

  constructor(private service: AppService, private route: ActivatedRoute) {
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

  private getFullName() {
    this.profile = new Develpments().informationDev(this.currentName);
  }
}
