import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteFencMethodeComponent } from './attente-fenc-methode.component';

describe('AttenteFencMethodeComponent', () => {
  let component: AttenteFencMethodeComponent;
  let fixture: ComponentFixture<AttenteFencMethodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteFencMethodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteFencMethodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
