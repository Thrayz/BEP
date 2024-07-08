import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDreBeComponent } from './ajout-dre-be.component';

describe('AjoutDreBeComponent', () => {
  let component: AjoutDreBeComponent;
  let fixture: ComponentFixture<AjoutDreBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDreBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDreBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
