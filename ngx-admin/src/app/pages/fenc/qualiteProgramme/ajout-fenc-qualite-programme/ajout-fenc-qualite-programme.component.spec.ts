import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFencQualiteProgrammeComponent } from './ajout-fenc-qualite-programme.component';

describe('AjoutFencQualiteProgrammeComponent', () => {
  let component: AjoutFencQualiteProgrammeComponent;
  let fixture: ComponentFixture<AjoutFencQualiteProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFencQualiteProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFencQualiteProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
