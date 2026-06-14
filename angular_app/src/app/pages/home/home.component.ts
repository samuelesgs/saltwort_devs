import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../app.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageManager } from '../../utils/localStorageManager';
import { MyEarringsAppComponent } from "./my-earrings-app/my-earrings-app.component";

@Component({
    selector: 'app-home',
    imports: [
        RouterModule,
        TranslateModule,
        MyEarringsAppComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  private LocalStorageManger = new LocalStorageManager();
  constructor(
    private service: AppService,
    private translateService: TranslateService) {
      translateService.use(this.LocalStorageManger.getItem('lang'));
      this.service.getChangeLang().subscribe(result => {
        this.translateService.use(result);
      });
    this.service.setRoute(true);
  }
}
