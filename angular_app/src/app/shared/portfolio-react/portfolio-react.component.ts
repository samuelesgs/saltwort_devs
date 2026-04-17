import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-react',
  standalone: true,
  imports: [],
  template: `
    <iframe 
      src="/assets/react/build/index.html"
      style="width:100%; height:100vh; border:none;"
      title="Portfolio React">
    </iframe>
  `
})
export class PortfolioReactComponent {}