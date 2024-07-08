import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteFencNavComponent } from './attente-fenc-nav.component';

describe('AttenteFencNavComponent', () => {
  let component: AttenteFencNavComponent;
  let fixture: ComponentFixture<AttenteFencNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteFencNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteFencNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
