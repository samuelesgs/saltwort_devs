import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-activity-planner-info',
  standalone: true,
  imports: [],
  templateUrl: './activity-planner-info.component.html',
  styleUrl: './activity-planner-info.component.css'
})
export class ActivityPlannerInfoComponent implements OnInit {

  constructor(private service: AppService) {
    this.service.setRoute(false);
  }

  ngOnInit(): void {
  
  }
}
