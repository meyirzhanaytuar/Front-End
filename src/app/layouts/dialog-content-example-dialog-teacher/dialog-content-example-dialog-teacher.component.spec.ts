import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentExampleDialogTeacherComponent } from './dialog-content-example-dialog-teacher.component';

describe('DialogContentExampleDialogTeacherComponent', () => {
  let component: DialogContentExampleDialogTeacherComponent;
  let fixture: ComponentFixture<DialogContentExampleDialogTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentExampleDialogTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentExampleDialogTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
