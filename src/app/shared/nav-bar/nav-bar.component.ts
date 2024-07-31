import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule,
    TranslateModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  currentLang : string = "es";

  constructor(private translateService : TranslateService) {
    this.translateService.use('en');
  }

  setLang(lang : string) {
    this.currentLang = lang;
  }
}
