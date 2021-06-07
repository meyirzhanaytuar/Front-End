import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TeacherModel} from '../../model/teacher.model';
import {TeacherService} from '../../service/teacher.service';
import {UserModel} from '../../model/user.model';

@Component({
  selector: 'app-dialog-content-example-dialog-teacher',
  templateUrl: './dialog-content-example-dialog-teacher.component.html',
  styleUrls: ['./dialog-content-example-dialog-teacher.component.css']
})
export class DialogContentExampleDialogTeacherComponent implements OnInit {
  dataSource = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private teacherService: TeacherService) {
    if (data.action === 'add') {
      data.model = new TeacherModel();
      data.model.id = 0;
    }
  }

  ngOnInit(): void {
  }
  teacherAction() {
    const dataForService2 = new TeacherModel();
    dataForService2.id = this.data.model.id;
    dataForService2.firstName = this.data.model.firstName;
    dataForService2.lastName = this.data.model.lastName;
    dataForService2.phoneNumber = this.data.model.phoneNumber;
    dataForService2.address = this.data.model.address;
    dataForService2.birthdate = this.data.model.birthdate;
    dataForService2.userid = this.data.model.userid;
    this.teacherService.createTeacher(dataForService2).subscribe(res => {
      console.log(res);
    });
  }
}
