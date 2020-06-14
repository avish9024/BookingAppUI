import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FindHotelService {
  public getHotelUrl: string;
  private headers: HttpHeaders;
  constructor(
    public _http: HttpClient
  ) {
     this.getHotelUrl = 'http://localhost:8080/searchHotels';
     this.headers = new HttpHeaders();
     this.headers.set('Content-Type', 'application/json');
   }
  public getHotels (filter: any) : Observable<any>{
    return this._http.post<any>(this.getHotelUrl, filter).pipe(
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
