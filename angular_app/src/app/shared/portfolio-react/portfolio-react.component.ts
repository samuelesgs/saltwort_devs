import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio-react',
  imports: [],
   template: `
    <iframe 
      src="/assets/react/build/index.html"
      style="width:100%; height:100vh; border:none;">
    </iframe>
  `,
  styleUrl: './portfolio-react.component.css',
})
export class PortfolioReactComponent {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    fetch('/assets/react/build/index.html')
      .then(res => res.text())
      .then(html => {
        this.el.nativeElement.innerHTML = html;
      });
  }
}
