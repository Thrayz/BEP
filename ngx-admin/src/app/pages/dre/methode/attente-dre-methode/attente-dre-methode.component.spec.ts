import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteDreMethodeComponent } from './attente-dre-methode.component';

describe('AttenteDreMethodeComponent', () => {
  let component: AttenteDreMethodeComponent;
  let fixture: ComponentFixture<AttenteDreMethodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteDreMethodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteDreMethodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
