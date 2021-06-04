import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private readonly USER_CONTROL = '/api/private/v1/user';
    constructor(private http: HttpClient) {
    }
    getAllUser(): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/all`);
    }
    updateUser(userDto): Observable<any>{
        return this.http.post(`${this.USER_CONTROL}/user/id/{id}`, userDto);
    }
    createUser(userModel: UserModel): Observable<any> {
        return this.http.post(`${this.USER_CONTROL}`, userModel);
    }
    deleteUserById(id): Observable<any> {
        return this.http.delete(`${this.USER_CONTROL}/del/id/${id}`);
    }
    getAllUserPaging(page, size): Observable<any> {
        return this.http.get(`${this.USER_CONTROL}/page/${page}/size/${size}`);
    }
}
