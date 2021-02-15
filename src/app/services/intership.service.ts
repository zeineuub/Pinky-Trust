import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {AppEndpoints} from './../app-endpoints';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IntershipService {

  private _url = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient,
    private router:Router
  ) { }
  addIntership(stage,id){

    return this.http.post<any>(this._url + AppEndpoints.intership.add+id,stage)
  }
  //return all the stages
  getListintership(){
    return this.http.get<any>(this._url + AppEndpoints.intership.list)

  }
  getIntership(name:string)
  {
    return this.http.get<any>(this._url+AppEndpoints.intership.one +name)
  }
  deleteIntership (name:string)
  {
    return this.http.delete<any>(this._url + AppEndpoints.intership.delete+name );

  }

  }
