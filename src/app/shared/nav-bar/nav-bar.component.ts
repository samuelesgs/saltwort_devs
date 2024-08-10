import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageManager } from '../../utils/localStorageManager';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  currentLang : string = "es";
  LocalStorageManager = new LocalStorageManager();

  constructor(private translateService : TranslateService, private appService : AppService) {
    this.translateService.use(this.LocalStorageManager.getItem("lang"));
  }

  setLang(lang : string) {
    this.LocalStorageManager.setItem("lang" , lang);
    this.currentLang = lang;
    this.appService.setChangeLang(lang);
  }
}
