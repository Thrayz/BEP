import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteFencProductionComponent } from './attente-fenc-production.component';

describe('AttenteFencProductionComponent', () => {
  let component: AttenteFencProductionComponent;
  let fixture: ComponentFixture<AttenteFencProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteFencProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteFencProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
