import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../app.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageManager } from '../../utils/localStorageManager';

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
  private LocalStorageManger = new LocalStorageManager();

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
    "managment",
    "angular",
    "html"
  ];

  constructor(
    private service: AppService,
    private translateService : TranslateService) {
      translateService.use(this.LocalStorageManger.getItem('lang'));
      this.service.getChangeLang().subscribe(result => {
        this.translateService.use(result);
      });
    this.service.setRoute(true);
  }

}
