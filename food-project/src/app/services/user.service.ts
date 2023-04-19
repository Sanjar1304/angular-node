import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../shared/constants/urls';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable()
  }


  login(userLogin: IUserLogin): Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin)
      .pipe(
        tap({
          next: (user) => {
            this.userSubject.next(user)
            this.toastrService.success(`
              Welcom to Foodmine ${user.name} !`,
              'Login Successful'
            )
          },
          error: (errorResponse) => {
            this.toastrService.error(errorResponse.error, 'Login Failed')
          }
        })
      )
  }


}
