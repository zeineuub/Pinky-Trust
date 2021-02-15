import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppEndpoints} from './../app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private _isUserAurh = false;
  private _url = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient
  ) { }
  companyDetails(namecompany: string)
  {
    const params= new HttpParams()
      .set('namecompany',namecompany);
  
    return this.http.get<any>(this._url + AppEndpoints.company.details,{params});
  }
}
