import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentExampleDialogStudentComponent } from './dialog-content-example-dialog-student.component';

describe('DialogContentExampleDialogStudentComponent', () => {
  let component: DialogContentExampleDialogStudentComponent;
  let fixture: ComponentFixture<DialogContentExampleDialogStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentExampleDialogStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentExampleDialogStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
