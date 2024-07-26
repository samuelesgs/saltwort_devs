import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Property, SaltwortApplication } from '../../utils/interface/applications.interface';

@Component({
  selector: 'app-aplications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aplications.component.html',
  styleUrl: './aplications.component.css'
})
export class AplicationsComponent {
  public application!: SaltwortApplication[];
  propertySelected?: Property;


}
