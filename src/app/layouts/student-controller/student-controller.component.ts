import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StudentService} from '../../service/student.service';
import {DialogContentExampleDialogStudentComponent} from '../dialog-content-example-dialog-student/dialog-content-example-dialog-student.component';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-student-controller',
  templateUrl: './student-controller.component.html',
  styleUrls: ['./student-controller.component.css']
})
export class StudentControllerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'phoneNumber', 'address', 'birthdate', 'userid', 'sgroupid', 'actions'];
  dataSource = [];
  private pageableResponse: any;
  page = 0;
  size = 5;
  length: 0;

  constructor(private studentService: StudentService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllStudent();
  }

  getAllStudent(): void {
    this.studentService.getAllStudent().subscribe(res => {
      console.log(res);
      this.dataSource = res;
    })
  }
  public getServerData(event?: PageEvent) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.getAllStudentByPage();
  }
  getAllStudentByPage() {
    this.studentService.getAllStudentPaging(this.page, this.size).subscribe(res => {
      this.pageableResponse = res;
      this.dataSource = res.content;
      this.length = res.totalElements;
    })
  }

  openDialog3(element, action) {
    console.log(element);
    const dialogData = {
      model: element,
      action: action
    };

    const dialogRef3 = this.dialog.open(DialogContentExampleDialogStudentComponent,
        {
          data: dialogData,
          width: '600px'
        }
    );

    dialogRef3.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllStudent();
    });
  }

  deleteStudent(id) {
    this.studentService.deleteStudentById(id).subscribe(res => {
      console.log(res);
      this.getAllStudent();
    })
  }
}
