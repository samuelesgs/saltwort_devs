import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarrouselData } from '../../../utils/interface/HomeCarroucel.interfece';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-earrings-app',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './my-earrings-app.component.html',
  styleUrl: './my-earrings-app.component.css'
})
export class MyEarringsAppComponent {

  public data = CarrouselData;

  constructor(
    private translate: TranslateService
  ) { }
}
