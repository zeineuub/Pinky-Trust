import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
@Injectable()
export class NewsService
{
  private baseUrl:string = 'https://newsapi.org/v2/';
  private source: string = 'the-next-web';
  private apiKey: string = '02f67ce7d1294a2aa157a9854b88dc2d';

  constructor(private http: HttpClient) {


}


public getArticles(): Observable<any>{
  const url = `${this.baseUrl}top-headlines?sources=${this.source}&apiKey=${this.apiKey}`;
  // ok je t'envoie une req http
  return this.http.get(url);


}
}