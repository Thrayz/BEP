import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFencAdminComponent } from './list-fenc-admin.component';

describe('ListFencAdminComponent', () => {
  let component: ListFencAdminComponent;
  let fixture: ComponentFixture<ListFencAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFencAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFencAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
