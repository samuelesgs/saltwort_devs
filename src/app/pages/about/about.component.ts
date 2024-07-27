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
    const containerInfo = document.getElementById('container-info')!;
    const rect = container.getBoundingClientRect();
    const rectInfo = containerInfo.getBoundingClientRect();
    container.style.backgroundColor = '#252525';
    if(this.previusContainer) {
      const containerBtn = document.getElementById('container-btn')!;
      this.previusContainer.style.backgroundColor = 'transparent';
      containerBtn.appendChild(this.previusContainer)
      container.removeChild(this.previusContainer);
    }
    this.previusContainer = container;
    containerInfo.appendChild(container);
    containerInfo.animate([
      {
        transform: `translate(${rect.left - rectInfo.left}px, ${rect.top - rectInfo.top}px)`,
        width: `${0}%}`
      },
      {
        transform: 'translate(0px, 0px)',
        width: '100%'
      }
    ], {
      duration: 500,
      easing: 'ease-in-out'
    })
    this.currentContainer = current;
  }
}
