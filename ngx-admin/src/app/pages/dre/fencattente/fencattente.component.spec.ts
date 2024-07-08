import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FENCAttenteComponent } from './fencattente.component';

describe('FENCAttenteComponent', () => {
  let component: FENCAttenteComponent;
  let fixture: ComponentFixture<FENCAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FENCAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FENCAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
