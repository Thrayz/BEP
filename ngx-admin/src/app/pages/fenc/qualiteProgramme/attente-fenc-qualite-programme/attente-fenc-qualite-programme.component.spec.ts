import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteFencQualiteProgrammeComponent } from './attente-fenc-qualite-programme.component';

describe('AttenteFencQualiteProgrammeComponent', () => {
  let component: AttenteFencQualiteProgrammeComponent;
  let fixture: ComponentFixture<AttenteFencQualiteProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteFencQualiteProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteFencQualiteProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
