import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmenComponent } from './developmen.component';

describe('DevelopmenComponent', () => {
  let component: DevelopmenComponent;
  let fixture: ComponentFixture<DevelopmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevelopmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
