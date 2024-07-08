import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFencMethodeComponent } from './ajout-fenc-methode.component';

describe('AjoutFencMethodeComponent', () => {
  let component: AjoutFencMethodeComponent;
  let fixture: ComponentFixture<AjoutFencMethodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFencMethodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFencMethodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
