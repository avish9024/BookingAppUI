import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginUrl: string;
  private headers: HttpHeaders;
  constructor(
    public _http: HttpClient
  ) {
     this.loginUrl = 'http://localhost:8080/user/logIn';
     this.headers = new HttpHeaders();
     this.headers.set('Content-Type', 'application/json');
   }
  public getLogin (filter: any) : Observable<any>{
    return this._http.post<any>(this.loginUrl, filter).pipe(
      map((response: any) => {
          return response;
      }));
  }
  public getAllHotels() : Observable<any> {
    return this._http.get('/api/hotels').pipe(
      map((data) => {
          return data;
      })
    )
  }
}
