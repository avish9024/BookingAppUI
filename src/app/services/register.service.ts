import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public registerUrl: string;
  private headers: HttpHeaders;
  constructor(
    public _http: HttpClient
  ) {
     this.registerUrl = 'http://localhost:8080/user/addUser';
     this.headers = new HttpHeaders();
     this.headers.set('Content-Type', 'application/json');
   }
  public getRegistered (filter: any) : Observable<any>{
    return this._http.post<any>(this.registerUrl, filter).pipe(
      map((response: any) => {
          return response;
      }));
  }
}
