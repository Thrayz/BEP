import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonViewSmartTableComponent } from './button-view-smart-table.component';

describe('ButtonViewSmartTableComponent', () => {
  let component: ButtonViewSmartTableComponent;
  let fixture: ComponentFixture<ButtonViewSmartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonViewSmartTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonViewSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
