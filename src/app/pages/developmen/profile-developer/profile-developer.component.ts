import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileData } from '../../../utils/interface/general.interface';

@Component({
  selector: 'app-profile-developer',
  standalone: true,
  imports: [],
  templateUrl: './profile-developer.component.html',
  styleUrl: './profile-developer.component.css'
})
export class ProfileDeveloperComponent implements OnInit {
  public profile!: ProfileData;
  public currentName: string = "";
  constructor(private route: ActivatedRoute) { }

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
    switch (this.currentName.toLocaleLowerCase()) {
      case 'samuel':
        this.profile = {
          fullName:  'Edgar Samuel Guerrero Sandoval',
          imgName: 'profile-samuel.png',
          email: 'samuelesgs04@gmail.com',
          urlLinkedin: '',
          title: 'Sr. Developer'
        }
        break;
      case 'luis':
        this.profile = {
          fullName:  'Luis Paulo Calderon Nava',
          imgName: 'profile-pavi.png',
          email: 'paulocalderon14@gmail.com',
          urlLinkedin: '',
          title: 'Jr. Developer'
        }
        break;
      case 'aksel':
        this.profile = {
          fullName:  'Aksel Akemi Herrera Gonzalez',
          imgName: 'profile-pavi.png',
          email: 'akselherrera18@gmail.com',
          urlLinkedin: '',
          title: 'Jr. Developer'
        }
        break;
      
    }
  }
}
