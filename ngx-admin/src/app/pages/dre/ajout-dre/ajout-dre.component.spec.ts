import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDREComponent } from './ajout-dre.component';

describe('AjoutDREComponent', () => {
  let component: AjoutDREComponent;
  let fixture: ComponentFixture<AjoutDREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
