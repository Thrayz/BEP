import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSignatureComponent } from './ajout-signature.component';

describe('AjoutSignatureComponent', () => {
  let component: AjoutSignatureComponent;
  let fixture: ComponentFixture<AjoutSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
