import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFencAdminComponent } from './ajouter-fenc-admin.component';

describe('AjouterFencAdminComponent', () => {
  let component: AjouterFencAdminComponent;
  let fixture: ComponentFixture<AjouterFencAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFencAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFencAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
