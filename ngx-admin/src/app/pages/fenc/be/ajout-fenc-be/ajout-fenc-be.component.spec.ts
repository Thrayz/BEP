import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFencBeComponent } from './ajout-fenc-be.component';

describe('AjoutFencBeComponent', () => {
  let component: AjoutFencBeComponent;
  let fixture: ComponentFixture<AjoutFencBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFencBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFencBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
