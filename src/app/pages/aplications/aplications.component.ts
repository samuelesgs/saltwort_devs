import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Property, SaltwortApplication } from '../../utils/interface/applications.interface';
import { ModelSaltwortApplication } from '../../utils/models/SalwortApplication.model';
import { AppService } from '../../app.service';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalStorageManager } from '../../utils/localStorageManager';

@Component({
  selector: 'app-aplications',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  templateUrl: './aplications.component.html',
  styleUrl: './aplications.component.css'
})
export class AplicationsComponent {
  public application: SaltwortApplication[];
  //Copiar esto en todas las paginas
  private LocalStorageManger = new LocalStorageManager();
  

  constructor(
    private service: AppService, //Copiar en todas las paginas
    private translateService : TranslateService, //Copiar en todas las paginas
  ) {
    this.service.setRoute(true);
    translateService.use(this.LocalStorageManger.getItem('lang'));//Copiar en todas las paginas
    this.service.getChangeLang().subscribe(result => {//Copiar en todas las paginas
      this.translateService.use(result);//Copiar en todas las paginas
    });//Copiar en todas las paginas
    this.application = new ModelSaltwortApplication().getApplications();
  }

  toggleExpand(item: SaltwortApplication) {
    item.isExpanded = !item.isExpanded;
  }

  setClickProperty(item: SaltwortApplication, property: Property) {
    item.propertySelected = property;
    item.propertySelected.click = !property.click;
  }

  cleanProperty(item: SaltwortApplication) {
    item.propertySelected = null;
  }
}
