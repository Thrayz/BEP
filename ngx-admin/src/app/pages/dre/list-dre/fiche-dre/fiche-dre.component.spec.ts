import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDreComponent } from './fiche-dre.component';

describe('FicheDreComponent', () => {
  let component: FicheDreComponent;
  let fixture: ComponentFixture<FicheDreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
