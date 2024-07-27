import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Property, SaltwortApplication } from '../../utils/interface/applications.interface';
import { ModelSaltwortApplication } from '../../utils/models/SalwortApplication.model';

@Component({
  selector: 'app-aplications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aplications.component.html',
  styleUrl: './aplications.component.css'
})
export class AplicationsComponent {
  public application: SaltwortApplication[];


  constructor() {
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
