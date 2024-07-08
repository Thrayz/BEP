import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFencOperationComponent } from './list-fenc-operation.component';

describe('ListFencOperationComponent', () => {
  let component: ListFencOperationComponent;
  let fixture: ComponentFixture<ListFencOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFencOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFencOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
