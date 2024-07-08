import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDetailFencComponent } from './tabs-detail-fenc.component';

describe('TabsDetailFencComponent', () => {
  let component: TabsDetailFencComponent;
  let fixture: ComponentFixture<TabsDetailFencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsDetailFencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDetailFencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
