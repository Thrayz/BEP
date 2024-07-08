import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasAjoutComponent } from './cas-ajout.component';

describe('CasAjoutComponent', () => {
  let component: CasAjoutComponent;
  let fixture: ComponentFixture<CasAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
