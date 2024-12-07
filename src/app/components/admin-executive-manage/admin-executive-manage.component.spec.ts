import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExecutiveManageComponent } from './admin-executive-manage.component';

describe('AdminExecutiveManageComponent', () => {
  let component: AdminExecutiveManageComponent;
  let fixture: ComponentFixture<AdminExecutiveManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminExecutiveManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExecutiveManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
