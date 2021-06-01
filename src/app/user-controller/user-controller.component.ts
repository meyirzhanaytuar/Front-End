import {Component, OnInit} from '@angular/core';
import validate from 'schema-utils/declarations/validate';
import {UserService} from '../service/user.service';
import {UserModel} from '../model/user.model';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogComponent} from '../dialog-content-example-dialog/dialog-content-example-dialog.component';


@Component({
    selector: 'app-users',
    templateUrl: './user-controller.component.html',
    styleUrls: ['./user-controller.component.css']
})
export class UserControllerComponent implements OnInit {
    displayedColumns: string[] = ['id', 'login', 'roleid', 'actions'];
    dataSource = [];
    private userDto: any;
    private userModel: UserModel;

    constructor(private usersService: UserService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllUser();
    }

    getAllUser(): void {
        this.usersService.getAllUser().subscribe(res => {
            console.log(res);
            this.dataSource = res;
        })
    }

    deleteUser(id): void {
        this.usersService.deleteUserById(id).subscribe(res2 => {
            console.log(res2);
            this.getAllUser();
        })
    }

    openDialog(element, action) {
        console.log(element);
        const dialogData = {
            model: element,
            action: action
        };

        const dialogRef = this.dialog.open(DialogContentExampleDialogComponent,
            {
                data: dialogData,
                width: '600px'
            }
        );

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getAllUser();
        });
    }
}
