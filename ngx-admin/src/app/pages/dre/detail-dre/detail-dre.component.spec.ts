import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDreComponent } from './detail-dre.component';

describe('DetailDreComponent', () => {
  let component: DetailDreComponent;
  let fixture: ComponentFixture<DetailDreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
