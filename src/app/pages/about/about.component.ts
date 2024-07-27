import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  private previusContainer: HTMLElement | null = null;


  public showContainer(event: Event, current: string) {
    const container = event.target as HTMLElement;
    const containerBtn = document.getElementById('container-btn')!;
    if(current == 'vission' || current == 'objectives') {
      container.remove();
      containerBtn.prepend(container);
    }
    container.classList.add("box-mission");
    setTimeout(() => {
        container.classList.add('current-box')
    }, 450);
    this.currentContainer = current;
  }
}
