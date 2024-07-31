import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, CommonModule],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SalwortDevs';
  public showFooter: boolean = true;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.obsevableShowFooter.subscribe(showFooter => {
      this.showFooter = showFooter;
    });
  }
}
