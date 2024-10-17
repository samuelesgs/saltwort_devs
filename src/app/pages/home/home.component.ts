import { Component } from '@angular/core';
import { CarouselActivityPlannerComponent } from './carousel-activity-planner/carousel-activity-planner.component';
import { AppService } from '../../app.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageManager } from '../../utils/localStorageManager';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselActivityPlannerComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private LocalStorageManger = new LocalStorageManager();
  constructor(
    private service: AppService, 
    private translateService : TranslateService) {
      translateService.use(this.LocalStorageManger.getItem('lang'));//Copiar en todas las paginas
      this.service.getChangeLang().subscribe(result => {//Copiar en todas las paginas
        this.translateService.use(result);//Copiar en todas las paginas
      });
    this.service.setRoute(true);
  }
}
