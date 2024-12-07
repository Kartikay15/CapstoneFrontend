import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiTobbarComponent } from './kpi-tobbar.component';

describe('KpiTobbarComponent', () => {
  let component: KpiTobbarComponent;
  let fixture: ComponentFixture<KpiTobbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiTobbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiTobbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
