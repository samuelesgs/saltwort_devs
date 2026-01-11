import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProfileData, Project } from './utils/interface/general.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private subjectShowFooter = new Subject<boolean>();
  private subjectChangeLang = new Subject<string>();
  public obsevableShowFooter = this.subjectShowFooter.asObservable();
  public button = new Subject<string | null>
  //public observableChangeLnag = this.subjectChangeLang.asObservable();
  
  constructor() { }

  public setRoute(showFooter: boolean) {
    this.subjectShowFooter.next(showFooter);
  }
  
  public setChangeLang(lang : string){
    this.subjectChangeLang.next(lang);
  }

  public getChangeLang() {
    return this.subjectChangeLang.asObservable();
  }

  private profileSource = new BehaviorSubject<ProfileData | null>(null);
  profile$ = this.profileSource.asObservable();

  private projectSource = new BehaviorSubject<Project | null>(null);
  project$ = this.projectSource.asObservable();

  private buttonSource = new BehaviorSubject<string | null>(null);
  button$ = this.buttonSource.asObservable();

  setProfile(profile: ProfileData) {
    this.profileSource.next(profile);
  }

  setProject(project: Project) {
    this.projectSource.next(project);
  }

  setButton(button: string){
    this.buttonSource.next(button);
  }

  getButton() {
    return this.button.asObservable();
  }


}
