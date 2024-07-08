import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChoiceServiceComponent } from './dialog-choice-service.component';

describe('DialogChoiceServiceComponent', () => {
  let component: DialogChoiceServiceComponent;
  let fixture: ComponentFixture<DialogChoiceServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChoiceServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChoiceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
