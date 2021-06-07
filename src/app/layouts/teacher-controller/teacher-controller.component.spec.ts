import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherControllerComponent } from './teacher-controller.component';

describe('TeacherControllerComponent', () => {
  let component: TeacherControllerComponent;
  let fixture: ComponentFixture<TeacherControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
