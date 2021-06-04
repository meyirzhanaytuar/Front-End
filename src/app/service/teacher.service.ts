import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeacherModel} from '../model/teacher.model';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    private readonly TEACHER_CONTROL = '/api/private/v1/teacher';

    constructor(private http: HttpClient) {
    }

    getAllTeacher(): Observable<any> {
        return this.http.get(`${this.TEACHER_CONTROL}/all`);
    }
    createTeacher(teacherModel: TeacherModel): Observable<any> {
        return this.http.post(`${this.TEACHER_CONTROL}`, teacherModel);
    }
    deleteTeacherById(id): Observable<any> {
    return this.http.delete(`${this.TEACHER_CONTROL}/del/id/${id}`);
    }
    getAllTeacherPaging(page, size): Observable<any> {
        return this.http.get(`${this.TEACHER_CONTROL}/page/${page}/size/${size}`);
    }
}
