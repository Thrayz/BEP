import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFencComponent } from './list-fenc.component';

describe('ListFencComponent', () => {
  let component: ListFencComponent;
  let fixture: ComponentFixture<ListFencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
