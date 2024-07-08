import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFencAdminComponent } from './detail-fenc-admin.component';

describe('DetailFencAdminComponent', () => {
  let component: DetailFencAdminComponent;
  let fixture: ComponentFixture<DetailFencAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFencAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFencAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
