import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoHijoComponent } from './alumno-hijo.component';

describe('AlumnoHijoComponent', () => {
  let component: AlumnoHijoComponent;
  let fixture: ComponentFixture<AlumnoHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoHijoComponent]
    });
    fixture = TestBed.createComponent(AlumnoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
