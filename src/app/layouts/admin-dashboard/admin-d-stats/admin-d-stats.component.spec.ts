import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDStatsComponent } from './admin-d-stats.component';

describe('AdminDStatsComponent', () => {
  let component: AdminDStatsComponent;
  let fixture: ComponentFixture<AdminDStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
