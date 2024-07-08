import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFencQualiteComponent } from './ajout-fenc-qualite.component';

describe('AjoutFencQualiteComponent', () => {
  let component: AjoutFencQualiteComponent;
  let fixture: ComponentFixture<AjoutFencQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFencQualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFencQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
