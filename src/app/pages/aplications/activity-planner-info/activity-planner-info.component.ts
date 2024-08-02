import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-activity-planner-info',
  standalone: true,
  imports: [
    RouterModule
  ],
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
