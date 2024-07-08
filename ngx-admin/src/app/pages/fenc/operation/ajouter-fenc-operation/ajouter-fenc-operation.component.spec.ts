import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFencOperationComponent } from './ajouter-fenc-operation.component';

describe('AjouterFencOperationComponent', () => {
  let component: AjouterFencOperationComponent;
  let fixture: ComponentFixture<AjouterFencOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFencOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFencOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
