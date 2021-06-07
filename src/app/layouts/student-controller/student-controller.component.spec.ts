import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentControllerComponent } from './student-controller.component';

describe('StudentControllerComponent', () => {
  let component: StudentControllerComponent;
  let fixture: ComponentFixture<StudentControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
