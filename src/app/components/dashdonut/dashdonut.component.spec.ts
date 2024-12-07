import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashdonutComponent } from './dashdonut.component';

describe('DashdonutComponent', () => {
  let component: DashdonutComponent;
  let fixture: ComponentFixture<DashdonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashdonutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashdonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
