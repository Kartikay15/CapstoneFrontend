import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDoughnutResellComponent } from './small-doughnut-resell.component';

describe('SmallDoughnutResellComponent', () => {
  let component: SmallDoughnutResellComponent;
  let fixture: ComponentFixture<SmallDoughnutResellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallDoughnutResellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDoughnutResellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
