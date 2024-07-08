import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFencOperationComponent } from './detail-fenc-operation.component';

describe('DetailFencOperationComponent', () => {
  let component: DetailFencOperationComponent;
  let fixture: ComponentFixture<DetailFencOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFencOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFencOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
