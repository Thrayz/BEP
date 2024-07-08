import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FENCComponent } from './fenc.component';

describe('FENCComponent', () => {
  let component: FENCComponent;
  let fixture: ComponentFixture<FENCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FENCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FENCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
