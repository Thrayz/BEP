import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteDreQualiteComponent } from './attente-dre-qualite.component';

describe('AttenteDreQualiteComponent', () => {
  let component: AttenteDreQualiteComponent;
  let fixture: ComponentFixture<AttenteDreQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteDreQualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteDreQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
