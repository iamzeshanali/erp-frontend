import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { getItem, removeItem, setItem, StorageItem } from '@app/@core/utils';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient)
  { 

  }
  // Login
  login(data : any){
  
    const url = 'http://erp.test/api/login';
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(url,data, {headers:headers});
  }

  signOut(): void {
   
  }



}