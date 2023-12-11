import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorHijoComponent } from './profesor-hijo.component';

describe('ProfesorHijoComponent', () => {
  let component: ProfesorHijoComponent;
  let fixture: ComponentFixture<ProfesorHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorHijoComponent]
    });
    fixture = TestBed.createComponent(ProfesorHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
