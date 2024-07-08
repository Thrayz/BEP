import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFencNavComponent } from './ajout-fenc-nav.component';

describe('AjoutFencNavComponent', () => {
  let component: AjoutFencNavComponent;
  let fixture: ComponentFixture<AjoutFencNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFencNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFencNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
