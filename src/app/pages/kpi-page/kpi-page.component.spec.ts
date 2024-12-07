import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiPageComponent } from './kpi-page.component';

describe('KpiPageComponent', () => {
  let component: KpiPageComponent;
  let fixture: ComponentFixture<KpiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
