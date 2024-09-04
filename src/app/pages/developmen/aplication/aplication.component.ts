import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkWithHref, RouterModule } from '@angular/router';
import { Develpments, ProfileData, Project, typeProject } from '../../../utils/interface/general.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aplication',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './aplication.component.html',
  styleUrl: './aplication.component.css'
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

  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadingData();
  }

  loadingData() {
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.company = this.route.snapshot.paramMap.get('company')!;
    this.project = this.route.snapshot.paramMap.get('project')!;
    this.getFullName();
  }
  
  private getFullName() {
    this.profile = new Develpments().informationDev(this.name);
    const selectCompany = this.profile.companies.find(row => row.name == this.company);
    const selectedProject = selectCompany?.projects.find(row => row.name == this.project);
    //En caso de no encontrar el proyecto redireccionar a seccion de desarrollador o desarrolladores
    console.log()
    if(selectedProject){
      this.selectProject = selectedProject;
    }
  }

  isMovil(): boolean {
    return this.selectProject!.platforms.includes(typeProject['android']) || this.selectProject!.platforms.includes(typeProject['ios']);
  }

  isWeb(): boolean {
    return this.selectProject!.platforms.includes(typeProject['web']);
  }

  isDesktop(): boolean {
    return this.selectProject!.platforms.includes(typeProject['desktop']);
  }

  selectButton(button: string): void {
    this.selectedButton = button;
  }

  onClickCarouse(isAfter : boolean) {
    this.itemSize = this.selectProject!.screens.length;
    const increment = isAfter ? this.itemActive - 1 : this.itemActive + 1;
    this.incrementOrDecrease(increment);
  }

  onClickCarouselMovil(isAfter: boolean){
    this.itemSize = this.selectProject!.screens.length;
    const increment = isAfter ? this.itemActive + 1 : this.itemActive - 1;
    this.incrementOrDecreaseMovil(increment);
  }

  incrementOrDecreaseMovil(increment: number) {
    if (increment < 0) {
      this.itemActive = this.itemSize - 1;
    } else if (increment >= this.itemSize) {
      this.itemActive = 0;
    } else {
      this.itemActive = increment;
    }
  }

  incrementOrDecrease(increment : number) {
    if (this.itemSize < 0) {
      this.itemActive = this.itemSize - 1;
    } else if (increment >= this.itemSize) {
      this.itemActive = 0
    } else {
      this.itemActive = increment
    }
  }

  getScreen(){
    return this.selectProject!.screens[this.itemActive];
  }

  getAllScreens(){
    return this.selectProject!.screens;
  }
}
