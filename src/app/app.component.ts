import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { LocalStorageManager } from './utils/localStorageManager';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SalwortDevs';
  public showFooter: boolean = true;
  LocalStorageManager = new LocalStorageManager();

  constructor(private service: AppService) {
    if(!this.LocalStorageManager.getItem("lang")) {
      this.LocalStorageManager.setItem('lang', 'es')
    }
  }

  ngOnInit(): void {
    this.service.obsevableShowFooter.subscribe(showFooter => {
      this.showFooter = showFooter;
    });
  }
}
