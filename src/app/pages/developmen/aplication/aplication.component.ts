import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { Develpments, ProfileData, Project, typeProject } from '../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';
import { ContainerApplicationComponent } from './container-application/container-application.component';
import { ContainerMovilComponent } from './container-movil/container-movil.component';
import { ContainerWebDesktopComponent } from './container-web-desktop/container-web-desktop.component';
import { AppService } from '../../../app.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContainerApplicationComponent,
    ContainerMovilComponent,
    ContainerWebDesktopComponent
  ],
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.css']
})
export class AplicationComponent {

  public profile!: ProfileData;
  public selectProject!: Project | null;
  public selectedButton: string | null = null;

  name = "";
  company = "";
  project = "";

  itemActive = 0;
  itemSize = 0;

  private subscriptions: Subscription = new Subscription();

  constructor( 
    private route : ActivatedRoute, 
    private service: AppService, 
    private router: Router) { }

  ngOnInit(): void {
    this.loadingData();
     // Subscribirse al perfil y proyecto del servicio
     this.subscriptions.add(
      this.service.profile$.subscribe(profile => {
        if (profile) {
          this.profile = profile;
        }
      })
    );

    this.subscriptions.add(
      this.service.project$.subscribe(project => {
        if (project) {
          this.selectProject = project;
          this.itemSize = this.selectProject.screens.length;
        }
      })
    );

    this.subscriptions.add(
      this.service.button$.subscribe(button => {
        this.selectedButton = button;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadingData() {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.company = this.route.snapshot.paramMap.get('company')!;
    this.project = this.route.snapshot.paramMap.get('project')!;
    this.getFullName();
  }
  
  private getFullName(): void {
    this.profile = new Develpments().informationDev(this.name);
    const selectCompany = this.profile.companies.find(row => row.name == this.company);
    const selectedProject = selectCompany?.projects.find(row => row.name == this.project);

    if (!selectedProject) {
      console.error('Proyecto no encontrado, redireccionando...');
      this.router.navigate(['/desarrolladores']); // Redirige a la ruta deseada
      return;
    }

    this.selectProject = selectedProject;
    this.itemSize = this.selectProject.screens.length;

    this.service.setProfile(this.profile);
    this.service.setProject(this.selectProject);
  }
}
