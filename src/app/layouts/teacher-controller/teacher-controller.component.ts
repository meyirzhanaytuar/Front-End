import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../../service/teacher.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogTeacherComponent} from '../dialog-content-example-dialog-teacher/dialog-content-example-dialog-teacher.component';
import {PageEvent} from '@angular/material/paginator';

@Component({
    selector: 'app-teachers',
    templateUrl: './teacher-controller.component.html',
    styleUrls: ['./teacher-controller.component.css']
})
export class TeacherControllerComponent implements OnInit {
    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'phoneNumber', 'address', 'birthdate', 'userid', 'actions'];
    dataSource = [];
    private pageableResponse: any;
    page = 0;
    size = 5;
    length: 0;

    constructor(private teacherService: TeacherService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllTeacher();
    }

    getAllTeacher(): void {
        this.teacherService.getAllTeacher().subscribe(res => {
            console.log(res);
            this.dataSource = res;
        })
    }
    public getServerData(event?: PageEvent) {
        this.page = event.pageIndex;
        this.size = event.pageSize;
        this.getAllTeacherByPage();
    }
    getAllTeacherByPage() {
        this.teacherService.getAllTeacherPaging(this.page, this.size).subscribe(res => {
            this.pageableResponse = res;
            this.dataSource = res.content;
            this.length = res.totalElements;
        })
    }

    openDialog2(element, action) {
        console.log(element);
        const dialogData = {
            model: element,
            action: action
        };

        const dialogRef2 = this.dialog.open(DialogContentExampleDialogTeacherComponent,
            {
                data: dialogData,
                width: '600px'
            }
        );

        dialogRef2.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getAllTeacher();
        });
    }

    deleteTeacher(id) {
        this.teacherService.deleteTeacherById(id).subscribe(res => {
            console.log(res);
            this.getAllTeacher();
        })
    }
}
