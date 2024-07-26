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
  propertySelected: Property | null = null;


  constructor() {
    this.application = new ModelSaltwortApplication().getApplications();
  }

  setClickProperty(property : Property) {
    this.propertySelected = property;
    this.propertySelected.click = !property.click;
  }

  cleanProperty() {
    this.propertySelected = null;
  }

}
