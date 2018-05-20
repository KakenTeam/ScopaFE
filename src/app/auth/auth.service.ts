import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './../components/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { ToastsManager } from 'ng2-toastr';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class AuthService implements OnInit{

  
  private base_url = `${environment.base_url}`;
  public userSignedIn$ = new BehaviorSubject(false);
  public currentUserData: User;
  constructor(
    private http: HttpClient,
    private toastr: ToastsManager,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  login(username, password): Observable<User> {
    let url = this.base_url + '/login';
    return this.http.post(url, { username: username, password: password})
               .pipe(
                 map((res: any) => res as User)
               )
  }

  validateUser() {
    let user_id = localStorage.getItem("user_id");
    console.log(user_id);
    let url = `${this.base_url}/users/${user_id}`;
    return this.http.get(url);
  }
}
