import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerCardComponent } from './danger-card.component';

describe('DangerCardComponent', () => {
  let component: DangerCardComponent;
  let fixture: ComponentFixture<DangerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DangerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DangerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
