import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-activity-planner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-activity-planner.component.html',
  styleUrl: './carousel-activity-planner.component.css'
})
export class CarouselActivityPlannerComponent {
  itemActive = 0;

  itemSize = 3;

  onClickCarouse(isAfter : boolean) {
    const increment = isAfter ? this.itemActive - 1 : this.itemActive + 1;
    if (increment < 0) {
      this.itemActive = 2;
    } else if (increment > 2) {
      this.itemActive = 0
    } else {
      this.itemActive = increment
    }
  }
}
