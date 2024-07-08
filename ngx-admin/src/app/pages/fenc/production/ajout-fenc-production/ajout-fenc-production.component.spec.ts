import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFencProductionComponent } from './ajout-fenc-production.component';

describe('AjoutFencProductionComponent', () => {
  let component: AjoutFencProductionComponent;
  let fixture: ComponentFixture<AjoutFencProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFencProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFencProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
