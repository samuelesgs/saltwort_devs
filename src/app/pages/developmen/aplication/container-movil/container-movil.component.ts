import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Develpments, ProfileData, Project, typeProject } from '../../../../utils/interface/general.interface';
import { AppService } from '../../../../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-container-movil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './container-movil.component.html',
  styleUrl: './container-movil.component.css'
})
export class ContainerMovilComponent {

  public profile!: ProfileData;
  public selectProject!: Project | null;
  public selectedButton: string | null = null;
  currentIndex: number = 0;
  visibleImagesCount: number = 6;  // Cantidad de imágenes visibles
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

/*  onClickCarouselMovil(isAfter: boolean){
    this.itemSize = this.selectProject!.screens.length;
    const increment = isAfter ? this.itemActive + 1 : this.itemActive - 1;
    this.incrementOrDecreaseMovil(increment);
  }*/

  incrementOrDecreaseMovil(increment: number) {
    if (increment < 0) {
      this.itemActive = this.itemSize - 1;
    } else if (increment >= this.itemSize) {
      this.itemActive = 0;
    } else {
      this.itemActive = increment;
    }
  }

  // Función para cambiar el índice del carrusel
  onClickCarouselMovil(isPrev: boolean) {
    const carousel = document.querySelector('.carousel-images')!;
    const scrollAmount = carousel.clientWidth / 2;
  
    if (isPrev) {
      carousel.scrollLeft -= scrollAmount;
    } else {
      carousel.scrollLeft += scrollAmount;
    }
  }

  getVisibleScreens() {
    return this.selectProject!.screens.slice(this.currentIndex, this.currentIndex + this.visibleImagesCount);
  }

  getMobileScreens() {
    return this.selectProject?.screens.filter(screen =>
      screen.typeProject.includes(typeProject.android) || screen.typeProject.includes(typeProject.ios)
    );
  }
  
  
  
}
