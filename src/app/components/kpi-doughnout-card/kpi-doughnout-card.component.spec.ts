import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiDoughnoutCardComponent } from './kpi-doughnout-card.component';

describe('KpiDoughnoutCardComponent', () => {
  let component: KpiDoughnoutCardComponent;
  let fixture: ComponentFixture<KpiDoughnoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiDoughnoutCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiDoughnoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
