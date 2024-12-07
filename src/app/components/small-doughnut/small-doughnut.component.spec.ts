import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDoughnutComponent } from './small-doughnut.component';

describe('SmallDoughnutComponent', () => {
  let component: SmallDoughnutComponent;
  let fixture: ComponentFixture<SmallDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallDoughnutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
