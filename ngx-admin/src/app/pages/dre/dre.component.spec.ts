import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DREComponent } from './dre.component';

describe('DREComponent', () => {
  let component: DREComponent;
  let fixture: ComponentFixture<DREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
