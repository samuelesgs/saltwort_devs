import { Component } from '@angular/core';
import { CarouselActivityPlannerComponent } from './carousel-activity-planner/carousel-activity-planner.component';
import { AppService } from '../../app.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselActivityPlannerComponent, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: AppService, private translateService : TranslateService) {
    this.translateService.use('en');
    this.service.setRoute(true);
  }
}
