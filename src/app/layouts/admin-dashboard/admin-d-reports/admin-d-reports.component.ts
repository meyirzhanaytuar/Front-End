import {Component, OnInit} from '@angular/core';
import {ReportService} from '../../../service/report.service';

@Component({
    selector: 'app-admin-d-reports',
    templateUrl: './admin-d-reports.component.html',
    styleUrls: ['./admin-d-reports.component.css']
})
export class AdminDReportsComponent implements OnInit {
    selectedGroup: any;

    constructor(private reportService: ReportService) {
        this.selectedGroup = 1;
    }

    ngOnInit(): void {
    }

    generateReport() {
        this.reportService.generateSimpleReportByType(this.selectedGroup).subscribe(res => {
            console.log(res);
        })
    }
}
