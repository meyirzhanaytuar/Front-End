import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDReportsComponent } from './admin-d-reports.component';

describe('AdminDReportsComponent', () => {
  let component: AdminDReportsComponent;
  let fixture: ComponentFixture<AdminDReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
