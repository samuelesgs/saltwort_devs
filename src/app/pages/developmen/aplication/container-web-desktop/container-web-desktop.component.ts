import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileData, Project, Screen, typeProject } from '../../../../utils/interface/general.interface';
import { AppService } from '../../../../app.service';
import { TranslateModule } from '@ngx-translate/core';
import { Develoments } from '../../../../utils/interface/develoments';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-container-web-desktop',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './container-web-desktop.component.html',
  styleUrl: './container-web-desktop.component.css'
})
export class ContainerWebDesktopComponent {

  public profile!: ProfileData;
  public selectProject!: Project | null;
  public selectedButton: string | null = null;
  public selectedImage: string | null = null;

  name = "";
  company = "";
  project = "";

  itemActive = 0;
  itemSize = 0;

  filteredScreens: Screen[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
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
    this.filteredScreens = this.selectProject?.screens.filter(screen =>
      screen.typeProject.includes(typeProject.desktop) || screen.typeProject.includes(typeProject.web)
    ) ?? [];
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
    this.profile = new Develoments().informationDev(this.name);
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

  onClickCarouse(isAfter: boolean) {
    this.itemSize = this.selectProject!.screens.filter(screen =>
      screen.typeProject.includes(typeProject.desktop) || screen.typeProject.includes(typeProject.web)
    ).length;
    const increment = isAfter ? this.itemActive - 1 : this.itemActive + 1;
    this.incrementOrDecrease(increment);
  }

  incrementOrDecrease(increment: number) {
    if (this.itemSize < 0) {
      this.itemActive = this.itemSize - 1;
    } else if (increment >= this.itemSize) {
      this.itemActive = 0
    } else {
      this.itemActive = increment
    }
  }

  getScreen() {
    const screens = this.selectProject!.screens.filter(screen =>
      screen.typeProject.includes(typeProject.desktop) || screen.typeProject.includes(typeProject.web));
    const screen = screens[this.itemActive]; // Usar `itemActive` para obtener la pantalla activa
    console.log("This is the screen: ", screen);
    return screen
  }

  openImageModal(imageUrl: string) {
    console.log("openImageModal",imageUrl);
    
    this.selectedImage = imageUrl;

    // Usar Bootstrap JS para abrir el modal manualmente
    const modalElement = document.getElementById('imageModal2');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
