import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private subjectShowFooter = new Subject<boolean>();
  public obsevableShowFooter = this.subjectShowFooter.asObservable();
  
  constructor() { }

  public setRoute(showFooter: boolean) {
    this.subjectShowFooter.next(showFooter);
  }
}
