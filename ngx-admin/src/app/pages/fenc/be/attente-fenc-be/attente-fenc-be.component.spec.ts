import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteFencBeComponent } from './attente-fenc-be.component';

describe('AttenteFencBeComponent', () => {
  let component: AttenteFencBeComponent;
  let fixture: ComponentFixture<AttenteFencBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteFencBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteFencBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
