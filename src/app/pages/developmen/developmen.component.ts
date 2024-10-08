import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../app.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-developmen',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule
  ],
  templateUrl: './developmen.component.html',
  styleUrl: './developmen.component.css'
})
export class DevelopmenComponent {

  toolsSamuel = [
    "android",
    "java",
    "kotlin",
    "angular",
    "html",
    "css-3",
    "typescript",
    "php",
    "nestjs",
    "nodejs",
    "figma",
    "mariadb",
  ];

  
  toolsAksel = [
    "swift",
    "angular",
    "html",
    "css-3",
    "typescript",
    "php",
    "nestjs",
    "nodejs",
    "figma",
    "mariadb",
  ];
  
  toolsLuis = [
    "android",
    "java",
    "kotlin",
    "php",
    "figma",
    "mariadb",
    "c-sharp",
    "managment"
  ];

  constructor(private service: AppService) {
    this.service.setRoute(true);
  }

}
