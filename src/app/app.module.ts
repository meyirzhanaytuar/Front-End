import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {
    AgmCoreModule
} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DialogContentExampleDialogComponent} from './layouts/dialog-content-example-dialog/dialog-content-example-dialog.component';
import { TeacherControllerComponent } from './layouts/teacher-controller/teacher-controller.component';
import { DialogContentExampleDialogTeacherComponent } from './layouts/dialog-content-example-dialog-teacher/dialog-content-example-dialog-teacher.component';
import { StudentControllerComponent } from './layouts/student-controller/student-controller.component';
import { DialogContentExampleDialogStudentComponent } from './layouts/dialog-content-example-dialog-student/dialog-content-example-dialog-student.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatTableModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        DialogContentExampleDialogComponent,
        TeacherControllerComponent,
        DialogContentExampleDialogTeacherComponent,
        StudentControllerComponent,
        DialogContentExampleDialogStudentComponent,
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
