import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteDreBeComponent } from './attente-dre-be.component';

describe('AttenteDreBeComponent', () => {
  let component: AttenteDreBeComponent;
  let fixture: ComponentFixture<AttenteDreBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteDreBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteDreBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
