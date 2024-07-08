import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFencComponent } from './ajouter-fenc.component';

describe('AjouterFencComponent', () => {
  let component: AjouterFencComponent;
  let fixture: ComponentFixture<AjouterFencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
