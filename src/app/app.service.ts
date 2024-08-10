import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private subjectShowFooter = new Subject<boolean>();
  private subjectChangeLang = new Subject<string>();
  public obsevableShowFooter = this.subjectShowFooter.asObservable();
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
}
