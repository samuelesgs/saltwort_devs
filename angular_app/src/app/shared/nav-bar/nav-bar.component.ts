import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageManager } from '../../utils/localStorageManager';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  currentLang: string = "es";
  LocalStorageManager = new LocalStorageManager();
  isOpen = false;

  constructor(private translateService: TranslateService, private appService: AppService) {
    this.translateService.use(this.LocalStorageManager.getItem("lang"));
  }


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLang(lang: string) {
    this.setLang(lang); // ya existente
    this.isOpen = false;
  }

  setLang(lang: string) {
    this.LocalStorageManager.setItem("lang", lang);
    this.currentLang = lang;
    this.appService.setChangeLang(lang);
  }
}
