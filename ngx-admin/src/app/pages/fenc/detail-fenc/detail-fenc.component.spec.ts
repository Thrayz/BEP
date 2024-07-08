import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFencComponent } from './detail-fenc.component';

describe('DetailFencComponent', () => {
  let component: DetailFencComponent;
  let fixture: ComponentFixture<DetailFencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
