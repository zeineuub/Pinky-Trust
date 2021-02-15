import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppEndpoints} from './../app-endpoints';
import { User } from '../models/user';
import {AuthData} from '../pages/sign-in/auth-data.model';
import { Company } from '../models/company';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserAurh = false;
  headers = new HttpHeaders().set("Content-Type", "application/json");

  private _url = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient,
    private router:Router
  ) { }
  // managing the user authetification 
  get UserAuth()
  {
    return this._isUserAurh;
  }
  register(user: User)
  {
    return this.http.post<any>(this._url + AppEndpoints.auth.registration, user);
  }
  logIn(email: string, pwd: string)
  {
    const authdata: AuthData = {email: email, pwd: pwd};
    return this.http.post<any>(this._url + AppEndpoints.auth.login, authdata);
  }
  logInCompany(email: string, pwd: string)
  {
    
    const authdata: AuthData = {email:email, pwd:pwd};
    return this.http.post<any>(this._url + AppEndpoints.auth.loginCompany, authdata,{ headers: this.headers});
  }
  registerCompany(user: Company)
  {
    return this.http.post<any>(this._url + AppEndpoints.auth.registrationCompany, user);
  }
  logOut()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
  loggedIn(){
    return !! localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }
  companyDetails(namecompany:string)
  {
    let params = new HttpParams()
        .set('namecompany', namecompany);
  
    return this.http.get<any>(this._url + AppEndpoints.company.details,{params});
  }
  getCurrentUser(id:string){
    return this.http.get<any>('http://localhost:3000/api/auth/me/'+id);
  }
  getCurrentUserCompany(id:string){
    return this.http.get<any>('http://localhost:3000/api/auth/mecompany/'+id);
  }
  getUserProfile(id): Observable<any> {
    let api = `${this._url}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers });
  }
  updateUser(user,id){
    return this.http.put(this._url+AppEndpoints.auth.update +id,user);
  }
}
