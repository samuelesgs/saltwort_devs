import { Component } from '@angular/core';
import { CarouselActivityPlannerComponent } from './carousel-activity-planner/carousel-activity-planner.component';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselActivityPlannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service: AppService) {
    this.service.setRoute(true);
  }
}
