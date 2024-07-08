import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheFencComponent } from './fiche-fenc.component';

describe('FicheFencComponent', () => {
  let component: FicheFencComponent;
  let fixture: ComponentFixture<FicheFencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheFencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheFencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
