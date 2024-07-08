import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFencAdminComponent } from './update-fenc-admin.component';

describe('UpdateFencAdminComponent', () => {
  let component: UpdateFencAdminComponent;
  let fixture: ComponentFixture<UpdateFencAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFencAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFencAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
