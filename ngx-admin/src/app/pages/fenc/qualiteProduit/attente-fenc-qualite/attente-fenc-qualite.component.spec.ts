import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteFencQualiteComponent } from './attente-fenc-qualite.component';

describe('AttenteFencQualiteComponent', () => {
  let component: AttenteFencQualiteComponent;
  let fixture: ComponentFixture<AttenteFencQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteFencQualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteFencQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
