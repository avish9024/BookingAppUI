import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {


  constructor() { }

  public getItem(key :string){
    try{
      return JSON.parse(localStorage.getItem(key));
    } catch(e){
      return localStorage.getItem(key);
    }
  }

  public setItem(key,value) {
     localStorage[key] = typeof value === 'object' ? JSON.stringify(value) : value;
  }

  public removeItem(key : string){
    localStorage.removeItem(key);
  }
}
