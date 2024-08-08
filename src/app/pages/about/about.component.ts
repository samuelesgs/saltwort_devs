import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public currentContainer = "";
  public showAnySection = false;
  

  constructor(private service: AppService) {
    this.service.setRoute(true);
  }

  public showContainer(event: Event, current: string) {
    if(this.currentContainer != current) {
      this.currentContainer = current;
      this.showAnySection = true;
    } else {
      this.currentContainer = '';
      this.showAnySection = false;
    }
    /*const container = event.target as HTMLElement;
    const containerBtn = document.getElementById('container-btn')!;
    if(current == 'vission' || current == 'objectives') {
      container.remove();
      containerBtn.prepend(container);
    }
    container.classList.add("box-mission");
    setTimeout(() => {
        container.classList.add('current-box')
    }, 450);
    this.currentContainer = current; */
  }
}
