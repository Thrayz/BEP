import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDreQualiteComponent } from './ajout-dre-qualite.component';

describe('AjoutDreQualiteComponent', () => {
  let component: AjoutDreQualiteComponent;
  let fixture: ComponentFixture<AjoutDreQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDreQualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDreQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
