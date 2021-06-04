import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentModel} from '../model/student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private readonly STUDENT_CONTROL = '/api/private/v1/student';

    constructor(private http: HttpClient) {
    }

    getAllStudent(): Observable<any> {
        return this.http.get(`${this.STUDENT_CONTROL}/all`);
    }
    createStudent(studentModel: StudentModel): Observable<any> {
        return this.http.post(`${this.STUDENT_CONTROL}`, studentModel);
    }
    deleteStudentById(id): Observable<any> {
        return this.http.delete(`${this.STUDENT_CONTROL}/del/id/${id}`);
    }
}
