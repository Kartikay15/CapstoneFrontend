import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialsPageComponent } from './financials-page.component';

describe('FinancialsPageComponent', () => {
  let component: FinancialsPageComponent;
  let fixture: ComponentFixture<FinancialsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
