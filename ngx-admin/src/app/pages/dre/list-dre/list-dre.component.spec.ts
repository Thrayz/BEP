import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDREComponent } from './list-dre.component';

describe('ListDREComponent', () => {
  let component: ListDREComponent;
  let fixture: ComponentFixture<ListDREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDREComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
