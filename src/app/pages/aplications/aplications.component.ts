import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Property, SaltwortApplication } from '../../utils/interface/applications.interface';
import { ModelSaltwortApplication } from '../../utils/models/SalwortApplication.model';
import { AppService } from '../../app.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-aplications',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aplications.component.html',
  styleUrl: './aplications.component.css'
})
export class AplicationsComponent {
  public application: SaltwortApplication[];

  constructor(private service: AppService) {
    this.service.setRoute(true);
    this.application = new ModelSaltwortApplication().getApplications();
  }

  setClickProperty(item: SaltwortApplication, property : Property) {
    item.propertySelected = property;
    item.propertySelected.click = !property.click;
  }

  cleanProperty(item: SaltwortApplication) {
    item.propertySelected = null;
  }
}
