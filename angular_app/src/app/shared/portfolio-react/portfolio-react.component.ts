import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-react',
  standalone: true,
  imports: [],
  template: `
    <iframe 
      [src]="iframeSrc"
      style="width:100%; height:100vh; border:none;"
      title="Portfolio React">
    </iframe>
  `
})
export class PortfolioReactComponent implements OnInit {
  iframeSrc!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  
ngOnInit() {
  const path = this.route.snapshot.url.map(s => s.path).join('/');
  const idManual = this.route.snapshot.queryParams['id_manual'];

  let url = '/assets/react/build/';

  if (path.includes('aksel')) {
    url = '/assets/react/build/developer-aksel';
  } else if (path.includes('samuel')) {
    url = '/assets/react/build/developer-samuel';
  } else if (path.includes('manuals')) {
    url = idManual 
      ? `/assets/react/build/manuals?id_manual=${idManual}`
      : '/assets/react/build/manuals';
  }

  this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
}
}