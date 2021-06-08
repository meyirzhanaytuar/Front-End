import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StudentService} from '../../service/student.service';
import {StudentModel} from '../../model/student.model';

@Component({
  selector: 'app-dialog-content-example-dialog-student',
  templateUrl: './dialog-content-example-dialog-student.component.html',
  styleUrls: ['./dialog-content-example-dialog-student.component.css']
})
export class DialogContentExampleDialogStudentComponent implements OnInit {
  dataSource = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private studentService: StudentService) {
    if (data.action === 'add') {
      data.model = new StudentModel();
      data.model.id = 0;
    }
  }

  ngOnInit(): void {
  }
  studentAction() {
    const dataForService3 = new StudentModel();
    dataForService3.id = this.data.model.id;
    dataForService3.firstName = this.data.model.firstName;
    dataForService3.sgroupid = this.data.model.sgroupid;
    dataForService3.phoneNumber = this.data.model.phoneNumber;
    dataForService3.address = this.data.model.address;
    dataForService3.birthdate = this.data.model.birthdate;
    dataForService3.userid = this.data.model.userid;
    this.studentService.createStudent(dataForService3).subscribe(res => {
      console.log(res);
    });
  }
}
