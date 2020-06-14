import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  public userListUrl: string;
  public userUpdateUrl: string;
  public userDeleteUrl: string;
  public hotelListUrl: string;
  public hotelUpdateUrl: string;
  public hotelDeleteUrl: string;
  private headers: HttpHeaders;
  
  constructor(
    public _http: HttpClient
  ) {
     this.userListUrl = 'http://localhost:8080/user/getAll';
     this.hotelListUrl = 'http://localhost:8080/hotel/getAllHotel';
     this.userUpdateUrl = 'http://localhost:8080/user/updateUser';
     this.userDeleteUrl = 'http://localhost:8080/user/deleteUser';
     this.hotelUpdateUrl = 'http://localhost:8080/hotel/updateHotel';
     this.hotelDeleteUrl = 'http://localhost:8080/hotel/deleteHotel';
     this.headers = new HttpHeaders();
     this.headers.set('Content-Type', 'application/json');
   }
  public getAllUsers () : Observable<any>{
    return this._http.get<any>(this.userListUrl).pipe(
      map((response: any) => {
        console.log("response");
        console.log(response);
          return response;
      }));
  }

  public getAllHotels () : Observable<any>{
    return this._http.get<any>(this.hotelListUrl).pipe(
      map((response: any) => {
          return response;
      }));
  }

  public updateUserDetails (filter) : Observable<any>{
    return this._http.put<any>(this.userListUrl,filter).pipe(
      map((response: any) => {
        console.log(response);
          return response;
      }));
  }

  public updateHotelDetails (filter) : Observable<any>{
    return this._http.put<any>(this.userListUrl,filter).pipe(
      map((response: any) => {
        console.log(response);
          return response;
      }));
  }

  public deleteUserDetails (filter) : Observable<any>{
    const opts = { params: new HttpParams({fromString: "email="+filter}) };
    return this._http.delete<any>(this.userDeleteUrl,opts).pipe(
      map((response: any) => {
        console.log(response);
          return response;
      }));
  }

  public deleteHotelDetails (filter) : Observable<any>{
    return this._http.delete<any>(this.userListUrl,filter).pipe(
      map((response: any) => {
        console.log(response);
          return response;
      }));
  }
}
