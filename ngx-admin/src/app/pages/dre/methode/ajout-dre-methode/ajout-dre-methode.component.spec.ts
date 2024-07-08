import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDreMethodeComponent } from './ajout-dre-methode.component';

describe('AjoutDreMethodeComponent', () => {
  let component: AjoutDreMethodeComponent;
  let fixture: ComponentFixture<AjoutDreMethodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDreMethodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDreMethodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
