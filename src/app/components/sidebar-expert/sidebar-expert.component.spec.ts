import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExpertComponent } from './sidebar-expert.component';

describe('SidebarExpertComponent', () => {
  let component: SidebarExpertComponent;
  let fixture: ComponentFixture<SidebarExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarExpertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
