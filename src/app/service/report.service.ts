import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    private readonly REPORT_CONTROL = '/api/private/v1/report';

    constructor(private http: HttpClient) {
    }

    generateSimpleReportByType(type): Observable<any> {
        return this.http.get(`${this.REPORT_CONTROL}/simple/type/${type}`);
    }
}
