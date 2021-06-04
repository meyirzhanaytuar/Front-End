import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {AdminDStatsComponent} from '../admin-dashboard/admin-d-stats/admin-d-stats.component';
import {UserControllerComponent} from '../user-controller/user-controller.component';
import {HotLinksComponent} from '../admin-dashboard/hot-links/hot-links.component';
import {AdminDReportsComponent} from '../admin-dashboard/admin-d-reports/admin-d-reports.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatTableModule,
        MatDialogModule,
        MatRadioModule,
        MatPaginatorModule
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        UserControllerComponent,
        NotificationsComponent,
        UpgradeComponent,
        AdminDashboardComponent,
        AdminDStatsComponent,
        HotLinksComponent,
        AdminDReportsComponent
    ],
    exports: [
        AdminDStatsComponent,
        HotLinksComponent,
        AdminDReportsComponent,
        UserControllerComponent
    ]
})

export class AdminLayoutModule {
}
